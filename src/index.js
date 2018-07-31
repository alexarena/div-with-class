import React from 'react'

export default function divWithClass(classNameIn){
  return (props) =>{
    const className = props.className ? classNameIn + ' ' + props.className : classNameIn
    const newProps = {...props, className}
    return React.createElement('div',newProps)
  }
}
