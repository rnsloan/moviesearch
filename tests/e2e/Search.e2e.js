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

  it('should display the correct page title and no results', function (done) {
    client
      .url('/search')
      .title(function (err, res) {
        expect(res.value).to.equal('Movie Search');
      })
      .isExisting('h2').then(function(isExisting) {
        expect(isExisting).to.be.false;
      })
      .getValue('input').then(function(value) {
        expect(value).to.equal('')
      })
      .call(done);
  });

  it('should display results', function (done) {
    client
      .url('/search?title=mad%20max')
      .getValue('#searchInput').then(function(value) {
        expect(value).to.equal('mad max')
      })
      .waitForExist('.results-subtext', 3000).then(function () {
        client.getText('.results-subtext').then(function (text) {
          expect(text).to.equal('Searched for: mad max');
        })
      })
      .call(done);
  });

  it('should display clear the search input when going back to the homepage', function (done) {
    client
      .url('/search?title=mad%20max')
      .getValue('#searchInput').then(function(value) {
        expect(value).to.equal('mad max')
      })
      .click('.home-link')
      .url(function(err,res) {
        expect(res.value).to.not.contain('search?title');
      })
      .getValue('#searchInput').then(function(value) {
        expect(value).to.equal('')
      })
      .call(done);
  });
});


