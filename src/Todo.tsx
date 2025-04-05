import { useState } from 'react';
import { dummyData } from "./data/Todos";
import { Todo } from "./types/todo";

type FilterType = 'all' | 'completed' | 'pending';
type SortType = 'title' | 'date' | 'status';

export default function ToDo() {
    const [todos, setTodos] = useState<Todo[]>(dummyData);
    const [filter, setFilter] = useState<FilterType>('all');
    const [sortBy, setSortBy] = useState<SortType>('title');
    const [searchTerm, setSearchTerm] = useState('');
    const [newTodo, setNewTodo] = useState('');

    // Filter and sort todos
    const filteredTodos = todos.filter(todo => {
        const matchesFilter = filter === 'all' ||
            (filter === 'completed' && todo.completed) ||
            (filter === 'pending' && !todo.completed);

        const matchesSearch = todo.title.toLowerCase().includes(searchTerm.toLowerCase());

        return matchesFilter && matchesSearch;
    });

    const sortedTodos = [...filteredTodos].sort((a, b) => {
        if (sortBy === 'title') {
            return a.title.localeCompare(b.title);
        }
        // Add other sorting logic here
        return 0;
    });

    const completedCount = todos.filter(todo => todo.completed).length;
    const pendingCount = todos.length - completedCount;

    const toggleTodo = (id: number) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const deleteTodo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const addTodo = () => {
        if (newTodo.trim()) {
            setTodos([
                ...todos,
                {
                    id: Date.now(),
                    title: newTodo.trim(),
                    completed: false
                }
            ]);
            setNewTodo('');
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    };

    return (
        <main className="min-h-screen bg-gray-50 py-10 px-4">
            <div className="max-w-md mx-auto">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">RTTD ToDos</h1>

                {/* Todo Stats */}
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">ToDo List</h2>

                    <div className="grid grid-cols-3 gap-4 mb-6">
                        <div className="bg-blue-50 p-3 rounded-lg text-center">
                            <p className="text-sm text-gray-500">Total</p>
                            <p className="font-bold text-blue-600">{todos.length}</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg text-center">
                            <p className="text-sm text-gray-500">Completed</p>
                            <p className="font-bold text-green-600">{completedCount}</p>
                        </div>
                        <div className="bg-yellow-50 p-3 rounded-lg text-center">
                            <p className="text-sm text-gray-500">Pending</p>
                            <p className="font-bold text-yellow-600">{pendingCount}</p>
                        </div>
                    </div>

                    {/* Controls */}
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <label className="text-gray-600">Filter:</label>
                            <select
                                className="border border-gray-300 rounded-lg p-2 w-40"
                                value={filter}
                                onChange={(e) => setFilter(e.target.value as FilterType)}
                            >
                                <option value="all">All</option>
                                <option value="completed">Completed</option>
                                <option value="pending">Pending</option>
                            </select>
                        </div>

                        <div className="flex items-center justify-between">
                            <label className="text-gray-600">Sort By:</label>
                            <select
                                className="border border-gray-300 rounded-lg p-2 w-40"
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value as SortType)}
                            >
                                <option value="title">Title</option>
                                <option value="date">Date</option>
                                <option value="status">Status</option>
                            </select>
                        </div>

                        <div className="flex items-center justify-between">
                            <label className="text-gray-600">Search:</label>
                            <input
                                type="text"
                                placeholder="Search todos"
                                className="border border-gray-300 rounded-lg p-2 flex-1 ml-2"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                {/* Todo List */}
                <div className="space-y-2 mb-6">
                    {sortedTodos.map((todo) => (
                        <div
                            key={todo.id}
                            className="flex items-center bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow"
                        >
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => toggleTodo(todo.id)}
                                className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500 mr-3"
                            />
                            <span
                                className={`flex-1 ${todo.completed ? 'line-through text-gray-400' : 'text-gray-700'}`}
                            >
                                {todo.title}
                            </span>
                            <button
                                onClick={() => deleteTodo(todo.id)}
                                className="text-red-500 hover:text-red-700 ml-2"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>

                {/* Add Todo */}
                <div className="flex">
                    <input
                        type="text"
                        placeholder="Add a new todo"
                        className="border border-gray-300 rounded-l-lg p-3 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)}
                        onKeyPress={handleKeyPress}
                    />
                    <button
                        onClick={addTodo}
                        className="bg-blue-600 hover:bg-blue-700 text-white rounded-r-lg px-4 py-3 transition-colors"
                    >
                        Add
                    </button>
                </div>
            </div>
        </main>
    );
}