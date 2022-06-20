import React from 'react'

const EnterpriseItem = (props) => {
  return (
    <div>
        <li>{props.id} {props.name} {props.count}</li>
    </div>
  )
}

export default EnterpriseItem