import { useState } from "react"
import React from "react"

const ListRender = ()=>{
    const [list] = useState(["Victor", "Star", "Moon", "Galaxy", "Sun"])
    return(
        <>
            <ul>
                {list.map((name, i)=>(
                    <li kay={i}>{name}</li>
                ))}
            </ul>
        </>
    )
}
export default ListRender