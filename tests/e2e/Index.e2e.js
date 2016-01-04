const expect = require('chai').expect;
const webdriverio = require('webdriverio');
const webdriverioconfig = require('../webdriverio.config');

describe('Index View', function () {
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
      .url('/')
      .title(function (err, res) {
        expect(res.value).to.equal('Movie Search');
      })
      .call(done);
  });

  it('should be able to search for movies', function (done) {
    client
      .url('/')
      .setValue('input', 'mad max')
      .submitForm('form')
      .url(function(err,res) {
        expect(res.value).to.contain('/search?title=mad+max');
      })
      .call(done);
  });
});