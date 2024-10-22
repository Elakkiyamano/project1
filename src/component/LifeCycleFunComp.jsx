import React ,{useState} from "react";

import { useEffect } from "react";

function LifeCycleFunComp(){
    const [count,setcount] = useState(0);

    useEffect(()=>{
        console.log("Elakkiya");

        return() => {
            
        };

    },[count]);

    const handleadd = () => {
        setcount(count + 1);

    };

    return(
        <div>
            <h1>click-{count}</h1>

            <button onClick ={handleadd}>ADD</button>
        </div>
    );
}








export default LifeCycleFunComp