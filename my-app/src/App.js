import'./App.css';
import Homepage from "./pages/Homepage";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import Navbar from "./component/Navbar";
import Textform from './component/Textform';
import About from './component/About';

function App() {
return (
  <>
  <Homepage/>
  <Navbar a="About" dropmenu="First" dropmenu2="Second" dropmenu3="Third" service="Service"/>
  <div className="container">
       {/* <About/> */}
  <Textform heading="Enter the text to analysis below"/>
  </div>
  </>
)
}

export default App;
