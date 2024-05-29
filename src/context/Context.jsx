import { createContext, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Dark, Light } from '../styles/Themes'

export const ThemeContext = createContext()

// eslint-disable-next-line react/prop-types
export function ProviderTheme ({ children }) {
  const [theme, setTheme] = useState('light')
  const themeStyle = theme === 'light' ? Light : Dark

  return (
    <ThemeContext.Provider value={{
      theme,
      setTheme
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
