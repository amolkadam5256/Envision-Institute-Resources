import React from 'react'

const Personal_Info = () => {
    return (
        <>
            <div>
                <div className="max-w-lg mx-auto bg-white shadow-lg rounded-2xl p-6 mt-10">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Personal Information</h2>

                    <form className="space-y-4">
                        <div>
                            <label className="block text-gray-700 font-medium">Full Name</label>
                            <input type="text" placeholder="Enter your full name" className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300" />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-medium">Date of Birth</label>
                            <input type="date" className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300" />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-medium">Gender</label>
                            <select className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300">
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-gray-700 font-medium">Contact Number</label>
                            <input type="tel" placeholder="Enter your phone number" className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300" />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-medium">Email Address</label>
                            <input type="email" placeholder="Enter your email" className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300" />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-medium">Address</label>
                            <textarea placeholder="Enter your address" className="w-full p-2 border rounded-lg focus:ring focus:ring-blue-300"></textarea>
                        </div>

                        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
                            Submit
                        </button>
                    </form>
                </div>

            </div>
        </>
    )
}

export default Personal_Info
