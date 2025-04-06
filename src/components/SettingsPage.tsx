// src/components/SettingsPage.tsx
import { useState } from 'react';
import Base from './Base';

export default function SettingsPage() {
    const [settings, setSettings] = useState({
        darkMode: false,
        notifications: true,
        fontSize: 'medium',
        saveData: false
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target as HTMLInputElement;
        setSettings(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
        }));
    };

    const [showSaved, setShowSaved] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setShowSaved(true);
        setTimeout(() => setShowSaved(false), 3000);
    };

    return (
        <Base title="Settings">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-3xl font-bold text-green-700 mb-6">Settings</h1>

                <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-xl shadow-md">
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">Preferences</h2>

                        <div className="flex items-center justify-between">
                            <label htmlFor="darkMode" className="text-gray-700">
                                Dark Mode
                            </label>
                            <input
                                type="checkbox"
                                id="darkMode"
                                name="darkMode"
                                checked={settings.darkMode}
                                onChange={handleChange}
                                className="h-5 w-5 text-green-600 rounded focus:ring-green-500"
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <label htmlFor="notifications" className="text-gray-700">
                                Enable Notifications
                            </label>
                            <input
                                type="checkbox"
                                id="notifications"
                                name="notifications"
                                checked={settings.notifications}
                                onChange={handleChange}
                                className="h-5 w-5 text-green-600 rounded focus:ring-green-500"
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <label htmlFor="saveData" className="text-gray-700">
                                Data Saver Mode
                            </label>
                            <input
                                type="checkbox"
                                id="saveData"
                                name="saveData"
                                checked={settings.saveData}
                                onChange={handleChange}
                                className="h-5 w-5 text-green-600 rounded focus:ring-green-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="fontSize" className="block text-gray-700 mb-2">
                                Font Size
                            </label>
                            <select
                                id="fontSize"
                                name="fontSize"
                                value={settings.fontSize}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-300 focus:border-transparent"
                            >
                                <option value="small">Small</option>
                                <option value="medium">Medium</option>
                                <option value="large">Large</option>
                            </select>
                        </div>
                    </div>

                    <div className="pt-4">
                        <button
                            type="submit"
                            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors"
                        >
                            Save Settings
                        </button>
                    </div>
                </form>

                {showSaved && (
                    <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg text-center">
                        Settings saved successfully!
                    </div>
                )}

                <div className="mt-8 bg-white p-6 rounded-xl shadow-md">
                    <h2 className="text-xl font-semibold text-gray-800 mb-4">Account</h2>
                    <div className="space-y-4">
                        <button className="w-full py-2 px-4 bg-red-100 hover:bg-red-200 text-red-700 rounded-lg transition-colors">
                            Logout
                        </button>
                        <button className="w-full py-2 px-4 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors">
                            Delete Account
                        </button>
                    </div>
                </div>
            </div>
        </Base>
    );
}