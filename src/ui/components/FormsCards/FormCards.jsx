import './FormCards.css'



function FormCards({name, description, item1, item2}){

  return(
    <div className='FormCards'>
      <b>{name}</b>
      <span>{description}</span>
      <span>
        {item1}
      </span>
      <span>
        {item2}
      </span>
    </div>
  )
}

export default FormCards;