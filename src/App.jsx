import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Table from './components/Table'
function App() {

  const initialFormData = {
    name: "",
    email: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  
  const handleFormData = (key, value) => {
 setFormData((prev) => ({
  ...prev, [key]:value
}))
  }

  const [tableData, settableData] = useState([]);
  
  const handleSubmit = (e) => {
    e.preventDefault();

   
    if (editIndex === null) {
      settableData((prev) => [...prev, formData]);
      setFormData(initialFormData); 
   }
    
      
      else {
        const updatedTable = [...tableData];           // create a copy
        updatedTable[editIndex] = formData;            // update the right item
        settableData(updatedTable);                    // set the new array
        setFormData(initialFormData);                  // clear form
        seteditIndex(null);                            // reset edit mode
      }
      
   

  }
  
  const [editIndex, seteditIndex] = useState(null)

  const handleEdit = (index) => {

    const clickeditem = tableData[index];
    setFormData(clickeditem);
    seteditIndex(index)

  }

  const handleDelete = (index) => {
    // console.log("coming", index)
    tableData.splice(index, 1);
    // console.log(tableData)
    settableData([...tableData])


  }
  
  return (
    <>
      <Form
        handleFormData={handleFormData}
        handleSubmit={handleSubmit}
        formData={formData}
        editIndex={editIndex}
      />

      <Table
        tableData={tableData}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </>
  );
}

export default App
