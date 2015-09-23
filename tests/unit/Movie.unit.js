import {expect} from 'chai';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

import Movie from '../../app/components/Movie/Movie';
import data from '../api/movie_550.json'

const props = {
  movie: data
};

describe('Movie Component', function () {
  before(function () {
    const shallowRenderer = TestUtils.createRenderer();
    shallowRenderer.render(<Movie {...props} />);
    this.componentRender = shallowRenderer.getRenderOutput();
  });

  it('should render movie correctly', function () {
    const card = this.componentRender;
    const heading = card.props.children[0].props.children;
    const imdbLink = card.props.children[2].props.children[0];

    expect(card.props.className).to.contain('mdl-card');

    expect(data.title).to.equal('Fight Club');
    expect(heading.props.className).to.contain('mdl-card__title-text');
    expect(heading.props.children).to.equal('Fight Club');

    expect(data.imdb_id).to.equal('tt0137523');
    expect(imdbLink.props.className).to.contain('mdl-button');
    expect(imdbLink.props.href).to.contain('//imdb.com/title/tt0137523');
  });
});
