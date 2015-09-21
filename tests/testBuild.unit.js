/*
 * http://webpack.github.io/docs/context.html#require-context
 * webpack will require all .js files from /tests/ and then bundle
 *
 * To run a single test - bundle, and then search for the test name with -g:
 * mocha test/test-bundle.js -g 'Loader Component' --full-trace
 */

var context = require.context('./unit', true, /.js?$/);
context.keys().forEach(context);
module.exports = context;
