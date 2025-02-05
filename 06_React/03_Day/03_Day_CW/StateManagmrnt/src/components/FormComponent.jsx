import { useState } from "react";

const FormExample = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [submittedData, setSubmittedData] = useState(null);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    // Step 3: Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent page refresh
        setSubmittedData({ name, email });
    };

    return (
        <div className="p-5 max-w-md mx-auto bg-gray-100 shadow-md rounded-md">
            <h2 className="text-xl font-bold mb-4">User Form</h2>
            <form onSubmit={handleSubmit} className="space-y-3">
                {/* Name Input */}
                <div>
                    <label className="block text-gray-700">Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={handleNameChange}
                        className="w-full p-2 border rounded"
                        placeholder="Enter your name"
                    />
                </div>

                {/* Email Input */}
                <div>
                    <label className="block text-gray-700">Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        className="w-full p-2 border rounded"
                        placeholder="Enter your email"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                    Submit
                </button>
            </form>

            {/* Display Submitted Data */}
            {submittedData && (
                <div className="mt-4 p-3 border rounded bg-white">
                    <h3 className="text-md font-semibold">Submitted Data:</h3>
                    <p><strong>Name:</strong> {submittedData.name}</p>
                    <p><strong>Email:</strong> {submittedData.email}</p>
                </div>
            )}
        </div>
    );
};

export default FormExample;
