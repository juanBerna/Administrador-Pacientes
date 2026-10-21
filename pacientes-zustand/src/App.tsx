import PageForm from "./components/PageForm"
import Pages_list from "./components/Pages_list"

function App() {

  return (
    <>
      <div className="container mx-auto mt-20">
        <h1 className="font-black text-5xl text-center md:w-2/3 md:mx-auto">
        Seguimiento de Pacientes {""}</h1>
        <span className="text-indigo-700">Veterinaria</span>
      </div>
      <div className="mt-12 md:flex ">
    <PageForm/>
    <Pages_list/>
      </div>
    </>
  )
}

export default App
