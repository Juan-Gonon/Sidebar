import styled from 'styled-components'
import logo from '../assets/react.svg'
import { v } from '../styles/Variables'
import { AiOutlineLeft } from 'react-icons/ai'
import { linksArray, secondaryLinksArray } from '../data/data'
import { NavLink, useLocation } from 'react-router-dom'
import { useContext } from 'react'
import { ThemeContext } from '../context/Context'

// eslint-disable-next-line react/prop-types
export const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const { pathname } = useLocation()
  const isActive = location.pathname
  const { changeTheme } = useContext(ThemeContext)

  console.log({ pathname, isActive })

  const modifySidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  console.log(pathname)

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
            <NavLink to={item.to} className={`links ${({ isActive }) => (`ln-${isActive ? 'active' : ''}`)}`}>
              <div className='link__icon'>
                {item.icon}
              </div>
              {
                sidebarOpen && (<span>{item.label}</span>)
              }
            </NavLink>
          </div>
        ))
      }
      <Divider />
      {
        secondaryLinksArray.map((item, index) => (
          <div key={index} className='link__container'>
            <NavLink to={item.to} className={`links ${({ isActive }) => (`ln-${isActive ? 'active' : ''}`)}`}>
              <div className='link__icon'>
                {item.icon}
              </div>
              {
                sidebarOpen && (<span>{item.label}</span>)
              }
            </NavLink>
          </div>
        ))
      }
      <Divider />
      <div className='theme__content'>
        {sidebarOpen && <span>Dark mode</span>}
        <section className='toggle__content'>
          <article className='grid theme-container'>
            <div className='content'>
              <div className='demo'>
                <label htmlFor='toggle-click' className='switch'>
                  <input id='toggle-click' onClick={changeTheme} type='checkbox' className='theme-switch' />
                  <span className='slider round' />
                </label>
              </div>
            </div>
          </article>
        </section>
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

    .links{
      display: flex;
      align-items: center;
      text-decoration: none;
      padding: calc(${v.smSpacing}-2px) 0;
      color: ${({ theme }) => theme.text};

      .link__icon{
        padding: ${v.smSpacing} ${v.mdSpacing};
        display: flex;

        svg{
          font-size: 25px;
        }
      }

      &.active{
        .link__icon{
          svg{
            color: ${({ theme }) => theme.bg4};
          }
        }

      }
    }
  }

  .theme__content{
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    & span{
      display: block;
      padding: 10px;
      font-weight: 700;
    }

    .toggle__content{
      margin: ${({ $isOpen }) => $isOpen ? 'auto 40px' : 'auto 15px'};
      /* background: aqua; */
      width: 36px;
      height: 20px;
      border-radius: 10px;
      transition: all .3s;
      position: relative;

      .theme-container{
        background-blend-mode: multiply, multiply;
        transition: all.4s;

        /* &.grid{
        display: grid;
        justify-items: center;
        align-items: center;
        height: 100vh;
        width: 100vw;
        font-family: 'Lato', sans-serif;
      } */

        .demo{
          font-size: 32px;

          .switch{
            position: relative;
            display: inline-block;
            width: 60px;
            height: 34px;

            .theme-switch{
              position: absolute;
              opacity: 1;
              width: 0px;
              height: 0px;
              z-index: 20;

              &:checked {
                ~ {
                  .slider{
                    &::before{
                      left: 4px;
                      content: "🌑";
                      transform: translateX(26px);
                    }
                  }
                }
              }
            }

            .slider{
              position: absolute;
              cursor: pointer;
              inset: 0;
              background: ${v.checkbox};
              transition: all .4s;

              &::before{
                position: absolute;
                content: '☀️';
                height: 0;
                width: 0;
                left: -10px;
                top: 16px;
                line-height: 0px ;
                transition: .4s;
                z-index: 1;
              }

              &.round{
                border-radius: 34px;
                &::before{
                  border-radius: 50%;
                }
              }
            }

          }

        }

      }

   
    }
  }
`

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: ${({ theme }) => theme.bg3};
  margin: ${v.lgSpacing} 0;
`
