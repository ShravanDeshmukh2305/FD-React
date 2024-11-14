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




// import React, { useState } from "react";
// import { updateBank } from "../services/bankService";

// const BankRow = ({ bank, onSave }) => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [editableBank, setEditableBank] = useState({ ...bank });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setEditableBank((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
//   };

//   const handleSave = async () => {
//     try {
//       await updateBank(bank._id, editableBank);
//       setIsEditing(false);
//       onSave();
//     } catch (error) {
//       console.error("Error saving the updated bank record:", error);
//     }
//   };

//   return (
//     <tr>
//       <td>{isEditing ? <input type="text" name="logoUrl" value={editableBank.logoUrl} onChange={handleChange} /> : bank.logoUrl}</td>
//       <td>{isEditing ? <input type="text" name="name" value={editableBank.name} onChange={handleChange} /> : bank.name}</td>
//       <td>{isEditing ? <input type="number" name="return2y" value={editableBank.return2y || ""} onChange={handleChange} /> : bank.return2y}</td>
//       <td>{isEditing ? <input type="number" name="return5y" value={editableBank.return5y || ""} onChange={handleChange} /> : bank.return5y}</td>
//       <td>{isEditing ? <input type="number" name="return6y" value={editableBank.return6y || ""} onChange={handleChange} /> : bank.return6y}</td>
//       <td>{isEditing ? <input type="number" name="maxFdRate" value={editableBank.maxFdRate || ""} onChange={handleChange} /> : bank.maxFdRate}</td>
//       <td>{isEditing ? <input type="number" name="bankAum" value={editableBank.bankAum || ""} onChange={handleChange} /> : bank.bankAum}</td>
//       <td>{isEditing ? <input type="number" name="rating" value={editableBank.rating || ""} onChange={handleChange} /> : bank.rating}</td>
//       <td>{isEditing ? <input type="number" name="capitalRatio" value={editableBank.capitalRatio || ""} onChange={handleChange} /> : bank.capitalRatio}</td>
//       <td>{isEditing ? <input type="text" name="description" value={editableBank.description} onChange={handleChange} /> : bank.description}</td>
//       <td>{isEditing ? <input type="text" name="ceo" value={editableBank.ceo} onChange={handleChange} /> : bank.ceo}</td>
//       <td>{isEditing ? <input type="text" name="ceoPhotoUrl" value={editableBank.ceoPhotoUrl} onChange={handleChange} /> : bank.ceoPhotoUrl}</td>
//       <td>{isEditing ? <input type="text" name="meanTime" value={editableBank.meanTime} onChange={handleChange} /> : bank.meanTime}</td>
//       <td>{isEditing ? <input type="text" name="companyType" value={editableBank.companyType} onChange={handleChange} /> : bank.companyType}</td>
//       <td>{isEditing ? <input type="text" name="listedOn" value={editableBank.listedOn} onChange={handleChange} /> : bank.listedOn}</td>
//       <td>{isEditing ? <input type="date" name="bankFoundedDate" value={editableBank.bankFoundedDate || ""} onChange={handleChange} /> : bank.bankFoundedDate?.split('T')[0]}</td>
//       <td>{isEditing ? <input type="number" name="numberOfBranches" value={editableBank.numberOfBranches || ""} onChange={handleChange} /> : bank.numberOfBranches}</td>
//       <td>{isEditing ? <input type="checkbox" name="taxFree" checked={editableBank.taxFree} onChange={handleChange} /> : bank.taxFree ? "Yes" : "No"}</td>
//       <td>{isEditing ? <input type="checkbox" name="digcInsures" checked={editableBank.digcInsures} onChange={handleChange} /> : bank.digcInsures ? "Yes" : "No"}</td>
//       <td>{isEditing ? <input type="text" name="keyFacts" value={editableBank.keyFacts} onChange={handleChange} /> : bank.keyFacts}</td>
//       <td>{isEditing ? <input type="number" name="minInvestment" value={editableBank.minInvestment || ""} onChange={handleChange} /> : bank.minInvestment}</td>
//       <td>{isEditing ? <input type="text" name="lockingPeriod" value={editableBank.lockingPeriod} onChange={handleChange} /> : bank.lockingPeriod}</td>
//       <td>{isEditing ? <input type="text" name="compoundingFrequency" value={editableBank.compoundingFrequency} onChange={handleChange} /> : bank.compoundingFrequency}</td>
//       <td>{isEditing ? <input type="text" name="exitPenalty" value={editableBank.exitPenalty} onChange={handleChange} /> : bank.exitPenalty}</td>
//       <td>
//         {isEditing ? (
//           <button onClick={handleSave}>Save</button>
//         ) : (
//           <button onClick={() => setIsEditing(true)}>Edit</button>
//         )}
//       </td>
//     </tr>
//   );
// };

// export default BankRow;

