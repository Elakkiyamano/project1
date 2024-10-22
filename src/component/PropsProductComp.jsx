import React from "react";

function PropsProductComp({da}){
    return(
        <div>
            <h1>{da.title}</h1>
            <img src={da.image} height={50} width={50}/>
            <h2>{da.category}</h2>
            <h3>{da.price}</h3>
            

        </div>
    )
}


export default PropsProductComp