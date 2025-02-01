import { useState } from "react"
import Task from "./components/Task/Task";
import { HiPlusSm } from "react-icons/hi";
import { motion } from "framer-motion";

function App() {

  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<{ id: number; titleTask: string }[]>([
    { id: 1, titleTask: "Clean SetUp" }
  ]);

  const handleAddTask = () => {
    if (task.length !== 0){
      deleteSpacesString();
      setTasks([...tasks, { id: Date.now(), titleTask: task }]);
      setTask("");
    };
  };

  const handleDeleteTask = (taskId: number) => {
    setTasks(tasks.filter(task => task.id !== taskId)); // Filtra las tareas con id similar
  };

  const handleKeyDown = (event: any) => {
    deleteSpacesString();
    if (event.key === "Enter") {
      setTasks([...tasks, { id: Date.now(), titleTask: task }]);
      setTask("");
    }
  };
  
  function deleteSpacesString() {
    if (task.trim() === "") return;
  }


  return (
    <>
      <main className="bg-gr-100 min-h-screen w-screen flex flex-col items-center pt-28">
        <h1 className="text-8xl max-lg:text-5xl text-black font-black font-poppins mb-28">To-Do List</h1>

        <section>
          <article className="flex justify-center">
            <input
              className="bg-gr-200 border-gr-300 border-3 rounded-2xl focus:outline-0 w-2xl max-lg:w-60 h-14 pl-3 pr-3 text-2xl mr-7 max-lg:mr-2"
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              onKeyDown={handleKeyDown} // press enter execute handleKeyDown
              placeholder="Write you new task here"
            />
            <button className="bg-gr-200 border-gr-300 border-3 rounded-2xl focus:outline-0 text-2xl font-medium text-gr-400 flex justify-around items-center pl-3 pr-3"
              onClick={handleAddTask} >
              <HiPlusSm size={40} className="align-middle" />
              <p className="max-lg:hidden">Add Task</p>
              </button>
          </article>

          <article className="flex flex-col justify-start mt-10 pl-7 pr-7 pt-7">
            {tasks.map((task) => (
              <motion.div
                key={task.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
              >
                <Task titleTask={task.titleTask} onDelete={() => handleDeleteTask(task.id)} />
              </motion.div>
            ))}
          </article>
        </section>
      </main>
    </>
  )
}

export default App
