// api/proxy.js
export default async function handler(req, res) {
    const targetUrl = 'https://bgapidatafeed.vps.com.vn/getps10pricesnapshot/41I1G7000,B';
    
    try {
        const response = await fetch(targetUrl, {
            headers: {
                'Referer': 'https://banggia.vps.com.vn/',
                'User-Agent': 'Mozilla/5.0'
            }
        });
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch' });
    }
}
