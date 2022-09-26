import { useState } from "react"


const ListRender = ()=>{
    const [list] = useState(["Victor", "Star", "Moon", "Galaxy", "Sun"])
    return(
        <>
            <ul>
                {list.map((name)=>(
                    <li>{name}</li>
                ))}
            </ul>
        </>
    )
}
export default ListRender