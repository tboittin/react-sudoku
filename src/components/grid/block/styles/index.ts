import styled, { css } from 'styled-components'

interface IProps {
  active?: boolean
}

export const Container = styled.div<IProps>`
  ${({ active, theme }) => css`
    align-items: center;
    background-color: ${active? theme.colors.blue : theme.colors.white};
    border: 1px solid ${theme.colors.black};
    cursor: pointer;
    display: flex;
    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: 0;
    font-weight: bold;
    font-size: 20px;
    height: auto;
    justify-content: center;
    transition: ${theme.transition};
    user-select: none;

    &:before {
      padding-top: 100%;
      content: '';
      float: left;
    }

    &:hover {
      background-color: ${theme.colors.lightBlue};
    }
  `}
`
export const Row = styled.div`
  display: flex;
  flex-flow: row;
`
