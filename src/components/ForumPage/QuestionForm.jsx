// src/components/AddQuestionForm.jsx
import React, { useState } from 'react';


const AddQuestionForm = (props) => {
    const [username, setUsername] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [flair, setFlair] = useState('general');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const setIsOpen = props.setIsOpen

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append('description', description);
        formData.append('flair', flair);
        formData.append('created_by', username); // Replace with dynamic username
        if (image) {
            formData.append('image', image);
        }
    
        try {
            const response = await fetch('http://127.0.0.1:8000/forum/posts/', {
                method: 'POST',
                body: formData, // Send FormData
            });
    
            if (!response.ok) {
                throw new Error('Failed to submit question');
            }
    
            const data = await response.json();
            console.log(data.message); // Success message from the backend
            setIsModalOpen(true); // Open the modal
        } catch (error) {
            alert(error.message); // Display error message
        }
    };
    
    return (
        <div className="mx-auto p-8 bg-white rounded-lg shadow-lg w-1/3">
            <button
                onClick={()=>{setIsOpen(false)}}
                className="text-3xl relative top-0 left-96 hover:bg-red-500 px-4 rounded-lg py-2"
            >
                &times; {/* Unicode character for "X" */}
            </button>
            <h1 className="text-2xl text-center mb-6">Add a New Question</h1>
            <form onSubmit={handleSubmit}>
               

                <div className="mb-4">
                    <label htmlFor="description" className="block text-lg font-medium mb-2">Description:</label>
                    <textarea
                        id="description"
                        className="w-full p-3 border border-gray-300 rounded-lg"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows="5"
                        placeholder="Provide more details about your question"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="image" className="block text-lg font-medium mb-2">Upload Image (optional):</label>
                    <input
                        type="file"
                        id="image"
                        className="w-full p-3 border border-gray-300 rounded-lg"
                        onChange={(e) => setImage(e.target.files[0])}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="flairs" className="block text-lg font-medium mb-2">Select Flair:</label>
                    <select
                        id="category"
                        className="w-full p-3 border border-gray-300 rounded-lg"
                        value={flair}
                        onChange={(e) => setFlair(e.target.value)}
                    >
                        <option value="general">General</option>
                        <option value="technical">Technical</option>
                        <option value="help">Help</option>
                        <option value="Exam">Exam</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label htmlFor="username" className="block text-lg font-medium mb-2">Username:</label>
                    <input
                        type="text"
                        id="username"
                        className="w-full p-3 border border-gray-300 rounded-lg"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" className="w-full py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600">Submit Question</button>
            </form>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
                        <h2 className="text-2xl text-center text-teal-600 mb-4">Success!</h2>
                        <p className="text-center mb-4">Your question has been submitted.</p>
                        <button
                            className="w-full py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600"
                            onClick={() => { setIsModalOpen(false); setIsOpen(false) }}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddQuestionForm;
