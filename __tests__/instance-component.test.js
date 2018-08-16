import * as React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import InstanceComponent from '../src/instance-component';

Enzyme.configure({ adapter: new Adapter() });

describe('InstanceComponent test', () => {
  it('mounts the component', () => {
    const wrapper = shallow(<InstanceComponent />);
    expect(wrapper).toBeDefined();
  });
});
