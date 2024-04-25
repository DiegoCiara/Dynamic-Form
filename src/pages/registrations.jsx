import { useEffect, useState } from "react";
import ButtonAdd from "../ui/components/ButtonAdd/ButtonAdd";
import NavBar from "../ui/components/NavBar/NavBar";
import RegistrationCreateModal from "../ui/components/Modal/Registrations/RegistrationCreateModal/RegistrationCreateModal";
import { useRegistrationPage } from "../services/RegistrationService";
import FormCards from "../ui/components/FormsCards/FormCards";



function RegistrationsPage() {
  const { findRegistrations } = useRegistrationPage();

  const [ openModelModal, setOpenModelModal ] = useState(false)
  const [ modelId, setModelId ]= useState("")
  const [ registrations, setRegistrations ] = useState([])

  async function getRegistrations(){
    try {
      const response = await findRegistrations()
      setRegistrations(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getRegistrations()
  },[])

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
          <ButtonAdd onClick={() => setOpenModelModal(true)}/>
        <section>
          {registrations?.map((e) => (
            <FormCards
              name={e?.name}
              description={e?.description}
              // item1={e?.aditionals[0]?.value}
              // item2={e?.aditionals[1]?.value}
            />
          ))}
        </section>
      </main>
    </>
  )
};

export default RegistrationsPage;