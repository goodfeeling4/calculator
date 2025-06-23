function Button({buttonclick}) {
  const num1 = ["sin(", "cos(", "tan(", "sqrt("];
  const num2 = ["Clear","(",")","%"];
  // const num4 = ["4","5","6","1","2","3","00","0","="];
  const num3 = ["7","8","9","x"];
  const num4 = ["4","5","6","+"];
  const num5 = ["1","2","3","-"];
  const num6 = ["00","0","=","/"];
  // const num5 = ["+","-","x","/"];
  return (
    <div>
         <div className=" bg-inherit p-2">
            <div className="grid grid-flow-row grid-cols-4 justify-center items-center bg-inherit   ">
            {
              num1.map((n)=> (
                <div className="shadow-lg shadow-current  bg-slate-500 border border-spacing-11
                 border-neutral-300 w-20 h-16 rounded-3xl flex text-[1.5rem] justify-center items-center text-blue-700 cursor-pointer hover:bg-slate-400 " 
                key={n} onClick={()=> buttonclick(n)}>{n}</div>
              ))
            }
            </div>
            <div className="grid grid-flow-row grid-cols-4 justify-center items-center bg-inherit   ">
            {
              num2.map((n)=> (
                <div className="shadow-lg shadow-current  bg-slate-500 border border-spacing-11
                 border-neutral-300 w-20 h-16 rounded-3xl flex text-[1.5rem] justify-center items-center text-blue-700 cursor-pointer hover:bg-slate-400 " 
                key={n} onClick={()=> buttonclick(n)}>{n}</div>
              ))
            }
            </div>
            <div className="grid grid-flow-row grid-cols-4 justify-center items-center bg-inherit   ">
            {
              num3.map((n)=> (
                <div className="shadow-lg shadow-current  bg-slate-500 border border-spacing-11
                 border-neutral-300 w-20 h-16 rounded-3xl flex text-[1.5rem] justify-center items-center text-blue-700 cursor-pointer hover:bg-slate-400 " 
                key={n} onClick={()=> buttonclick(n)}>{n}</div>
              ))
            }
            </div>
            <div className="grid grid-flow-row grid-cols-4 justify-center items-center bg-inherit   ">
            {
              num4.map((n)=> (
                <div className="shadow-lg shadow-current  bg-slate-500 border border-spacing-11
                 border-neutral-300 w-20 h-16 rounded-3xl flex text-[1.5rem] justify-center items-center text-blue-700 cursor-pointer hover:bg-slate-400 " 
                key={n} onClick={()=> buttonclick(n)}>{n}</div>
              ))
            }
            </div>
            <div className="grid grid-flow-row grid-cols-4 justify-center items-center bg-inherit   ">
            {
              num5.map((n)=> (
                <div className="shadow-lg shadow-current  bg-slate-500 border border-spacing-11
                 border-neutral-300 w-20 h-16 rounded-3xl flex text-[1.5rem] justify-center items-center text-blue-700 cursor-pointer hover:bg-slate-400 " 
                key={n} onClick={()=> buttonclick(n)}>{n}</div>
              ))
            }
            </div>
            <div className="grid grid-flow-row grid-cols-4 justify-center items-center bg-inherit   ">
            {
              num6.map((n)=> (
                <div className="shadow-lg shadow-current  bg-slate-500 border border-spacing-11
                 border-neutral-300 w-20 h-16 rounded-3xl flex text-[1.5rem] justify-center items-center text-blue-700 cursor-pointer hover:bg-slate-400 " 
                key={n} onClick={()=> buttonclick(n)}>{n}</div>
              ))
            }
            </div>
            </div>
    </div>
  )
}
export default Button;