import React, { useState } from "react"
import NavBar from './navbar'
import "./styles/layout.css"
import { createGlobalStyle } from 'styled-components'
import { ThemeProvider } from 'styled-components'

const Light = {
  main: '#fcfcfc',
  secondary: '#000000',
  accent: '#FF8300',
  accent2: '#faf752',
  accent3: '#ffffff',
  hover: '#eeeeee',
  mode: '#26f7fd',
  green: '#06d444',
  yellow: '#faea05',
  red: '#ff4d56',
}

const Dark = {
  main: '#18191A',
  secondary: '#ffffff',
  accent: '#26f7fd',
  accent2: '#529bfa',
  accent3: '#121618',
  hover: '#333333',
  mode: '#faf752',
  green: ' #39ff14',
  yellow: '#faf752',
  red: '#ff476d',
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
        transition: all .5s ease;

    }
`

export default function Layout({ children }) {

  const [theme, setTheme] = useState('light')

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
