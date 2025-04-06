import { useEffect, useState } from "react";
import { dummyData } from "./data/Todos";
import AddTodoForm from "./components/AddTodoForm";
import ToodoList from "./components/TodoList";
import TodoSummary from "./components/TodoSummary";
import { Todo } from "./types/todo";

export default function ToDo() {

    const [todos, setTodos] = useState(() => {
        const savedTodos: Todo[] = JSON.parse(localStorage.getItem("todos") || "[]");
        return savedTodos.length > 0 ? savedTodos : dummyData
    })

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos])

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
                id: Date.now(),
                title,
                completed: false
            },
            ...prevTodos
        ])
    }

    function deleteTodo(id: number) {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
    }

    function deleteAllCompletedTodos() {
        setTodos(prevTodos => prevTodos.filter(todo => !todo.completed))
    }

    return (
        <main className="py-10 h-screen space-y-5 overflow-y-auto">
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
            <TodoSummary
                todos={todos}
                deleteAllCompleted={deleteAllCompletedTodos}

            />
        </main>
    );
}
