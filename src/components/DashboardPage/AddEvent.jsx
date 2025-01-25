import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../Context/GlobalContext';
import CourseDropdown from './CoursesDropdown';

const AddEvent = (props) => {
    const { authTokens } = useContext(GlobalContext);
    const [title, setTitle] = useState('');
    const [importance, setImportance] = useState(0);
    const [deadline, setDeadline] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState(''); // Initial state set to an empty string
    const setIsOpen = props.setIsOpen;

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Check if the selected course is empty
        if (!selectedCourse) {
            alert("Please select a course.");
            return;
        }

        const formData = {
            username: authTokens.username,
            password: authTokens.password,
            assignment_details: {
                name: title,
                days: deadline,
                total_slots: importance,
                remaining_slots: importance,
                today: false,
                is_done: false,
                id: selectedCourse, // Use selectedCourse to get the selected course id
            },
        };

        try {
            const response = await fetch('http://127.0.0.1:8000/scheduler/addAssignment/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData), // Send the data as JSON
            });

            if (!response.ok) {
                throw new Error('Failed to submit assignment');
            }

            const data = await response.json();
            setIsModalOpen(true);
        } catch (error) {
            console.error("Error submitting assignment:", error);
            alert("Failed to submit assignment: " + error.message);
            setIsOpen(false);
        }
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center z-50">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mx-auto p-8 bg-white rounded-lg shadow-lg w-1/3">
                <button
                    onClick={() => { setIsOpen(false); }}
                    className="text-3xl relative top-0 left-96 hover:bg-red-500 px-4 rounded-lg py-2"
                >
                    &times;
                </button>
                <h1 className="text-2xl text-center mb-6">Add Assignment</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-lg font-medium mb-2">Title:</label>
                        <input
                            id="name"
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Provide Title"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="importance" className="block text-lg font-medium mb-2">Importance Percentage:</label>
                        <input
                            id="importance"
                            type="number"
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            value={importance}
                            onChange={(e) => setImportance(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="deadline" className="block text-lg font-medium mb-2">Available number of days:</label>
                        <input
                            id="deadline"
                            type="number"
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            value={deadline}
                            onChange={(e) => setDeadline(e.target.value)}
                            required
                        />
                    </div>

                    <CourseDropdown courseCode={selectedCourse} setCourseCode={setSelectedCourse} />

                    <button type="submit" className="w-full py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600">
                        Submit Event
                    </button>
                </form>

                {/* Modal */}
                {isModalOpen && (
                    <div className="fixed inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
                            <h2 className="text-2xl text-center text-teal-600 mb-4">Success!</h2>
                            <p className="text-center mb-4">Your question has been submitted.</p>
                            <button
                                className="w-full py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600"
                                onClick={() => { setIsModalOpen(false); setIsOpen(false); }}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AddEvent;
