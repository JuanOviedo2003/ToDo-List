import { MdDelete } from "react-icons/md";


type TaskProps = { // definimos TaskProps como tipo
    titleTask: string
    onDelete: () => void
}


function Task({ titleTask, onDelete } : TaskProps) {
    return (
        <div className="flex justify-between mb-10">
            <p className="bg-gr-200 border-gr-300 border-3 rounded-2xl focus:outline-0 w-3/4 h-14 pl-3 pr-3 text-2xl flex items-center mr-7 shadow-2xl shadow-black-500/20">{ titleTask }</p>
            <button className="bg-gr-200 border-gr-300 border-3 rounded-2xl w-1/4 focus:outline-0 text-2xl font-medium text-gr-400 flex justify-around items-center pl-3 pr-3 shadow-2xl shadow-black-500/20" onClick={onDelete}><MdDelete />
            <p className="max-lg:hidden">Delete Task</p>
            </button>
        </div>
    )
}

export default Task