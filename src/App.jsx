import { MyRoutes } from './routers/routes'
import styled from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Sidebar } from './components/Sidebar'
import { useState } from 'react'

function App () {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <>
      <BrowserRouter>
        <Container className={`sidebarState ${sidebarOpen ? 'active' : ''}`}>

          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <MyRoutes />

        </Container>
      </BrowserRouter>
    </>
  )
}

const Container = styled.main`
    display: grid;
    grid-template-columns: 90px auto;
    background: ${({ theme }) => theme.bgtotal};
    transition: grid-template-columns .35s;

    &.active{
      grid-template-columns: 300px auto;
    }
  `

export default App
