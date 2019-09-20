import React from 'react';
import { shallow } from 'enzyme';
import ItemCard from '../../component/presentation/ItemCard';

describe('ItemCard Component', () => {
  it('should render correctly', () => {
    const props = {
      name: 'sample',
      price: '20',
      thumbnail: 'sample'
    }
    const wrapper = shallow(<ItemCard {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
