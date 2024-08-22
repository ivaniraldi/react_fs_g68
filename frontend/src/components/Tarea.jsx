/* eslint-disable react/prop-types */

export default function Tarea({tarea, completarTarea, eliminarTarea}) {
  return (
    <li
    style={
      tarea.completada ? { textDecoration: "line-through" } : {}
    }
  >
    {tarea.nombre} Completada:
    {tarea.completada ? "Si" : "No"}
    <button onClick={() => completarTarea(tarea)}>Completar</button>
    <button onClick={() => eliminarTarea(tarea)}>X</button>
  </li>
  )
}

