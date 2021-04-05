// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import PropTypes from 'prop-types'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor) for the color
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`
// const smallBox = <div className="box box--small" style={{backgroundColor: 'lightblue', fontStyle: 'italic'}}>small lightblue box</div>
// const mediumBox = <div className="box box--medium" style={{backgroundColor: 'pink', fontStyle: 'italic'}}>medium pink box</div>
// const largeBox = <div className="box box--large" style={{backgroundColor: 'orange', fontStyle: 'italic'}}>large orange box</div>

const Box = ({children, className = '', style, size, ...otherProps}) => {
  const sizeClassName = size ? `box box--${size}` : ''
  return <div className={`${className} box ${sizeClassName}`} style={{...style, fontStyle: 'italic'}} {...otherProps}>{children}</div>
}

Box.propTypes = {
  size: PropTypes.string,
}

const smallBox = <Box size="small" style={{backgroundColor: 'lightblue'}}>small lightblue box</Box>
const mediumBox = <Box size="medium" style={{backgroundColor: 'pink'}}>medium pink box</Box>
const largeBox = <Box size="large" style={{backgroundColor: 'orange'}}>large orange box</Box>

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
      <Box>Custom box</Box>
    </div>
  )
}

export default App
