import { MyRoutes } from './routers/routes'
import styled from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Sidebar } from './components/Sidebar'

function App () {
  return (
    <>
      <BrowserRouter>
        <Container>
          <Sidebar />
          <MyRoutes />
        </Container>
      </BrowserRouter>
    </>
  )
}

export default App

const Container = styled.main`
  
`
