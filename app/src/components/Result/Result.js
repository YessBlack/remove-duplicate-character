import './style.css';
import { useSelector } from 'react-redux'

export function Result () {
  const word = useSelector(state => state.word)
  console.log(word.word.split(''))
  return (
    <div>
      <h1>Hola</h1>
    </div>
  )
}