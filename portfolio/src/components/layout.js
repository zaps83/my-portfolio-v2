import React, { useState } from "react"
import NavBar from './navbar'
import "./styles/layout.css"
import { createGlobalStyle } from 'styled-components'
import { ThemeProvider } from 'styled-components'

const Light = {
  main: '#000000',
  secondary: '#ffffff',
  accent: '',
}

const Dark = {
  main: '#ffffff',
  secondary: '#000000',
  accent: '',
}

const themes = {
  light: Light,
  dark: Dark,
}

export const GlobalStyles = createGlobalStyle`
    html, body {
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: ${props => props.theme.main};
        color: ${props => props.theme.secondary};
        font-size: 16px;
    }
`

export default function Layout({ children }) {

  const [theme, setTheme] = useState('dark')

  return (
    <>
      <ThemeProvider theme={themes[theme]}>
        <GlobalStyles />
        <NavBar theme={theme} setTheme={setTheme}>
        {children}
        </NavBar>
      </ThemeProvider>
    </>
  )
}
