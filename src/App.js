import {
  Routes,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from "./components/Homepage/Homepage";
import CloudMining from "./components/CloudMining/CloudMining";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}/>
      <Route path="cloud-mining" element={<CloudMining />}/>
    </Routes> 
  );
}

export default App;
