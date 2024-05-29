import { MyRoutes } from './routers/routes'
import styled from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Sidebar } from './components/Sidebar'
import { ProviderTheme } from './context/Context'

function App () {
  return (
    <ProviderTheme>
      <BrowserRouter>
        <Container>
          <Sidebar />
          <MyRoutes />
        </Container>
      </BrowserRouter>
    </ProviderTheme>
  )
}

export default App

const Container = styled.main`
  background-color: ${({ theme }) => theme.body};
`
