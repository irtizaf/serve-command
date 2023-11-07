// app/providers.tsx
'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import Context from './context/context';
import { AppProps } from 'next/app';

export function Providers({ 
    children 
  }: { 
  children: React.ReactNode 
  }) {
  return (
    <Context>
    <CacheProvider>
      <ChakraProvider>
        {children}
      </ChakraProvider>
    </CacheProvider>
    </Context>
  )
}