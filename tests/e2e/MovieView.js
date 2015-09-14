const expect = require('chai').expect;
const webdriverio = require('webdriverio');
const webdriverioconfig = require('../webdriverio.config');

describe('Movie View', function () {
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
      .url('/movie')
      .title(function (err, res) {
        expect(res.value).to.equal('Movie Search');
      })
      .call(done);
  });

  it('should display the correct page content', function (done) {
    client
      .url('/movie')
      .getText('h1').then(function(text) {
        expect(text).to.equal('Movie');
      })
      .call(done);
  });
});
