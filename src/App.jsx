import Button from "./component/Button";
import Input from "./component/Input";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  let [result, setresult] = useState("");
  let [isResult, setIsResult] = useState(false);
  
  
  let buttonclick = (value) => {
    if (value === "Clear") {
      setresult("");
      setIsResult(false);
    } else if (value === "=") {
      try {
        if ((result.match(/\(/g) || []).length > (result.match(/\)/g) || []).length) {
          result += ")";
        }
        let total = evaluate(result);
        if (total === Infinity || total === -Infinity) {
          setresult("Infinity");
        } else {
          setresult(total.toString());
        }
        setresult(total.toString());
        setIsResult(true);
      } catch {
        setresult("Error");
        setIsResult(true);
      }
    } else if (value === "x") {
      setresult(result + "*");
      setIsResult(false);
    } else if (value === "/" || value === "+" || value === "-") {
      setresult(result + value);
      setIsResult(false);
    } else {
      if (isResult) {
        setresult(value.toString());
        setIsResult(false);
      } else {
        setresult(result + value);
      }
    }
  };
  return (
    <>
      <div className="flex justify-center items-center bg-slate-500 h-[100vh] w-[100vw]">
        <div className="shadow-current shadow-2xl drop-shadow-2xl place-content-center place-items-center  border rounded-lg ">
          <Input result={result} />
          <Button buttonclick={buttonclick} />
        </div>
      </div>
    </>
  );
}
export default App;
