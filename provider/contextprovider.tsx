'use client'

import ContextProvider from "@/components/context"

export default function Providers({children}:{children:React.ReactNode}) {
  return (
    <ContextProvider >
        {children}
    </ContextProvider>
  )
}
