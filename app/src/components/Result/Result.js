import { useEffect, useRef, useState } from 'react';
import './style.css';
import { useSelector } from 'react-redux'
import { Header } from '../Header/Header';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';

export function Result () {
  const [arrWord, setArrWord] = useState([])
  const [isFinalyApp, setIsFinalyApp] = useState(false)
  const exitModal = useRef(null)
  const sizeUnic = useRef(null)

  const word = useSelector(state => state.word)
  
  useEffect(() => {
    setArrWord(word.word.replace(/\s/g, '').split(''))
  }, [])


  const handleClick = (word, index) => {
    setArrWord(arrWord.filter((el,i) => el !== word ? el : i === index ? el : null ))
  }

  useEffect(() => {
    sizeUnic.current = new Set(arrWord).size
    if (sizeUnic.current === arrWord.length) {
      setIsFinalyApp(true)
    }
  }, [arrWord])

  console.log('Size unique ', sizeUnic.current, 'arr original ',arrWord.length, isFinalyApp)

  const handleExit = () => {
    exitModal.current = document.querySelector('.container-finaly-app')
    exitModal.current.classList.add('exit')
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
        arrWord.map((word, i) => (
          <div key={i} className='card' onClick={() => handleClick(word, i)}>
            <span className='icon-times'></span>
            {word}
          </div>
        ))
      }
      </section>
      <section className='container-result-word'>
        <div className='original-word'>
          <p>Original word </p>
          <p className='bg-result'>{word.word}</p>
        </div>
        <div className='result-word'>
          <p>Result word </p>
          <p className='bg-result'>{isFinalyApp ? new Set ([...arrWord]) : 'holii' }</p>
        </div>
      </section>
      <Link to='/'><button className='btn-back'>Back</button></Link>
    </>
  )
}