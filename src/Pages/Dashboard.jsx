import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import http from '../configs/http';

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editedUserData, setEditedUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '', // You can decide whether to include password editing in the modal
    weight: null,
    height: null,
    bmi: null,
    paymentDone: false,
    role: 'user', // Assuming default role for editing
    verified: false,
    verificationToken: '',
  });

  const getUsersData = async () => {
    try {
      const response = await http.get(`/users`);
      console.log("users", response);
      setUsers(response?.data);
      if (response.status === 200) {
        console.log("success", response.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUsersData();
  }, []);

  const handleEdit = (userId) => {
    const userToEdit = users.find((user) => user._id === userId);
    setSelectedUser(userToEdit);
    setEditedUserData({
      firstName: userToEdit.firstName,
      lastName: userToEdit.lastName,
      email: userToEdit.email,
      weight: userToEdit.weight,
      height: userToEdit.height,
      bmi: userToEdit.bmi,
      paymentDone: userToEdit.paymentDone,
      role: userToEdit.role,
      verified: userToEdit.verified,
      verificationToken: userToEdit.verificationToken,
    });
    setShowEditModal(true);
  };

  const handleSaveEdit = async () => {
    try {
      const response = await http.patch(`/users/${selectedUser._id}`, editedUserData);
      console.log("Edit success", response);
      // Update users list or show a success message
      getUsersData();
      setShowEditModal(false);
    } catch (err) {
      console.log(err);
      // Handle error
    }
  };

  const handleDelete = async (userId) => {
    try {
      const response = await http.delete(`/users/${userId}`);
      console.log("Delete success", response);
      // Update users list or show a success message
      getUsersData();
    } catch (err) {
      console.log(err);
      // Handle error
    }
  };

  const closeModal = () => {
    setShowEditModal(false);
    setSelectedUser(null);
    setEditedUserData({
      firstName: '',
      lastName: '',
      email: '',
      weight: null,
      height: null,
      bmi: null,
      paymentDone: false,
      role: 'user',
      verified: false,
      verificationToken: '',
    });
  };

  return (
    <div>
      <Navbar />
      <h1 className='m-8 text-center text-black font-bold text-3xl'>All Registered Gym Members</h1>

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Joining Date
              </th>
              <th scope="col" className="px-6 py-3">
                Fees Paid
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {user.firstName} {user.lastName}
                </td>
                <td className="px-6 py-4">
                  {user.email}
                </td>
                <td className="px-6 py-4">
                  {new Date(user.createdAt).toLocaleDateString()}
                </td>
                <td className="px-6 py-4">
                  {user.paymentDone ? 'Yes' : 'No'}
                </td>
                <td className="px-6 py-4">
                  <button onClick={() => handleEdit(user._id)}>Edit</button>
                  <button onClick={() => handleDelete(user._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showEditModal && selectedUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 max-w-md mx-auto rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Edit User</h2>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              value={editedUserData.firstName}
              onChange={(e) => setEditedUserData({ ...editedUserData, firstName: e.target.value })}
            />
            {/* Add similar inputs for other fields */}
            <div className="flex justify-end mt-4">
              <button className="mr-4" onClick={handleSaveEdit}>Save</button>
              <button onClick={closeModal}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
