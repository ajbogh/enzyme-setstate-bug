import * as React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MyComponent from '../src/my-component';

Enzyme.configure({ adapter: new Adapter() });

describe('MyComponent test', () => {
  it('calls onNameChange prop callback', () => {
    const mySpy = jest.fn();
    const wrapper = shallow(<MyComponent onNameChange={mySpy} />);

    wrapper.instance().changeName('test');
    expect(mySpy).toHaveBeenCalledWith('test');
  });
});
