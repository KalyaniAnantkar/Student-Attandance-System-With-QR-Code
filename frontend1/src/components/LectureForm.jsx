import React, { useState } from "react";
import axios from "axios";

const LectureForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const teacherId = "YOUR_TEACHER_ID"; // replace dynamically after login
    await axios.post("http://localhost:5000/lectures", { title, description, teacherId });
    setTitle(""); setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)} required/>
      <textarea placeholder="Description" value={description} onChange={e=>setDescription(e.target.value)}/>
      <button type="submit">Add Lecture</button>
    </form>
  );
};

export default LectureForm;