import React, { FC } from 'react'
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
      <Element />
      <Element second />
    </Wrapper>
  )
}

export default index
