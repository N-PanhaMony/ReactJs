import Card from "./Card.jsx"
import "./index.css"
import Props from "./Props.jsx"
import User from "./User.jsx"

function App() {
    return(
        <>
            {/* <Props/>
            <Props name="Panha" age = {22} position ={true}/>
            <Props name="Mony" age = "20" position
             ={false}/> */}

            <User isloggedIn ={false} username="bot1"/>
            
        </>
    )
}
export default App
