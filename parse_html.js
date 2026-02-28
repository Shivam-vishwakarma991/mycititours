const fs = require('fs');
const cheerio = require('cheerio');
const axios = require('axios'); // We need axios to fetch multiple URLs

const urls = [
    'https://www.mycititours.com/holiday/holidaydetail/MysoreOneDayCityTourPrivateVehicleFourPersonMaxbySedan',
    'https://www.mycititours.com/holiday/holidaydetail/MysoreCoorgTourPackagePrivateCabSedan',
    'https://www.mycititours.com/holiday/holidaydetail/MysoreOneDayCityTourGroupTour',
    'https://www.mycititours.com/holiday/holidaydetail/MysoreOotyCoonoorSiteseeing'
];

async function scrape() {
    const results = [];
    for (let url of urls) {
        try {
            const res = await axios.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
            const $ = cheerio.load(res.data);
            
            // 1. Title
            const name = $('h1').first().text().trim();
            
            // 2. Price
            // Let's find any text containing '₹' or 'INR' or just price block
            let priceText = "Enquire for Price";
            $('h2.price, .price').each(function() {
                 let t = $(this).text().trim();
                 if(t && !t.includes('Login')) priceText = t;
            });
            
            if(priceText === "Enquire for Price") {
                // If it's a number like 625 somewhere. We know they exist. Let's look for large numbers alone.
                let rawNums = [];
                $('h2, span.price').each(function() {
                    let textNum = $(this).text().replace(/[^0-9]/g, '');
                    if(textNum.length >= 3 && textNum.length <= 6) {
                        rawNums.push('₹' + textNum);
                    }
                });
                if(rawNums.length > 0) priceText = rawNums[rawNums.length-1]; // Often the last one in block
            }

            // 3. Inclusions
            const inclusions = [];
            $('.inclution li, .inclusion-list li').each(function() {
                inclusions.push($(this).text().trim());
            });
            if(inclusions.length === 0) {
                 // Try finding any list with 'fa-check'
                 $('ul li').each(function() {
                     if ($(this).find('.fa-check').length > 0 || $(this).text().toLowerCase().includes('include')) {
                         let text = $(this).text().trim();
                         if(text && text.length > 3) inclusions.push(text);
                     }
                 });
            }

            // 4. Itinerary
            const itinerary = [];
            // Let's look for .day-no or Day X headers
            $('.panel, .ithead, .accrodion').each(function(i, el) {
                const dayMatch = $(el).find('.day-no, .day, strong:contains("Day")').text().trim() || $(el).text().match(/Day\s*\d+/i);
                
                let dayTitleText = $(el).find('.daydetails, .accrodion-title').text().trim();
                let dayContentText = $(el).find('.accrodion-content, .panel-body, p').text().trim();
                
                // fallback for parsing
                if (!dayTitleText) {
                    let strings = $(el).text().split('\n').map(s=>s.trim()).filter(s=>s);
                    if(strings.length > 0) {
                       dayTitleText = strings[0];
                       dayContentText = strings.slice(1).join(' ').substring(0, 500);
                    }
                }
                
                if (dayMatch || dayTitleText.toLowerCase().includes('day')) {
                    itinerary.push({
                        title: dayTitleText.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim(),
                        desc: dayContentText.replace(/\n/g, ' ').replace(/\s+/g, ' ').trim() || "Enjoy the serene views and comfortable journey to your next destination."
                    });
                }
            });

            // 5. Image (Optional)
            let image = "";
            const imgEl = $('.carousel-inner img, #tourDetailImgs img').first();
            if(imgEl.length > 0) image = imgEl.attr('src');
            
            // Clean up itinerary if we have duplicates or messy data
            const uniqueItinerary = [];
            const seenDesc = new Set();
            for(let it of itinerary) {
                if(!seenDesc.has(it.title) && it.title.length > 5) {
                    seenDesc.add(it.title);
                    uniqueItinerary.push(it);
                }
            }

            results.push({
                id: url.split('/').pop(),
                name: name || url.split('/').pop(),
                price: priceText,
                image: image.startsWith('/') ? 'https://www.mycititours.com'+image : image,
                duration: uniqueItinerary.length > 0 ? `${uniqueItinerary.length} Days` : "1 Day Tour",
                inclusions: inclusions.slice(0, 6),
                itinerary: uniqueItinerary
            });
            console.log("Got", name);
        } catch (e) {
            console.log("Error on", url, e.message);
        }
    }
    fs.writeFileSync('parsed_mock.json', JSON.stringify(results, null, 2));
}

scrape();
