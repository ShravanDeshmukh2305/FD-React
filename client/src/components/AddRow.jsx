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



// import React, { useState } from "react";
// import { createBank } from "../services/bankService";

// const AddRow = ({ onAdd }) => {
//   const [newBank, setNewBank] = useState({
//     logoUrl: "",
//     name: "",
//     return2y: "",
//     return5y: "",
//     return6y: "",
//     maxFdRate: "",
//     bankAum: "",
//     rating: "",
//     capitalRatio: "",
//     description: "",
//     ceo: "",
//     ceoPhotoUrl: "",
//     meanTime: "",
//     companyType: "",
//     listedOn: "",
//     bankFoundedDate: "",
//     numberOfBranches: "",
//     taxFree: false,
//     digcInsures: false,
//     keyFacts: "",
//     minInvestment: "",
//     lockingPeriod: "",
//     compoundingFrequency: "",
//     exitPenalty: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setNewBank((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSave = async () => {
//     try {
//       const createdBank = await createBank(newBank);
//       onAdd(createdBank);
//       setNewBank({
//         logoUrl: "",
//         name: "",
//         return2y: "",
//         return5y: "",
//         return6y: "",
//         maxFdRate: "",
//         bankAum: "",
//         rating: "",
//         capitalRatio: "",
//         description: "",
//         ceo: "",
//         ceoPhotoUrl: "",
//         meanTime: "",
//         companyType: "",
//         listedOn: "",
//         bankFoundedDate: "",
//         numberOfBranches: "",
//         taxFree: false,
//         digcInsures: false,
//         keyFacts: "",
//         minInvestment: "",
//         lockingPeriod: "",
//         compoundingFrequency: "",
//         exitPenalty: "",
//       });
//     } catch (error) {
//       console.error("Error creating bank record:", error);
//     }
//   };

//   return (
//     <tr>
//       {/* Map each field for input here, example for logoUrl */}
//       <td><input type="text" name="logoUrl" value={newBank.logoUrl} onChange={handleChange} /></td>
//       {/* Repeat for all fields in the schema */}
//       <td>
//         <button onClick={handleSave}>Save</button>
//       </td>
//     </tr>
//   );
// };

// export default AddRow;

