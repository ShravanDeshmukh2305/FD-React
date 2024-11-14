import React, { useState, useEffect } from "react";
import { getBanks, createBank, updateBank } from "../services/bankService";
import "../index.css";

const BankTable = () => {
  const [banks, setBanks] = useState([]);
  const [newBank, setNewBank] = useState(null);
  const [isEditing, setIsEditing] = useState(null);

  useEffect(() => {
    const fetchBanks = async () => {
      const bankData = await getBanks();
      setBanks(bankData);
    };
    fetchBanks();
  }, []);

  const handleInputChange = (e, bankId = null) => {
    const { name, value, type, checked } = e.target;
    const updatedValue = type === "checkbox" ? checked : value;

    if (bankId) {
      setBanks((banks) =>
        banks.map((bank) => (bank._id === bankId ? { ...bank, [name]: updatedValue } : bank))
      );
    } else {
      setNewBank((prev) => ({ ...prev, [name]: updatedValue }));
    }
  };

  const handleSaveNewBank = async () => {
    if (newBank) {
      const savedBank = await createBank(newBank);
      setBanks((prev) => [...prev, savedBank]);
      setNewBank(null);
    }
  };

  const handleUpdateBank = async (bankId) => {
    const bankToUpdate = banks.find((bank) => bank._id === bankId);
    await updateBank(bankId, bankToUpdate);
    setIsEditing(null);
  };

  return (
    <div className="App">
      <h2>Bank Management</h2>

      <button className="add-button" onClick={() => setNewBank({
        logoUrl: "", name: "", return2y: "", return5y: "", return6y: "", maxFdRate: "", bankAum: "", rating: "",
        capitalRatio: "", description: "", ceo: "", ceoPhotoUrl: "", meanTime: "", companyType: "", listedOn: "",
        bankFoundedDate: "", numberOfBranches: "", taxFree: false, digcInsures: false, keyFacts: "", minInvestment: "",
        lockingPeriod: "", compoundingFrequency: "", exitPenalty: ""
      })}>
        Add Bank
      </button>

      <table>
        <thead>
          <tr>
            <th>Logo URL</th>
            <th>Name</th>
            <th>2Y Return</th>
            <th>5Y Return</th>
            <th>6Y Return</th>
            <th>Max FD Rate</th>
            <th>AUM</th>
            <th>Rating</th>
            <th>Capital Ratio</th>
            <th>Description</th>
            <th>CEO</th>
            <th>CEO Photo URL</th>
            <th>Mean Time</th>
            <th>Company Type</th>
            <th>Listed On</th>
            <th>Founded Date</th>
            <th>Branches</th>
            <th>Tax Free</th>
            <th>DIGC Insures</th>
            <th>Key Facts</th>
            <th>Min Investment</th>
            <th>Locking Period</th>
            <th>Compounding Frequency</th>
            <th>Exit Penalty</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {banks.map((bank) => (
            <tr key={bank._id}>
              <td>{isEditing === bank._id ? <input type="text" name="logoUrl" value={bank.logoUrl} onChange={(e) => handleInputChange(e, bank._id)} /> : bank.logoUrl}</td>
              <td>{isEditing === bank._id ? <input type="text" name="name" value={bank.name} onChange={(e) => handleInputChange(e, bank._id)} /> : bank.name}</td>
              <td>{isEditing === bank._id ? <input type="number" name="return2y" value={bank.return2y || ""} onChange={(e) => handleInputChange(e, bank._id)} /> : bank.return2y}</td>
              <td>{isEditing === bank._id ? <input type="number" name="return5y" value={bank.return5y || ""} onChange={(e) => handleInputChange(e, bank._id)} /> : bank.return5y}</td>
              <td>{isEditing === bank._id ? <input type="number" name="return6y" value={bank.return6y || ""} onChange={(e) => handleInputChange(e, bank._id)} /> : bank.return6y}</td>
              <td>{isEditing === bank._id ? <input type="number" name="maxFdRate" value={bank.maxFdRate || ""} onChange={(e) => handleInputChange(e, bank._id)} /> : bank.maxFdRate}</td>
              <td>{isEditing === bank._id ? <input type="number" name="bankAum" value={bank.bankAum || ""} onChange={(e) => handleInputChange(e, bank._id)} /> : bank.bankAum}</td>
              <td>{isEditing === bank._id ? <input type="number" name="rating" value={bank.rating || ""} onChange={(e) => handleInputChange(e, bank._id)} /> : bank.rating}</td>
              <td>{isEditing === bank._id ? <input type="number" name="capitalRatio" value={bank.capitalRatio || ""} onChange={(e) => handleInputChange(e, bank._id)} /> : bank.capitalRatio}</td>
              <td>{isEditing === bank._id ? <input type="text" name="description" value={bank.description} onChange={(e) => handleInputChange(e, bank._id)} /> : bank.description}</td>
              <td>{isEditing === bank._id ? <input type="text" name="ceo" value={bank.ceo} onChange={(e) => handleInputChange(e, bank._id)} /> : bank.ceo}</td>
              <td>{isEditing === bank._id ? <input type="text" name="ceoPhotoUrl" value={bank.ceoPhotoUrl} onChange={(e) => handleInputChange(e, bank._id)} /> : bank.ceoPhotoUrl}</td>
              <td>{isEditing === bank._id ? <input type="text" name="meanTime" value={bank.meanTime} onChange={(e) => handleInputChange(e, bank._id)} /> : bank.meanTime}</td>
              <td>{isEditing === bank._id ? <input type="text" name="companyType" value={bank.companyType} onChange={(e) => handleInputChange(e, bank._id)} /> : bank.companyType}</td>
              <td>{isEditing === bank._id ? <input type="text" name="listedOn" value={bank.listedOn} onChange={(e) => handleInputChange(e, bank._id)} /> : bank.listedOn}</td>
              <td>{isEditing === bank._id ? <input type="date" name="bankFoundedDate" value={bank.bankFoundedDate?.split("T")[0] || ""} onChange={(e) => handleInputChange(e, bank._id)} /> : bank.bankFoundedDate?.split("T")[0]}</td>
              <td>{isEditing === bank._id ? <input type="number" name="numberOfBranches" value={bank.numberOfBranches || ""} onChange={(e) => handleInputChange(e, bank._id)} /> : bank.numberOfBranches}</td>
              <td>{isEditing === bank._id ? <input type="checkbox" name="taxFree" checked={bank.taxFree} onChange={(e) => handleInputChange(e, bank._id)} /> : bank.taxFree ? "Yes" : "No"}</td>
              <td>{isEditing === bank._id ? <input type="checkbox" name="digcInsures" checked={bank.digcInsures} onChange={(e) => handleInputChange(e, bank._id)} /> : bank.digcInsures ? "Yes" : "No"}</td>
              <td>{isEditing === bank._id ? <input type="text" name="keyFacts" value={bank.keyFacts} onChange={(e) => handleInputChange(e, bank._id)} /> : bank.keyFacts}</td>
              <td>{isEditing === bank._id ? <input type="number" name="minInvestment" value={bank.minInvestment || ""} onChange={(e) => handleInputChange(e, bank._id)} /> : bank.minInvestment}</td>
              <td>{isEditing === bank._id ? <input type="text" name="lockingPeriod" value={bank.lockingPeriod} onChange={(e) => handleInputChange(e, bank._id)} /> : bank.lockingPeriod}</td>
              <td>{isEditing === bank._id ? <input type="text" name="compoundingFrequency" value={bank.compoundingFrequency} onChange={(e) => handleInputChange(e, bank._id)} /> : bank.compoundingFrequency}</td>
              <td>{isEditing === bank._id ? <input type="text" name="exitPenalty" value={bank.exitPenalty} onChange={(e) => handleInputChange(e, bank._id)} /> : bank.exitPenalty}</td>
              <td>
                {isEditing === bank._id ? (
                  <button className="update-button" onClick={() => handleUpdateBank(bank._id)}>Save</button>
                ) : (
                  <button onClick={() => setIsEditing(bank._id)}>Edit</button>
                )}
              </td>
            </tr>
          ))}
          {newBank && (
            <tr>
              <td><input type="text" name="logoUrl" placeholder="Enter Logo URL" value={newBank.logoUrl || ""} onChange={(e) => handleInputChange(e)} /></td>
              <td><input type="text" name="name" placeholder="Enter Name" value={newBank.name || ""} onChange={(e) => handleInputChange(e)} /></td>
              <td><input type="number" name="return2y" placeholder="Enter 2Y Return" value={newBank.return2y || ""} onChange={(e) => handleInputChange(e)} /></td>
              <td><input type="number" name="return5y" placeholder="Enter 5Y Return" value={newBank.return5y || ""} onChange={(e) => handleInputChange(e)} /></td>
              <td><input type="number" name="return6y" placeholder="Enter 6Y Return" value={newBank.return6y || ""} onChange={(e) => handleInputChange(e)} /></td>
              <td><input type="number" name="maxFdRate" placeholder="Enter Max FD Rate" value={newBank.maxFdRate || ""} onChange={(e) => handleInputChange(e)} /></td>
              <td><input type="number" name="bankAum" placeholder="Enter AUM" value={newBank.bankAum || ""} onChange={(e) => handleInputChange(e)} /></td>
              <td><input type="number" name="rating" placeholder="Enter Rating" value={newBank.rating || ""} onChange={(e) => handleInputChange(e)} /></td>
              <td><input type="number" name="capitalRatio" placeholder="Enter Capital Ratio" value={newBank.capitalRatio || ""} onChange={(e) => handleInputChange(e)} /></td>
              <td><input type="text" name="description" placeholder="Enter Description" value={newBank.description || ""} onChange={(e) => handleInputChange(e)} /></td>
              <td><input type="text" name="ceo" placeholder="Enter CEO" value={newBank.ceo || ""} onChange={(e) => handleInputChange(e)} /></td>
              <td><input type="text" name="ceoPhotoUrl" placeholder="Enter CEO Photo URL" value={newBank.ceoPhotoUrl || ""} onChange={(e) => handleInputChange(e)} /></td>
              <td><input type="text" name="meanTime" placeholder="Enter Mean Time" value={newBank.meanTime || ""} onChange={(e) => handleInputChange(e)} /></td>
              <td><input type="text" name="companyType" placeholder="Enter Company Type" value={newBank.companyType || ""} onChange={(e) => handleInputChange(e)} /></td>
              <td><input type="text" name="listedOn" placeholder="Enter Listed On" value={newBank.listedOn || ""} onChange={(e) => handleInputChange(e)} /></td>
              <td><input type="date" name="bankFoundedDate" placeholder="Enter Founded Date" value={newBank.bankFoundedDate || ""} onChange={(e) => handleInputChange(e)} /></td>
              <td><input type="number" name="numberOfBranches" placeholder="Enter Branches" value={newBank.numberOfBranches || ""} onChange={(e) => handleInputChange(e)} /></td>
              <td><input type="checkbox" name="taxFree" checked={newBank.taxFree || false} onChange={(e) => handleInputChange(e)} /></td>
              <td><input type="checkbox" name="digcInsures" checked={newBank.digcInsures || false} onChange={(e) => handleInputChange(e)} /></td>
              <td><input type="text" name="keyFacts" placeholder="Enter Key Facts" value={newBank.keyFacts || ""} onChange={(e) => handleInputChange(e)} /></td>
              <td><input type="number" name="minInvestment" placeholder="Enter Min Investment" value={newBank.minInvestment || ""} onChange={(e) => handleInputChange(e)} /></td>
              <td><input type="text" name="lockingPeriod" placeholder="Enter Locking Period" value={newBank.lockingPeriod || ""} onChange={(e) => handleInputChange(e)} /></td>
              <td><input type="text" name="compoundingFrequency" placeholder="Enter Compounding Frequency" value={newBank.compoundingFrequency || ""} onChange={(e) => handleInputChange(e)} /></td>
              <td><input type="text" name="exitPenalty" placeholder="Enter Exit Penalty" value={newBank.exitPenalty || ""} onChange={(e) => handleInputChange(e)} /></td>
              <td><button className="update-button" onClick={handleSaveNewBank}>Save</button></td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BankTable;







// import React, { useState, useEffect } from "react";
// import { getBanks, createBank, updateBank } from "../services/bankService";
// import "../index.css";

// const BankTable = () => {
//   const [banks, setBanks] = useState([]);
//   const [newBank, setNewBank] = useState(null);
//   const [isEditing, setIsEditing] = useState(null);
//   const [expandedRows, setExpandedRows] = useState({});

//   useEffect(() => {
//     const fetchBanks = async () => {
//       const bankData = await getBanks();
//       setBanks(bankData);
//     };
//     fetchBanks();
//   }, []);

//   const handleInputChange = (e, bankId = null) => {
//     const { name, value } = e.target;
//     if (bankId) {
//       setBanks(banks.map(bank => bank._id === bankId ? { ...bank, [name]: value } : bank));
//     } else {
//       setNewBank({ ...newBank, [name]: value });
//     }
//   };

//   const handleSaveNewBank = async () => {
//     if (newBank) {
//       const savedBank = await createBank(newBank);
//       setBanks([...banks, savedBank]);
//       setNewBank(null);
//     }
//   };

//   const handleUpdateBank = async (bankId) => {
//     const bankToUpdate = banks.find((bank) => bank._id === bankId);
//     await updateBank(bankId, bankToUpdate);
//     setIsEditing(null);
//   };

//   const toggleRowExpansion = (bankId) => {
//     setExpandedRows((prev) => ({
//       ...prev,
//       [bankId]: !prev[bankId]
//     }));
//   };

//   return (
//     <div className="App">
//       <h2>Bank Management</h2>

//       <button className="add-button" onClick={() => setNewBank({ logoUrl: "", name: "", /* other fields */ })}>
//         Add Bank
//       </button>

//       <table>
//         <thead>
//           <tr>
//             <th>Logo URL</th>
//             <th>Name</th>
//             <th>2Y Return</th>
//             <th>5Y Return</th>
//             <th>6Y Return</th>
//             <th>Max FD Rate</th>
//             <th>Bank AUM</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {banks.map((bank) => (
//             <tr key={bank._id}>
//               <td>{bank.logoUrl}</td>
//               <td>{bank.name}</td>
//               <td>{bank.return2y}</td>
//               <td>{bank.return5y}</td>
//               <td>{bank.return6y}</td>
//               <td>{bank.maxFdRate}</td>
//               <td>{bank.bankAum}</td>
//               <td>
//                 <button onClick={() => setIsEditing(bank._id)}>
//                   {isEditing === bank._id ? "Save" : "Edit"}
//                 </button>
//                 <button className="toggle-button" onClick={() => toggleRowExpansion(bank._id)}>
//                   {expandedRows[bank._id] ? "˄" : "˅"}
//                 </button>
//               </td>
//               {/* Expanded row: additional fields */}
//               {expandedRows[bank._id] && (
//                 <>
//                   <td>{bank.otherField1}</td>
//                   <td>{bank.otherField2}</td>
//                   <td>{bank.otherField3}</td>
//                   {/* Repeat for additional fields as needed */}
//                 </>
//               )}
//             </tr>
//           ))}
//           {newBank && (
//             <tr>
//               <td>
//                 <input
//                   type="text"
//                   name="logoUrl"
//                   placeholder="Enter Logo URL"
//                   value={newBank.logoUrl || ""}
//                   onChange={(e) => handleInputChange(e)}
//                 />
//               </td>
//               <td>
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Enter Bank Name"
//                   value={newBank.name || ""}
//                   onChange={(e) => handleInputChange(e)}
//                 />
//               </td>
//               {/* Add input fields for other columns as needed */}
//               <td>
//                 <button className="update-button" onClick={handleSaveNewBank}>Save</button>
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default BankTable;
