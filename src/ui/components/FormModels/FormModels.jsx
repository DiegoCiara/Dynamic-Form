
import './FormModels.css'
import { useEffect, useState } from "react";
import { FaInfo, FaInfoCircle, FaPlus, FaTimes } from "react-icons/fa";




function FormModels({ open, name, setOpen, aditionals, editForm, ...params }) {

  return (
      <div {...params}>
        <h2>{name}</h2>
        <p>Contendo { aditionals.length + 2 } campos</p>
        <div
          className="add-option"
          onClick={editForm}>
          <span>
            Editar
          </span>
        </div>
      </div>
  );
};

export default FormModels;