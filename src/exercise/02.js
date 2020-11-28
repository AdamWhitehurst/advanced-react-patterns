// Compound Components
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'
import {Switch} from '../switch'

function Toggle(props) {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  return React.Children.map(props.children, child => {
    // `child.type` is a string if the child element is a DOM element, otherwise
    // it is a reference to the fn of the React Custom element
    console.log(child)
    return typeof child.type === 'string'
      ? child
      : React.cloneElement(child, {
          on,
          toggle,
        })
  })
}

const ToggleOn = ({on, children}) => (on ? children : null)
ToggleOn.isEditWrapped = true

const ToggleOff = ({on, children}) => (!on ? children : null)

const ToggleButton = ({on, toggle, ...otherProps}) => (
  <Switch on={on} onClick={toggle} {...otherProps} />
)

function App() {
  return (
    <div>
      <Toggle>
        <span>Hello</span>
        <br />
        <ToggleOn>The button is on</ToggleOn>
        <ToggleOff>The button is off</ToggleOff>
        <div id="test" />
        <ToggleButton />
      </Toggle>
    </div>
  )
}

export default App

/*
eslint
  no-unused-vars: "off",
*/
