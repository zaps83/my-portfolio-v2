import React, { useState, createContext } from "react"
import { NavBar }from './navbar'
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
  green: '#06d444',
  yellow: '#faea05',
  red: '#ff4d56',
  button: '#AAAAAA',
  lightLine: '#eeeeee'
}

const Dark = {
  main: '#111111',
  secondary: '#ffffff',
  accent: '#26f7fd',
  accent2: '#529bfa',
  accent3: '#222222',
  hover: '#333333',
  green: ' #39ff14',
  yellow: '#faf752',
  red: '#ff476d',
  button: '#AAAAAA',
  lightLine: '#333333'
}

const themes = {
  light: Light,
  dark: Dark,
}

export const ThemeContext = createContext()

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

export default function Layout({children, path}) {

  const [theme, setTheme] = useState('light')

  return (
    <>
      <ThemeProvider theme={themes[theme]}>
        <GlobalStyles />
        <NavBar theme={theme} setTheme={setTheme} path={path}>
        <ThemeContext.Provider value = {{ theme, setTheme }}>
          {children}
          </ThemeContext.Provider>
        </NavBar>
      </ThemeProvider>
    </>
  )
}
