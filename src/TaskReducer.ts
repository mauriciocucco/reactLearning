export function tasksReducer(tasks, action) {
  //   if (action.type === "crearTarea") {
  //     return [
  //       ...tasks,
  //       {
  //         id: action.id,
  //         text: action.text,
  //         done: false,
  //       },
  //     ];
  //   } else if (action.type === "cambiarTarea") {
  //     return tasks.map((t) => {
  //       if (t.id === action.task.id) {
  //         return action.task;
  //       } else {
  //         return t;
  //       }
  //     });
  //   } else if (action.type === "borrarTarea") {
  //     return tasks.filter((t) => t.id !== action.id);
  //   } else {
  //     throw Error("Unknown action: " + action.type);
  //   }

  switch (action.type) {
    case "crearTarea": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case "cambiarTarea": {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case "borrarTarea": {
      return tasks.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
