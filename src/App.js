import Homes from "./components/home/"
import Films from "./components/film";
import {ROUTER_NAMES} from "./components/routers";
import { Route, Routes} from "react-router-dom";


function App() {
  return (
    <div className="App">
     {/* <Homes/>  */}
     
     <Routes>
              <Route path={ROUTER_NAMES.LOGIN} element={<Homes/>}></Route>
              <Route path={ROUTER_NAMES.FILM} element={<Films/>}></Route>
              
            </Routes>
    </div>
  );
}

export default App;
