import React from 'react'
import {withRouter} from 'react-router-dom'

function Wt(prop) {
  return <div onClick={() => prop.history.push('/')}>withRouter</div>
}
export default withRouter(Wt)