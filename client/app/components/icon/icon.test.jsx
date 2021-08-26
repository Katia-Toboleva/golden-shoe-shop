import React from 'react';
import { shallow } from 'enzyme';
import Icon from './icon';

const getUnit = (props) => (
  shallow(<Icon {...props} />)
);

describe('Icon ', () => {
  describe('render', () => {
    it('should render correctly', () => {
      const wrapper = getUnit({ icon: 'fuoco' });

      expect(wrapper).toMatchSnapshot();
    });
  });
});
