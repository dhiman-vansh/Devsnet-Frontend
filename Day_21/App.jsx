import { useState } from "react"
// import El from './El'


export default function App() {
    let [item,setitem] = useState("");
    let [Cal,setCal] = useState("");
    let [arrI,setArrI] = useState([]);
    let [arrC,setArrC] = useState([]);

    const output = () =>{
        console.log("Clicked");
        setArrI((oldItem) => {
            return [...oldItem,item];
        })
        console.log(item + " is the item");
        setArrC(...arrC,Cal);
        setitem(""); setCal("");
        console.log(arrI + " is the array item");
        
    }

    return( 
        <>
            <input type="text" placeholder="Item" value={item} onChange={e=> setitem(e.target.value)} />
            <input type="text" placeholder="Calories" value={Cal} onChange={e=> setCal(e.target.value)} />
            <button onClick={output}>Add </button>
        <div>
            {/* {console.log(arrI[1]) } */}

            {(arrI).map((elem,index) => {
                return(
                    <div>
                        {elem}{index}
                    </div>
                )
            })     
            }     
        </div>
        </>   
    )   
}
