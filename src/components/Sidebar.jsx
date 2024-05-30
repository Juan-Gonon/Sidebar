import styled from 'styled-components'
import logo from '../assets/react.svg'
import { v } from '../styles/Variables'
import { AiOutlineLeft } from 'react-icons/ai'
import { linksArray } from '../data/data'
import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
export const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const modifySidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <Container $isOpen={sidebarOpen}>
      <button className='sidebar__button' onClick={modifySidebar}>
        <AiOutlineLeft />
      </button>
      <div className='logo__content'>
        <div className='img__content'>
          <img src={logo} alt='' />
        </div>
        <h2>Gonon's</h2>
      </div>
      {
        linksArray.map((item, index) => (
          <div key={index} className='link__container'>
            <Link to={item.to} className='links'>
              <div className='link__icon'>
                {item.icon}
              </div>
              {
                sidebarOpen && (<span>{item.label}</span>)
              }
            </Link>
          </div>
        ))
      }
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
    transition: transform .8s;
    transform: ${({ $isOpen }) => ($isOpen ? 'initial' : 'rotate(180deg)')};
    outline: none;
    border: none;
    letter-spacing: inherit;
    color: inherit;
    color: inherit;
    font-size: inherit;
    text-align: inherit;
    padding: 0;
    font-family: inherit;
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

  .link__container{
    margin: 8px 0;
    padding: 0 15%;

    &:hover{
      background: ${({ theme }) => theme.bg3};
    }
  }
`
