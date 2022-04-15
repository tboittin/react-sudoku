import { Button } from 'components/styles'
import { FC } from 'react'
import { NUMBERS } from 'typings'

interface IProps {
  value: NUMBERS
}

const NumberButton: FC<IProps> = ({ value }) => {
  function fill() {
    console.log('fill', value)
  }
  return <Button onClick={fill}>{value}</Button>
}

export default NumberButton
