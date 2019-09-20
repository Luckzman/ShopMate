import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from '../../component/presentation/SearchBar';

describe('SearchBar Component', () => {
  it('should render correctly', () => {

    const wrapper = shallow(<SearchBar />);

    expect(wrapper).toMatchSnapshot();
  });
});
