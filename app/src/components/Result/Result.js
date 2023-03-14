import './style.css';
import { useSelector } from 'react-redux'

export function Result () {
  const palabra = useSelector(state => state.word)
  console.log(palabra.word.split(''))
  return (
    <div>
      <h1>Hola</h1>
    </div>
  )
}