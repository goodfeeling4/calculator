// import { IoBackspaceOutline } from "react-icons/io5";

function Button({buttonclick}) {
  
  const num = ["%","CE","(",")",7,8,9,"*",4,5,6,"+",1,2,3,"-","00",0,"=","/",];

  return (
    <div>
         <div className="grid grid-flow-row grid-cols-4 justify-center items-center bg-inherit   h-96 w-72 gap-3 p-3 ">
            {
              num.map((n)=> (
                <div className="shadow-lg shadow-current  bg-slate-500 border border-spacing-11 border-neutral-300 py-2 rounded-full flex text-[25px] justify-center items-center text-blue-700 cursor-pointer " 
                key={n} onClick={()=> buttonclick(n)}>{n}</div>
              ))
            }
            </div>
    </div>
  )
}
export default Button;