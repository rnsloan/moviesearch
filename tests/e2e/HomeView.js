const expect = require('chai').expect;
const webdriverio = require('webdriverio');
const webdriverioconfig = require('../webdriverio.config');

describe('Home View', function () {
  this.timeout(8000);

  before(function (done) {
    client = webdriverio.remote(webdriverioconfig.clientConfig);
    client.init(done)
  });

  after(function (done) {
    client.end(done);
  });

  it('should display the correct page title', function (done) {
    client
      .url(webdriverioconfig.appUrl)
      .title(function (err, res) {
        expect(res.value).to.equal('Movie Search');
      })
      .call(done);
  });

  it('should display the correct page content', function (done) {
    client
      .url(webdriverioconfig.appUrl)
      .getText('h1').then(function (text) {
        expect(text).to.equal('Home');
      })
      .call(done);
  });

  it('should be able to search by movie title', function (done) {
    client
      .url(webdriverioconfig.appUrl)
      .setValue('input', 'mad max')
      .submitForm('form')
      .url(function(err,res) {
        expect(res.value).to.contain('/search?title=mad%20max');
      })
      .getText('p').then(function (text) {
        expect(text).to.equal('Searched for: mad max');
      })
      .call(done);
  });
});