import { MdClose } from "react-icons/md";
import ModalContainer from "../..";
import './ModelEditModal.css'
import { useEffect, useState } from "react";
import { FaInfo, FaInfoCircle, FaPlus, FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";
import { useModelPage } from "../../../../../services/ModelService";

function ModelEditModal({ open, modelId, setModelId, setOpen, getModels }) {
  const { updateModel, findModel } = useModelPage();

  const [aditionalLabels, setAditionalLabels] = useState([]);

  const [ model, setModel ] = useState()

  const inputOptions = [
    { label: 'Texto', value: 'text' },
    { label: 'Data', value: 'date' },
  ];

  async function getModel(){
    try {
      const response = await findModel(modelId)
      console.log(response.data?.aditionals)
      setModel(response.data)
      setAditionalLabels(response.data?.aditionals)
    } catch (error) {
      console.log(error)
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    setAditionalLabels([])
    setOpen(!open);
    updateModel(modelId, aditionalLabels)
    setModel()
    setModelId("")
    getModels()
  };
  
  function handleLabelChange(e, index) {
    const newAditionalLabels = [...aditionalLabels];
    newAditionalLabels[index].label = e.target.value; 
    setAditionalLabels(newAditionalLabels);
  };

  function handleTypeChange(e, index) {
    const newAditionalLabels = [...aditionalLabels];
    newAditionalLabels[index].type = e.target.value;
    setAditionalLabels(newAditionalLabels);
  };

  function handleRemoveOption(index) {
    const newAditionalLabels = [...aditionalLabels];
    newAditionalLabels.splice(index, 1);
    setAditionalLabels(newAditionalLabels);
  };

  function handleClose(){
    setOpen(!open);
    setModel();
    setModelId("")
    setAditionalLabels([])
  }

  useEffect(() => {
    if(!model && modelId !== ""){
      getModel()
    }
  },[modelId])

  useEffect(() => {
    setAditionalLabels(model?.aditionals)
  },[model])
  

  return (
    <ModalContainer
      open={open}
      setOpen={setOpen}
      className="Modal__Content"
      overlayClassName="Modal__Overlay"
    >
      <MdClose className="closeModal" onClick={() => handleClose()} />
      <form onSubmit={handleSubmit}>
      <div className="form-header">
        <h2>
          Atualização de Modelo
        </h2>
        <p>Adicione ou altere os dados do fomulário de cadastros</p>
      </div>
      <div className='input-container'>
          <div className='input-container new-items'>
            <label>
              Nome do campo
            </label>
            <label>
              Tipo de campo
            </label>
            <div className="remove-option" >
              {/* <FaTimes/> */}
            </div>
          </div>
          <div className='input-container new-items'>
            <input
              required
              type="text"
              disabled
              value="Nome"
              // onChange={(e) => handleLabelChange(e, index)} 
              label="description"
              placeholder="Nome do Campo"
              variant='outlined'
            />
            <select
              required
              disabled
              type="text"
              value="text"
              // onChange={(e) => handleTypeChange(e, index)} 
              label="description"
              // className={`${aditionalLabels[index]?.value === "" ? "nullOption" : ''}`}
              variant='outlined'
            >
              <option>
                Tipo de Campo
              </option>
              {inputOptions?.map((e) => (
                <option value={e?.value}>
                  {e?.label}
                </option>
              ))}
            </select>
            <div className="remove-option info" title="opção irremovivel">
              <FaInfoCircle />
            </div>
          </div>
        </div>        
        <div className='input-container'>
          <div className='input-container new-items'>
            <label>
              Nome do campo
            </label>
            <label>
              Tipo de campo
            </label>
            <div className="remove-option" >
            </div>
          </div>
          <div className='input-container new-items'>
            <input
              required
              type="text"
              disabled
              value="Descrição"
              label="description"
              placeholder="Nome do Campo"
              variant='outlined'
            />
            <select
              required
              disabled
              type="text"
              value="text"
              // onChange={(e) => handleTypeChange(e, index)} 
              label="description"
              // className={`${aditionalLabels[index]?.value === "" ? "nullOption" : ''}`}
              variant='outlined'
            >
              <option>
                Tipo de Campo
              </option>
              {inputOptions?.map((e) => (
                <option value={e?.value}>
                  {e?.label}
                </option>
              ))}
            </select>
            <div className="remove-option info" title="opção irremovivel">
              <FaInfoCircle />
            </div>
          </div>
        </div>
        {aditionalLabels?.map((e, index) => (

          <div className='input-container' key={index}>
            <div className='input-container new-items'>
              <label>
                Nome do campo
              </label>
              <label>
                Tipo de campo
              </label>
              <div className="remove-option" >
                {/* <FaTimes/> */}
              </div>
            </div>
            <div className='input-container new-items'>

              <input
                required
                type="text"
                value={aditionalLabels[index]?.label}
                onChange={(e) => handleLabelChange(e, index)}
                label="description"
                placeholder="Nome do Campo"
                variant='outlined'
              />
              <select
                required
                type="text"
                value={aditionalLabels[index]?.type}
                onChange={(e) => handleTypeChange(e, index)}
                label="description"
                className={`${aditionalLabels[index]?.value === "" ? "nullOption" : ''}`}
                variant='outlined'
              >
                <option disabled>
                  Tipo de Campo
                </option>
                {inputOptions?.map((e, index) => (
                  <option value={e?.value} key={index}>
                    {e?.label}
                  </option>
                ))}
              </select>
              <div className="remove-option" onClick={() => handleRemoveOption(index)}>
                <FaTimes />
              </div>
            </div>
          </div>
        ))}
        <div
          className="add-option"
          onClick={() => {
            setAditionalLabels([...aditionalLabels, { id: aditionalLabels?.length + 1, label: "", type: 'text', createdAt: new Date }]
          )}}>
          <span>
            <FaPlus />
          </span>
        </div>
        <button type="submit">
          Salvar
        </button>
      </form>
    </ModalContainer>
  );
};

export default ModelEditModal;