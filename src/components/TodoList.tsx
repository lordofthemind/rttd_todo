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
        return a.completed ? 1 : -1
    })

    return (
        <div className="space-y-2">
            {todoSorted.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onCompleteChange={onCompleteChange}
                    onDelete={onDelete}
                />
            ))}
        </div>
    )
}