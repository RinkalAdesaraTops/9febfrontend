import React from 'react'
import styled from 'styled-components'
import mystyle from './mystyle.module.css'
const StyleComponentExample = () => {
    const H3 = styled.h3 `
                color:red
    `
  return (
    <>
    <div className={mystyle.box}></div>
    <div>
      <h3>Styled component example</h3>
      <H3>Hii</H3>
      <h3>Hello</h3>
    </div>
    </>
  )
}

export default StyleComponentExample
