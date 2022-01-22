import React, { useCallback, useEffect, useMemo, useState } from "react"
import { TaskItem } from "../components/task"
import TaskList from "../components/tasklist"

const initialTaskList: TaskItem[] = [
    { id: 1, description: "Buy Food"},
    { id: 2, description: "Pay Bill"},
]

const Page01 = () => {
    const [task, setTask] = useState<string>("")
    const [taskList, setTaskList] = useState<TaskItem[]>(initialTaskList)
    const [term, setTerm] = useState<string>("")

    useEffect(() => {
        console.log("Rendering Page")
    })

    const handleCreate = () => {
        const newTask: TaskItem = {
            id: Date.now(),
            description: task
        }
        setTaskList([...taskList, newTask])
        setTask("")
    }

    const handleSearch = () => {
        setTerm(task)
    }

    const handleDelete = useCallback((taskId: number) => {
        setTaskList(taskList.filter((value) => value.id !== taskId))
    }, [taskList])

    const filteredTaskList = useMemo(() => {
        return taskList.filter( (value: TaskItem) => {
            console.log("Filtering...")
            return value.description.toLowerCase()
                .includes(term.toLowerCase())
        })
    }, [taskList, term])

    return (
        <>
        <h1>Todo List</h1>
        <span>Learn useState, memo, useMemo, and useCallback...</span>
        <br/><br/>
        <input
            type="text"
            value={task}
            onChange={(e: React.FormEvent<HTMLInputElement>) => 
                setTask(e.currentTarget.value)}
        />
        <button onClick={handleCreate}>Create</button>
        <button onClick={handleSearch}>Search</button>
        <TaskList listitem={filteredTaskList} handleDelete={handleDelete} />
        </>
    )
}

export default Page01