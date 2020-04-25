import React, { FC } from 'react'
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'
import styled from 'styled-components'
import Element from '../components/Element'

const Wrapper = styled.div`
  display: flex;
  font-size: 14px;
  max-width: 1024px;
  width: 100%;
  position: relative;
  margin: 0 auto;
  justify-content: space-between;
`

const index: FC = () => {
  return (
    <Wrapper>
      <DndProvider backend={Backend}>
        <Element />
        <Element second />
      </DndProvider>
    </Wrapper>
  )
}

export default index
