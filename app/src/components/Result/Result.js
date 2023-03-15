import './style.css';
import { useSelector } from 'react-redux'

export function Result () {
  const word = useSelector(state => state.word)
  console.log(word)
  const arrWord = word.split('')

  return (
    <>
      <h1>Hola</h1>
      {
        arrWord.map((word, i) => (
          <div key={i}>
            {word}
          </div>
        ))
      }
    </>
  )
}