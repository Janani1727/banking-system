import React, { useState } from "react";
import "./Update.css"; // Add necessary styles here

function Update() {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(""); // To determine which field is being updated
  const [newValue, setNewValue] = useState(""); // Stores the new value for the field
  const [currentValues, setCurrentValues] = useState({
    phoneNumber: "123-456-7890",
    address: "123 Main St, City, Country",
    name: "John Doe",
  });

  // Open the modal for the specific field
  const handleOpenModal = (type) => {
    setModalType(type);
    setNewValue(currentValues[type]);
    setShowModal(true);
  };

  // Handle modal form submission
  const handleUpdate = () => {
    setCurrentValues((prev) => ({
      ...prev,
      [modalType]: newValue,
    }));
    setShowModal(false);
    alert(`Once your ${modalType} is updated, you will be notified.`);
  };

  return (
    <div className="dashboard-container">
    <div className="profile-settings">
      <h2>Profile Settings</h2>
      <div className="field">
        <label>Phone Number:</label>
        <span>{currentValues.phoneNumber}</span>
        <button onClick={() => handleOpenModal("phoneNumber")}>Update</button>
      </div>
      <div className="field">
        <label>Address:</label>
        <span>{currentValues.address}</span>
        <button onClick={() => handleOpenModal("address")}>Update</button>
      </div>
      <div className="field">
        <label>Name:</label>
        <span>{currentValues.name}</span>
        <button onClick={() => handleOpenModal("name")}>Update</button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Update {modalType}</h3>
            <input
              type="text"
              value={newValue}
              onChange={(e) => setNewValue(e.target.value)}
            />
            <div className="modal-actions">
              <button onClick={() => setShowModal(false)}>Cancel</button>
              <button onClick={handleUpdate}>OK</button>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  );
}

export default Update;
