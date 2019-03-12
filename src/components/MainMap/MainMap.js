import React from 'react';
import { Map, MouseTool } from 'react-amap';

const randomPosition = () => ({
  longitude: 120 + Math.random() * 20,
  latitude: 30 + Math.random() * 10,
});
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
      mapCenter: randomPosition()
    }
  }

  render() {
    return (
      <div>
        <div style={{width: '100%', height: '100vh'}}>
          <Map zoom={5} loading={Loading} center={this.state.mapCenter}/>
        </div>
      </div>

    );
  }
}


export default MainMap;
