import { useState } from "react";
import './style.css';

export function Form({imgBanner, imgLogo}) {
  const [error, setError] = useState('');
  const [word, setWord] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
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