// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const LectureList = () => {
//   const [lectures, setLectures] = useState([]);
//   useEffect(()=>{ axios.get("http://localhost:5000/lectures").then(res=>setLectures(res.data)) }, []);

//   const handleDelete = async (id) => {
//     await axios.delete(`http://localhost:5000/lectures/${id}`);
//     setLectures(lectures.filter(l=>l._id!==id));
//   };

//   return (
//     <ul>
//       {lectures.map(l=>(
//         <li key={l._id}>{l.title} - {l.description} <button onClick={()=>handleDelete(l._id)}>Delete</button></li>
//       ))}
//     </ul>
//   );
// };

// export default LectureList;

import QRCode from "qrcode.react";
{lectures.map((lec) => (
  <div key={lec._id} className="card">
    <h3>{lec.subject}</h3>

    {/* ✅ QR Code */}
    <QRCode value={lec._id} />

    <p>Scan this to mark attendance</p>
  </div>
))}