import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import http from '../configs/http';

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
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

  const handleDelete = (userId) => (event) => {
    event.stopPropagation(); // Stop event propagation
    const userToDelete = users.find((user) => user._id === userId);
    setSelectedUser(userToDelete);
    setShowDeleteModal(true);
  };

  useEffect(() => {
    getUsersData();
  }, []);

  const handleEdit = (userId) => (event) => {
    event.stopPropagation(); // Stop event propagation
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
      const response = await http.patch(`/users/${selectedUser._id}`, {
        paymentDone: editedUserData.paymentDone, 
      });
      console.log("Edit success", response);
      // Update users list or show a success message
      getUsersData();
      setShowEditModal(false);
    } catch (err) {
      console.log(err);
      // Handle error
    }
  };

  const confirmDelete = async () => {
    try {
      const response = await http.delete(`/users/${selectedUser._id}`);
      console.log("Delete success", response);
      // Update users list or show a success message
      getUsersData();
      setShowDeleteModal(false);
    } catch (err) {
      console.log(err);
      // Handle error
    }
  };


  const closeModal = () => {
    setShowEditModal(false);
    setShowDeleteModal(false)
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

      <div className="m-12 relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-blue-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
            <th scope="col" className="px-6 py-3">
                Sr.No.
              </th>
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
            {users.map((user,i) => (
              <tr key={user._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                   <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {i+1}
                </td>
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
                <button className='text-yellow-600 font-bold' onClick={handleEdit(user._id)}>Edit</button>
<button className='ml-8 text-red-600 font-bold' onClick={handleDelete(user._id)}>Delete</button>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showEditModal && selectedUser && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white p-12 max-w-xl mx-auto rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Edit User</h2>
      <form className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="paymentDone" className="text-sm">Payment Done:</label>
          <select
            id="paymentDone"
            value={editedUserData.paymentDone}
            onChange={(e) => setEditedUserData({ ...editedUserData, paymentDone: e.target.value === 'true' })}
            className="block w-full py-2 px-3 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        {/* Add more fields here for editing other user data */}
        <div className="flex justify-end mt-4">
          <button
            type="button"
            onClick={handleSaveEdit}
            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save
          </button>
          <button
            type="button"
            onClick={closeModal}
            className="ml-4 inline-flex justify-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 border border-transparent rounded-md shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
)}

{showDeleteModal && selectedUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 max-w-md mx-auto rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Delete User</h2>
            <p className="mb-4">Are you sure you want to delete this user?</p>
            <div className="flex justify-end">
              <button
                onClick={confirmDelete}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md mr-2"
              >
                Confirm Delete
              </button>
              <button
                onClick={closeModal}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Dashboard;
