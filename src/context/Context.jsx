import { createContext, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Dark, Light } from '../styles/Themes'

export const ThemeContext = createContext()

// eslint-disable-next-line react/prop-types
export function ProviderTheme ({ children }) {
  const [theme, setTheme] = useState('light')
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const themeStyle = theme === 'light' ? Light : Dark

  const changeTheme = () => {
    setTheme((prevThem) => (prevThem === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{
      theme,
      changeTheme,
      sidebarOpen,
      setSidebarOpen
    }}
    >
      <ThemeProvider theme={themeStyle}>
        {
          children
        }
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
