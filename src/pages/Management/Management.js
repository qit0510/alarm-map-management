import React from 'react'
import { connect } from 'dva'

class Management extends React.Component {
  render () {
    return (
      <div>公共管理页面</div>
    )
  }
}

export default connect()(Management)