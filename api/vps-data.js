// api/vps-data.js
export default async function handler(req, res) {
    // Cho phép web của bạn gọi từ bất kỳ đâu (CORS)
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    
    // VPS dùng cơ chế kiểm tra Origin là chart.vps.com.vn
    const headers = {
        'Origin': 'https://chart.vps.com.vn',
        'User-Agent': 'Mozilla/5.0'
    };

    try {
        // Gọi API lấy dữ liệu lịch sử giá
        const response = await fetch('https://histdatafeed.vps.com.vn/tradingview/history?symbol=VN30F1M&resolution=1&from=' + (Math.floor(Date.now()/1000)-3600) + '&to=' + Math.floor(Date.now()/1000), { headers });
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Lỗi lấy dữ liệu' });
    }
}
