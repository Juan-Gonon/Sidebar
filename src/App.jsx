import { MyRoutes } from './routers/routes'
import styled from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Sidebar } from './components/Sidebar'
import { ThemeContext } from './context/Context'
import { useContext } from 'react'

function App () {
  const { sidebarOpen } = useContext(ThemeContext)

  return (
    <>
      <BrowserRouter>
        <Container className={`sidebarState ${sidebarOpen ? 'active' : ''}`}>

          <Sidebar />
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
    color: ${({ theme }) => theme.text};

    &.active{
      grid-template-columns: 300px auto;
    }
  `

export default App
