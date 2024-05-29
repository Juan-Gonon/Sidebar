import { MyRoutes } from './routers/routes'
import styled from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Sidebar } from './components/Sidebar'
import { useState } from 'react'

function App () {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <BrowserRouter>
        <Container>
          <main className={`sidebarState ${sidebarOpen ? 'active' : ''}`}>
            <Sidebar />
            <MyRoutes />
          </main>
        </Container>
      </BrowserRouter>
    </>
  )
}

const Container = styled.section`
  .sidebarState{
    display: grid;
    grid-template-columns: 90px auto;
    background: ${({ theme }) => theme.bgtotal};

    &.active{
      grid-template-columns: 300px auto;
    }
  }
  `

export default App
