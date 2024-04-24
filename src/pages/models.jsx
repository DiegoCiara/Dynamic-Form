import { useState } from "react";
import ButtonAdd from "../ui/components/ButtonAdd/ButtonAdd";
import ModelEditModal from "../ui/components/Modal/Models/ModelEditModal/ModelEditModal";
import NavBar from "../ui/components/NavBar/NavBar";
import FormModels from "../ui/components/FormModels/FormModels";



function ModelsPage() {
  const [ openModelModal, setOpenModelModal ] = useState(false)

  return (
    <>
      <ModelEditModal
        open={openModelModal}
        setOpen={setOpenModelModal}
      />
      <NavBar />
      <main>
        <header>
          <h1>
            Modelos
          </h1>
          <p>
            Modelos de formulários que são cadastrados
          </p>
        </header>
        <section>
          <FormModels editForm={() => setOpenModelModal(true)}/>
        </section>
      </main>
    </>
  )
};

export default ModelsPage;