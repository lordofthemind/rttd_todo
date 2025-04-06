import AddTodoForm from "./components/AddTodoForm";
import ToodoList from "./components/TodoList";
import TodoSummary from "./components/TodoSummary";
import useTodos from "./hooks/useTodos";

export default function ToDo() {

    const {
        todos,
        addTodo,
        setTodoCompleted,
        deleteTodo,
        deleteAllCompletedTodos

    } = useTodos();

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
