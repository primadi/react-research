import { memo, useEffect } from "react"

export type TaskItem = {
    id : number
    description : string    
}

type props = {
    taskItem: TaskItem
    handleDelete: (itemId:number) => void
}

const Task = ({taskItem, handleDelete}: props) => {
    useEffect(() => {
        console.log("Rendering Task Item: ", taskItem.description)
    })
    return (
        <li>
            {taskItem.description}
            <button onClick={() => handleDelete(taskItem.id)}>x</button>
        </li>
    )
}

export default memo(Task)