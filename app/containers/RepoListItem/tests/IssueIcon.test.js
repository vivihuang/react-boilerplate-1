import React from 'react';
import { shallow, mount } from 'enzyme';

import IssueIcon from '../IssueIcon';

describe('<IssueIcon />', () => {
  it('should render an <svg> tag', () => {
    const renderedComponent = mount(<IssueIcon />);
    expect(renderedComponent.find('svg')).toHaveLength(1);
  });

  it('should have a className attribute', () => {
    const renderedComponent = shallow(<IssueIcon />);
    expect(renderedComponent.prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const renderedComponent = shallow(<IssueIcon id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should adopt any attribute', () => {
    const renderedComponent = shallow(<IssueIcon attribute="test" />);
    expect(renderedComponent.prop('attribute')).toBeDefined();
  });
});
