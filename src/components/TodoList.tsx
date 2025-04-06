// src/components/TodoList.tsx
import { Todo } from "../types/todo";
import TodoItem from "./TodoItem";

interface TodoListProps {
    todos: Todo[];
    onCompleteChange: (id: number, completed: boolean) => void;
    onDelete: (id: number) => void;
}

export default function ToodoList({
    todos,
    onCompleteChange,
    onDelete
}: TodoListProps) {
    const todoSorted = todos.sort((a, b) => {
        if (a.completed === b.completed) {
            return b.id - a.id;
        }
        return a.completed ? 1 : -1;
    });

    return (
        <div className="space-y-3">
            {todoSorted.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onCompleteChange={onCompleteChange}
                    onDelete={onDelete}
                />
            ))}

            {todos.length === 0 && (
                <div className="text-center py-4">
                    <p className="text-gray-500 italic">
                        No todos yet. Add a new one above.
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                        (Your productive journey starts here!)
                    </p>
                </div>
            )}
        </div>
    );
}