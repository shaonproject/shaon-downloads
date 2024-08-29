var owner = "SHAON AHMED";
var caption = "☆《RANDOM VIDEO》☆";

exports.name = '/video/random';
exports.index = async(req, res, next) => {
    try {
        const n = require('./data/random.json');
        var video = n[Math.floor(Math.random() * n.length)].trim();

        if (req.query.url) {
            const fs = require('fs');
            const path = require('path');
            const filePath = path.join(__dirname, 'data', 'random.json');
            n.push(req.query.url.trim());
            fs.writeFileSync(filePath, JSON.stringify(n, null, 2));
            return res.jsonp({ message: "URL added successfully", url: req.query.url });
        }

        res.jsonp({
            data: video,
            count: n.length,
            owner: `${owner}`,
            shaon: `${caption}`
        });
    } catch (e) {
        return res.jsonp({ error: e.message });
    }
              }
