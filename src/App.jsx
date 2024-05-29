import { MyRoutes } from './routers/routes'
import styled from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Sidebar } from './components/Sidebar'
import { useContext } from 'react'
import { ThemeContext } from './context/Context'

function App () {
  const { theme, changeTheme } = useContext(ThemeContext)
  console.log(theme)
  return (
    <>
      <BrowserRouter>
        <Container>
          <Sidebar />
          <MyRoutes />
          <button onClick={changeTheme}>theme</button>
        </Container>
      </BrowserRouter>
    </>
  )
}

export default App

const Container = styled.main`
  background-color: ${({ theme }) => theme.body};
`
