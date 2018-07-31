import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import divWithClass from '../dist'

configure({ adapter: new Adapter() })

describe('divWithClass',()=>{

  const Sidebar = divWithClass('sidebar')
  const wrapper = shallow(
    <Sidebar hello="world" idk="something" className="anAdditionalClass">
      <h1>Hello</h1>
      <h2>World</h2>
    </Sidebar>
  )
  const props = wrapper.props()

  it('returns a React div element',()=> {
    expect(wrapper.type()).toBe('div')
  })

  it('has all of the props that were passed to it',()=>{
    expect(props.hello).toBe('world')
    expect(props.idk).toBe('something')
  })

  it('concats a user provided className with the className specified when calling divWithClass',()=>{
    expect(props.className).toBe('sidebar anAdditionalClass')
  })

  it('respects child props',()=>{
    expect(props.children.length).toBe(2)
    const h1 = props.children[0]
    const h2 = props.children[1]

    const h1Type = shallow(<h1/>).type()
    const h2Type = shallow(<h2/>).type()

    expect(h1Type).toBe('h1')
    expect(h2Type).toBe('h2')
  })

})
