const expect = require('chai').expect;
const webdriverio = require('webdriverio');

describe('Test', function () {
  this.timeout(8000);

  before(function(done) {
    client = webdriverio.remote({
      desiredCapabilities: {browserName: 'firefox'},
      host: 'moviesearch-seleniumff.bridge',
      port: 4444
    });
    client.init(done)
  });

  after(function(done) {
    client.end(done);
  });

  it('should have the correct page title', function (done) {
    client
      .url('moviesearch.bridge:3000')
      .title(function (err, res) {
        expect(res.value).to.equal('Movie Search');
      })
      .call(done);
  });
});
