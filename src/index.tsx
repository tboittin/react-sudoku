import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'

import { Card, Content, Title, Grid } from 'components'
import { configureStore, unregister } from 'core'
import { GlobalStyles, theme } from 'styles'
import { Provider } from 'react-redux'

const store = configureStore()

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Provider store={store}>
        <Content data-cy="content">
          <Title data-cy="title">Sudoku</Title>
          <Card data-cy="card">
            <Grid />
          </Card>
        </Content>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

unregister()
