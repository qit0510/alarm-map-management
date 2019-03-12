import React from 'react';
import { Map, MouseTool } from 'react-amap';

const loadingStyle = {
  position: 'relative',
  height: '100%',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const Loading = <div style={loadingStyle}>Loading Map...</div>

class MainMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      what: '点击下方按钮开始绘制',
      mapPlugins: ['ToolBar','ControlBar'],
      mapCenter: {longitude: 120, latitude: 35}
    };
  }
  render() {
    return (
      <div>
        <div style={{width: '100%', height: '100vh'}}>
          <Map
            viewMode="3D"
            zoom={5}
            plugins={this.state.mapPlugins}
            center={this.state.mapCenter}
            loading={Loading}
          >
          </Map>
        </div>
      </div>

    );
  }
}


export default MainMap;
