const rp = require('request-promise');
const cheerio = require('cheerio');
const options = {
  uri: `WEB URL`,
  transform: function (body) {
  return cheerio.load(body);
  }
};
rp(options)
  .then(($) => {
    console.log($);
    const dato = $('td[id=TABLE_ID]').html();
    console.log("Este es tu dato:", dato )
  })
  .catch((err) => {
    console.log(err);
  });
