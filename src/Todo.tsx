import { useState } from "react";
import { dummyData } from "./data/Todos";
import AddTodoForm from "./components/AddTodoForm";
import ToodoList from "./components/TodoList";

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

    function addTodo(title: string) {
        setTodos(prevTodos => [
            {
                id: prevTodos.length + 1,
                title,
                completed: false
            },
            ...prevTodos
        ])
    }

    function deleteTodo(id: number) {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
    }

    return (
        <main className="py-10 h-screen space-y-5 ">
            <h1 className="font-bold text-3xl text-center">RTTD ToDos</h1>
            <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5 space-y-6" >
                <div className="space-y-2">
                    <AddTodoForm
                        onSubmit={addTodo}
                    />

                </div>
                <ToodoList
                    todos={todos}
                    onCompleteChange={setTodoCompleted}
                    onDelete={deleteTodo}
                />
            </div>
        </main>
    );
}
