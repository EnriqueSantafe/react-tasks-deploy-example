import { useState, useEffect, createContext } from "react";
import { data } from '../data/data.js'

/* console.log(data) */

export const TaskContext = createContext();
export const TaskContextProvider = (props) => {
  const [tasks, setTasks] = useState([])
  const createTask = (task) => {
    setTasks([...tasks, {
      id: tasks.length,
      title: task.title,
      description: task.description
    }])
  }
  const deleteTask = (taskId) => {
    /* console.log(tasks) */
    /* console.log(taskId) */
    setTasks(tasks.filter(task => task.id !== taskId))
  }
  useEffect(() => {
    setTasks(data)
  }, []);
  return (
    <TaskContext.Provider value={{tasks, createTask, deleteTask}}>
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskContext;
