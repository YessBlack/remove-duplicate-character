import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './style.css';
import { useDispatch } from 'react-redux'
import { setCharacter } from "../../feature/word/wordSlice";

export function Form({imgBanner, imgLogo}) {
  const [error, setError] = useState(false);
  const [word, setWord] = useState('');

  const dispatch = useDispatch()

  const navigate = useNavigate();

  const handleChange = (e) => {
    setWord(e.target.value);
    if(word.length > 0) {
      setError(false);
    } else {
      setError(true);
    }
  }

  console.log(word)

  const handleSubmit = (e) => {
    e.preventDefault();
    if(word.length >= 1) {
      dispatch(setCharacter(word))
      navigate(`/result/`)
    } else {
      setError(true);
    }
  }

  const message = error ? 'Please, enter a word' : ''

  console.log(error)

  return (
    <div>
      <h1 className="title">Duplicate Character <span>Remover</span></h1>
      <div className="container-form">
        <img src={imgBanner} alt='banner'/>
        <div className="form">
          <div className="img-logo">
            <img src={imgLogo} alt="logo" />
          </div>
          <form className="form-inputs" onSubmit={handleSubmit}>
            <input name="word" placeholder="Any word" className="input" onChange={handleChange}/>
            <p className="error">{message}</p>
            <button>Submit</button>
          </form>
        </div>
      </div>

    </div>
  );
}