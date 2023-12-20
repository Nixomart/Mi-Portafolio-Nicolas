import React from 'react'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

export default function Loading() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <AiOutlineLoading3Quarters className="animate-spin text-4xl" />
    </div>
  )
}
