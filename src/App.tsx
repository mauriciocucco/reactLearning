import { useState, useReducer } from "react";
import AddTask from "./AddTask.jsx";
import TaskList from "./TaskList.jsx";
import { tasksReducer } from "./TaskReducer.js";

export default function TaskApp() {
  // const [tasks, setTasks] = useState(initialTasks);
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  // function handleAddTask(text) {
  //   setTasks([
  //     ...tasks,
  //     {
  //       id: nextId++,
  //       text: text,
  //       done: false,
  //     },
  //   ]);
  // }

  function handleAddTask(text) {
    dispatch({
      type: "sumarTarea",
      id: nextId++,
      text: text,
    }); //estos objectos q le pasamos a la función dispatch se llaman acciones

    // dispatch va a llamar a tasksReducer y le va a pasar el estado actual y la acción
  }

  // function handleChangeTask(task) {
  //   setTasks(
  //     tasks.map((t) => {
  //       if (t.id === task.id) {
  //         return task;
  //       } else {
  //         return t;
  //       }
  //     })
  //   );
  // }

  function handleChangeTask(task) {
    dispatch({
      type: "cambiarTarea",
      task: task,
    });
  }

  // function handleDeleteTask(taskId) {
  //   setTasks(tasks.filter((t) => t.id !== taskId));
  // }

  function handleDeleteTask(taskId) {
    dispatch({
      type: "borrarTarea",
      id: taskId,
    });
  }

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}

let nextId = 3;
const initialTasks = [
  { id: 0, text: "Visit Kafka Museum", done: true },
  { id: 1, text: "Watch a puppet show", done: false },
  { id: 2, text: "Lennon Wall pic", done: false },
];
