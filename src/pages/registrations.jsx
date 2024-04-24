import { useState } from "react";
import ButtonAdd from "../ui/components/ButtonAdd/ButtonAdd";
import NavBar from "../ui/components/NavBar/NavBar";
import RegistrationCreateModal from "../ui/components/Modal/Registrations/RegistrationCreateModal/RegistrationCreateModal";



function RegistrationsPage() {
  const [ openModelModal, setOpenModelModal ] = useState(false)

  return (
    <>
      <RegistrationCreateModal
        open={openModelModal}
        setOpen={setOpenModelModal}
      />
      <NavBar />
      <main>
        <header>
          <h1>
            Cadastros
          </h1>
          <p>
            Cadastros de formulários que são cadastrados
          </p>
        </header>
        <section>
          <ButtonAdd onClick={() => setOpenModelModal(true)}/>
        </section>
      </main>
    </>
  )
};

export default RegistrationsPage;