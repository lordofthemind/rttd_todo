// src/components/Todo.tsx
import AddTodoForm from "./AddTodoForm";
import ToodoList from "./TodoList";
import TodoSummary from "./TodoSummary";
import useTodos from "../hooks/useTodos";
import Base from "./Base";

export default function ToDoPage() {
    const {
        todos,
        addTodo,
        setTodoCompleted,
        deleteTodo,
        deleteAllCompletedTodos
    } = useTodos();

    return (
        <Base title="Todos">
            <div className="space-y-6">
                <h1 className="text-3xl font-bold text-green-700 text-center">Your Todos</h1>

                <div className="max-w-lg mx-auto space-y-6">
                    <AddTodoForm onSubmit={addTodo} />
                    <ToodoList
                        todos={todos}
                        onCompleteChange={setTodoCompleted}
                        onDelete={deleteTodo}
                    />
                    <TodoSummary
                        todos={todos}
                        deleteAllCompleted={deleteAllCompletedTodos}
                    />
                </div>
            </div>
        </Base>
    );
}