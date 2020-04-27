import React, { useState, useCallback } from 'react'
import { NextPage } from 'next'
import ListItem from '../../components/ListItem'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  max-width: 1024px;
  width: 100%;
  position: relative;
  margin: 0 auto;
  justify-content: space-between;
`

interface Props {}

const List: NextPage<Props> = () => {
  const [items, setItems] = useState<{ id: number; text: string }[]>([
    {
      id: 1,
      text: 'Write a cool JS library'
    },
    {
      id: 2,
      text: 'Make it generic enough'
    },
    {
      id: 3,
      text: 'Write README'
    },
    {
      id: 4,
      text: 'Create some examples'
    },
    {
      id: 5,
      text: 'Spam in Twitter and IRC to promote it (note that this element is taller than the others)'
    },
    {
      id: 6,
      text: '???'
    },
    {
      id: 7,
      text: 'PROFIT'
    }
  ])

  const handleMoveListItem = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      let itemList = [...items]
      const [removedDragItem] = itemList.splice(dragIndex, 1)
      itemList.splice(hoverIndex, 0, removedDragItem)
      setItems(itemList)
    },
    [items]
  )

  return (
    <Wrapper>
      {items.map(({ id, text }, index) => {
        return <ListItem key={id} text={text} id={id} index={index} moveList={handleMoveListItem} />
      })}
    </Wrapper>
  )
}

export default List
