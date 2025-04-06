// src/components/TodoSummary.tsx
import { Todo } from "../types/todo"

interface TodoSummaryProps {
    todos: Todo[];
    deleteAllCompleted: () => void;
}

export default function TodoSummary({
    todos,
    deleteAllCompleted
}: TodoSummaryProps) {
    const completedTodos = todos.filter(todo => todo.completed)

    return (
        <div className="text-center space-y-2">
            <p className="text-sm font-medium text-green-700">
                {completedTodos.length} / {todos.length} todos completed
            </p>
            {completedTodos.length > 0 && (
                <button
                    onClick={deleteAllCompleted}
                    className="text-red-500 hover:text-red-700 text-sm font-medium transition-colors"
                >
                    Delete All Completed
                </button>
            )}
        </div>
    )
}