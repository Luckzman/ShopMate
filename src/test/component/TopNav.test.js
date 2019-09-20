import React from 'react';
import { shallow } from 'enzyme';
import TopNav from '../../component/presentation/TopNav';

describe('TopNav Component', () => {
  it('should render correctly', () => {

    const wrapper = shallow(<TopNav />);

    expect(wrapper).toMatchSnapshot();
  });
});