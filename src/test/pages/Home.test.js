import React from 'react';
import { shallow } from 'enzyme';
import Home from '../../pages/Home';

describe('Home Page', () => {
  it('should render correctly', () => {

    const wrapper = shallow(<Home />).dive();
    console.log(wrapper.debug())

    expect(wrapper).toMatchSnapshot();
  });
});
