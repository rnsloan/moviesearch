const expect = require('chai').expect;
const webdriverio = require('webdriverio');
const webdriverioconfig = require('../webdriverio.config');

describe('Search View', function () {
  this.timeout(8000);

  before(function(done) {
    client = webdriverio.remote(webdriverioconfig.clientConfig);
    client.init(done)
  });

  after(function(done) {
    client.end(done);
  });

  it('should display the correct page title', function (done) {
    client
      .url(`${webdriverioconfig.appUrl}/search`)
      .title(function (err, res) {
        expect(res.value).to.equal('Movie Search');
      })
      .call(done);
  });

  it('should display the correct page content', function (done) {
    client
      .url(`${webdriverioconfig.appUrl}/search`)
      .getText('h1').then(function(text) {
        expect(text).to.equal('Search');
      })
      .call(done);
  });
});