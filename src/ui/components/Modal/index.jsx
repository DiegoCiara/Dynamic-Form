import React from 'react';
import Modal from 'react-modal';

// Estilos customizados para o modal
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    maxHeight:'80vh',
    borderRadius: '8px',
    transition: 'transform 0.3s ease-out',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75).75)', // Fundo preto com transparência
    transition: 'opacity 0.3s ease-in-out', // Suaviza a transição do overlay
    opacity: 0, // Inicia com o overlay transparente
  },
};


const ModalContainer = ({ open, setOpen, children, ...params }) => {
  return (
    <Modal
      {...params}
      isOpen={open}
      onRequestClose={setOpen}
      // style={customStyles}
      shouldCloseOnOverlayClick={false}
      contentLabel="Modal"
      onAfterOpen={() => {
        document.body.style.overflow = 'hidden';
        customStyles.overlay.opacity = 1; // Muda a opacidade para tornar o overlay visível
      }}
      onAfterClose={() => {
        document.body.style.overflow = 'unset';
        customStyles.overlay.opacity = 0; // Redefine a opacidade após o fechamento
      }}
    >
      {children}
    </Modal>
  );
};

export default ModalContainer;