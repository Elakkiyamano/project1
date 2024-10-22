import React from "react";

import{UseForm} from "react-hook-form";

function ReactFormHook(){
    const{register,handlesubmit,formState:{error}}=useForm()
    const handleform=(data)=>{

    console.log(data);
    }

    console.log(error);

    return(
        <div>
            <h1>Hook Form</h1>

            <lable>Enter your name</lable>;
            <input {...register("Firstname",{register:"first name is required"})} Placeholder="Name"/>
            <p>{error?.firdtname?.message}</p>
            <br></br>
            <br></br>

            
            <lable>Enter your age</lable>;
            <input {...register("age")} Placeholder="age"/>

            <br></br>
            <br></br>


            <lable>Enter your Email</lable>;
            <input {...register("email",{register:true})} Placeholder="Email"/>

            <br></br>
            <br></br>

            <button onClick={handlesubmit(handleform)}>submit</button>
            


        </div>
    )

    
    
    
}


export default ReactFormHook