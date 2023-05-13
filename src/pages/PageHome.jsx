import Products from "../components/Products"
import {React} from "react"
export default function PageHome(){
   console.log("data",Products)
   return (
      <div> 
         Home Page
         <Products />
      </div>
   )
}