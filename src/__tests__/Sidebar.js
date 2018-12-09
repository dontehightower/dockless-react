import React from 'react';
import { configure, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Sidebar from '../components/Sidebar';

configure({ adapter: new Adapter() });

describe('<Sidebar />', () => {

  it('has four items in it', () => {
    const TestSidebar = render(<Sidebar />);
    expect(TestSidebar.find('aside')).toBeTruthy();
  });
});

// Arrange
// Act
// Assert