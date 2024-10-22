import React,{useState} from "react";

function NameChangeComp() {
    const [name,setname]= useState ("Elakkiya");


 const handlename = () =>{
    // setname("manokaran");
        if(name =="Elakkiya"){
            setname("Manokaran");


        }
        if(name == "Manokaran"){
            setname("Elakkiya")
            
        }
   

    };

return(
    <>
    
    <h1>{name} </h1>

    <button onClick={handlename}>change</button>
    
    </>
);
}
    
export default NameChangeComp