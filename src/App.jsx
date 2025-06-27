const App = ({ fun }) => {
    const sayTesla = () => {
        alert("Tesla is coming")
    }


    const myChoice=()=>{
        const drik= document.getElementById("choices").value;
        if(drik){
            alert(`My choice is ${drik}`)
        }
    }
    return (

        <>
            <h1>Hello form App {fun()}</h1>
            <select id="choices" onChange={myChoice}>
                <option value="">Select any drik</option>
                <option value="coffe">Coffe</option>
                <option value="tea">Tea</option>
                <option value="milk">Milk</option>
                <option value="chai">Chai</option>
            </select>
            <button onClick={sayTesla}> Take the</button>
        </>
    )
}

export default App