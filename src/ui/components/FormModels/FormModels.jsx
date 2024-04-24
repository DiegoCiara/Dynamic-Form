
import './FormModels.css'
import { useEffect, useState } from "react";
import { FaInfo, FaInfoCircle, FaPlus, FaTimes } from "react-icons/fa";




function FormModels({ open, setOpen, aditionals, editForm }) {
  const [aditionalLabels, setAditionalLabels] = useState(aditionals || []);

  const inputOptions = [
    { label: 'Texto', value: 'text' },
    { label: 'Data', value: 'date' },
  ];

  function handleSubmit(e) {
    e.preventDefault()
    alert(aditionalLabels.map((e) => `${e.label}, ${e.type}`))
    console.log(aditionalLabels)
    setAditionalLabels([])
    setOpen(!open);
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

  return (
      <form onSubmit={handleSubmit}>
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
                value={aditionalLabels[index]?.value}
                onChange={(e) => handleLabelChange(e, index)}
                label="description"
                placeholder="Nome do Campo"
                variant='outlined'
                disabled
              />
              <select
                required
                disabled
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
                {inputOptions?.map((e) => (
                  <option value={e?.value}>
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
          onClick={editForm}>
          <span>
            Editar
          </span>
        </div>
      </form>
  );
};

export default FormModels;