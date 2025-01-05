// import React from 'react'

export default function Flex(props) {
  return (
    <div className="flex justify-center items-center bg-slate-500 h-[100vh] w-[100vw] ">
      {props.children}
    </div>
  )
}
