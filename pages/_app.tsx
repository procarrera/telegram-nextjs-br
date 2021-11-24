import { GeistProvider, CssBaseline, Button } from '@geist-ui/react'
import 'inter-ui/inter.css'
import { useState } from 'react';
import Layout from '../src/components/Layout';


function MyApp({ Component, pageProps }) {
  
  const [themeType, setThemeType] = useState('light')
  const switchThemes = () => {
    setThemeType(last => (last === 'dark' ? 'light' : 'dark'))
  }

  const customTheme = {
    "Type": "Custom",
    "Layout": {
      "pageWidthWithMargin": "600pt"
    }
  }

  return (
    <GeistProvider themes={customTheme} themeType={themeType} >
      <CssBaseline />
      <Layout colorMode={themeType} colorModeSwitch={switchThemes}>
        <Component {...pageProps} />
      </Layout>
    </GeistProvider>
  );
}

export default MyApp;
