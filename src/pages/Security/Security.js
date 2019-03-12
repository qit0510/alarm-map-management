import React from 'react'
import { connect } from 'dva'

class Security extends React.Component {
  render () {
    return (
      <div>公共安全页面</div>
    )
  }
}

export default connect()(Security)