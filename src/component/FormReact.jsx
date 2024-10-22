import React,{useState} from "react";

function FormReact() {


    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [age, setage] = useState("");

    const handlename = (data) => {

        setname(data.target.value)
    }
    const handleemail = (data) => {

        setemail(data.target.value)
    }




    const handlage = (data) => {

        setage(data.target.value)
    }

    // console.log(data.target.value);

    // console.log("Elakkiya");




    return (
        <div>
            <lable>Enter your name</lable> :
            <input onChange={handlename} placeholder="name" />

            <br>
            </br>
            <br>
            </br>

            <lable>Enter your email</lable> :
            <input onChange={handleemail} placeholder="Email" />

            <br>
            </br>
            <br>
            </br>

            <lable>Enter your age</lable> :
            <input onChange={handlage} placeholder="age" />

            <br>
            </br>
            <br>
            </br>



            <button>submit</button>

            <div>
                <h1>name - {name}</h1>
                <h1>email - {email}</h1>
                <h1>age - {age}</h1>
            </div>



        </div>
    )

}






export default FormReact;
