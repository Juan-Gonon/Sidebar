import styled from 'styled-components'

// eslint-disable-next-line react/prop-types
export const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <Container>
      <div className='logo__content' />
    </Container>
  )
}

const Container = styled.div`
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  position: sticky;
`
