import React, { useState } from "react";
import "./App.css";
// import CounterComp from "./component/CounterComp"
// import ExampleTwoComp from "./component/ExampleTwoComp";
// import NameChangeComp from"./component/NameChangeComp";
// import ProductComp from "./component/ProductComp";
// import PropsEg from "./component/PropsEg";
// import PropsProductComp from "./component/PropsProductComp";
// import ApiCallWithBtn from "./component/ApiCallWithBtn";
// import LifeCycleFunComp from "./component/LifeCycleFunComp"
// import FormReact from "./component/FormReact";
// import ReactFormHook from "./component/ReactFormHook";
import TodoList from "./component/TodoList";
import Chatbox  from "./component/ChatBox";

function App() {


    // const[islogin, setislogin]=useState(true);
    // const handlelogout = () =>{
    //     setislogin(false);
    // };


    //    const [name,setname] = useState("Elakkiya")
    //    const [age,setage] = useState(21)
       
    // const [data, setdata] = useState([
    //     {
    //         id: 1,
    //         title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    //         price: 109.95,
    //         description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    //         category: "men's clothing",
    //         image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    //         rating: {
    //             "rate": 3.9,
    //             count: 120
    //         }
    //     },
    //     {
    //         id: 2,
    //         title: "Mens Casual Premium Slim Fit T-Shirts ",
    //         price: 22.3,
    //         description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    //         category: "men's clothing",
    //         image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    //         rating: {
    //             "rate": 4.1,
    //             count: 259
    //         }
    //     },
    //     {
    //         id: 3,
    //         title: "Mens Cotton Jacket",
    //         price: 55.99,
    //         description: "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    //         category: "men's clothing",
    //         image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    //         rating: {
    //             "rate": 4.7,
    //             count: 500
    //         }
    //     },
    // ]);

    return (
        <>

            {/* <CounterComp/> */}
            {/* <ExampleTwoComp/> */}
            {/* <NameChangeComp/> */}
            {/* <ProductComp/> */}

{/* 
            <PropsEg a = {name} b = {age} dob={"4-2-2004"}/>  */}

            {/* <button onClick={handlelogout}>Logout</button>

            {islogin ? <ApiCallWithBtn/>:<h1>Log Out</h1>} */}

            {/* <FormReact/>

            <ReactFormHook/> */}
            <TodoList/>
            <chatBox/>




{/* 
            <ApiCallWithBtn/> */}
            {/* <LifeCycleFunComp/> */}



            {/* <PropsEg data ={data} a ={name} b={age} dob={"2-4-2004"}/> */}

{/* 

            {data.map((da) => (
                <div>
                    <PropsProductComp da={da} /> */}


                {/* </div>


            ))} */}



{/* 
            <h2>apiii call
                
            </h2> */}












            {/* 
     <nav>
    <h1>mobile</h1>

      <ul>
        <li><a href="#">home</a></li>
        <li><a href="#">contact</a></li>
        <li><a href="#">news</a></li>
        <li><a href="#">about</a></li>

 
      </ul>
</nav>  */}

        </>
    )
}

export default App