import { useState } from "react";

export default function AddTask({ onAddTask }) {
  const [text, setText] = useState("");

  return (
    <>
      <input
        placeholder="Add task"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setText(""); // en espera, no lo llamo ---> lo dejo en una cola
          onAddTask(text); //text va a ser lo q puse en el input previamente en la línea 13

          // una vez q termina de llamar a onAddTask, llama a setText q estaba en la cola, y setText vuelve a renderizar el componente pero ahora  text va a ser ""
        }}
      >
        Add
      </button>
    </>
  );
}
