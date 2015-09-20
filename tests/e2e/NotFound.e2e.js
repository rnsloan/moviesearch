const expect = require('chai').expect;
const webdriverio = require('webdriverio');
const webdriverioconfig = require('../webdriverio.config');

describe('Page Not Found', function () {
  this.timeout(8000);

  before(function (done) {
    client = webdriverio.remote(webdriverioconfig.clientConfig);
    client.init(done)
  });

  after(function (done) {
    client.end(done);
  });

  it('should display the homepage', function (done) {
    client
      .url('/dsdsds')
      .isExisting('#searchInput').then(function(isExisting) {
        expect(isExisting).to.be.true
      })
      .title(function (err, res) {
        expect(res.value).to.equal('Movie Search');
      })
      .call(done);
  });
});