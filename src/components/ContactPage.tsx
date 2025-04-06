// src/components/ContactPage.tsx
import { useState } from 'react';
import Base from './Base';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setSubmitMessage(`Thank you, ${formData.name}! We'll contact you soon.`);
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitting(false);
    };

    return (
        <Base title="Contact">
            <div className="space-y-6 max-w-2xl mx-auto">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-green-700 mb-2">Contact Us</h1>
                    <p className="text-gray-600">Have questions? We'd love to hear from you!</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl shadow-md">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-300 focus:border-transparent"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-300 focus:border-transparent"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-300 focus:border-transparent"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full py-2 px-4 rounded-lg text-white font-medium ${isSubmitting ? 'bg-green-400' : 'bg-green-600 hover:bg-green-700'} transition-colors`}
                    >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                </form>

                {submitMessage && (
                    <div className="p-4 bg-green-50 text-green-700 rounded-lg text-center">
                        {submitMessage}
                    </div>
                )}

                <div className="bg-white p-6 rounded-xl shadow-md">
                    <h2 className="text-xl font-semibold text-green-700 mb-3">Other Ways to Reach Us</h2>
                    <div className="space-y-2">
                        <p className="flex items-center">
                            <span className="mr-2">📧</span>
                            <span>Email: contact@rttd-starter.com</span>
                        </p>
                        <p className="flex items-center">
                            <span className="mr-2">📱</span>
                            <span>Phone: (123) 456-7890</span>
                        </p>
                        <p className="flex items-center">
                            <span className="mr-2">🏢</span>
                            <span>Address: 123 Starter Lane, Dev City</span>
                        </p>
                    </div>
                </div>
            </div>
        </Base>
    );
}