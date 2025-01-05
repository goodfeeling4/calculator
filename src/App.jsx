// Filename - App.js
import Button from "./component/Button";
import Box from "./component/Box";
import Flex from "./component/Flex";
import Input from "./component/input";
import { useState } from "react";
// import { PiToteLight } from "react-icons/pi";
// import React from "react";

function App() {
  // let intext = intext => console.log(intext)
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
    <Flex>
      <Box>
        <div>
          <Input result={result} />
          <div>
            <Button buttonclick={buttonclick} />
          </div>
        </div>
      </Box>
    </Flex>
  </>
);
}
// import Box from "./component/Box";/

export default App;
