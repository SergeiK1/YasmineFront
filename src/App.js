import './App.css';
import Messages from "./pages/Messages"
import Add from "./pages/Add";
import Video from "./pages/Video";
import Poems from "./pages/Poems"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Messages/>}/>
        <Route path="/add" element={<Add/>}/>
        <Route path="/video" element={<Video />}/>
        <Route path="/poems" element={<Poems />}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
