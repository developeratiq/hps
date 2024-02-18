import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AllRoutes from './Routing/AllRoutes'
import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <ChakraProvider>
      {/* <TheRestOfYourApplication /> */}
    <AllRoutes/>
    </ChakraProvider>
  
    </>
  )
}

export default App
