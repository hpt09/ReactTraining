import React, { useState } from 'react';
const AddDefect = ({ addDefect }) => {
    const [category, setCategory] = useState('');
    const [description,setDescription] = useState('');
    const [priority,setPriority] = useState('');
   
    const handleSubmit = (e) => {
        e.preventDefault();
        const newDefect={category:category,description:description,priority:priority}
        addDefect(newDefect);
        setCategory('');
        setDescription('');
        setPriority('')
    }
    return (
        <form onSubmit={handleSubmit}>
            Category:<input type='text' value={category} onChange={(e) => setCategory(e.target.value)} /><br/><br/>
            Description: <input type='text' value={description} onChange={(e) => setDescription(e.target.value)} /><br/><br/>
            Priority: <input type='text' value={priority} onChange={(e) => setPriority(e.target.value)} /><br/><br/>
            <input type='submit' value='Add Defect' />
        </form>
    );
}
export default AddDefect;