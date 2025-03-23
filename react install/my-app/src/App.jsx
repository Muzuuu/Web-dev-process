
import Usercard from "./components/usercard"
import './App.css'

function App() {
  return (
    <div className="container">
      <Usercard name='muzammil' desc='desc1' style={{"border-radius":"10px"}}/>
      <Usercard name='makandar' desc='desc2'/>
      <Usercard name='mohammed' desc='desc3'/>
    </div>
  )
}
export default App
