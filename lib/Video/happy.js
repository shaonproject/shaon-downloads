var owner = "Shaon Ahmed"
var caption = "☆《HAPPY VIDEO》☆"
exports.name = '/video/happy';
exports.index = async(req, res, next) => {
    try {
        const n = require('./data/happy.json');
        var video = n[Math.floor(Math.random() * n.length)].trim();
        res.jsonp({
            data: video,
            count: n.length,
            owner: `${owner}`,
            shaon: `${caption}`
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}
