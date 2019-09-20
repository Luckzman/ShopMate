import React from 'react';
import { shallow } from 'enzyme';
import RadioButton from '../../component/presentation/RadioButton';

describe('RadioButton Component', () => {
  it('should render correctly', () => {
    const props = {
      options: [{ value: 'green' }, { value: 'red' }],
      selected: 'green',
      onChange: jest.fn()
    }
    const wrapper = shallow(<RadioButton {...props} />);

    expect(wrapper).toMatchSnapshot();
  });
});
