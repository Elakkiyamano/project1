import React, { useEffect , useState } from "react";
import axios from "axios"

function TodoList(){

    const[data,setdata] = useState([])
    const[inputdata,setinputdata]= useState("")

    const handlefetch = async() =>{
        let res = await axios.get("http://localhost:3000/todoList")
        // let data = await res.json()

      setdata(res.data)

    }


    useEffect(()=> {
        handlefetch()

    },[]);
    const handleinput = (e) =>{
    }

    const handlesend = async () =>{
    }
    const handledelete = async (id) => {
        console.log(id)
        let res = await axios.delete("http://localhost:3000/todoList/${id}")
        alert("deleted success")
        handlefetch()

    }
    const handleedit = async (i) => {
        let newdata = promp("enter u r update task",data[i].task);
        let body = {
            id: data[i].id,
            task: newtdata
        };
        let res = await axios.put('http://localhost:3000/todoList/${data[i].id}',body)
        handlefetch();
    }

    return(
        <div className="m-2">
            <h1>Todo List</h1>
            <input onChange={handleinput} Placeholder="enter ur todolist"/>
            <button onClick={handlesend} className="btn btn-primary ms-3">Add</button>
           
            
           {data.map((da) =>(
                <div className="d-flex mt-5" key={i}>
                    <h1>{da.task}</h1>

                    <span onClick={() => handleedit(da.i)} className="m-2"><MdEdit />
                    </span>

                    <span onClick={()=> handledelete(da.id)} className="m-2"><MdDeleteForever/>
                    </span>



                </div>




            ))}



          </div>


        
    );
}
export default TodoList