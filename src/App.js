import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './component/navbar/Navbar';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </div>
  );
}

export default App;
