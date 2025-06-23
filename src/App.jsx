
import Button from "./component/Button";
import Input from "./component/Input";
import { useState } from "react";

function App() {
  let [result, setresult] = useState("")
  let buttonclick = (value) => {
    if (value === "CE") {
      setresult("")
    }
    else if (value === "=") {
      let total = eval(result)
      setresult(total)


    }
    else {
      result += value
      setresult(result)
    }

  }


  return (
    <>
      <div className="flex justify-center items-center bg-slate-500 h-[100vh] w-[100vw]">
        <div className="shadow-current shadow-2xl drop-shadow-2xl place-content-center place-items-center h-[500px] w-[300px] border rounded-lg ">
          <Input result={result} />
          <Button buttonclick={buttonclick} />
        </div>
      </div>
    </>
  );
}


export default App;
