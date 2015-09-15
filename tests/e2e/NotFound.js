const expect = require('chai').expect;
const webdriverio = require('webdriverio');
const webdriverioconfig = require('../webdriverio.config');

describe('Not Found Url', function () {
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
      .getText('h1').then(function (text) {
        expect(text).to.equal('Home');
      })
      .call(done);
  });
});