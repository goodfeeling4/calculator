

export default function Input({result}) {
  return (
    
    <div>
      <div>
          <input placeholder="lets calculate" type="text" className="placeholder:text-blue-700 w-72 h-16 bg-inherit  text-[30px] text-end p-3 outline-none ring-0 placeholder:to-blue-700" readOnly value={result}/>
        </div> 
    </div>
  )
}
