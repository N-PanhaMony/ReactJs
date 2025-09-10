import Card from "./Card.jsx"
import "./index.css"
import Props from "./Props.jsx"
function App() {
    return(
        <>
            <Props/>
            <Props name="Panha" age = {22} position ={true}/>
            <Props name="Mony" age = "20" position ={false}/>
            
        </>
    )
}
export default App
