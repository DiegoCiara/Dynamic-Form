
import { FaPlus } from 'react-icons/fa'
import './CardContainer.css'


function CardContainer({ ...params }){

  return(
    <button className='CardContainer' {...params}>
      <FaPlus/>
    </button>
  )
}

export default CardContainer;