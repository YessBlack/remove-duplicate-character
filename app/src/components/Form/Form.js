import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './style.css';
import { useDispatch } from "react-redux";
import { setCharacter } from "../../feature/word/wordSlice";

export function Form({imgBanner, imgLogo}) {
  const [error, setError] = useState('');
  const [word, setWord] = useState('');

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setCharacter(word))
    navigate('/result')
  }

  const handleChange = (e) => {
    const newWord = e.target.value

    if (newWord.startsWith(' ')) return

    if (newWord.match(/^\d+$/)) {
      setError('Please, enter only character')
      return
    }
    setError(null)
    setWord(e.target.value)
  }

  return (
    <section>
      <h1 className="title">
        Duplicate Character<span>Remover</span>
      </h1>
      <div className="container-form">
        <img src={imgBanner} alt='banner'/>
        <div className="form">
          <div className="img-logo">
            <img src={imgLogo} alt="logo" />
          </div>
          <form className="form-inputs" onSubmit={handleSubmit}>
            <input name="word" placeholder="Any word" className="input" onChange={handleChange} value={word}/>
            <p className="error">{error}</p>
            <button>Submit</button>
          </form>
        </div>
      </div>

    </section>
  );
}