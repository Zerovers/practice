import React, { FC } from 'react'
import styled from 'styled-components'
import { useDrag } from 'react-dnd'

const Wrapper = styled.div<{ second: boolean; isDragging: boolean }>`
  display: flex;
  width: 49%;
  height: 300px;
  border: 1px solid black;
  background-color: ${props => (props.second ? 'red' : 'green')};
  opacity: ${({ isDragging }) => (isDragging ? 0.5 : 1)};
`

interface Props {
  second?: boolean
}

const Element: FC<Props> = ({ second = false }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: 'check' },
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  })
  return <Wrapper second={second} ref={drag} isDragging={isDragging} />
}

export default Element
