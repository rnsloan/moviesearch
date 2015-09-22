import {expect} from 'chai';
import jsdom from 'mocha-jsdom'
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import {progressLoaderSignal, ProgressLoader} from '../../app/components/ProgressLoader/ProgressLoader';

describe('Progress Loader Component', function () {
  jsdom();

  before(function () {
    this.component = TestUtils.renderIntoDocument(<ProgressLoader />);
    this.renderedDOM = () => ReactDOM.findDOMNode(this.component);
  });

  it('should not visible by default', function () {
    expect( this.renderedDOM().getAttribute('class') ).to.contain('mdl-progress');
    expect( this.renderedDOM().getAttribute('style').replace(/ /g,'') ).to.contain('display:none');
    expect(this.component.state.show).to.be.false;
  });

  it('should be able to update visibility by sending a signal', function () {
    progressLoaderSignal.dispatch(true);
    expect( this.renderedDOM().getAttribute('style').replace(/ /g,'') ).to.not.contain('display:none');
    expect(this.component.state.show).to.be.true;

    progressLoaderSignal.dispatch(false);
    expect( this.renderedDOM().getAttribute('style').replace(/ /g,'') ).to.contain('display:none');
    expect(this.component.state.show).to.be.false;
  });



});
