import React from 'react';
import { shallow } from 'enzyme';
import FilterSideBar from '../../component/presentation/FilterSideBar';

describe('FilterSideBar Component', () => {
  it('should render correctly', () => {
    const props = {
      category: ['shoe', 'bag'],
      department: ['red', 'green'],
    }
    const wrapper = shallow(<FilterSideBar {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
