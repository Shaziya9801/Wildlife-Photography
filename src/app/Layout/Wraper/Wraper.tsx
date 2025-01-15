"use client"
import React from 'react'
import dynamic from 'next/dynamic'

let Header = dynamic(()=>import("../Header/page"))
let Footer = dynamic(()=>import("../Footer/page"))

const Wraper = ({children}:any) => {
  return (
    <div>
        <Header/>
            {children}
        <Footer/>
    </div>
  )
}

export default Wraper
