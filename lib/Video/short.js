var owner = "Shaon Ahmed"
var caption = "☆《SHORT VIDEO》☆"
exports.name = '/video/short';
exports.index = async(req, res, next) => {
    try {
        const n = require('./data/short.json');
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
