import App from "./App"

const Hello=({name})=>{
  
       const sayHi =()=>{
        return "Namaste"
     }
    return(
        <>
        <h1>From hello ...{name} </h1>
        <br/>
        <App fun= {sayHi}/>
        </>
    )
}

export default Hello