import React, { useState } from "react";
import { updateBank } from "../services/bankService";

const BankRow = ({ bank, onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editableBank, setEditableBank] = useState({ ...bank });

  // Handle changes in the input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditableBank((prev) => ({ ...prev, [name]: value }));
  };

  // Save the updated bank record
  const handleSave = async () => {
    try {
      await updateBank(bank._id, editableBank);
      setIsEditing(false);
      onSave();
    } catch (error) {
      console.error("Error saving the updated bank record:", error);
    }
  };

  return (
    <tr>
      <td>{isEditing ? <input type="text" name="bankName" value={editableBank.bankName} onChange={handleChange} /> : bank.bankName}</td>
      <td>{isEditing ? <input type="text" name="city" value={editableBank.city} onChange={handleChange} /> : bank.city}</td>
      <td>{isEditing ? <input type="text" name="state" value={editableBank.state} onChange={handleChange} /> : bank.state}</td>
      <td>{isEditing ? <input type="text" name="branch" value={editableBank.branch} onChange={handleChange} /> : bank.branch}</td>
      <td>
        {isEditing ? (
          <button onClick={handleSave}>Save</button>
        ) : (
          <button onClick={() => setIsEditing(true)}>Edit</button>
        )}
      </td>
    </tr>
  );
};

export default BankRow;



