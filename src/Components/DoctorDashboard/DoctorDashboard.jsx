import React, { useState } from 'react';

function DoctorDashboard() {
  // State for storing the selected image file
  const [selectedFile, setSelectedFile] = useState(null);

  // State for storing appointment requests
  const [appointmentRequests, setAppointmentRequests] = useState([]);

  // Function to handle file selection
  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  // Function to handle file upload form submission
  const handleFileUploadSubmit = (event) => {
    event.preventDefault();
    if (selectedFile) {
      // Logic to handle image upload (e.g., send to backend for processing)
      console.log("Selected file:", selectedFile);
      // Reset the selected file state after upload
      setSelectedFile(null);
    } else {
      console.log("No file selected.");
    }
  };

  // Function to handle appointment request acceptance
  const handleAcceptAppointment = (index) => {
    const acceptedAppointment = appointmentRequests[index];
    // Logic to handle accepted appointment
    console.log("Accepted appointment:", acceptedAppointment);
    setAppointmentRequests(appointmentRequests.filter((request, i) => i !== index));
  };

  // Function to handle appointment request rejection
  const handleRejectAppointment = (index) => {
    const rejectedAppointment = appointmentRequests[index];
    // Logic to handle rejected appointment
    console.log("Rejected appointment:", rejectedAppointment);
    setAppointmentRequests(appointmentRequests.filter((request, i) => i !== index));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-900 to-blue-500 text-black">
      <img
        src="https://images.unsplash.com/photo-1492892132812-a00a8b245c45?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace this with your background image URL
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />
      <div className="relative z-10 w-full md:max-w-4xl flex-grow flex flex-col justify-center text-center px-6 sm:px-10 bg-transparent">
        <h1 className="text-3xl text-white font-bold mb-4">Doctor Dashboard</h1>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Tumor Checking</h2>
          <div className="mt-8">
            <form onSubmit={handleFileUploadSubmit} className="mb-8">
              <label htmlFor="file" className="block text-lg font-bold mb-2">Upload Tumor Image:</label>
              <input type="file" id="file" accept="image/*" onChange={handleFileSelect} className="block w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500 mb-4" />
              <button type="submit" className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">View Results</button>
            </form>
          </div>
        </div>
        <div className="bg-white p-6 mt-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Appointment Requests</h2>
          <div>
            {appointmentRequests.length > 0 ? (
              <ul>
                {appointmentRequests.map((request, index) => (
                  <li key={index}>
                    <span>{request.patientName}</span>
                    <button onClick={() => handleAcceptAppointment(index)} className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 ml-2 rounded">Accept</button>
                    <button onClick={() => handleRejectAppointment(index)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 ml-2 rounded">Reject</button>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No appointment requests.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorDashboard;
