import './App.css';
import { Form } from './components/Form/Form';
import banner from './assets/img/banner.svg';
import logo from './assets/img/logo.svg';
import { Routes, Route } from 'react-router-dom';
import { Result } from './components/Result/Result';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Form imgBanner={banner} imgLogo={logo} />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
