import { Button } from 'components/styles'
import { Dispatch, FC, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IReducer } from 'reducers'
import { fillBlock } from 'reducers/actions'
import { AnyAction } from 'redux'
import { BLOCK_COORDS, N, NUMBERS } from 'typings'

interface IProps {
  value: NUMBERS
}

interface IState {
  selectedBlock?: BLOCK_COORDS
  selectedValue: N
}

const NumberButton: FC<IProps> = ({ value }) => {
  const state = useSelector<IReducer, IState>(
    ({ selectedBlock, workingGrid }) => ({
      selectedBlock,
      selectedValue:
        workingGrid && selectedBlock
          ? workingGrid[selectedBlock[0]][selectedBlock[1]]
          : 0,
    })
  )
  const dispatch = useDispatch<Dispatch<AnyAction>>()

  const fill = useCallback(() => {
    if (state.selectedBlock && state.selectedValue === 0) {
      dispatch(fillBlock(value, state.selectedBlock))
    }
  }, [dispatch, state.selectedBlock, state.selectedValue, value])
  return <Button onClick={fill}>{value}</Button>
}

export default NumberButton
