//
import { useState } from "react";


function Products(props){

    let [products,setProducts]=useState({
        "iPhone 14":1000,
        "iPhone 15":1250,
        "Samsung s23 ultra":1400})
    let [infoMessage,setInfoMessage]=useState()

    let [newProductName,setNewProductName]=useState();
    let [newProductPrice,setNewProductPrice]=useState()


    function search(e){
       const searchTerm=e.currentTarget.value.toLowerCase();
        let productNames=Object.keys(products);
        for(let product in productNames){
           let productName=productNames[product].toLowerCase()
            if(searchTerm === productName){
                setInfoMessage("nasli ste proizvod")
                break;
            }
            else{ setInfoMessage("niste nasli proizvod")
            console.log(1)}
        }

    }

    function addProduct(){

        if(newProductPrice===""){
            return;
        }
        if(newProductName === ""){
            return;
        }
        else{
            setProducts(prev=>({...prev,[newProductName]:parseInt(newProductPrice)}))
        }

    }

    return(
        < >
            <div className="d-flex justify-content-center mt-2">
                <button className="btn btn-secondary " onClick={() => setProducts({})}>delete</button>
            </div>
            <div className="d-flex justify-content-center flex-wrap">
                {Object.entries(products).map( ([phone, price])  => (
                    <div className="p-3 d-flex flex-column align-items-center bg-light rounded-1">
                        <h3>{phone}</h3>
                        <p className="bg-primary text-white rounded-5 p-1">cena:${calculateTax(price, props.tax)}</p>
                    </div>
                ))}
            </div>

            <div className="d-flex justify-content-center mb-1 flex-column w-100 align-items-center gap-2">
                <p>{infoMessage}</p>
                <input className="rounded-4 text-center" type="text" onInput={search} placeholder="pronadji proizvod"/>

                <input className="rounded-4 text-center" type="text" placeholder="unesite ime proizvoda"
                       onInput={(e) => setNewProductName(e.target.value)}/>
                <input className="rounded-4 text-center" type="number" placeholder="unesite cenu proizvoda"
                       onInput={(e) => setNewProductPrice(e.target.value)}/>
                <button className="btn btn-secondary" onClick={addProduct}>Add new products</button>
            </div>

        </>
    )


    function calculateTax(price, tax) {
        return ((tax / 100) * price) + price
    }


}


export default Products