var owner = "Shaon Ahmed"
var caption = "☆《𝐗𝐕𝐈𝐃𝐄𝐎》☆"
exports.name = '/video/sex3';
exports.index = async(req, res, next) => {
    try {
        const n = require('./data/sex3.json');
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
