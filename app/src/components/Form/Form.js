import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './style.css';
import { Header } from "../Header/Header";

/**
 * 
 * @param {imgLogo, imgLogo} param0 paths of images
 * @returns component Form with inputs and button
 */

export function Form({imgBanner, imgLogo}) {
  const [error, setError] = useState('');
  const [arrCharacter, setArrCharacter] = useState('');

  const navigate = useNavigate()

  /**
   * 
   * @param {*} e event of input 
   * @returns word without spaces and numbers
   */
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

  /**
   * 
   * @param {*} e event of form
   * @returns navigate to result page and save word in local storage
   */
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const character = arrCharacter.toUpperCase()
    window.localStorage.setItem('arrCharacter', character)
    navigate('/result')
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