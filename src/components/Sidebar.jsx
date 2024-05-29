import styled from 'styled-components'
import logo from '../assets/react.svg'
import { v } from '../styles/Variables'
import { AiOutlineLeft } from 'react-icons/ai'

// eslint-disable-next-line react/prop-types
export const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <Container $isOpen={sidebarOpen}>
      <button className='sidebar__button'>
        <AiOutlineLeft />
      </button>
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

  .sidebar__button{
    position: absolute;
    top: ${v.xxlSpacing};
    right: -18px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: ${({ theme }) => theme.bgtgderecha};
    box-shadow: 0 0 4px ${({ theme }) => theme.bg3}, 0 0 7px ${({ theme }) => theme.bg};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: transform .3s;
    transform: ${({ $isOpen }) => ($isOpen ? 'initial' : 'rotate(180deg)')};
  }

  .logo__content{
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: ${v.lgSpacing};
    background: aqua;

    .img__content{
      display: flex;
      cursor: pointer;
      transition: transform .3s;
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
