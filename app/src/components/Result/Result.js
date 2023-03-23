import { useEffect, useRef, useState } from 'react';
import './style.css';
import { Header } from '../Header/Header';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';

/**
 * 
 * @returns component Result with cards, original word and result word and button back
 */

export function Result () {
  const [arrCharacter, setArrCharacter] = useState([])
  const [isFinalyApp, setIsFinalyApp] = useState(false)
  const exitModal = useRef(null)

  const characterLocalStorage = window.localStorage.getItem('arrCharacter')

  /**
   * get word from local storage
   */

  useEffect(() => {
    setArrCharacter(characterLocalStorage.replace(/\s/g, '').split(''))
  }, [])
  
  /**
   * verify if win the game
   */
  useEffect(() => {
    if (arrCharacter.length === 0) return
    if (arrCharacter.length === new Set(arrCharacter).size) {
      setIsFinalyApp(true)
      confetti({
        particleCount: 200,
        spread: 200
      });
    }

    return () => {
      setIsFinalyApp(false)
    }
  }, [arrCharacter])

  /**
   * 
   * @param {*} character character of card
   * @param {*} index  index of character in array
   * @returns delete character of array
   */

  const handleClick = (character, index) => {
    setArrCharacter(arrCharacter.filter((el,i) => el !== character ? el : i === index ? el : null ))
  }

  /** 
   * @returns add class exit to modal for close modal
  */

  const handleExit = () => {
    exitModal.current = document.querySelector('.container-finaly-app')
    exitModal.current.classList.add('exit')
  }

  const handleDeleteStorage = () => {
    window.localStorage.removeItem('arrCharacter')
  }

  return (
    <>
    <Header />
    {
      isFinalyApp
      ? <div className='container-finaly-app'>
          <h1 className='title-finaly-app'>Congratulations!</h1>
          <p className='text-finaly-app'>You have completed the game</p>
          <button onClick={handleExit} className='btn-exit-modal'>Exit</button>
        </div>
        : null
    }
      <section className='container-card'>
      {
        arrCharacter.map((word, i) => (
          <div key={i} className={`${word} card`} onClick={() => handleClick(word, i)} >
            <span className='icon-times'></span>
            {word}
          </div>
        ))
      }
      </section>
      <section className='container-result-word'>
        <div className='original-word'>
          <p>Original word </p>
          <p className='bg-result'>{characterLocalStorage}</p>
        </div>
        <div className='result-word'>
          <p>Result word </p>
          <p className='bg-result'>{isFinalyApp ? new Set ([...arrCharacter]) : '' }</p>
        </div>
      </section>
      <Link to='/'><button onClick={handleDeleteStorage} className='btn-back'>Back</button></Link>
    </>
  )
}