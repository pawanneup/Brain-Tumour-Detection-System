import React, { useState } from 'react';

function PatientDashboard() {
  // Sample list of doctors (replace with actual data from your backend)
  const doctorList = [
    { id: 1, name: "Dr. Smith" },
    { id: 2, name: "Dr. Johnson" },
    { id: 3, name: "Dr. Williams" }
  ];

  // State for storing the selected image file
  const [selectedFile, setSelectedFile] = useState(null);

  // State for storing appointment details
  const [appointmentDetails, setAppointmentDetails] = useState({
    date: "",
    time: "",
    doctor: ""
  });

  // Function to handle file selection
  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  // Function to handle appointment form submission
  const handleAppointmentSubmit = (event) => {
    event.preventDefault();
    // Logic to handle appointment booking
    console.log("Appointment Details:", appointmentDetails);
  };

  // Function to handle appointment form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAppointmentDetails({ ...appointmentDetails, [name]: value });
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

  return (
    <div className="min-h-screen flex flex-col items-center justify-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1492892132812-a00a8b245c45?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
      <div className="max-w-4xl w-full text-center px-6 sm:px-10">
        <h1 className="text-3xl text-white font-bold mb-4">Patient Dashboard</h1>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Welcome!</h2>
          <div className="mt-8">
            <form onSubmit={handleFileUploadSubmit} className="mb-8">
              <label htmlFor="file" className="block text-lg font-bold mb-2">Upload Tumor Image:</label>
              <input type="file" id="file" accept="image/*" onChange={handleFileSelect} className="block w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500 mb-4" />
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Check Results</button>
            </form>
            <form onSubmit={handleAppointmentSubmit}>
              <h3 className="text-lg font-bold mb-4">Book Appointment:</h3>
              <div className="flex flex-col md:flex-row items-center justify-between mb-4">
                <input type="date" name="date" value={appointmentDetails.date} onChange={handleInputChange} className="w-full md:w-auto border border-gray-300 rounded-lg py-2 px-3 mb-2 md:mb-0" />
                <input type="time" name="time" value={appointmentDetails.time} onChange={handleInputChange} className="w-full md:w-auto border border-gray-300 rounded-lg py-2 px-3 mb-2 md:mb-0" />
                <select name="doctor" value={appointmentDetails.doctor} onChange={handleInputChange} className="w-full md:w-auto border border-gray-300 rounded-lg py-2 px-3 mb-2 md:mb-0">
                  <option value="">Select Doctor</option>
                  {doctorList.map(doctor => (
                    <option key={doctor.id} value={doctor.name}>{doctor.name}</option>
                  ))}
                </select>
              </div>
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Book Appointment</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientDashboard;
