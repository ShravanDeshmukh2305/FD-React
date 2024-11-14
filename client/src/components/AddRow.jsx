import React, { useState } from "react";
import { createBank } from "../services/bankService";

const AddRow = ({ onAdd }) => {
  const [newBank, setNewBank] = useState({
    bankName: "",
    city: "",
    state: "",
    branch: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBank((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    try {
      const createdBank = await createBank(newBank);
      onAdd(createdBank);
      setNewBank({ bankName: "", city: "", state: "", branch: "" });
    } catch (error) {
      console.error("Error creating bank record:", error);
    }
  };

  return (
    <tr>
      <td><input type="text" name="bankName" value={newBank.bankName} onChange={handleChange} /></td>
      <td><input type="text" name="city" value={newBank.city} onChange={handleChange} /></td>
      <td><input type="text" name="state" value={newBank.state} onChange={handleChange} /></td>
      <td><input type="text" name="branch" value={newBank.branch} onChange={handleChange} /></td>
      <td>
        <button onClick={handleSave}>Save</button>
      </td>
    </tr>
  );
};

export default AddRow;


