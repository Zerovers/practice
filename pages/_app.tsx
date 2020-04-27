import React, { useEffect } from 'react'
import { createGlobalStyle } from 'styled-components'
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'

const GlobalStyle = createGlobalStyle`
  body {
    width: 100%;
    margin: 0;
    min-height: 100vh;
  }
  html: {
    height: 100%;
  }
  img {
    width: 100%;
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
      <DndProvider backend={Backend}>
        <Component {...pageProps} />
      </DndProvider>
    </>
  )
}

export default MyApp
