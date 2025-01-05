// import React from 'react'

export default function Box(props) {
  return (
    <div className="shadow-current shadow-2xl drop-shadow-2xl place-content-center place-items-center h-[500px] w-[300px] border rounded-lg ">
      {props.children}
    </div>
  )
}
