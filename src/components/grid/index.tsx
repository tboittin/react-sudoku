import { FC, Children } from 'react'
import { GRID } from 'typings'
import { createFullGrid } from 'utils'
import Block from './block'

import { Container, Row } from './styles'

const Grid: FC = () => {
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
