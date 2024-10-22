import React, { useEffect, useState } from "react";

function ApiCallWithBtn() {
    const [data, setdata] = useState([]);
    const handleapi = async () => {
        let res = await fetch("https://fakestoreapi.com/products")

        let apidata = await res.json();
        setdata(apidata);

    };

    let a =localStorage.getItem("name")




    useEffect(()=>{
        handleapi();

        localStorage.setItem("name","Elakkiya")

        return()=>{
            console.log("unmounting clear");
            localStorage.removeItem("name")
        }

    },[])


    return (
        <div classname="suji">
            {/* <button onClick={handleapi}>Call Api</button> */}
            {data.map((da) => (
                <div classname="ela">
                    <h2>{da.title}</h2>
                    <img src={da.image} height={100} width={100} />
                    <h3>{da.price}</h3>



                </div>
                
            ))}


        </div>

    )
}











export default ApiCallWithBtn