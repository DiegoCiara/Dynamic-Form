
import { FaPlus } from 'react-icons/fa'
import './ButtonAdd.css'


function ButtonAdd({ ...params }){

  return(
    <button className='button-add' {...params}>
      <FaPlus/>
    </button>
  )
}

export default ButtonAdd;