import {expect} from 'chai';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

import Results from '../../app/components/Results/Results';
import data from '../api/search.json'

const props = {
  query: '',
  backdropUrl: '',
  results: data.results
};

describe('Results Component', function () {
  before(function () {
    const shallowRenderer = TestUtils.createRenderer();
    shallowRenderer.render(<Results {...props} />);
    this.componentRender = shallowRenderer.getRenderOutput();
  });

  it('should render the first result correctly', function () {
    const firstResult = this.componentRender.props.children[0];
    const firstResultCard = firstResult.props.children;
    const heading = firstResultCard.props.children[0].props.children;
    const supportingText = firstResultCard.props.children[1];
    const link = firstResultCard.props.children[2].props.children;

    expect(firstResultCard.props.className).to.contain('mdl-card');

    expect(data.results[0].title).to.equal('Fight Club');
    expect(heading.props.className).to.contain('mdl-card__title-text');
    expect(heading.props.children).to.equal('Fight Club');

    expect(supportingText.props.className).to.contain('mdl-card__supporting-text');
    expect(supportingText.props.children[2].props.children).to.contain('Release Date');

    expect(link.props.className).to.contain('mdl-button');
    expect(link.props.children[0]).to.contain('VIEW MOVIE');
  });
});
