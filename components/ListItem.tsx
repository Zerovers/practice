import React, { FC, useRef } from 'react'
import styled from 'styled-components'
import { useDrop, useDrag, DropTargetMonitor, XYCoord, DragPreviewImage } from 'react-dnd'
import { ItemTypes } from '../constants/itemTypes'

const Wrapper = styled.div<{ isDragging: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  border: 1px dashed black;
  padding: 5px 10px;
  margin-bottom: 10px;
  opacity: ${props => (props.isDragging ? 0 : 1)};
`

const ImageWrap = styled.div`
  width: 12px;
  height: 12px;
  margin-right: 20px;
  cursor: move;
`

interface DragItem {
  index: number
  id: string
  type: string
}

interface Props {
  text: string
  id: number
  index: number
  moveList(dragIndex: number, hoverIndex: number): void
}

const ListItem: FC<Props> = ({ text, id, index, moveList }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [, drop] = useDrop({
    accept: ItemTypes.LIST,
    hover(item: DragItem, monitor: DropTargetMonitor) {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index

      if (dragIndex === hoverIndex) {
        return
      }

      const hoverBoundingRect = ref.current!.getBoundingClientRect()
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      const clientOffset = monitor.getClientOffset()
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }

      moveList(dragIndex, hoverIndex)
      item.index = hoverIndex
    }
  })

  const [{ isDragging }, drag, preview] = useDrag({
    item: { type: ItemTypes.LIST, id, index },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging()
    })
  })

  drag(drop(ref))
  return (
    <Wrapper isDragging={isDragging} ref={preview}>
      <ImageWrap ref={ref}>
        <img src='/cross-error.png' />
      </ImageWrap>
      {text}
    </Wrapper>
  )
}

export default ListItem
