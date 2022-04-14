import React, { Dispatch, FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IReducer } from 'reducers'
import { selectBlock } from 'reducers/actions'
import { AnyAction } from 'redux'
import { INDEX, N } from 'typings'
import { Container } from './styles'

interface IProps {
  colIndex: INDEX
  rowIndex: INDEX
}

interface IState {
  value: N
  isActive: boolean
}

const Block: FC<IProps> = ({ colIndex, rowIndex }) => {
  const state = useSelector<IReducer, IState>(({ grid, selectedBlock }) => ({
    isActive: selectedBlock
      ? selectedBlock[0] === rowIndex && selectedBlock[1] === colIndex
      : false,
    value: grid ? grid[rowIndex][colIndex] : 0,
  }))

  const dispatch = useDispatch<Dispatch<AnyAction>>()

  function handleClick() {
    dispatch(selectBlock([rowIndex, colIndex]))
  }

  return (
    <Container
      active={state.isActive}
      data-cy={'block-' + rowIndex + '-' + colIndex}
      onClick={handleClick}
    >
      {state.value === 0 ? '' : state.value}
    </Container>
  )
}

export default Block
