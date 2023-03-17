import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './style.css';
import { useDispatch } from "react-redux";
import { setCharacter } from "../../feature/word/characterSlice";
import { Header } from "../Header/Header";

export function Form({imgBanner, imgLogo}) {
  const [error, setError] = useState('');
  const [arrCharacter, setArrCharacter] = useState([]);

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    const arrFinalCharacter = arrCharacter.toUpperCase().replace(/\s/g, '').split('')

    dispatch(setCharacter(arrFinalCharacter))
    navigate('/result')
  }

  const handleChange = (e) => {
    const newCharacter = e.target.value

    if (newCharacter.startsWith(' ')) return

    if (newCharacter.match(/^\d+$/)) {
      setError('Please, enter only character')
      return
    }
    setError(null)
    setArrCharacter(e.target.value)
  }

  return (
    <section>
      <Header />
      <div className="container-form">
        <img className="banner" src={imgBanner} alt='banner'/>
        <div className="form">
          <div className="img-logo">
            <img src={imgLogo} alt="logo" />
          </div>
          <form className="form-inputs" onSubmit={handleSubmit}>
            <input name="word" placeholder="Any word" className="input" onChange={handleChange} value={arrCharacter}/>
            <p className="error">{error}</p>
            <button>Submit</button>
          </form>
        </div>
      </div>

    </section>
  );
}