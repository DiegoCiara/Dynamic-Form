import { MdClose } from "react-icons/md";
import ModalContainer from "../..";
import './RegistrationCreateModal.css'
import { useEffect, useState } from "react";
import { useModelPage } from "../../../../../services/ModelService";




function RegistrationCreateModal({ open, setOpen }){


  const { findModelByName } = useModelPage();
  const [ aditionalLabels, setAditionalLabels] = useState([])
  const [ data, setData ] = useState({
    name: '',
    description: '',
    aditional: aditionalLabels
  })

  const typeForm = "Product"

  async function getModelName(){
    try {
      const response = await findModelByName(typeForm)
      setAditionalLabels(response.data)
      console.log(response.data, 'Response')
    } catch (error) {
      console.log(error)
    }
  }

  function handleSubmit(e){
    e.preventDefault()
  }

  function handleLabelChange(e, index) {
    const newAditional = [...data.aditional]; 
    newAditional[index].value = e.target.value; 
    setData({ ...data, aditional: newAditional });
  }

  useEffect(() => {
    if(open){
      getModelName()
      console.log("abrou")
    }
  },[open])

  return(
    <ModalContainer 
      open={open} 
      setOpen={setOpen} 
      className="Modal__Content"
      overlayClassName="Modal__Overlay"
    >
      <MdClose className="closeModal" onClick={() => setOpen(!open)}/>
      <h2>
        Novo Cadastro {typeForm}
      </h2>
      <p>Insira os dados do novo cadastro de modelos</p>
      <form onSubmit={handleSubmit}>
        <div className='input-container'>
          <label>
            Nome
          </label>
          <input
            required
            type="name"
            value={data?.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
            label="name"
            placeholder="Insira o Nome"
            variant='outlined'
          />
        </div>

        <div className='input-container'>
          <label>
            Descrição
          </label>
          <input
            required
            type="text"
            value={data?.description}
            onChange={(e) => setData({ ...data, description: e.target.value })}
            label="description"
            placeholder="Insira a Descrição"
            variant='outlined'
          />
        </div>

        {aditionalLabels?.map((e, index) => (
          
        <div className='input-container'>
            <label>
              {e?.label}
            </label>
            <input
              // required
              type={e?.type}
              value={data.aditional[index]?.value}
              onChange={(e) => handleLabelChange(e, index)} 
              label="description"
              placeholder={`Insira o ${e?.label}`}
              variant='outlined'
            />
          </div>
        ))}
        <button type="submit" onClick={() => setAditionalLabels([ ...aditionalLabels, { label: "adicional", value: ''}])}>
          Adicionar item
        </button>
      </form>
    </ModalContainer>
  )
}

export default RegistrationCreateModal;