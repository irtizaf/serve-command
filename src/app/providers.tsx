// app/providers.tsx
'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import Context from './context/context';
import { AppProps } from 'next/app';
import theme from "../../theme/theme"
import '@fontsource/chivo/400.css'
import '@fontsource/inter/700.css'

export function Providers({ 
    children 
  }: { 
  children: React.ReactNode 
  }) {
  return (
    <Context>
    <CacheProvider>
      <ChakraProvider theme={theme}>
        {children}
      </ChakraProvider>
    </CacheProvider>
    </Context>
  )
}