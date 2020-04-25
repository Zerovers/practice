import React, { useEffect } from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    width: 100%;
    margin: 0;
    min-height: 100vh;
  }
  html: {
    height: 100%;
  } 
`

interface MyAppProps {
  Component: React.FC
  pageProps: any
}

const MyApp = ({ Component, pageProps }: MyAppProps): JSX.Element => {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
