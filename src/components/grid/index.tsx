import { FC, Children, useEffect, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { createGrid } from 'reducers/actions'
import { AnyAction, Dispatch } from 'redux'
import { GRID } from 'typings'
import { createFullGrid } from 'utils'
import Block from './block'

import { Container, Row } from './styles'

const Grid: FC = () => {
  const dispatch = useDispatch<Dispatch<AnyAction>>()
  const create = useCallback(() => dispatch(createGrid()), [dispatch])
  useEffect(() => {
    create()
  }, [create])

  const grid: GRID = createFullGrid()
  console.log(grid)

  return (
    <Container data-cy="grid-container">
      {Children.toArray(
        [...Array(9)].map((_, rowIndex) => (
          <Row data-cy="grid-row-container">
            {Children.toArray(
              [...Array(9)].map((_, colIndex) => (
                <Block colIndex={colIndex} rowIndex={rowIndex} />
              ))
            )}
          </Row>
        ))
      )}
    </Container>
  )
}

export default Grid
