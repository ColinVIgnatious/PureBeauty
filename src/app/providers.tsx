'use client'

import Sessionprovider from '@/contexts/sessionprovider'
import {NextUIProvider} from '@nextui-org/react'

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <Sessionprovider>
      {children}
      </Sessionprovider>
    </NextUIProvider>
  )
}