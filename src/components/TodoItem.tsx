// src/components/TodoItem.tsx
import { Trash2 } from "lucide-react";
import { Todo } from "../types/todo"

interface TodoItemProps {
    todo: Todo
    onCompleteChange: (id: number, completed: boolean) => void;
    onDelete: (id: number) => void;
}

export default function TodoItem({ todo, onCompleteChange, onDelete }: TodoItemProps) {
    return (
        <div className="flex items-center gap-2">
            <label className={`flex items-center gap-2 border rounded-lg p-3 bg-white hover:bg-green-50 grow transition-colors ${todo.completed ? "border-green-200" : "border-gray-300"
                }`}>
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={(e) => onCompleteChange(todo.id, e.target.checked)}
                    className="h-5 w-5 text-green-600 rounded focus:ring-green-500"
                />
                <span className={todo.completed ? "line-through text-gray-400" : "text-gray-700"}>
                    {todo.title}
                </span>
            </label>
            <button
                onClick={() => onDelete(todo.id)}
                className="p-2 text-gray-500 hover:text-red-500 transition-colors"
            >
                <Trash2 size={20} />
            </button>
        </div>
    )
}