import { useEffect, useState } from "react";
import ButtonAdd from "../ui/components/ButtonAdd/ButtonAdd";
import ModelEditModal from "../ui/components/Modal/Models/ModelEditModal/ModelEditModal";
import NavBar from "../ui/components/NavBar/NavBar";
import FormModels from "../ui/components/FormModels/FormModels";
import { useModelPage } from "../services/ModelService";
import { toast } from "react-toastify";



function ModelsPage() {

  const { findModels } = useModelPage();

  const [ openModelModal, setOpenModelModal ] = useState(false)
  const [ modelId, setModelId ]= useState("")
  const [ models, setModels ] = useState([])

  async function getModels(){
    try {
      const response = await findModels()
      setModels(response.data)
    } catch (error) {
      console.log(error)
      toast.error("Fodase")
    }
  }

  useEffect(() => {
    getModels()
  },[])

  return (
    <>
      <ModelEditModal
        modelId={modelId}
        open={openModelModal}
        setModelId={setModelId}
        setOpen={setOpenModelModal}
        getModels={getModels}
      />
      <NavBar />
      <main>
        <header style={{marginBottom: 20}}>
          <h1>
            Modelos
          </h1>
          <p>
            Modelos de formulários que são cadastrados
          </p>
        </header>
        <section>
          {models?.map((e) => (
            <FormModels 
              key={e?.id}
              name={e?.name}
              aditionals={e?.aditionals}
              editForm={() => {
                  setModelId(e?.id)
                  setOpenModelModal(true)
                }}
            />
          )) }
        </section>
      </main>
    </>
  )
};

export default ModelsPage;