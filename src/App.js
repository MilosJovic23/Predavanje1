
import "./style.css"
import Products from "./Components/Products"
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"




function App() {
    let [tax,setTax]=useState("20")
    return (

        <>

                <Products tax={tax}/>

            <div className="d-flex justify-content-center">
                <input className="rounded-4 text-center" placeholder="tax" type="text" onInput={(e) => setTax(e.target.value)}/>
            </div>

        </>

    );
}


export default App;