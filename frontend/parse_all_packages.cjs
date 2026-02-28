const fs = require('fs');
const cheerio = require('cheerio');
const axios = require('axios');

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
            console.log("Starting scrape for:", url);
            const res = await axios.get(url, { 
                headers: { 
                    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36' 
                } 
            });
            const $ = cheerio.load(res.data);
            
            // 1. Title
            let name = $('h1').first().text().trim();
            if(!name) name = url.split('/').pop().replace(/([A-Z])/g, ' $1').trim();

            // 2. Price
            let price = "Enquire for Price";
            // The price usually appears in a specific block in their template
            // Looking for text with currency symbols
            const priceText = $('body').text().match(/[₹\s] *(\d{3,6})/);
            if (priceText) price = '₹' + priceText[1];

            // 3. Inclusions (Improved scraping)
            const inclusions = [];
            // Look for any list items that seem like inclusions
            $('li').each(function() {
                const text = $(this).text().trim();
                if (text && (text.length > 10 && text.length < 200)) {
                    // Filter out common menu items
                    const menuItems = ['home', 'about', 'contact', 'flight', 'hotel', 'bus', 'car', 'holiday'];
                    if (!menuItems.some(m => text.toLowerCase().includes(m))) {
                        inclusions.push(text);
                    }
                }
            });

            // 4. Itinerary (Improved scraping)
            const itinerary = [];
            $('.ithead, .accrodion-title, .panel-heading').each(function() {
                const title = $(this).text().trim().replace(/\n/g, ' ').replace(/\s+/g, ' ');
                const desc = $(this).next().text().trim().substring(0, 300) || "Comprehensive sightseeing tour covering major local attractions.";
                if (title && title.length > 5) {
                    itinerary.push({ title, desc });
                }
            });

            if (itinerary.length === 0) {
                 // Fallback if no structured itinerary
                 itinerary.push({ 
                    title: "Guided Tour", 
                    desc: "Full day guided excursion with a dedicated driver. Visit major landmarks and hidden gems." 
                 });
            }

            // 5. Image (Enhanced)
            let image = "";
            $('img').each(function() {
                const src = $(this).attr('src');
                if (src && src.includes('holiday') && (src.includes('main') || src.includes('thumbs'))) {
                    image = src.startsWith('http') ? src : 'https://www.mycititours.com' + (src.startsWith('/') ? '' : '/') + src;
                    return false; // Break loop
                }
            });

            results.push({
                id: url.split('/').pop(),
                name,
                duration: itinerary.length > 1 ? `${itinerary.length} Days` : "1 Day Tour",
                price,
                image: image || "https://images.unsplash.com/photo-1620067980661-823023447990?q=80&w=2070",
                inclusions: inclusions.slice(0, 5),
                itinerary
            });
            console.log("Successfully scraped:", name);
        } catch (e) {
            console.log("Error on", url, e.message);
        }
    }
    fs.writeFileSync('holiday_info.json', JSON.stringify(results, null, 2));
}

scrape();
