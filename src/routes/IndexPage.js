import React from 'react';
import { connect } from 'dva';
import MainMap from '../components/MainMap/MainMap';
import styles from './IndexPage.css';

function IndexPage() {
  return (
    <div>
      <MainMap/>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
