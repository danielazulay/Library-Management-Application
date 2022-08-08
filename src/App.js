import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import './app.css'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
