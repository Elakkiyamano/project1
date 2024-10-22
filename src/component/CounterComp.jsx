import React, {useState} from "react";
import NameChangeComp from "./NameChangeComp";


function CounterComp(){

    const [ticket, setticket] = useState(0)


const handleadd = () =>{

    setticket(ticket + 1)
}
    const handlesub = () =>{
         setticket(ticket -1)
    
}


const handlereset = () =>{
    setticket(0)
 
}

 return(
        <div>
            <h1>goat  - {ticket} </h1>
           
            <button onClick={handleadd}>add</button>
            <button onClick={handlesub}>minus</button>
            <button onClick={handlereset}>reset</button>
            <NameChangeComp/>


        </div>
    );
}

export default CounterComp;