import { useState } from "react";
import tareasIniciales from "../data/TareasIniciales.json"
import Tarea from "./Tarea";

const Tareas = () => {
  const [listaTareas, setListaTareas] = useState(tareasIniciales);
  const [nuevaTarea, setNuevaTarea] = useState("");
  // Función al enviar el formulario
  // CRUD CREATE
  const enviarFormulario = (e) => {
    e.preventDefault();
    setListaTareas([...listaTareas, { nombre: nuevaTarea, completada: false }]);
    setNuevaTarea("");
  };
  //Función al escribir sobre el input del formulario
  const capturaInput = (e) => {
    setNuevaTarea(e.target.value);
  };

  //Funcion para completar/actualizar una tarea
  //CRUD UPDATE
  const completarTarea = (tarea) => {
    const copiaArrayDeTareas = [...listaTareas]; // Copiamos las tareas anteriores
    const index = copiaArrayDeTareas.findIndex(
      (el) => el.nombre === tarea.nombre
    );
    // Buscamos la tarea a completar en la lista
    copiaArrayDeTareas[index].completada =
      !copiaArrayDeTareas[index].completada;

    setListaTareas(copiaArrayDeTareas);
  };

  //Funcion para eliminar una tarea
  //CRUD DELETE
  const eliminarTarea = (tarea) => {
    const listaFiltrada = listaTareas.filter(
      (el) => el.nombre !== tarea.nombre
    );

    setListaTareas(listaFiltrada);
  };

  return (
    <>
      <div>
        <form onSubmit={enviarFormulario}>
          <input
            name="nombreTarea"
            value={nuevaTarea}
            onChange={capturaInput}
          />
          <button> Agregar Tarea </button>
        </form>
        <ul>
          {
            //CRUD READ
            listaTareas.map((tarea, i) => (
                <Tarea key={i} tarea={tarea} completarTarea={completarTarea} eliminarTarea={eliminarTarea} />
            ))
          }
        </ul>
      </div>
    </>
  );
};
export default Tareas;
