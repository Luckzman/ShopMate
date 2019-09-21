import React from 'react';
import { shallow } from 'enzyme';
import ListItem from '../../component/presentation/ListItem';

describe('ListItem Component', () => {
  it('should render correctly', () => {
    const props = {
      listArr: [],
    }
    const wrapper = shallow(<ListItem {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
