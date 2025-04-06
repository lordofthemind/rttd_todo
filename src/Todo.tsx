import { useState } from "react";
import TodoItem from "./components/TodoItem";
import { dummyData } from "./data/Todos";

export default function ToDo() {

    const [todos, setTodos] = useState(dummyData)

    function setTodoCompleted(id: number, completed: boolean) {
        setTodos(
            (prevTodos) =>
                prevTodos.map(todo =>
                    (todo.id === id ? { ...todo, completed } : todo)
                )
        )
        // alert(`Todo with id ${id} is now ${completed ? "completed" : "not completed"}`)
    }

    return (
        <main className="py-10 h-screen space-y-5 ">
            <h1 className="font-bold text-3xl text-center">RTTD ToDos</h1>
            <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5" >
                <div className="space-y-2">
                    {todos.map(todo => (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            onCompleteChange={setTodoCompleted}
                        />
                    ))}
                </div>
            </div>
        </main>
    );
}
