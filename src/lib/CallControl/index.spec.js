import React from 'react';
import { shallow, mount } from 'enzyme';
import { CallControl } from '@collab-ui/react';

describe('tests for <CallControl />', () => {
  it('should match SnapShot', () => {
    const container = shallow(<CallControl type='microphone-muted' ariaLabel='test' />);

    expect(container).toMatchSnapshot();
  });

  it('should render one Call Control button', () => {
    const container = shallow(<CallControl type='microphone-muted' ariaLabel='test' />);

    expect(container.find('Button').length).toEqual(1);
  });

  it('should handle disabled state', () => {
    const container = shallow(<CallControl type='microphone-muted' disabled ariaLabel='test' />);

    expect(container.props().disabled).toEqual(true);
  });

  it('should handle onClick event', () => {
    let count = 0;
    const countUp = () => count++;
    const container = mount(<CallControl type='microphone-muted' onClick={countUp} ariaLabel='test' />);

    container.find('Button').simulate('click');
    expect(count).toEqual(1);
  });

  it('should handle keyDown as onClick event', () => {
    let count = 0;
    const countUp = () => count++;
    const container = mount(<CallControl type='microphone-muted' onClick={countUp} ariaLabel='test' />);

    container.find('Button').simulate('click');
    container
      .find('Button')
      .simulate('keyDown', { which: 13, charCode: 13, key: 'Space' });
    expect(count).toEqual(2);
  });

  describe('tests for type prop', () => {
    it('should render activities type', () => {
      const container = mount(<CallControl type='activities' ariaLabel='test' />);

      expect(container.find('Icon').props().name).toEqual('activities_24');
    });

    it('should render camera type', () => {
      const container = mount(<CallControl type='camera' ariaLabel='test' />);

      expect(container.find('Icon').props().name).toEqual('camera_24');
    });

    it('should render camera-muted type', () => {
      const container = mount(<CallControl type='camera-muted' ariaLabel='test' />);

      expect(container.find('Icon').props().name).toEqual('camera-muted_24');
    });

    it('should render cancel type', () => {
      const container = mount(<CallControl type='cancel' ariaLabel='test' />);

      expect(container.find('Button').hasClass('cui-call-control--cancel')).toEqual(true);
      expect(container.find('Icon').props().name).toEqual('cancel_24');
    });

    it('should render handset type', () => {
      const container = mount(<CallControl type='handset' ariaLabel='test' />);

      expect(container.find('Icon').props().name).toEqual('handset_24');
    });

    it('should render microphone-muted type', () => {
      const container = mount(<CallControl type='microphone-muted' ariaLabel='test' />);

      expect(container.find('Button').hasClass('cui-call-control--microphone-muted')).toEqual(true);
      expect(container.find('Icon').props().name).toEqual('microphone-muted_24');
    });

    it('should render more type', () => {
      const container = mount(<CallControl type='more' ariaLabel='test' />);

      expect(container.find('Icon').props().name).toEqual('more_24');
    });

    it('should render share-screen type', () => {
      const container = mount(<CallControl type='share-screen' ariaLabel='test' />);

      expect(container.find('Icon').props().name).toEqual('share-screen_24');
    });

    it('should render speaker type', () => {
      const container = mount(<CallControl type='speaker' ariaLabel='test' />);

      expect(container.find('Icon').props().name).toEqual('speaker_24');
    });

    it('should render more type', () => {
      const container = mount(<CallControl type='more' ariaLabel='test' />);

      expect(container.find('Icon').props().name).toEqual('more_24');
    });
  });

  it('should handle iconSize of 20', () => {
    const container = mount(<CallControl type='microphone-muted' ariaLabel='test' iconSize={10}/>);

    const svgEle = container.find('svg');
    expect(svgEle.props().height).toEqual(10);
    expect(svgEle.props().width).toEqual(10);
  });

  it('should handle iconSize of 40', () => {
    const container = mount(<CallControl type='microphone-muted' ariaLabel='test' iconSize={16}/>);

    const svgEle = container.find('svg');
    expect(svgEle.props().height).toEqual(16);
    expect(svgEle.props().width).toEqual(16);
  });

  it('should handle iconColor prop', () => {
    const container = mount(<CallControl type='microphone-muted' ariaLabel='test' iconColor='green' />);

    expect(container.find('Icon').props().color).toEqual('green');
  });

  it('should render microphone-muted type with class microphone-muted--active on active', () => {
    const container = mount(<CallControl type='microphone-muted' active={true} ariaLabel='test' />);

    expect(container.find('Button').hasClass('cui-call-control--microphone-muted--active')).toEqual(true);
  });
});
