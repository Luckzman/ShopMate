import React from 'react';
import { shallow } from 'enzyme';
import Cart from '../../component/presentation/Cart';

describe('Cart Component', () => {
  it('should render correctly', () => {

    const wrapper = shallow(<Cart />);

    expect(wrapper).toMatchSnapshot();
  });
});
