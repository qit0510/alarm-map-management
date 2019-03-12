import React from 'react'
import { connect } from 'dva'

class Service extends React.Component {
  render () {
    return (
      <div>公共服务页面</div>
    )
  }
}

export default connect()(Service)