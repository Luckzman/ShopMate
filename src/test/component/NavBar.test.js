import React from 'react';
import { shallow } from 'enzyme';
import NavBar from '../../component/presentation/NavBar';

describe('NavBar Component', () => {
  it('should render correctly', () => {

    const wrapper = shallow(<NavBar />);

    expect(wrapper).toMatchSnapshot();
  });
});
