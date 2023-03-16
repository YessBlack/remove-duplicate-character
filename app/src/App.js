import './App.css';
import { Form } from './components/Form/Form';
import banner from './assets/img/banner.svg';
import lupa from './assets/img/lupa.png';
import { Routes, Route } from 'react-router-dom';
import { Result } from './components/Result/Result';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Form imgBanner={banner} imgLogo={lupa} />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
