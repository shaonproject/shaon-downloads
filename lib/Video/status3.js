var caption = "☆《STATUS3 VIDEO》☆"
exports.name = '/video/status3';
exports.index = async(req, res, next) => {
const resp = require('./data/status3.json');
const length = resp.length
return res.json({ 
  author: 'API//SHAON',
  count: resp.length,
  shaon: `${caption}`,
  data: resp[Math.floor(Math.random() * length)],
	url: resp[Math.floor(Math.random() * length)],
 })
}
