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
    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        const html = document.documentElement;
        html.classList.toggle("dark");
        setDarkMode(prev => !prev);
    };


    const filteredTodos = todos.filter(todo => {
        const matchesFilter = filter === 'all' ||
            (filter === 'completed' && todo.completed) ||
            (filter === 'pending' && !todo.completed);

        const matchesSearch = todo.title.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    const sortedTodos = [...filteredTodos].sort((a, b) => {
        if (sortBy === 'title') return a.title.localeCompare(b.title);
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

    return (
        <main>
            <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-10 px-4 transition-colors duration-300">
                <div className="max-w-md mx-auto">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-4xl font-extrabold text-green-700 dark:text-green-400">
                            🧁 RTTD ToDos
                        </h1>
                        <button
                            onClick={toggleTheme}
                            className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg"
                        >
                            {darkMode ? '🌞 Light' : '🌙 Dark'}
                        </button>
                    </div>

                    {/* Stats */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 mb-6 border border-gray-200 dark:border-gray-700">
                        <h2 className="text-xl font-semibold mb-4">ToDo Stats</h2>
                        <div className="grid grid-cols-3 gap-4 mb-6">
                            <div className="bg-green-100 dark:bg-green-700 p-3 rounded-lg text-center">
                                <p className="text-sm">Total</p>
                                <p className="font-bold">{todos.length}</p>
                            </div>
                            <div className="bg-green-200 dark:bg-green-600 p-3 rounded-lg text-center">
                                <p className="text-sm">Completed</p>
                                <p className="font-bold">{completedCount}</p>
                            </div>
                            <div className="bg-red-100 dark:bg-red-600 p-3 rounded-lg text-center">
                                <p className="text-sm">Pending</p>
                                <p className="font-bold">{pendingCount}</p>
                            </div>
                        </div>

                        {/* Controls */}
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <label>Filter:</label>
                                <select
                                    className="border border-gray-300 bg-white dark:bg-gray-700 dark:border-gray-600 text-gray-700 dark:text-white rounded-lg p-2 w-40"
                                    value={filter}
                                    onChange={(e) => setFilter(e.target.value as FilterType)}
                                >
                                    <option value="all">All</option>
                                    <option value="completed">Completed</option>
                                    <option value="pending">Pending</option>
                                </select>
                            </div>

                            <div className="flex items-center justify-between">
                                <label>Sort By:</label>
                                <select
                                    className="border border-gray-300 bg-white dark:bg-gray-700 dark:border-gray-600 text-gray-700 dark:text-white rounded-lg p-2 w-40"
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value as SortType)}
                                >
                                    <option value="title">Title</option>
                                    <option value="date">Date</option>
                                    <option value="status">Status</option>
                                </select>
                            </div>

                            <div className="flex items-center justify-between">
                                <label>Search:</label>
                                <input
                                    type="text"
                                    placeholder="Search todos"
                                    className="border border-gray-300 bg-white dark:bg-gray-700 dark:border-gray-600 text-gray-700 dark:text-white rounded-lg p-2 flex-1 ml-2"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    {/* List */}
                    <div className="space-y-2 mb-6">
                        {sortedTodos.map((todo) => (
                            <div
                                key={todo.id}
                                className="flex items-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-green-400"
                            >
                                <input
                                    type="checkbox"
                                    checked={todo.completed}
                                    onChange={() => toggleTodo(todo.id)}
                                    className="h-5 w-5 text-green-600 dark:text-green-400 mr-3"
                                />
                                <span className={`flex-1 ${todo.completed ? 'line-through text-gray-400' : ''}`}>
                                    {todo.title}
                                </span>
                                <button
                                    onClick={() => deleteTodo(todo.id)}
                                    className="text-red-500 hover:text-red-700 ml-2"
                                >
                                    🗑️
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Add Todo */}
                    <div className="flex">
                        <input
                            type="text"
                            placeholder="Add a new todo"
                            className="border border-gray-300 bg-white dark:bg-gray-800 dark:border-gray-600 text-gray-700 dark:text-white rounded-l-lg p-3 flex-1"
                            value={newTodo}
                            onChange={(e) => setNewTodo(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') addTodo();
                            }}
                        />
                        <button
                            onClick={addTodo}
                            className="bg-green-500 hover:bg-green-600 text-white rounded-r-lg px-4 py-3"
                        >
                            Add
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}
