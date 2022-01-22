import { memo, useEffect } from "react"
import Task, { TaskItem } from "./task"

type props = {
    listitem: TaskItem[]
    handleDelete:(itemId:number) => void
}

const TaskList = ({listitem, handleDelete} : props) => {
    useEffect(()=> {
        console.log("Rendering TaskList: ", listitem)
    })

    return (
        <ul>
        {
            listitem.map( (taskItem : TaskItem) => (
                <Task key={taskItem.id} taskItem={taskItem}
                    handleDelete={handleDelete}></Task>
            ))
        }
        </ul>
    )
}

export default memo(TaskList)