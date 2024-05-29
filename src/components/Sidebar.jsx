import styled from 'styled-components'
import logo from '../assets/react.svg'
import { v } from '../styles/Variables'

// eslint-disable-next-line react/prop-types
export const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <Container $isOpen={sidebarOpen}>

      <div className='logo__content'>
        <div className='img__content'>
          <img src={logo} alt='' />
        </div>
        <h2>Gonon's</h2>
      </div>
    </Container>
  )
}

const Container = styled.div`
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
  position: sticky;
  padding-top: 20px;

  .logo__content{
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: ${v.lgSpacing};
    background: aqua;

    .img__content{
      display: flex;
      cursor: pointer;
      transition: all .3s;
      transform: ${({ $isOpen }) => ($isOpen ? 'scale(.7)' : 'scale(1.5)')};

      img{
        max-width: 100%;
        height: auto;
        object-fit: cover;
      }
    }

    & h2{
      display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
    }
  }
`
