import styled, { css, keyframes } from 'styled-components'

export const List = styled.ul`
    display: flex;
    overflow:scroll; 
    width:100%;
    ${props => props.fixed && css`
        background: #fff;
        border-radius:60px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
        left:0;
        margin: 0 auto;
        max-width:400px;
        padding: 5px;
        position: fixed;
        right: 0;
        top: -20px;
        transform: scale(.5);
        z-index: 1;
    `}
`
const rotateFrames = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const rotate = () => css`
  animation: 1.5s ${rotateFrames} linear infinite;
`
export const Spinner = styled.div`
  ${rotate()}
  border:2px solid violet;
  border-right: 2px solid transparent;
  border-radius: 50%;
  height:40px;
  margin-bottom: 10px;
  margin-left: calc(50% - 40px);
  width:40px;
  z-index: 10;
`

export const Item = styled.li`
  padding: 0 8px;
`
