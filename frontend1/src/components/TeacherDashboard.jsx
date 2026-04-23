// // import { useState, useEffect } from "react";
// // import axios from "axios";
// // import { QRCodeCanvas } from "qrcode.react";
// // import "./teacherDashboard.css";

// // export default function TeacherDashboard() {
// //   const [form, setForm] = useState({
// //     title: "",
// //     description: "",
// //     videoUrl: "",
// //     date: "",
// //     time: "",
// //     ampm: "AM",
// //   });

// //   const [lectures, setLectures] = useState([]);
// //   const [selectedLecture, setSelectedLecture] = useState(null);

// //   // ✅ FETCH LECTURES ON LOAD
// //   useEffect(() => {
// //     fetchLectures();
// //   }, []);

// //   const fetchLectures = async () => {
// //     try {
// //       const res = await axios.get("http://localhost:5000/lectures");
// //       setLectures(res.data);
// //     } catch (err) {
// //       console.log(err);
// //       alert("Error fetching lectures ❌");
// //     }
// //   };

// //   // ✅ HANDLE INPUT
// //   const handleChange = (e) => {
// //     setForm({ ...form, [e.target.name]: e.target.value });
// //   };

// //   // ✅ FORMAT TIME (AM/PM → 24hr)
// //   const formatTime = (time, ampm) => {
// //     if (!time) return "";

// //     let [hours, minutes] = time.split(":");

// //     if (ampm === "PM" && hours !== "12") {
// //       hours = String(parseInt(hours) + 12);
// //     }

// //     if (ampm === "AM" && hours === "12") {
// //       hours = "00";
// //     }

// //     return `${hours}:${minutes}`;
// //   };

// //   // ✅ ADD LECTURE
// //   const addLecture = async () => {
// //     try {
// //       const formattedTime = formatTime(form.time, form.ampm);

// //       const res = await axios.post(
// //         "http://localhost:5000/lectures",
// //         {
// //           ...form,
// //           time: formattedTime,
// //         }
// //       );

// //       setLectures([...lectures, res.data]);

// //       setForm({
// //         title: "",
// //         description: "",
// //         videoUrl: "",
// //         date: "",
// //         time: "",
// //         ampm: "AM",
// //       });

// //       alert("Lecture Added ✅");
// //     } catch (err) {
// //       console.log(err);
// //       alert("Error adding lecture ❌");
// //     }
// //   };

// //   // ✅ DELETE LECTURE
// //   const deleteLecture = async (id) => {
// //     try {
// //       await axios.delete(`http://localhost:5000/lectures/${id}`);

// //       setLectures(lectures.filter((lec) => lec._id !== id));

// //       alert("Lecture Deleted ✅");
// //     } catch (err) {
// //       console.log(err);
// //       alert("Error deleting lecture ❌");
// //     }
// //   };

// //   return (
// //     <div className="dashboard">
// //       <h1>Teacher Dashboard</h1>

// //       {/* ADD LECTURE FORM */}
// //       <div className="form-card">
// //         <h3>Add Lecture</h3>

// //         <input
// //           name="title"
// //           placeholder="Lecture Title"
// //           value={form.title}
// //           onChange={handleChange}
// //         />

// //         <textarea
// //           name="description"
// //           placeholder="Description"
// //           value={form.description}
// //           onChange={handleChange}
// //         />

// //         <input
// //           name="videoUrl"
// //           placeholder="Paste Video URL"
// //           value={form.videoUrl}
// //           onChange={handleChange}
// //         />

// //         <input
// //           type="date"
// //           name="date"
// //           value={form.date}
// //           onChange={handleChange}
// //         />

// //         {/* TIME + AMPM */}
// //         <div style={{ display: "flex", gap: "10px" }}>
// //           <input
// //             type="time"
// //             name="time"
// //             value={form.time}
// //             onChange={handleChange}
// //           />

// //           <select
// //             name="ampm"
// //             value={form.ampm}
// //             onChange={handleChange}
// //           >
// //             <option value="AM">AM</option>
// //             <option value="PM">PM</option>
// //           </select>
// //         </div>

// //         <button onClick={addLecture}>Add Lecture</button>
// //       </div>

// //       {/* LECTURE LIST */}
// //       <div className="lecture-grid">
// //         {lectures.map((lec) => (
// //           <div key={lec._id} className="lecture-card">
// //             <h3>{lec.title}</h3>

// //             <p>{lec.description}</p>

// //             <p><b>Date:</b> {lec.date}</p>

// //             <p>
// //               <b>Time:</b>{" "}
// //               {lec.time &&
// //                 new Date(`1970-01-01T${lec.time}`).toLocaleTimeString([], {
// //                   hour: "2-digit",
// //                   minute: "2-digit",
// //                   hour12: true,
// //                 })}
// //             </p>

// //             <p>
// //               <b>Posted:</b>{" "}
// //               {lec.createdAt
// //                 ? new Date(lec.createdAt).toLocaleDateString()
// //                 : "N/A"}
// //             </p>

// //             {lec.videoUrl && (
// //               <a href={lec.videoUrl} target="_blank" rel="noreferrer">
// //                 ▶ Watch Video
// //               </a>
// //             )}

// //             {/* ACTION BUTTONS */}
// //             <div style={{ marginTop: "10px" }}>
// //               <button onClick={() => setSelectedLecture(lec)}>
// //                 Show QR
// //               </button>

// //               <button
// //                 onClick={() => deleteLecture(lec._id)}
// //                 style={{ marginLeft: "10px", background: "red", color: "white" }}
// //               >
// //                 Delete
// //               </button>
// //             </div>
// //           </div>
// //         ))}
// //       </div>

// //       {/* QR CODE SECTION */}
// //       {selectedLecture && (
// //         <div style={{ textAlign: "center", marginTop: "30px" }}>
// //           <h3>Scan for Attendance</h3>

// //           <QRCodeCanvas
// //             value={JSON.stringify({
// //               lectureId: selectedLecture._id,
// //             })}
// //             size={200}
// //           />

// //           <p>{selectedLecture.title}</p>

// //           <button onClick={() => setSelectedLecture(null)}>
// //             Close QR
// //           </button>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }


// import { useState, useEffect } from "react";
// import axios from "axios";
// import { QRCodeCanvas } from "qrcode.react";
// import "./teacherDashboard.css";

// export default function TeacherDashboard() {
//   const [form, setForm] = useState({
//     title: "",
//     description: "",
//     videoUrl: "",
//     date: "",
//     time: "",
//     ampm: "AM",
//   });

//   const [lectures, setLectures] = useState([]);
//   const [selectedLecture, setSelectedLecture] = useState(null);

//   // ✅ Fetch lectures
//   useEffect(() => {
//     fetchLectures();
//   }, []);

//   const fetchLectures = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/lectures");
//       setLectures(res.data);
//     } catch (err) {
//       console.log(err);
//       alert("Error fetching lectures ❌");
//     }
//   };

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   // ✅ Convert AM/PM → 24hr
//   const formatTime = (time, ampm) => {
//     if (!time) return "";

//     let [hours, minutes] = time.split(":");

//     if (ampm === "PM" && hours !== "12") {
//       hours = String(parseInt(hours) + 12);
//     }

//     if (ampm === "AM" && hours === "12") {
//       hours = "00";
//     }

//     return `${hours}:${minutes}`;
//   };

//   // ✅ Add Lecture
//   const addLecture = async () => {
//     try {
//       const formattedTime = formatTime(form.time, form.ampm);

//       const res = await axios.post("http://localhost:5000/lectures", {
//         ...form,
//         time: formattedTime,
//       });

//       setLectures([...lectures, res.data]);

//       setForm({
//         title: "",
//         description: "",
//         videoUrl: "",
//         date: "",
//         time: "",
//         ampm: "AM",
//       });

//       alert("Lecture Added ✅");
//     } catch (err) {
//       console.log(err);
//       alert("Error adding lecture ❌");
//     }
//   };

//   // ✅ Delete Lecture
//   const deleteLecture = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/lectures/${id}`);
//       setLectures(lectures.filter((lec) => lec._id !== id));
//       alert("Lecture Deleted ✅");
//     } catch (err) {
//       console.log(err);
//       alert("Error deleting ❌");
//     }
//   };

//   return (
//     <div className="dashboard">
//       <h1>Teacher Dashboard</h1>

//       {/* FORM */}
//       <div className="form-card">
//         <h3>Add Lecture</h3>

//         <input
//           name="title"
//           placeholder="Lecture Title"
//           value={form.title}
//           onChange={handleChange}
//         />

//         <textarea
//           name="description"
//           placeholder="Description"
//           value={form.description}
//           onChange={handleChange}
//         />

//         <input
//           name="videoUrl"
//           placeholder="Paste Video URL"
//           value={form.videoUrl}
//           onChange={handleChange}
//         />

//         <input
//           type="date"
//           name="date"
//           value={form.date}
//           onChange={handleChange}
//         />

//         <div style={{ display: "flex", gap: "10px" }}>
//           <input
//             type="time"
//             name="time"
//             value={form.time}
//             onChange={handleChange}
//           />

//           <select
//             name="ampm"
//             value={form.ampm}
//             onChange={handleChange}
//           >
//             <option value="AM">AM</option>
//             <option value="PM">PM</option>
//           </select>
//         </div>

//         <button onClick={addLecture}>Add Lecture</button>
//       </div>

//       {/* LECTURES */}
//       <div className="lecture-grid">
//         {lectures.map((lec) => (
//           <div key={lec._id} className="lecture-card">
//             <h3>{lec.title}</h3>

//             <p>{lec.description}</p>

//             <p><b>Date:</b> {lec.date}</p>

//             <p>
//               <b>Time:</b>{" "}
//               {lec.time &&
//                 new Date(`1970-01-01T${lec.time}`).toLocaleTimeString([], {
//                   hour: "2-digit",
//                   minute: "2-digit",
//                   hour12: true,
//                 })}
//             </p>

//             <p>
//               <b>Posted:</b>{" "}
//               {lec.createdAt
//                 ? new Date(lec.createdAt).toLocaleDateString()
//                 : "N/A"}
//             </p>

//             {lec.videoUrl && (
//               <a href={lec.videoUrl} target="_blank" rel="noreferrer">
//                 ▶ Watch Video
//               </a>
//             )}

//             {/* ✅ BUTTONS WITH GAP */}
//             <div className="btn-group">
//               <button onClick={() => setSelectedLecture(lec)}>
//                 Show QR
//               </button>

//               <button onClick={() => deleteLecture(lec._id)}>
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* QR */}
//       {selectedLecture && (
//         <div style={{ textAlign: "center", marginTop: "20px" }}>
//           <h3>Scan for Attendance</h3>

//           <QRCodeCanvas
//             value={JSON.stringify({
//               lectureId: selectedLecture._id,
//             })}
//             size={200}
//           />

//           <p>{selectedLecture.title}</p>

//           <button onClick={() => setSelectedLecture(null)}>
//             Close
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }



// import { useState, useEffect } from "react";
// import axios from "axios";
// import { QRCodeCanvas } from "qrcode.react";
// import "./teacherDashboard.css";

// export default function TeacherDashboard() {
//   const [form, setForm] = useState({
//     title: "",
//     description: "",
//     videoUrl: "",
//     date: "",
//     time: "",
//     ampm: "AM",
//   });

//   const [lectures, setLectures] = useState([]);
//   const [selectedLecture, setSelectedLecture] = useState(null);

//   // ✅ FETCH LECTURES
//   useEffect(() => {
//     fetchLectures();
//   }, []);

//   const fetchLectures = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/lectures");
//       setLectures(res.data);
//     } catch (err) {
//       console.log(err);
//       alert("Error fetching lectures ❌");
//     }
//   };

//   // ✅ INPUT HANDLE
//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   // ✅ FORMAT TIME (AM/PM → 24hr)
//   const formatTime = (time, ampm) => {
//     if (!time) return "";

//     let [hours, minutes] = time.split(":");

//     if (ampm === "PM" && hours !== "12") {
//       hours = String(parseInt(hours) + 12);
//     }

//     if (ampm === "AM" && hours === "12") {
//       hours = "00";
//     }

//     return `${hours}:${minutes}`;
//   };

//   // ✅ DISPLAY TIME SAFE
//   const formatDisplayTime = (time) => {
//     if (!time || !time.includes(":")) return "Not set";

//     return new Date(`1970-01-01T${time}`).toLocaleTimeString([], {
//       hour: "2-digit",
//       minute: "2-digit",
//       hour12: true,
//     });
//   };

//   // ✅ ADD LECTURE
//   const addLecture = async () => {
//     try {
//       const formattedTime = formatTime(form.time, form.ampm);

//       console.log("Sending time:", formattedTime); // debug

//       const res = await axios.post("http://localhost:5000/lectures", {
//         ...form,
//         time: formattedTime,
//       });

//       setLectures([...lectures, res.data]);

//       setForm({
//         title: "",
//         description: "",
//         videoUrl: "",
//         date: "",
//         time: "",
//         ampm: "AM",
//       });

//       alert("Lecture Added ✅");
//     } catch (err) {
//       console.log(err);
//       alert("Error adding lecture ❌");
//     }
//   };

//   // ✅ DELETE LECTURE
//   const deleteLecture = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/lectures/${id}`);

//       setLectures(lectures.filter((lec) => lec._id !== id));

//       alert("Lecture Deleted ✅");
//     } catch (err) {
//       console.log(err);
//       alert("Error deleting ❌");
//     }
//   };

//   return (
//     <div className="dashboard">
//       <h1>Teacher Dashboard</h1>

//       {/* ADD FORM */}
//       <div className="form-card">
//         <h3>Add Lecture</h3>

//         <input
//           name="title"
//           placeholder="Lecture Title"
//           value={form.title}
//           onChange={handleChange}
//         />

//         <textarea
//           name="description"
//           placeholder="Description"
//           value={form.description}
//           onChange={handleChange}
//         />

//         <input
//           name="videoUrl"
//           placeholder="Paste Video URL"
//           value={form.videoUrl}
//           onChange={handleChange}
//         />

//         <input
//           type="date"
//           name="date"
//           value={form.date}
//           onChange={handleChange}
//         />

//         {/* TIME + AMPM */}
//         <div style={{ display: "flex", gap: "10px" }}>
//           <input
//             type="time"
//             name="time"
//             value={form.time}
//             onChange={handleChange}
//           />

//           <select
//             name="ampm"
//             value={form.ampm}
//             onChange={handleChange}
//           >
//             <option value="AM">AM</option>
//             <option value="PM">PM</option>
//           </select>
//         </div>

//         <button onClick={addLecture}>Add Lecture</button>
//       </div>

//       {/* LECTURE LIST */}
//       <div className="lecture-grid">
//         {lectures.map((lec) => (
//           <div key={lec._id} className="lecture-card">
//             <h3>{lec.title}</h3>

//             <p>{lec.description}</p>

//             <p><b>Date:</b> {lec.date || "Not set"}</p>

//             <p>
//               <b>Time:</b> {formatDisplayTime(lec.time)}
//             </p>

//             <p>
//               <b>Posted:</b>{" "}
//               {lec.createdAt
//                 ? new Date(lec.createdAt).toLocaleDateString()
//                 : "N/A"}
//             </p>

//             {lec.videoUrl && (
//               <a href={lec.videoUrl} target="_blank" rel="noreferrer">
//                 ▶ Watch Video
//               </a>
//             )}

//             {/* BUTTONS */}
//             <div className="btn-group">
//               <button onClick={() => setSelectedLecture(lec)}>
//                 Show QR
//               </button>

//               <button onClick={() => deleteLecture(lec._id)}>
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* QR SECTION */}
//       {selectedLecture && (
//         <div className="qr-box">
//           <h3>Scan for Attendance</h3>

//           <QRCodeCanvas
//             value={JSON.stringify({
//               lectureId: selectedLecture._id,
//             })}
//             size={200}
//           />

//           <p>{selectedLecture.title}</p>

//           <button onClick={() => setSelectedLecture(null)}>
//             Close
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }



















// import { useState, useEffect } from "react";
// import axios from "axios";
// import "./TeacherDashboard.css";

// export default function TeacherDashboard() {
//   const [lectures, setLectures] = useState([]);
//   const [form, setForm] = useState({
//     title: "",
//     description: "",
//     videoUrl: "",
//     date: "",
//     time: "",
//   });

//   // ✅ Fetch lectures
//   const fetchLectures = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/lectures");
//       setLectures(res.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     fetchLectures();
//   }, []);

//   // ✅ Handle input
//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // ✅ Add lecture
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await axios.post("http://localhost:5000/lectures", form);

//       alert("Lecture added ✅");

//       setForm({
//         title: "",
//         description: "",
//         videoUrl: "",
//         date: "",
//         time: "",
//       });

//       fetchLectures();
//     } catch (err) {
//       alert("Error adding lecture ❌");
//     }
//   };

//   // ✅ Delete lecture
//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/lectures/${id}`);
//       fetchLectures();
//     } catch (err) {
//       alert("Error deleting ❌");
//     }
//   };

//   return (
//     <div className="dashboard">

//       {/* FORM */}
//       <form onSubmit={handleSubmit} className="form-card">
//         <h3>Add Lecture</h3>

//         <input
//           name="title"
//           placeholder="Lecture Title"
//           value={form.title}
//           onChange={handleChange}
//           required
//         />

//         <textarea
//           name="description"
//           placeholder="Description"
//           value={form.description}
//           onChange={handleChange}
//         />

//         <input
//           name="videoUrl"
//           placeholder="Paste Video URL"
//           value={form.videoUrl}
//           onChange={handleChange}
//         />

//         <input
//           type="date"
//           name="date"
//           value={form.date}
//           onChange={handleChange}
//         />

//         <input
//           type="time"
//           name="time"
//           value={form.time}
//           onChange={handleChange}
//         />

//         <button type="submit">Add Lecture</button>
//       </form>

//       {/* LECTURE LIST */}
//       <div className="lecture-grid">
//         {lectures.map((lec) => (
//           <div key={lec._id} className="lecture-card">
//             <h4>{lec.title}</h4>
//             <p>{lec.description}</p>
//             <p>Date: {lec.date}</p>
//             <p>Time: {lec.time}</p>

//             <a href={lec.videoUrl} target="_blank" rel="noreferrer">
//               ▶ Watch Video
//             </a>

//             <div className="btn-group">
//               <button className="qr-btn">Show QR</button>

//               <button
//                 className="delete-btn"
//                 onClick={() => handleDelete(lec._id)}
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//     </div>
//   );
// }











// import { useState, useEffect } from "react";
// import axios from "axios";
// import "./TeacherDashboard.css";

// export default function TeacherDashboard() {
//   const [lectures, setLectures] = useState([]);
//   const [form, setForm] = useState({
//     title: "",
//     description: "",
//     videoUrl: "",
//     date: "",
//     time: "",
//   });

//   // ✅ Convert time to AM/PM
//   const formatTime = (time) => {
//     if (!time) return "";

//     let [hours, minutes] = time.split(":");
//     hours = parseInt(hours);

//     const ampm = hours >= 12 ? "PM" : "AM";
//     hours = hours % 12 || 12;

//     return `${hours}:${minutes} ${ampm}`;
//   };

//   // ✅ Fetch lectures
//   const fetchLectures = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/lectures");
//       setLectures(res.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     fetchLectures();
//   }, []);

//   // ✅ Handle input
//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // ✅ Add lecture
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await axios.post("http://localhost:5000/lectures", form);

//       alert("Lecture added ✅");

//       setForm({
//         title: "",
//         description: "",
//         videoUrl: "",
//         date: "",
//         time: "",
//       });

//       fetchLectures();
//     } catch (err) {
//       alert("Error adding lecture ❌");
//     }
//   };

//   // ✅ Delete lecture
//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/lectures/${id}`);
//       fetchLectures();
//     } catch (err) {
//       alert("Error deleting ❌");
//     }
//   };

//   return (
//     <div className="dashboard">

//       {/* FORM */}
//       <form onSubmit={handleSubmit} className="form-card">
//         <h3>Add Lecture</h3>

//         <input
//           name="title"
//           placeholder="Lecture Title"
//           value={form.title}
//           onChange={handleChange}
//           required
//         />

//         <textarea
//           name="description"
//           placeholder="Description"
//           value={form.description}
//           onChange={handleChange}
//         />

//         <input
//           name="videoUrl"
//           placeholder="Paste Video URL"
//           value={form.videoUrl}
//           onChange={handleChange}
//         />

//         <input
//           type="date"
//           name="date"
//           value={form.date}
//           onChange={handleChange}
//         />

//         <input
//           type="time"
//           name="time"
//           value={form.time}
//           onChange={handleChange}
//         />

//         <button type="submit">Add Lecture</button>
//       </form>

//       {/* LECTURE LIST */}
//       <div className="lecture-grid">
//         {lectures.map((lec) => (
//           <div key={lec._id} className="lecture-card">
//             <h4>{lec.title}</h4>
//             <p>{lec.description}</p>
//             <p>Date: {lec.date}</p>
//             <p>Time: {formatTime(lec.time)}</p>

//             <a href={lec.videoUrl} target="_blank" rel="noreferrer">
//               ▶ Watch Video
//             </a>

//             <div className="btn-group">
//               <button className="qr-btn">Show QR</button>

//               <button
//                 className="delete-btn"
//                 onClick={() => handleDelete(lec._id)}
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//     </div>
//   );
// }



// import { useState, useEffect } from "react";
// import axios from "axios";
// import QRCode from "qrcode.react";
// import { QRCodeCanvas } from "qrcode.react"; ✅
// import "./TeacherDashboard.css";

// export default function TeacherDashboard() {
//   const [lectures, setLectures] = useState([]);
//   const [title, setTitle] = useState("");
//   const [selectedLecture, setSelectedLecture] = useState(null);

//   const fetchLectures = async () => {
//     const res = await axios.get("http://localhost:5000/lectures");
//     setLectures(res.data);
//   };

//   useEffect(() => {
//     fetchLectures();
//   }, []);

//   const addLecture = async () => {
//     await axios.post("http://localhost:5000/lectures", { title });
//     setTitle("");
//     fetchLectures();
//   };

//   return (
//     <div className="dashboard">
//       <h2>Teacher Dashboard</h2>

//       <input
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         placeholder="Lecture Title"
//       />
//       <button onClick={addLecture}>Add</button>

//       {lectures.map((lec) => (
//         <div key={lec._id} className="lecture-card">
//           <h3>{lec.title}</h3>

//           <button onClick={() => setSelectedLecture(lec)}>
//             Show QR
//           </button>
//         </div>
//       ))}

//       {selectedLecture && (
//         <div>
//           <h3>{selectedLecture.title}</h3>

//           <QRCode value={selectedLecture._id} size={200} />
//         </div>
//       )}
//     </div>
//   );
// }

// import { useState, useEffect } from "react";
// import axios from "axios";
// import QRCode from "qrcode.react";
// import "./TeacherDashboard.css";

// export default function TeacherDashboard() {
//   const [lectures, setLectures] = useState([]);
//   const [title, setTitle] = useState("");
//   const [selectedLecture, setSelectedLecture] = useState(null);

//   const fetchLectures = async () => {
//     const res = await axios.get("http://localhost:5000/lectures");
//     setLectures(res.data);
//   };

//   useEffect(() => {
//     fetchLectures();
//   }, []);

//   const addLecture = async () => {
//     await axios.post("http://localhost:5000/lectures", { title });
//     setTitle("");
//     fetchLectures();
//   };

//   return (
//     <div className="dashboard">
//       <h2>Teacher Dashboard</h2>

//       <input
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         placeholder="Lecture Title"
//       />
//       <button onClick={addLecture}>Add</button>

//       {lectures.map((lec) => (
//         <div key={lec._id} className="lecture-card">
//           <h3>{lec.title}</h3>

//           <button onClick={() => setSelectedLecture(lec)}>
//             Show QR
//           </button>
//         </div>
//       ))}

//       {selectedLecture && (
//         <div>
//           <h3>{selectedLecture.title}</h3>

//           <QRCode value={selectedLecture._id} size={200} />
//         </div>
//       )}
//     </div>
//   );
// }


// this is ideal form of teacher not Qr in this

// import { useState, useEffect } from "react";
// import axios from "axios";
// import "./TeacherDashboard.css";

// export default function TeacherDashboard() {
//   const [lectures, setLectures] = useState([]);
//   const [form, setForm] = useState({
//     title: "",
//     description: "",
//     videoUrl: "",
//     date: "",
//     time: "",
//   });

//   // ✅ Convert time to AM/PM
//   const formatTime = (time) => {
//     if (!time) return "";

//     let [hours, minutes] = time.split(":");
//     hours = parseInt(hours);

//     const ampm = hours >= 12 ? "PM" : "AM";
//     hours = hours % 12 || 12;

//     return `${hours}:${minutes} ${ampm}`;
//   };

//   // ✅ Fetch lectures
//   const fetchLectures = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/lectures");
//       setLectures(res.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     fetchLectures();
//   }, []);

//   // ✅ Handle input
//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // ✅ Add lecture
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await axios.post("http://localhost:5000/lectures", form);

//       alert("Lecture added ✅");

//       setForm({
//         title: "",
//         description: "",
//         videoUrl: "",
//         date: "",
//         time: "",
//       });

//       fetchLectures();
//     } catch (err) {
//       alert("Error adding lecture ❌");
//     }
//   };

//   // ✅ Delete lecture
//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/lectures/${id}`);
//       fetchLectures();
//     } catch (err) {
//       alert("Error deleting ❌");
//     }
//   };

//   return (
//     <div className="dashboard">

//       {/* FORM */}
//       <form onSubmit={handleSubmit} className="form-card">
//         <h3>Add Lecture</h3>

//         <input
//           name="title"
//           placeholder="Lecture Title"
//           value={form.title}
//           onChange={handleChange}
//           required
//         />

//         <textarea
//           name="description"
//           placeholder="Description"
//           value={form.description}
//           onChange={handleChange}
//         />

//         <input
//           name="videoUrl"
//           placeholder="Paste Video URL"
//           value={form.videoUrl}
//           onChange={handleChange}
//         />

//         <input
//           type="date"
//           name="date"
//           value={form.date}
//           onChange={handleChange}
//         />

//         <input
//           type="time"
//           name="time"
//           value={form.time}
//           onChange={handleChange}
//         />

//         <button type="submit">Add Lecture</button>
//       </form>

//       {/* LECTURE LIST */}
//       <div className="lecture-grid">
//         {lectures.map((lec) => (
//           <div key={lec._id} className="lecture-card">
//             <h4>{lec.title}</h4>
//             <p>{lec.description}</p>
//             <p>Date: {lec.date}</p>
//             <p>Time: {formatTime(lec.time)}</p>

//             <a href={lec.videoUrl} target="_blank" rel="noreferrer">
//               ▶ Watch Video
//             </a>

//             <div className="btn-group">
//               <button className="qr-btn">Show QR</button>

//               <button
//                 className="delete-btn"
//                 onClick={() => handleDelete(lec._id)}
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//     </div>
//   );
// }











//


// import { useState, useEffect } from "react";
// import axios from "axios";
// import { QRCodeCanvas } from "qrcode.react";
// import "./TeacherDashboard.css";

// export default function TeacherDashboard() {
//   const [lectures, setLectures] = useState([]);
//   const [form, setForm] = useState({
//     title: "",
//     description: "",
//     videoUrl: "",
//     date: "",
//     time: "",
//   });
//   const [selectedLecture, setSelectedLecture] = useState(null);

//   const fetchLectures = async () => {
//     const res = await axios.get("http://localhost:5000/lectures");
//     setLectures(res.data);
//   };

//   useEffect(() => {
//     fetchLectures();
//   }, []);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await axios.post("http://localhost:5000/lectures", form);
//     setForm({ title:"", description:"", videoUrl:"", date:"", time:"" });
//     fetchLectures();
//   };

//   return (
//     <div className="dashboard">

//       <form onSubmit={handleSubmit} className="form-card">
//         <h3>Add Lecture</h3>

//         <input name="title" value={form.title} onChange={handleChange} required />
//         <textarea name="description" value={form.description} onChange={handleChange}/>
//         <input name="videoUrl" value={form.videoUrl} onChange={handleChange}/>
//         <input type="date" name="date" value={form.date} onChange={handleChange}/>
//         <input type="time" name="time" value={form.time} onChange={handleChange}/>

//         <button type="submit">Add Lecture</button>
//       </form>

//       <div className="lecture-grid">
//         {lectures.map((lec) => (
//           <div key={lec._id} className="lecture-card">
//             <h4>{lec.title}</h4>

//             <button onClick={() => setSelectedLecture(lec)}>
//               Show QR
//             </button>
//           </div>
//         ))}
//       </div>

//       {selectedLecture && (
//         <div style={{ textAlign: "center" }}>
//           <h3>{selectedLecture.title}</h3>
//           <QRCodeCanvas value={selectedLecture._id} size={200} />
//         </div>
//       )}
//     </div>
//   );
// }













///eg



// import { useState, useEffect } from "react";
// import axios from "axios";
// import { QRCodeCanvas } from "qrcode.react";
// import "./TeacherDashboard.css";

// export default function TeacherDashboard() {
//   const [lectures, setLectures] = useState([]);
//   const [selectedLecture, setSelectedLecture] = useState(null);

//   const [form, setForm] = useState({
//     title: "",
//     description: "",
//     videoUrl: "",
//     date: "",
//     time: "",
//   });

//   // ✅ Convert time to AM/PM
//   const formatTime = (time) => {
//     if (!time) return "";

//     let [hours, minutes] = time.split(":");
//     hours = parseInt(hours);

//     const ampm = hours >= 12 ? "PM" : "AM";
//     hours = hours % 12 || 12;

//     return `${hours}:${minutes} ${ampm}`;
//   };

//   // ✅ Fetch lectures
//   const fetchLectures = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/lectures");
//       setLectures(res.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     fetchLectures();
//   }, []);

//   // ✅ Handle input
//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // ✅ Add lecture
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await axios.post("http://localhost:5000/lectures", form);

//       alert("Lecture added ✅");

//       setForm({
//         title: "",
//         description: "",
//         videoUrl: "",
//         date: "",
//         time: "",
//       });

//       fetchLectures();
//     } catch (err) {
//       alert("Error adding lecture ❌");
//     }
//   };

//   // ✅ Delete lecture
//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/lectures/${id}`);
//       fetchLectures();
//     } catch (err) {
//       alert("Error deleting ❌");
//     }
//   };

//   return (
//     <div className="dashboard">

//       {/* FORM */}
//       <form onSubmit={handleSubmit} className="form-card">
//         <h3>Add Lecture</h3>

//         <input
//           name="title"
//           placeholder="Lecture Title"
//           value={form.title}
//           onChange={handleChange}
//           required
//         />

//         <textarea
//           name="description"
//           placeholder="Description"
//           value={form.description}
//           onChange={handleChange}
//         />

//         <input
//           name="videoUrl"
//           placeholder="Paste Video URL"
//           value={form.videoUrl}
//           onChange={handleChange}
//         />

//         <input
//           type="date"
//           name="date"
//           value={form.date}
//           onChange={handleChange}
//         />

//         <input
//           type="time"
//           name="time"
//           value={form.time}
//           onChange={handleChange}
//         />

//         <button type="submit">Add Lecture</button>
//       </form>

//       {/* LECTURE LIST */}
//       <div className="lecture-grid">
//         {lectures.map((lec) => (
//           <div key={lec._id} className="lecture-card">
//             <h4>{lec.title}</h4>
//             <p>{lec.description}</p>
//             <p>Date: {lec.date}</p>
//             <p>Time: {formatTime(lec.time)}</p>

//             <a href={lec.videoUrl} target="_blank" rel="noreferrer">
//               ▶ Watch Video
//             </a>

//             <div className="btn-group">
//               {/* ✅ SHOW QR BUTTON */}
//               <button
//                 className="qr-btn"
//                 onClick={() => setSelectedLecture(lec)}
//               >
//                 Show QR
//               </button>

//               <button
//                 className="delete-btn"
//                 onClick={() => handleDelete(lec._id)}
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* ✅ QR DISPLAY */}
//       {selectedLecture && (
//         <div style={{ textAlign: "center", marginTop: "20px" }}>
//           <h3>QR for: {selectedLecture.title}</h3>

//           <QRCodeCanvas
//             value={selectedLecture._id}
//             size={220}
//           />

//           <br /><br />

//           <button onClick={() => setSelectedLecture(null)}>
//             Close QR
//           </button>
//         </div>
//       )}

//     </div>
//   );
// }




























// import { useState, useEffect } from "react";
// import axios from "axios";
// import { QRCodeCanvas } from "qrcode.react";
// import "./TeacherDashboard.css";

// export default function TeacherDashboard() {
//   const [lectures, setLectures] = useState([]);
//   const [selectedLecture, setSelectedLecture] = useState(null);

//   const [form, setForm] = useState({
//     title: "",
//     description: "",
//     videoUrl: "",
//     date: "",
//     time: "",
//   });

//   // 🔥 CHANGE THIS (important for mobile)
//   const BASE_URL = "http://192.168.1.5:5000"; 
//   // 👉 Replace with your PC IP (not localhost)

//   // ✅ Convert time
//   const formatTime = (time) => {
//     if (!time) return "";
//     let [hours, minutes] = time.split(":");
//     hours = parseInt(hours);
//     const ampm = hours >= 12 ? "PM" : "AM";
//     hours = hours % 12 || 12;
//     return `${hours}:${minutes} ${ampm}`;
//   };

//   // ✅ Fetch lectures
//   const fetchLectures = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/lectures");
//       setLectures(res.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     fetchLectures();
//   }, []);

//   // ✅ Handle input
//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   // ✅ Add lecture
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:5000/lectures", form);
//       alert("Lecture added ✅");

//       setForm({
//         title: "",
//         description: "",
//         videoUrl: "",
//         date: "",
//         time: "",
//       });

//       fetchLectures();
//     } catch (err) {
//       alert("Error adding lecture ❌");
//     }
//   };

//   // ✅ Delete
//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/lectures/${id}`);
//       fetchLectures();
//     } catch {
//       alert("Error deleting ❌");
//     }
//   };

//   return (
//     <div className="dashboard">

//       {/* FORM */}
//       <form onSubmit={handleSubmit} className="form-card">
//         <h3>Add Lecture</h3>

//         <input
//           name="title"
//           placeholder="Lecture Title"
//           value={form.title}
//           onChange={handleChange}
//           required
//         />

//         <textarea
//           name="description"
//           placeholder="Description"
//           value={form.description}
//           onChange={handleChange}
//         />

//         <input
//           name="videoUrl"
//           placeholder="Paste Video URL"
//           value={form.videoUrl}
//           onChange={handleChange}
//         />

//         <input
//           type="date"
//           name="date"
//           value={form.date}
//           onChange={handleChange}
//         />

//         <input
//           type="time"
//           name="time"
//           value={form.time}
//           onChange={handleChange}
//         />

//         <button type="submit">Add Lecture</button>
//       </form>

//       {/* LECTURES */}
//       <div className="lecture-grid">
//         {lectures.map((lec) => (
//           <div key={lec._id} className="lecture-card">
//             <h4>{lec.title}</h4>
//             <p>{lec.description}</p>
//             <p>Date: {lec.date}</p>
//             <p>Time: {formatTime(lec.time)}</p>

//             <a href={lec.videoUrl} target="_blank" rel="noreferrer">
//               ▶ Watch Video
//             </a>

//             {/* 🔥 DIRECT QR IN CARD (BEST UX) */}
//             {/* <QRCodeCanvas
//               value={`${BASE_URL}/scan?lectureId=${lec._id}&studentId=123&studentName=Kalyani`}
//               size={150}
//             />

//             <p>📱 Scan with mobile</p> */}

//             <div className="btn-group">
//               <button
//                 className="qr-btn"
//                 onClick={() => setSelectedLecture(lec)}
//               >
//                 Show QR
//               </button>

//               <button
//                 className="delete-btn"
//                 onClick={() => handleDelete(lec._id)}
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* OPTIONAL BIG QR */}
//       {selectedLecture && (
//         <div style={{ textAlign: "center", marginTop: "20px" }}>
//           <h3>QR for: {selectedLecture.title}</h3>

//           <QRCodeCanvas
//             value={`${BASE_URL}/scan?lectureId=${selectedLecture._id}&studentId=123&studentName=Kalyani`}
//             size={220}
//           />

//           <br /><br />

//           <button onClick={() => setSelectedLecture(null)}>
//             Close QR
//           </button>
//         </div>
//       )}

//     </div>
//   );
// }


























































// import { useState, useEffect } from "react";
// import axios from "axios";
// import { QRCodeCanvas } from "qrcode.react";
// import "./TeacherDashboard.css";

// export default function TeacherDashboard() {
//   const [lectures, setLectures] = useState([]);
//   const [selectedLecture, setSelectedLecture] = useState(null);

//   const [form, setForm] = useState({
//     title: "",
//     description: "",
//     videoUrl: "",
//     date: "",
//     time: "",
//   });

//   // ✅ YOUR REAL IP (IMPORTANT)
//   const BASE_URL = "http://10.217.219.163:5000";

//   // ✅ Convert time
//   const formatTime = (time) => {
//     if (!time) return "";
//     let [hours, minutes] = time.split(":");
//     hours = parseInt(hours);
//     const ampm = hours >= 12 ? "PM" : "AM";
//     hours = hours % 12 || 12;
//     return `${hours}:${minutes} ${ampm}`;
//   };

//   // ✅ Fetch lectures
//   const fetchLectures = async () => {
//     try {
//       const res = await axios.get(`${BASE_URL}/lectures`);
//       setLectures(res.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     fetchLectures();
//   }, []);

//   // ✅ Handle input
//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   // ✅ Add lecture
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post(`${BASE_URL}/lectures`, form);

//       alert("Lecture added ✅");

//       setForm({
//         title: "",
//         description: "",
//         videoUrl: "",
//         date: "",
//         time: "",
//       });

//       fetchLectures();
//     } catch (err) {
//       alert("Error adding lecture ❌");
//     }
//   };

//   // ✅ Delete lecture
//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`${BASE_URL}/lectures/${id}`);
//       fetchLectures();
//     } catch {
//       alert("Error deleting ❌");
//     }
//   };

//   return (
//     <div className="dashboard">

//       {/* ================= FORM ================= */}
//       <form onSubmit={handleSubmit} className="form-card">
//         <h3>Add Lecture</h3>

//         <input
//           name="title"
//           placeholder="Lecture Title"
//           value={form.title}
//           onChange={handleChange}
//           required
//         />

//         <textarea
//           name="description"
//           placeholder="Description"
//           value={form.description}
//           onChange={handleChange}
//         />

//         <input
//           name="videoUrl"
//           placeholder="Paste Video URL"
//           value={form.videoUrl}
//           onChange={handleChange}
//         />

//         <input
//           type="date"
//           name="date"
//           value={form.date}
//           onChange={handleChange}
//         />

//         <input
//           type="time"
//           name="time"
//           value={form.time}
//           onChange={handleChange}
//         />

//         <button type="submit">Add Lecture</button>
//       </form>

//       {/* ================= LECTURES ================= */}
//       <div className="lecture-grid">
//         {lectures.map((lec) => (
//           <div key={lec._id} className="lecture-card">
//             <h4>{lec.title}</h4>
//             <p>{lec.description}</p>
//             <p>Date: {lec.date}</p>
//             <p>Time: {formatTime(lec.time)}</p>

//             {lec.videoUrl && (
//               <a href={lec.videoUrl} target="_blank" rel="noreferrer">
//                 ▶ Watch Video
//               </a>
//             )}

//             <div className="btn-group">
//               <button
//                 className="qr-btn"
//                 onClick={() => setSelectedLecture(lec)}
//               >
//                 Show QR
//               </button>

//               <button
//                 className="delete-btn"
//                 onClick={() => handleDelete(lec._id)}
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* ================= QR DISPLAY ================= */}
//       {selectedLecture && (
//         <div style={{ textAlign: "center", marginTop: "20px" }}>
//           <h3>QR for: {selectedLecture.title}</h3>

//           <QRCodeCanvas
//             value={`${BASE_URL}/scan?lectureId=${selectedLecture._id}&studentId=123&studentName=Kalyani`}
//             size={220}
//           />

//           <p>📱 Scan with mobile</p>

//           <br />

//           <button onClick={() => setSelectedLecture(null)}>
//             Close QR
//           </button>
//         </div>
//       )}

//     </div>
//   );
// }














// this is best teacher add lecture form   his is message is display QR code in student mobile

// import { useState, useEffect } from "react";
// import axios from "axios";
// import { QRCodeCanvas } from "qrcode.react";
// import "./TeacherDashboard.css";

// export default function TeacherDashboard() {
//   const [lectures, setLectures] = useState([]);
//   const [selectedLecture, setSelectedLecture] = useState(null);

//   const [form, setForm] = useState({
//     title: "",
//     description: "",
//     videoUrl: "",
//     date: "",
//     time: "",
//   });

//   // ✅ YOUR REAL IP
//   const BASE_URL = "http://10.217.219.163:5000";

//   // ✅ Convert time
//   const formatTime = (time) => {
//     if (!time) return "";
//     let [hours, minutes] = time.split(":");
//     hours = parseInt(hours);
//     const ampm = hours >= 12 ? "PM" : "AM";
//     hours = hours % 12 || 12;
//     return `${hours}:${minutes} ${ampm}`;
//   };

//   // ✅ Fetch lectures
//   const fetchLectures = async () => {
//     try {
//       const res = await axios.get(`${BASE_URL}/lectures`);
//       setLectures(res.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     fetchLectures();
//   }, []);

//   // ✅ Handle input
//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   // ✅ Add lecture
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post(`${BASE_URL}/lectures`, form);

//       alert("Lecture added ✅");

//       setForm({
//         title: "",
//         description: "",
//         videoUrl: "",
//         date: "",
//         time: "",
//       });

//       fetchLectures();
//     } catch (err) {
//       alert("Error adding lecture ❌");
//     }
//   };

//   // ✅ Delete lecture
//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`${BASE_URL}/lectures/${id}`);
//       fetchLectures();
//     } catch {
//       alert("Error deleting ❌");
//     }
//   };

//   return (
//     <div className="dashboard">

//       {/* ================= FORM ================= */}
//       <form onSubmit={handleSubmit} className="form-card">
//         <h3>Add Lecture</h3>

//         <input
//           name="title"
//           placeholder="Lecture Title"
//           value={form.title}
//           onChange={handleChange}
//           required
//         />

//         <textarea
//           name="description"
//           placeholder="Description"
//           value={form.description}
//           onChange={handleChange}
//         />

//         <input
//           name="videoUrl"
//           placeholder="Paste Video URL"
//           value={form.videoUrl}
//           onChange={handleChange}
//         />

//         <input type="date" name="date" value={form.date} onChange={handleChange} />
//         <input type="time" name="time" value={form.time} onChange={handleChange} />

//         <button type="submit">Add Lecture</button>
//       </form>

//       {/* ================= LECTURES ================= */}
//       <div className="lecture-grid">
//         {lectures.map((lec) => (
//           <div key={lec._id} className="lecture-card">
//             <h4>{lec.title}</h4>
//             <p>{lec.description}</p>
//             <p>Date: {lec.date}</p>
//             <p>Time: {formatTime(lec.time)}</p>

//             {lec.videoUrl && (
//               <a href={lec.videoUrl} target="_blank" rel="noreferrer">
//                 ▶ Watch Video
//               </a>
//             )}

//             <div className="btn-group">
//               <button onClick={() => setSelectedLecture(lec)}>
//                 Show QR
//               </button>

//               <button onClick={() => handleDelete(lec._id)}>
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* ================= QR DISPLAY ================= */}
//       {selectedLecture && (
//         <div style={{ textAlign: "center", marginTop: "20px" }}>
//           <h3>QR for: {selectedLecture.title}</h3>

//           {/* ✅ FIX: only lectureId in QR */}
//           {/* <QRCodeCanvas
//             value={`${BASE_URL}/scan?lectureId=${selectedLecture._id}`}
//             size={220}
//           /> */}
               
//             <QRCodeCanvas
//       value={`${BASE_URL}/scan?lectureId=${selectedLecture._id}`}
//       size={220}
//     />

//           <p>📱 Scan with mobile</p>

//           <button onClick={() => setSelectedLecture(null)}>
//             Close QR
//           </button>
//         </div>
//       )}
//     </div>


      
//   );
// }












//this is message is display 
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { QRCodeCanvas } from "qrcode.react";
// import "./TeacherDashboard.css";

// export default function TeacherDashboard() {
//   const [lectures, setLectures] = useState([]);
//   const [selectedLecture, setSelectedLecture] = useState(null);
//   const [attendance, setAttendance] = useState([]);

//   const [form, setForm] = useState({
//     title: "",
//     description: "",
//     videoUrl: "",
//     date: "",
//     time: "",
//   });

//   const BASE_URL = "http://10.217.219.163:5000";

//   // ✅ Fetch lectures
//   const fetchLectures = async () => {
//     const res = await axios.get(`${BASE_URL}/lectures`);
//     setLectures(res.data);
//   };

//   // ✅ Fetch attendance
//   const fetchAttendance = async () => {
//     const res = await axios.get(`${BASE_URL}/attendance`);
//     setAttendance(res.data);
//   };

//   useEffect(() => {
//     fetchLectures();
//     fetchAttendance();

//     // 🔥 Auto refresh every 3 sec
//     const interval = setInterval(() => {
//       fetchAttendance();
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   // Form change
//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   // Add lecture
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await axios.post(`${BASE_URL}/lectures`, form);

//     alert("Lecture added ✅");

//     setForm({
//       title: "",
//       description: "",
//       videoUrl: "",
//       date: "",
//       time: "",
//     });

//     fetchLectures();
//   };

//   // Delete lecture
//   const handleDelete = async (id) => {
//     await axios.delete(`${BASE_URL}/lectures/${id}`);
//     fetchLectures();
//   };

//   return (
//     <div className="dashboard">

//       <h2>👩‍🏫 Teacher Dashboard</h2>

//       {/* ================= ADD LECTURE ================= */}
//       <form onSubmit={handleSubmit}>
//         <input name="title" placeholder="Title" value={form.title} onChange={handleChange} required />
//         <input name="description" placeholder="Description" value={form.description} onChange={handleChange} />
//         <input name="videoUrl" placeholder="Video URL" value={form.videoUrl} onChange={handleChange} />
//         <input type="date" name="date" value={form.date} onChange={handleChange} />
//         <input type="time" name="time" value={form.time} onChange={handleChange} />
//         <button type="submit">Add Lecture</button>
//       </form>

//       {/* ================= LECTURES ================= */}
//       <h3>📚 Lectures</h3>
//       {lectures.map((lec) => (
//         <div key={lec._id}>
//           <p>{lec.title}</p>

//           <button onClick={() => setSelectedLecture(lec)}>
//             Show QR
//           </button>

//           <button onClick={() => handleDelete(lec._id)}>
//             Delete
//           </button>
//         </div>
//       ))}

//       {/* ================= QR ================= */}
//       {selectedLecture && (
//         <div>
//           <h3>QR for {selectedLecture.title}</h3>

//           <QRCodeCanvas
//             value={`${BASE_URL}/scan?lectureId=${selectedLecture._id}`}
//             size={200}
//           />

//           <p>Scan using mobile</p>
//         </div>
//       )}

//       {/* ================= ATTENDANCE TABLE ================= */}
//       <h3>📊 Attendance</h3>

//       <table border="1" width="100%">
//         <thead>
//           <tr>
//             <th>Lecture</th>
//             <th>Student</th>
//             <th>Status</th>
//             <th>Date</th>
//           </tr>
//         </thead>

//         <tbody>
//           {attendance.map((a, i) => (
//             <tr key={i}>
//               <td>{a.lectureTitle}</td>
//               <td>{a.studentName}</td>
//               <td>{a.status}</td>
//               <td>{a.date}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }




//new
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { QRCodeCanvas } from "qrcode.react";
// import "./TeacherDashboard.css";

// export default function TeacherDashboard() {
//   const [lectures, setLectures] = useState([]);
//   const [selectedLecture, setSelectedLecture] = useState(null);
//   const [attendance, setAttendance] = useState([]); // ✅ NEW

//   const [form, setForm] = useState({
//     title: "",
//     description: "",
//     videoUrl: "",
//     date: "",
//     time: "",
//   });

//   const BASE_URL = "http://10.217.219.163:5000";

//   // ✅ Format time
//   const formatTime = (time) => {
//     if (!time) return "";
//     let [hours, minutes] = time.split(":");
//     hours = parseInt(hours);
//     const ampm = hours >= 12 ? "PM" : "AM";
//     hours = hours % 12 || 12;
//     return `${hours}:${minutes} ${ampm}`;
//   };

//   // ================= FETCH =================

//   const fetchLectures = async () => {
//     try {
//       const res = await axios.get(`${BASE_URL}/lectures`);
//       setLectures(res.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   // ✅ NEW: Fetch attendance
//   const fetchAttendance = async () => {
//     try {
//       const res = await axios.get(`${BASE_URL}/attendance`);
//       setAttendance(res.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     fetchLectures();
//     fetchAttendance();
//   }, []);

//   // ================= FORM =================

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post(`${BASE_URL}/lectures`, form);

//       alert("Lecture added ✅");

//       setForm({
//         title: "",
//         description: "",
//         videoUrl: "",
//         date: "",
//         time: "",
//       });

//       fetchLectures();
//     } catch {
//       alert("Error adding lecture ❌");
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`${BASE_URL}/lectures/${id}`);
//       fetchLectures();
//     } catch {
//       alert("Error deleting ❌");
//     }
//   };

//   // ================= UI =================

//   return (
//     <div className="dashboard">

//       {/* ================= FORM ================= */}
//       <form onSubmit={handleSubmit} className="form-card">
//         <h3>Add Lecture</h3>

//         <input
//           name="title"
//           placeholder="Lecture Title"
//           value={form.title}
//           onChange={handleChange}
//           required
//         />

//         <textarea
//           name="description"
//           placeholder="Description"
//           value={form.description}
//           onChange={handleChange}
//         />

//         <input
//           name="videoUrl"
//           placeholder="Video URL"
//           value={form.videoUrl}
//           onChange={handleChange}
//         />

//         <input type="date" name="date" value={form.date} onChange={handleChange} />
//         <input type="time" name="time" value={form.time} onChange={handleChange} />

//         <button type="submit">Add Lecture</button>
//       </form>

//       {/* ================= LECTURES ================= */}
//       <div className="lecture-grid">
//         {lectures.map((lec) => (
//           <div key={lec._id} className="lecture-card">
//             <h4>{lec.title}</h4>
//             <p>{lec.description}</p>
//             <p>Date: {lec.date}</p>
//             <p>Time: {formatTime(lec.time)}</p>

//             <div className="btn-group">
//               <button onClick={() => setSelectedLecture(lec)}>
//                 Show QR
//               </button>

//               <button onClick={() => handleDelete(lec._id)}>
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* ================= QR ================= */}
//       {selectedLecture && (
//         <div style={{ textAlign: "center", marginTop: "20px" }}>
//           <h3>QR for: {selectedLecture.title}</h3>

//           <QRCodeCanvas
//             value={`${BASE_URL}/scan?lectureId=${selectedLecture._id}`}
//             size={220}
//           />

//           <p>📱 Scan with mobile</p>

//           <button onClick={() => setSelectedLecture(null)}>
//             Close QR
//           </button>
//         </div>
//       )}

//       {/* ================= ATTENDANCE TABLE ================= */}
//       <h3>📊 Attendance</h3>

//       <table border="1" width="100%">
//         <thead>
//           <tr>
//             <th>Lecture</th>
//             <th>Student</th>
//             <th>Status</th>
//             <th>Date</th>
//           </tr>
//         </thead>

//         <tbody>
//           {/* {attendance.map((a, i) => (
//             <tr key={i}>
//               <td>{a.lectureTitle}</td>
//               <td>{a.studentName}</td>
//               <td>{a.status}</td>
//               <td>{new Date(a.date).toLocaleString()}</td>
//             </tr>
//           ))} */}
//           {attendance.map((a, i) => (
//   <tr key={i}>
//     <td>{a.lectureTitle}</td>
//     <td>{a.studentName}</td>
//     <td>{a.status}</td>

//     <td>
//       {a.date
//         ? new Date(a.date).toLocaleString("en-IN", {
//             day: "numeric",
//             month: "numeric",
//             year: "numeric",
//             hour: "numeric",
//             minute: "2-digit",
//             hour12: true,
//           })
//         : "No Date"}
//     </td>

//   </tr>
// ))}
//         </tbody>
//       </table>

//     </div>
//   );
// }

















//
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { QRCodeCanvas } from "qrcode.react";
// import "./TeacherDashboard.css";

// export default function TeacherDashboard() {
//   const [lectures, setLectures] = useState([]);
//   const [selectedLecture, setSelectedLecture] = useState(null);
//   const [attendance, setAttendance] = useState([]);

//   const [form, setForm] = useState({
//     title: "",
//     description: "",
//     videoUrl: "",
//     date: "",
//     time: "",
//   });

//   const BASE_URL = "http://10.217.219.163:5000";

//   // ================= FORMAT TIME =================
//   const formatTime = (time) => {
//     if (!time) return "";
//     let [hours, minutes] = time.split(":");
//     hours = parseInt(hours);
//     const ampm = hours >= 12 ? "PM" : "AM";
//     hours = hours % 12 || 12;
//     return `${hours}:${minutes} ${ampm}`;
//   };

//   // ================= FETCH =================
//   const fetchLectures = async () => {
//     try {
//       const res = await axios.get(`${BASE_URL}/lectures`);
//       setLectures(res.data);
//     } catch (err) {
//       console.error("Lecture fetch error:", err);
//     }
//   };

//   const fetchAttendance = async () => {
//     try {
//       const res = await axios.get(`${BASE_URL}/attendance`);
//       setAttendance(res.data);
//     } catch (err) {
//       console.error("Attendance fetch error:", err);
//     }
//   };

//   useEffect(() => {
//     fetchLectures();
//     fetchAttendance();
//   }, []);

//   // ================= FORM =================
//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // ✅ VALIDATION
//     if (!form.title) {
//       alert("Title is required ❌");
//       return;
//     }

//     try {
//       const res = await axios.post(`${BASE_URL}/lectures`, form);

//       alert("Lecture added ✅");

//       setForm({
//         title: "",
//         description: "",
//         videoUrl: "",
//         date: "",
//         time: "",
//       });

//       fetchLectures();
//     } catch (err) {
//       console.error("Add lecture error:", err.response || err);
//       alert("Error adding lecture ❌ (check backend / network)");
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`${BASE_URL}/lectures/${id}`);
//       fetchLectures();
//     } catch (err) {
//       console.error(err);
//       alert("Error deleting ❌");
//     }
//   };

//   // ================= UI =================
//   return (
//     <div className="dashboard">

//       {/* ================= FORM ================= */}
//       <form onSubmit={handleSubmit} className="form-card">
//         <h3>Add Lecture</h3>

//         <input
//           name="title"
//           placeholder="Lecture Title"
//           value={form.title}
//           onChange={handleChange}
//           required
//         />

//         <textarea
//           name="description"
//           placeholder="Description"
//           value={form.description}
//           onChange={handleChange}
//         />

//         <input
//           name="videoUrl"
//           placeholder="Video URL"
//           value={form.videoUrl}
//           onChange={handleChange}
//         />

//         <input
//           type="date"
//           name="date"
//           value={form.date}
//           onChange={handleChange}
//         />

//         <input
//           type="time"
//           name="time"
//           value={form.time}
//           onChange={handleChange}
//         />

//         <button type="submit">Add Lecture</button>
//       </form>

//       {/* ================= LECTURES ================= */}
//       <div className="lecture-grid">
//         {lectures.map((lec) => (
//           <div key={lec._id} className="lecture-card">
//             <h4>{lec.title}</h4>
//             <p>{lec.description}</p>
//             <p>Date: {lec.date}</p>
//             <p>Time: {formatTime(lec.time)}</p>

//             <div className="btn-group">
//               <button onClick={() => setSelectedLecture(lec)}>
//                 Show QR
//               </button>

//               <button onClick={() => handleDelete(lec._id)}>
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* ================= QR ================= */}
//       {selectedLecture && (
//         <div style={{ textAlign: "center", marginTop: "20px" }}>
//           <h3>QR for: {selectedLecture.title}</h3>

//           {/* ✅ FIXED QR (with student data) */}
//           <QRCodeCanvas
//             value={`${BASE_URL}/scan?lectureId=${selectedLecture._id}&studentId=123&studentName=Kalyani`}
//             size={220}
//           />

//           <p>📱 Scan with mobile</p>

//           <button onClick={() => setSelectedLecture(null)}>
//             Close QR
//           </button>
//         </div>
//       )}

//       {/* ================= ATTENDANCE ================= */}
//       <h3>📊 Attendance</h3>

//       <table border="1" width="100%">
//         <thead>
//           <tr>
//             <th>Lecture</th>
//             <th>Student</th>
//             <th>Status</th>
//             <th>Date</th>
//           </tr>
//         </thead>

//         <tbody>
//           {attendance.map((a, i) => (
//             <tr key={i}>
//               <td>{a.lectureTitle}</td>
//               <td>{a.studentName}</td>
//               <td>{a.status}</td>

//               {/* ✅ FIXED DATE */}
//               <td>{a.date || "No Date"}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//     </div>
//   );
// }









//
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { QRCodeCanvas } from "qrcode.react";
// import "./TeacherDashboard.css";

// export default function TeacherDashboard() {
//   const [lectures, setLectures] = useState([]);
//   const [attendance, setAttendance] = useState([]);
//   const [selectedLecture, setSelectedLecture] = useState(null);

//   const [form, setForm] = useState({
//     title: "",
//     description: "",
//     videoUrl: "",
//     date: "",
//     time: "",
//   });

//   // ✅ IMPORTANT: use your current IP (check ipconfig again)
//   const BASE_URL = "http://10.232.51.163:5000";

//   // ================= FETCH =================
//   const fetchLectures = async () => {
//     try {
//       const res = await axios.get(`${BASE_URL}/lectures`);
//       setLectures(res.data);
//     } catch (err) {
//       console.log("Fetch lecture error:", err);
//     }
//   };

//   const fetchAttendance = async () => {
//     try {
//       const res = await axios.get(`${BASE_URL}/attendance`);
//       setAttendance(res.data);
//     } catch (err) {
//       console.log("Fetch attendance error:", err);
//     }
//   };

//   useEffect(() => {
//     fetchLectures();
//     fetchAttendance();
//   }, []);

//   // ================= FORM =================
//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     console.log("Submitting form:", form); // 🔍 DEBUG

//     if (!form.title) {
//       alert("Title required ❌");
//       return;
//     }

//     try {
//       const response = await axios.post(`${BASE_URL}/lectures`, form);

//       console.log("Response:", response.data); // 🔍 DEBUG
//       alert("Lecture Added ✅");

//       // reset form
//       setForm({
//         title: "",
//         description: "",
//         videoUrl: "",
//         date: "",
//         time: "",
//       });

//       fetchLectures();
//     } catch (err) {
//       console.log("ERROR:", err); // 🔥 IMPORTANT
//       alert("Error adding lecture ❌");
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`${BASE_URL}/lectures/${id}`);
//       fetchLectures();
//     } catch {
//       alert("Delete error ❌");
//     }
//   };

//   // ================= UI =================
//   return (
//     <div className="dashboard">

//       {/* ================= FORM ================= */}
//       <form onSubmit={handleSubmit} className="form-card">
//         <h3>Add Lecture</h3>

//         <input
//           type="text"
//           name="title"
//           placeholder="Lecture Title"
//           value={form.title}
//           onChange={handleChange}
//         />

//         <textarea
//           name="description"
//           placeholder="Description"
//           value={form.description}
//           onChange={handleChange}
//         />

//         <input
//           type="text"
//           name="videoUrl"
//           placeholder="Video URL"
//           value={form.videoUrl}
//           onChange={handleChange}
//         />

//         <input
//           type="date"
//           name="date"
//           value={form.date}
//           onChange={handleChange}
//         />

//         <input
//           type="time"
//           name="time"
//           value={form.time}
//           onChange={handleChange}
//         />

//         {/* ✅ FIXED BUTTON */}
//         <button type="submit">Add Lecture</button>
//       </form>

//       {/* ================= LECTURES ================= */}
//       <div className="lecture-grid">
//         {lectures.map((lec) => (
//           <div key={lec._id} className="lecture-card">
//             <h4>{lec.title}</h4>
//             <p>{lec.description}</p>

//             <button onClick={() => setSelectedLecture(lec)}>
//               Show QR
//             </button>

//             <button onClick={() => handleDelete(lec._id)}>
//               Delete
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* ================= QR ================= */}
//       {selectedLecture && (
//         <div style={{ textAlign: "center" }}>
//           <h3>{selectedLecture.title}</h3>

//           <QRCodeCanvas
//             value={`${BASE_URL}/scan?lectureId=${selectedLecture._id}&studentId=123&studentName=Kalyani`}
//             size={200}
//           />
//         </div>
//       )}

//       {/* ================= ATTENDANCE ================= */}
//       <h3>Attendance</h3>

//       <table border="1" width="100%">
//         <thead>
//           <tr>
//             <th>Lecture</th>
//             <th>Student</th>
//             <th>Status</th>
//             <th>Date</th>
//           </tr>
//         </thead>

//         <tbody>
//           {attendance.map((a, i) => (
//             <tr key={i}>
//               <td>{a.lectureTitle}</td>
//               <td>{a.studentName}</td>
//               <td>{a.status}</td>
//               <td>{a.date}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//     </div>
//   );
// }































//
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { QRCodeCanvas } from "qrcode.react";
// import "./TeacherDashboard.css";

// export default function TeacherDashboard() {
//   const [lectures, setLectures] = useState([]);
//   const [attendance, setAttendance] = useState([]);
//   const [selectedLecture, setSelectedLecture] = useState(null);

//   const [form, setForm] = useState({
//     title: "",
//     description: "",
//     videoUrl: "",
//     date: "",
//     time: "",
//   });

//   const BASE_URL = "http://10.232.51.163:5000";

//   // ================= FETCH =================
//   const fetchLectures = async () => {
//     try {
//       const res = await axios.get(`${BASE_URL}/lectures`);
//       setLectures(res.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const fetchAttendance = async () => {
//     try {
//       const res = await axios.get(`${BASE_URL}/attendance`);
//       setAttendance(res.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     fetchLectures();
//     fetchAttendance();
//   }, []);

//   // ================= FORM =================
//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!form.title) {
//       alert("Title required ❌");
//       return;
//     }

//     try {
//       await axios.post(`${BASE_URL}/lectures`, form);

//       alert("Lecture Added ✅");

//       setForm({
//         title: "",
//         description: "",
//         videoUrl: "",
//         date: "",
//         time: "",
//       });

//       fetchLectures();
//     } catch (err) {
//       console.log(err);
//       alert("Error adding lecture ❌");
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`${BASE_URL}/lectures/${id}`);
//       fetchLectures();
//     } catch {
//       alert("Delete error ❌");
//     }
//   };

//   // ================= UI =================
//   return (
//     <div className="dashboard">

//       {/* ================= FORM ================= */}
//       <form onSubmit={handleSubmit} className="form-card">
//         <h3>Add Lecture</h3>

//         <input
//           type="text"
//           name="title"
//           placeholder="Lecture Title"
//           value={form.title}
//           onChange={handleChange}
//         />

//         <textarea
//           name="description"
//           placeholder="Description"
//           value={form.description}
//           onChange={handleChange}
//         />

//         <input
//           type="text"
//           name="videoUrl"
//           placeholder="Video URL"
//           value={form.videoUrl}
//           onChange={handleChange}
//         />

//         <input
//           type="date"
//           name="date"
//           value={form.date}
//           onChange={handleChange}
//         />

//         <input
//           type="time"
//           name="time"
//           value={form.time}
//           onChange={handleChange}
//         />

//         <button type="submit">Add Lecture</button>
//       </form>

//       {/* ================= LECTURES ================= */}
//       <div className="lecture-grid">
//         {lectures.map((lec) => {
//           const qrLink = `${BASE_URL}/scan?lectureId=${lec._id}&studentId=123&studentName=Kalyani`;

//           return (
//             <div key={lec._id} className="lecture-card">
//               <h4>{lec.title}</h4>
//               <p>{lec.description}</p>

//               {/* 🔗 CLICKABLE LINK */}
//               <a href={qrLink} target="_blank" rel="noreferrer">
//                 🔗 Open Attendance Link
//               </a>

//               <br /><br />

//               {/* SHOW QR BUTTON */}
//               <button onClick={() => setSelectedLecture(lec)}>
//                 Show QR
//               </button>

//               <button onClick={() => handleDelete(lec._id)}>
//                 Delete
//               </button>
//             </div>
//           );
//         })}
//       </div>

//       {/* ================= QR POPUP ================= */}
//       {selectedLecture && (
//         <div style={{ textAlign: "center", marginTop: "20px" }}>
//           <h3>{selectedLecture.title}</h3>

//           <QRCodeCanvas
//             value={`${BASE_URL}/scan?lectureId=${selectedLecture._id}&studentId=123&studentName=Kalyani`}
//             size={220}
//           />

//           <p>📱 Scan with mobile</p>

//           {/* ❌ CLOSE BUTTON */}
//           <button onClick={() => setSelectedLecture(null)}>
//             Close QR ❌
//           </button>
//         </div>
//       )}

//       {/* ================= ATTENDANCE ================= */}
//       <h3>📊 Attendance</h3>

//       <table border="1" width="100%">
//         <thead>
//           <tr>
//             <th>Lecture</th>
//             <th>Student</th>
//             <th>Status</th>
//             <th>Date</th>
//           </tr>
//         </thead>

//         <tbody>
//           {attendance.map((a, i) => (
//             <tr key={i}>
//               <td>{a.lectureTitle}</td>
//               <td>{a.studentName}</td>
//               <td>{a.status}</td>
//               <td>{a.date}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//     </div>
//   );
// }







//
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { QRCodeCanvas } from "qrcode.react";
// import "./TeacherDashboard.css";

// export default function TeacherDashboard() {
//   const [lectures, setLectures] = useState([]);
//   const [attendance, setAttendance] = useState([]);
//   const [selectedLecture, setSelectedLecture] = useState(null);

//   const [form, setForm] = useState({
//     title: "",
//     description: "",
//     videoUrl: "",
//     date: "",
//     time: "",
//   });

//   // ✅ YOUR IP
//   const BASE_URL = "http://10.232.51.163:5000";

//   // ================= FETCH =================

//   const fetchLectures = async () => {
//     try {
//       const res = await axios.get(`${BASE_URL}/lectures`);
//       setLectures(res.data);
//     } catch (err) {
//       console.log("Lecture fetch error:", err);
//     }
//   };

//   const fetchAttendance = async () => {
//     try {
//       const res = await axios.get(`${BASE_URL}/attendance`);
//       setAttendance(res.data);
//     } catch (err) {
//       console.log("Attendance fetch error:", err);
//     }
//   };

//   useEffect(() => {
//     fetchLectures();
//     fetchAttendance();
//   }, []);

//   // ================= FORM =================

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!form.title) {
//       alert("Title required ❌");
//       return;
//     }

//     try {
//       await axios.post(`${BASE_URL}/lectures`, form);

//       alert("Lecture Added ✅");

//       setForm({
//         title: "",
//         description: "",
//         videoUrl: "",
//         date: "",
//         time: "",
//       });

//       fetchLectures();
//     } catch (err) {
//       console.log(err);
//       alert("Error adding lecture ❌");
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`${BASE_URL}/lectures/${id}`);
//       fetchLectures();
//     } catch {
//       alert("Delete error ❌");
//     }
//   };

//   // ================= UI =================

//   return (
//     <div className="dashboard">

//       {/* ================= FORM ================= */}
//       <form onSubmit={handleSubmit} className="form-card">
//         <h3>Add Lecture</h3>

//         <input
//           type="text"
//           name="title"
//           placeholder="Lecture Title"
//           value={form.title}
//           onChange={handleChange}
//           required
//         />

//         <textarea
//           name="description"
//           placeholder="Description"
//           value={form.description}
//           onChange={handleChange}
//         />

//         <input
//           type="text"
//           name="videoUrl"
//           placeholder="Paste Lecture Video URL"
//           value={form.videoUrl}
//           onChange={handleChange}
//         />

//         <input
//           type="date"
//           name="date"
//           value={form.date}
//           onChange={handleChange}
//         />

//         <input
//           type="time"
//           name="time"
//           value={form.time}
//           onChange={handleChange}
//         />

//         <button type="submit">Add Lecture</button>
//       </form>

//       {/* ================= LECTURES ================= */}
//       <div className="lecture-grid">
//         {lectures.map((lec) => (
//           <div key={lec._id} className="lecture-card">
//             <h4>{lec.title}</h4>
//             <p>{lec.description}</p>
//             <p>📅 {lec.date}</p>
//             <p>⏰ {lec.time}</p>

//             {/* ✅ VIDEO LINK */}
//             {lec.videoUrl && (
//               <a href={lec.videoUrl} target="_blank" rel="noreferrer">
//                 ▶ Watch Lecture
//               </a>
//             )}

//             <br /><br />

//             {/* QR BUTTON */}
//             <button onClick={() => setSelectedLecture(lec)}>
//               Show QR
//             </button>

//             <button onClick={() => handleDelete(lec._id)}>
//               Delete
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* ================= QR SECTION ================= */}
//       {selectedLecture && (
//         <div style={{ textAlign: "center", marginTop: "20px" }}>
//           <h3>QR for: {selectedLecture.title}</h3>

//           <QRCodeCanvas
//             value={`${BASE_URL}/scan?lectureId=${selectedLecture._id}&studentId=123&studentName=Kalyani`}
//             size={220}
//           />

//           <p>📱 Scan with mobile</p>

//           {/* CLOSE BUTTON */}
//           <button onClick={() => setSelectedLecture(null)}>
//             Close QR ❌
//           </button>
//         </div>
//       )}

//       {/* ================= ATTENDANCE ================= */}
//       <h3>📊 Attendance</h3>

//       <table border="1" width="100%">
//         <thead>
//           <tr>
//             <th>Lecture</th>
//             <th>Student</th>
//             <th>Status</th>
//             <th>Date</th>
//           </tr>
//         </thead>

//         <tbody>
//           {attendance.map((a, i) => (
//             <tr key={i}>
//               <td>{a.lectureTitle}</td>
//               <td>{a.studentName}</td>
//               <td>{a.status}</td>
//               <td>{a.date}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//     </div>
//   );
// }



//
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { QRCodeCanvas } from "qrcode.react";
// import "./TeacherDashboard.css";

// export default function TeacherDashboard() {
//   const [lectures, setLectures] = useState([]);
//   const [attendance, setAttendance] = useState([]);
//   const [selectedLecture, setSelectedLecture] = useState(null);

//   const [form, setForm] = useState({
//     title: "",
//     description: "",
//     videoUrl: "",
//     date: "",
//     time: "",
//   });

//   // 🔥 USE SAME IP EVERYWHERE (VERY IMPORTANT)
//   const BASE_URL = "http://10.217.219.163 ";

//   // ================= FETCH =================
//   const fetchLectures = async () => {
//     try {
//       const res = await axios.get(`${BASE_URL}/lectures`);
//       setLectures(res.data);
//     } catch (err) {
//       console.log("Lecture fetch error:", err);
//     }
//   };

//   const fetchAttendance = async () => {
//     try {
//       const res = await axios.get(`${BASE_URL}/attendance`);
//       setAttendance(res.data);
//     } catch (err) {
//       console.log("Attendance fetch error:", err);
//     }
//   };

//   useEffect(() => {
//     fetchLectures();
//     fetchAttendance();

//     // 🔥 auto refresh attendance
//     const interval = setInterval(() => {
//       fetchAttendance();
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   // ================= FORM =================
//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!form.title) {
//       alert("Title required ❌");
//       return;
//     }

//     try {
//       await axios.post(`${BASE_URL}/lectures`, form);

//       alert("Lecture Added ✅");

//       setForm({
//         title: "",
//         description: "",
//         videoUrl: "",
//         date: "",
//         time: "",
//       });

//       fetchLectures();
//     } catch (err) {
//       console.log("Add lecture error:", err);
//       alert("❌ Cannot connect to server");
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`${BASE_URL}/lectures/${id}`);
//       fetchLectures();
//     } catch {
//       alert("Delete error ❌");
//     }
//   };

//   // ================= UI =================
//   return (
//     <div className="dashboard">

//       {/* ================= FORM ================= */}
//       <form onSubmit={handleSubmit} className="form-card">
//         <h3>Add Lecture</h3>

//         <input
//           type="text"
//           name="title"
//           placeholder="Lecture Title"
//           value={form.title}
//           onChange={handleChange}
//           required
//         />

//         <textarea
//           name="description"
//           placeholder="Description"
//           value={form.description}
//           onChange={handleChange}
//         />

//         <input
//           type="text"
//           name="videoUrl"
//           placeholder="Paste Lecture Video URL"
//           value={form.videoUrl}
//           onChange={handleChange}
//         />

//         <input
//           type="date"
//           name="date"
//           value={form.date}
//           onChange={handleChange}
//         />

//         <input
//           type="time"
//           name="time"
//           value={form.time}
//           onChange={handleChange}
//         />

//         <button type="submit">Add Lecture</button>
//       </form>

//       {/* ================= LECTURES ================= */}
//       <div className="lecture-grid">
//         {lectures.map((lec) => (
//           <div key={lec._id} className="lecture-card">
//             <h4>{lec.title}</h4>
//             <p>{lec.description}</p>
//             <p>📅 {lec.date}</p>
//             <p>⏰ {lec.time}</p>

//             {/* VIDEO LINK */}
//             {lec.videoUrl && (
//               <a href={lec.videoUrl} target="_blank" rel="noreferrer">
//                 ▶ Watch Lecture
//               </a>
//             )}

//             <br /><br />

//             <button onClick={() => setSelectedLecture(lec)}>
//               Show QR
//             </button>

//             <button onClick={() => handleDelete(lec._id)}>
//               Delete
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* ================= QR ================= */}
//       {selectedLecture && (
//         <div style={{ textAlign: "center", marginTop: "20px" }}>
//           <h3>QR for: {selectedLecture.title}</h3>

//           <QRCodeCanvas
//             value={`${BASE_URL}/scan?lectureId=${selectedLecture._id}&studentId=123&studentName=Kalyani`}
//             size={220}
//           />

//           <p>📱 Scan with mobile</p>

//           <button onClick={() => setSelectedLecture(null)}>
//             Close QR ❌
//           </button>
//         </div>
//       )}

//       {/* ================= ATTENDANCE ================= */}
//       <h3>📊 Attendance</h3>

//       <table border="1" width="100%">
//         <thead>
//           <tr>
//             <th>Lecture</th>
//             <th>Student</th>
//             <th>Status</th>
//             <th>Date</th>
//           </tr>
//         </thead>

//         <tbody>
//           {attendance.length === 0 ? (
//             <tr>
//               <td colSpan="4">No attendance yet</td>
//             </tr>
//           ) : (
//             attendance.map((a, i) => (
//               <tr key={i}>
//                 <td>{a.lectureTitle}</td>
//                 <td>{a.studentName}</td>
//                 <td>{a.status}</td>
//                 <td>{a.date}</td>
//               </tr>
//             ))
//           )}
//         </tbody>
//       </table>

//     </div>
//   );
// }








//
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { QRCodeCanvas } from "qrcode.react";
// import "./TeacherDashboard.css";

// export default function TeacherDashboard() {
//   const [lectures, setLectures] = useState([]);
//   const [attendance, setAttendance] = useState([]);
//   const [selectedLecture, setSelectedLecture] = useState(null);

//   const [form, setForm] = useState({
//     title: "",
//     description: "",
//     videoUrl: "",
//     date: "",
//     time: "",
//   });

//   const BASE_URL = "http://localhost:5000"; // ✅ FIXED

//   // FETCH
//   const fetchLectures = async () => {
//     const res = await axios.get(`${BASE_URL}/lectures`);
//     setLectures(res.data);
//   };

//   const fetchAttendance = async () => {
//     const res = await axios.get(`${BASE_URL}/attendance`);
//     setAttendance(res.data);
//   };

//   useEffect(() => {
//     fetchLectures();
//     fetchAttendance();
//   }, []);

//   // FORM
//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await axios.post(`${BASE_URL}/lectures`, form);
//       alert("Lecture Added ✅");

//       setForm({
//         title: "",
//         description: "",
//         videoUrl: "",
//         date: "",
//         time: "",
//       });

//       fetchLectures();
//     } catch (err) {
//       console.log(err);
//       alert("Error adding lecture ❌");
//     }
//   };

//   const handleDelete = async (id) => {
//     await axios.delete(`${BASE_URL}/lectures/${id}`);
//     fetchLectures();
//   };

//   return (
//     <div className="dashboard">

//       <h2>👩‍🏫 Teacher Dashboard</h2>

//       {/* FORM */}
//       <form onSubmit={handleSubmit}>
//         <input name="title" placeholder="Title" value={form.title} onChange={handleChange} required />
//         <input name="description" placeholder="Description" value={form.description} onChange={handleChange} />
//         <input name="videoUrl" placeholder="Video URL" value={form.videoUrl} onChange={handleChange} />
//         <input type="date" name="date" value={form.date} onChange={handleChange} />
//         <input type="time" name="time" value={form.time} onChange={handleChange} />
//         <button type="submit">Add Lecture</button>
//       </form>

//       {/* LECTURES */}
//       {lectures.map((lec) => (
//         <div key={lec._id}>
//           <h3>{lec.title}</h3>

//           {lec.videoUrl && (
//             <a href={lec.videoUrl} target="_blank" rel="noreferrer">
//               ▶ Watch Lecture
//             </a>
//           )}

//           <br />

//           <button onClick={() => setSelectedLecture(lec)}>Show QR</button>
//           <button onClick={() => handleDelete(lec._id)}>Delete</button>
//         </div>
//       ))}

//       {/* QR */}
//       {selectedLecture && (
//         <div>
//           <h3>{selectedLecture.title}</h3>

//           <QRCodeCanvas
//             value={`${BASE_URL}/scan?lectureId=${selectedLecture._id}&studentId=123&studentName=Kalyani`}
//             size={200}
//           />

//           <br />
//           <button onClick={() => setSelectedLecture(null)}>Close QR</button>
//         </div>
//       )}

//       {/* ATTENDANCE */}
//       <h3>📊 Attendance</h3>

//       <table border="1">
//         <thead>
//           <tr>
//             <th>Lecture</th>
//             <th>Student</th>
//             <th>Status</th>
//             <th>Date</th>
//           </tr>
//         </thead>

//         <tbody>
//           {attendance.map((a, i) => (
//             <tr key={i}>
//               <td>{a.lectureTitle}</td>
//               <td>{a.studentName}</td>
//               <td>{a.status}</td>
//               <td>{new Date(a.date).toLocaleString("en-IN")}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//     </div>
//   );
// }











//Good runable  best code
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { QRCodeCanvas } from "qrcode.react";
// import "./TeacherDashboard.css";

// export default function TeacherDashboard() {
//   const [lectures, setLectures] = useState([]);
//   const [attendance, setAttendance] = useState([]);
//   const [selectedLecture, setSelectedLecture] = useState(null);

//   const [form, setForm] = useState({
//     title: "",
//     description: "",
//     videoUrl: "",
//     date: "",
//     time: "",
//   });

//   const BASE_URL = "http://localhost:5000"; // ✅ FIXED

//   // ================= FORMAT TIME =================
//   const formatTime = (time) => {
//     if (!time) return "N/A";
//     let [hours, minutes] = time.split(":");
//     hours = parseInt(hours);
//     const ampm = hours >= 12 ? "PM" : "AM";
//     hours = hours % 12 || 12;
//     return `${hours}:${minutes} ${ampm}`;
//   };

//   // ================= FETCH =================
//   const fetchLectures = async () => {
//     try {
//       const res = await axios.get(`${BASE_URL}/lectures`);
//       setLectures(res.data);
//     } catch (err) {
//       console.log("Lecture fetch error:", err);
//     }
//   };

//   const fetchAttendance = async () => {
//     try {
//       const res = await axios.get(`${BASE_URL}/attendance`);
//       setAttendance(res.data);
//     } catch (err) {
//       console.log("Attendance fetch error:", err);
//     }
//   };

//   useEffect(() => {
//     fetchLectures();
//     fetchAttendance();

//     // auto refresh attendance
//     const interval = setInterval(fetchAttendance, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   // ================= FORM =================
//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!form.title) {
//       alert("Title required ❌");
//       return;
//     }

//     try {
//       await axios.post(`${BASE_URL}/lectures`, form);

//       alert("Lecture Added ✅");

//       setForm({
//         title: "",
//         description: "",
//         videoUrl: "",
//         date: "",
//         time: "",
//       });

//       fetchLectures();
//     } catch (err) {
//       console.log("Add error:", err);
//       alert("Error adding lecture ❌");
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`${BASE_URL}/lectures/${id}`);
//       fetchLectures();
//     } catch {
//       alert("Delete error ❌");
//     }
//   };

//   // ================= UI =================
//   return (
//     <div className="dashboard">

//       <h2>👩‍🏫 Teacher Dashboard</h2>

//       {/* ================= FORM ================= */}
//       <form onSubmit={handleSubmit} className="form-card">
//         <input
//           name="title"
//           placeholder="Lecture Title"
//           value={form.title}
//           onChange={handleChange}
//           required
//         />

//         <textarea
//           name="description"
//           placeholder="Description"
//           value={form.description}
//           onChange={handleChange}
//         />

//         <input
//           name="videoUrl"
//           placeholder="Video URL"
//           value={form.videoUrl}
//           onChange={handleChange}
//         />

//         <input
//           type="date"
//           name="date"
//           value={form.date}
//           onChange={handleChange}
//         />

//         <input
//           type="time"
//           name="time"
//           value={form.time}
//           onChange={handleChange}
//         />

//         <button type="submit">Add Lecture</button>
//       </form>

//       {/* ================= LECTURES ================= */}
//       <div className="lecture-grid">
//         {lectures.map((lec) => (
//           <div key={lec._id} className="lecture-card">
//             <h3>{lec.title}</h3>

//             <p>{lec.description}</p>

//             <p>📅 Date: {lec.date || "N/A"}</p>
//             <p>⏰ Time: {formatTime(lec.time)}</p>

//             {/* VIDEO LINK */}
//             {lec.videoUrl && (
//               <a href={lec.videoUrl} target="_blank" rel="noreferrer">
//                 ▶ Watch Lecture
//               </a>
//             )}

//             <br />

//             <button onClick={() => setSelectedLecture(lec)}>
//               Show QR
//             </button>

//             <button onClick={() => handleDelete(lec._id)}>
//               Delete
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* ================= QR SECTION ================= */}
//       {selectedLecture && (
//         <div style={{ textAlign: "center", marginTop: "20px" }}>
//           <h3>{selectedLecture.title}</h3>

//           <p>📅 {selectedLecture.date}</p>
//           <p>⏰ {formatTime(selectedLecture.time)}</p>

//           <QRCodeCanvas
//             value={`${BASE_URL}/scan?lectureId=${selectedLecture._id}&studentId=123&studentName=Kalyani`}
//             size={220}
//           />

//           <p>📱 Scan this QR</p>

//           <button onClick={() => setSelectedLecture(null)}>
//             Close QR ❌
//           </button>
//         </div>
//       )}

//       {/* ================= ATTENDANCE ================= */}
//       <h3>📊 Attendance</h3>

//       <table border="1" width="100%">
//         <thead>
//           <tr>
//             <th>Lecture</th>
//             <th>Student</th>
//             <th>Status</th>
//             <th>Date</th>
//           </tr>
//         </thead>

//         <tbody>
//           {attendance.length === 0 ? (
//             <tr>
//               <td colSpan="4">No Attendance Yet</td>
//             </tr>
//           ) : (
//             attendance.map((a, i) => (
//               <tr key={i}>
//                 <td>{a.lectureTitle}</td>
//                 <td>{a.studentName}</td>
//                 <td>{a.status}</td>
//                 <td>
//                   {a.date
//                     ? new Date(a.date).toLocaleString("en-IN")
//                     : "No Date"}
//                 </td>
//               </tr>
//             ))
//           )}
//         </tbody>
//       </table>

//     </div>
//   );
// }













//not
// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function TeacherDashboard() {
//   const [lectures, setLectures] = useState([]);
//   const [attendance, setAttendance] = useState([]);

  
//   const BASE_URL = "http://10.62.213.163:5000";

//   const fetchData = async () => {
//     const lec = await axios.get(`${BASE_URL}/lectures`);
//     const att = await axios.get(`${BASE_URL}/attendance`);

//     setLectures(lec.data);
//     setAttendance(att.data);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const addLecture = async () => {
//     const title = prompt("Enter lecture title");

//     await axios.post(`${BASE_URL}/lectures`, {
//       title,
//       description: "Demo",
//       date: new Date(),
//       time: "10:00",
//     });

//     fetchData();
//   };

//   return (
//     <div style={{ padding: 20 }}>
//       <h1>👩‍🏫 Teacher Dashboard</h1>

//       <button onClick={addLecture}>Add Lecture</button>

//       <h2>📚 Lectures</h2>

//       {lectures.map((lec) => (
//         <div key={lec._id}>
//           <h3>{lec.title}</h3>

//           <img
//             src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${BASE_URL}/scan?lectureId=${lec._id}`}
//           />
//         </div>
//       ))}

//       <h2>📊 Attendance</h2>

//       <table border="1">
//         <thead>
//           <tr>
//             <th>Lecture</th>
//             <th>Student</th>
//             <th>Status</th>
//             <th>Date</th>
//           </tr>
//         </thead>

//         <tbody>
//           {attendance.map((a, i) => (
//             <tr key={i}>
//               <td>{a.lectureTitle}</td>
//               <td>{a.studentName}</td>
//               <td>{a.status}</td>
//               <td>{new Date(a.date).toLocaleString()}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }











//

// import { useEffect, useState } from "react";
// import axios from "axios";
// import { QRCodeCanvas } from "qrcode.react";

// export default function TeacherDashboard() {
//   const [lectures, setLectures] = useState([]);
//   const [attendance, setAttendance] = useState([]);
//   const [selectedLecture, setSelectedLecture] = useState(null);

//   const [form, setForm] = useState({
//     title: "",
//     description: "",
//     videoUrl: "",
//     date: "",
//     time: "",
//   });

//   const BASE_URL = "http://10.62.213.163:5000";

//   const fetchData = async () => {
//     const lec = await axios.get(`${BASE_URL}/lectures`);
//     const att = await axios.get(`${BASE_URL}/attendance`);

//     setLectures(lec.data);
//     setAttendance(att.data);
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     await axios.post(`${BASE_URL}/lectures`, form);

//     alert("Lecture Added ✅");

//     setForm({
//       title: "",
//       description: "",
//       videoUrl: "",
//       date: "",
//       time: "",
//     });

//     fetchData();
//   };

//   return (
//     <div>
//       <h2>Teacher Dashboard</h2>

//       <form onSubmit={handleSubmit}>
//         <input name="title" placeholder="Title" onChange={(e)=>setForm({...form,title:e.target.value})}/>
//         <button>Add</button>
//       </form>

//       {lectures.map((lec) => (
//         <div key={lec._id}>
//           <h3>{lec.title}</h3>

//           <button onClick={() => setSelectedLecture(lec)}>
//             Show QR
//           </button>
//         </div>
//       ))}

//       {selectedLecture && (
//         <QRCodeCanvas
//           value={`${BASE_URL}/scan?lectureId=${selectedLecture._id}&studentName=Kalyani`}
//         />
//       )}

//       <h3>Attendance</h3>

//       {attendance.map((a, i) => (
//         <p key={i}>{a.studentName} - {a.lectureTitle}</p>
//       ))}
//     </div>
//   );
// }







//sample
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { QRCodeCanvas } from "qrcode.react";
// import "./TeacherDashboard.css";

// export default function TeacherDashboard() {
//   const [lectures, setLectures] = useState([]);
//   const [attendance, setAttendance] = useState([]);
//   const [selectedLecture, setSelectedLecture] = useState(null);

//   const [form, setForm] = useState({
//     title: "",
//     description: "",
//     videoUrl: "",
//     date: "",
//     time: "",
//   });

//   // ✅ SAME URL MUST BE USED EVERYWHERE
//   // const BASE_URL = "http://localhost:5000";
//   // const BASE_URL = "http://10.62.213.163:5000";
//   const BASE_URL = "https://abcd1234.ngrok-free.app";

//   // ✅ student name (later you can take from login)
//   const studentName = "Kalyani";

//   // ================= FORMAT TIME =================
//   const formatTime = (time) => {
//     if (!time) return "N/A";
//     let [hours, minutes] = time.split(":");
//     hours = parseInt(hours);
//     const ampm = hours >= 12 ? "PM" : "AM";
//     hours = hours % 12 || 12;
//     return `${hours}:${minutes} ${ampm}`;
//   };

//   // ================= FETCH =================
//   const fetchLectures = async () => {
//     try {
//       const res = await axios.get(`${BASE_URL}/lectures`);
//       setLectures(res.data);
//     } catch (err) {
//       console.log("Lecture fetch error:", err);
//     }
//   };

//   const fetchAttendance = async () => {
//     try {
//       const res = await axios.get(`${BASE_URL}/attendance`);
//       setAttendance(res.data);
//     } catch (err) {
//       console.log("Attendance fetch error:", err);
//     }
//   };

//   useEffect(() => {
//     fetchLectures();
//     fetchAttendance();

//     const interval = setInterval(fetchAttendance, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   // ================= FORM =================
//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!form.title) {
//       alert("Title required ❌");
//       return;
//     }

//     try {
//       await axios.post(`${BASE_URL}/lectures`, form);

//       alert("Lecture Added ✅");

//       setForm({
//         title: "",
//         description: "",
//         videoUrl: "",
//         date: "",
//         time: "",
//       });

//       fetchLectures();
//     } catch (err) {
//       console.log("Add error:", err);
//       alert("Error adding lecture ❌");
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`${BASE_URL}/lectures/${id}`);
//       fetchLectures();
//     } catch {
//       alert("Delete error ❌");
//     }
//   };

//   // ================= UI =================
//   return (
//     <div className="dashboard">
//       <h2>👩‍🏫 Teacher Dashboard</h2>

//       {/* ================= FORM ================= */}
//       <form onSubmit={handleSubmit} className="form-card">
//         <input
//           name="title"
//           placeholder="Lecture Title"
//           value={form.title}
//           onChange={handleChange}
//           required
//         />

//         <textarea
//           name="description"
//           placeholder="Description"
//           value={form.description}
//           onChange={handleChange}
//         />

//         <input
//           name="videoUrl"
//           placeholder="Video URL"
//           value={form.videoUrl}
//           onChange={handleChange}
//         />

//         <input
//           type="date"
//           name="date"
//           value={form.date}
//           onChange={handleChange}
//         />

//         <input
//           type="time"
//           name="time"
//           value={form.time}
//           onChange={handleChange}
//         />

//         <button type="submit">Add Lecture</button>
//       </form>

//       {/* ================= LECTURES ================= */}
//       <div className="lecture-grid">
//         {lectures.length === 0 ? (
//           <p>No lectures yet ❌</p>
//         ) : (
//           lectures.map((lec) => (
//             <div key={lec._id} className="lecture-card">
//               <h3>{lec.title}</h3>

//               <p>{lec.description}</p>

//               <p>📅 Date: {lec.date || "N/A"}</p>
//               <p>⏰ Time: {formatTime(lec.time)}</p>

//               {lec.videoUrl && (
//                 <a href={lec.videoUrl} target="_blank" rel="noreferrer">
//                   ▶ Watch Lecture
//                 </a>
//               )}

//               <br />

//               <button onClick={() => setSelectedLecture(lec)}>
//                 Show QR
//               </button>

//               <button onClick={() => handleDelete(lec._id)}>
//                 Delete
//               </button>
//             </div>
//           ))
//         )}
//       </div>

//       {/* ================= QR SECTION ================= */}
//       {selectedLecture && (
//         <div style={{ textAlign: "center", marginTop: "20px" }}>
//           <h3>{selectedLecture.title}</h3>

//           <p>📅 {selectedLecture.date}</p>
//           <p>⏰ {formatTime(selectedLecture.time)}</p>

//           {/* ✅ FIXED QR */}
//           <QRCodeCanvas
//             value={`${BASE_URL}/scan?lectureId=${selectedLecture._id}&studentName=${studentName}`}
//             size={220}
//           />

//           <p>📱 Scan this QR</p>

//           <button onClick={() => setSelectedLecture(null)}>
//             Close QR ❌
//           </button>
//         </div>
//       )}

//       {/* ================= ATTENDANCE ================= */}
//       <h3>📊 Attendance</h3>

//       <table border="1" width="100%">
//         <thead>
//           <tr>
//             <th>Lecture</th>
//             <th>Student</th>
//             <th>Status</th>
//             <th>Date</th>
//           </tr>
//         </thead>

//         <tbody>
//           {attendance.length === 0 ? (
//             <tr>
//               <td colSpan="4">No Attendance Yet</td>
//             </tr>
//           ) : (
//             attendance.map((a, i) => (
//               <tr key={i}>
//                 <td>{a.lectureTitle}</td>
//                 <td>{a.studentName}</td>
//                 <td>{a.status}</td>
//                 <td>
//                   {a.date
//                     ? new Date(a.date).toLocaleString("en-IN")
//                     : "No Date"}
//                 </td>
//               </tr>
//             ))
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }















//Status
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { QRCodeCanvas } from "qrcode.react";
// import "./TeacherDashboard.css";

// export default function TeacherDashboard() {
//   const [lectures, setLectures] = useState([]);
//   const [attendance, setAttendance] = useState([]);
//   const [selectedLecture, setSelectedLecture] = useState(null);

//   const [form, setForm] = useState({
//     title: "",
//     description: "",
//     videoUrl: "",
//     date: "",
//     time: "",
//   });

//   // ✅ USE LOCAL FOR NOW
//   // 👉 AFTER DEPLOY ON RENDER, CHANGE THIS
//   // const BASE_URL = "http://localhost:5000";
//   // // const BASE_URL = "http://10.62.213.163:5000";
//   const BASE_URL = "http://10.207.214.163:5000";
//   // const BASE_URL = "http://192.168.43.XXX:5000";
  

//   const studentName = "Kalyani";

//   // ================= FORMAT TIME =================
//   const formatTime = (time) => {
//     if (!time) return "N/A";
//     let [hours, minutes] = time.split(":");
//     hours = parseInt(hours);
//     const ampm = hours >= 12 ? "PM" : "AM";
//     hours = hours % 12 || 12;
//     return `${hours}:${minutes} ${ampm}`;
//   };

//   // ================= FETCH =================
//   const fetchLectures = async () => {
//     try {
//       const res = await axios.get(`${BASE_URL}/lectures`);
//       setLectures(res.data);
//     } catch (err) {
//       console.log("Lecture fetch error:", err.response?.data || err.message);
//     }
//   };

//   const fetchAttendance = async () => {
//     try {
//       const res = await axios.get(`${BASE_URL}/attendance`);
//       setAttendance(res.data);
//     } catch (err) {
//       console.log("Attendance fetch error:", err.response?.data || err.message);
//     }
//   };

//   useEffect(() => {
//     fetchLectures();
//     fetchAttendance();

//     const interval = setInterval(fetchAttendance, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   // ================= FORM =================
//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!form.title) {
//       alert("Title required ❌");
//       return;
//     }

//     try {
//       await axios.post(`${BASE_URL}/lectures`, form);

//       alert("Lecture Added ✅");

//       setForm({
//         title: "",
//         description: "",
//         videoUrl: "",
//         date: "",
//         time: "",
//       });

//       fetchLectures();
//     } catch (err) {
//       console.log("FULL ERROR:", err.response?.data || err.message);
//       alert("Error adding lecture ❌");
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`${BASE_URL}/lectures/${id}`);
//       fetchLectures();
//     } catch (err) {
//       console.log("Delete error:", err.response?.data || err.message);
//       alert("Delete error ❌");
//     }
//   };

//   // ================= UI =================
//   return (
//     <div className="dashboard">
//       <h2>👩‍🏫 Teacher Dashboard</h2>

//       {/* ================= FORM ================= */}
//       <form onSubmit={handleSubmit} className="form-card">
//         <input
//           name="title"
//           placeholder="Lecture Title"
//           value={form.title}
//           onChange={handleChange}
//           required
//         />

//         <textarea
//           name="description"
//           placeholder="Description"
//           value={form.description}
//           onChange={handleChange}
//         />

//         <input
//           name="videoUrl"
//           placeholder="Video URL"
//           value={form.videoUrl}
//           onChange={handleChange}
//         />

//         <input
//           type="date"
//           name="date"
//           value={form.date}
//           onChange={handleChange}
//         />

//         <input
//           type="time"
//           name="time"
//           value={form.time}
//           onChange={handleChange}
//         />

//         <button type="submit">Add Lecture</button>
//       </form>

//       {/* ================= LECTURES ================= */}
//       <div className="lecture-grid">
//         {lectures.length === 0 ? (
//           <p>No lectures yet ❌</p>
//         ) : (
//           lectures.map((lec) => (
//             <div key={lec._id} className="lecture-card">
//               <h3>{lec.title}</h3>

//               <p>{lec.description}</p>

//               <p>📅 Date: {lec.date || "N/A"}</p>
//               <p>⏰ Time: {formatTime(lec.time)}</p>

//               {lec.videoUrl && (
//                 <a href={lec.videoUrl} target="_blank" rel="noreferrer">
//                   ▶ Watch Lecture
//                 </a>
//               )}

//               <br />

//               <button onClick={() => setSelectedLecture(lec)}>
//                 Show QR
//               </button>

//               <button onClick={() => handleDelete(lec._id)}>
//                 Delete
//               </button>
//             </div>
//           ))
//         )}
//       </div>

//       {/* ================= QR SECTION ================= */}
//       {selectedLecture && (
//         <div style={{ textAlign: "center", marginTop: "20px" }}>
//           <h3>{selectedLecture.title}</h3>

//           <p>📅 {selectedLecture.date}</p>
//           <p>⏰ {formatTime(selectedLecture.time)}</p>

//           <QRCodeCanvas
//             value={`${BASE_URL}/scan?lectureId=${selectedLecture._id}&studentName=${studentName}`}
//             size={220}
//           />

//           <p>📱 Scan this QR</p>

//           <button onClick={() => setSelectedLecture(null)}>
//             Close QR ❌
//           </button>
//         </div>
//       )}

//       {/* ================= ATTENDANCE ================= */}
//       <h3>📊 Attendance</h3>

//       <table border="1" width="100%">
//         <thead>
//           <tr>
//             <th>Lecture</th>
//             <th>Student</th>
//             <th>Status</th>
//             <th>Date</th>
//           </tr>
//         </thead>

//         <tbody>
//           {attendance.length === 0 ? (
//             <tr>
//               <td colSpan="4">No Attendance Yet</td>
//             </tr>
//           ) : (
//             attendance.map((a, i) => (
//               <tr key={i}>
//                 <td>{a.lectureTitle}</td>
//                 <td>{a.studentName}</td>
//                 <td>{a.status}</td>
//                 <td>
//                   {a.date
//                     ? new Date(a.date).toLocaleString("en-IN")
//                     : "No Date"}
//                 </td>
//               </tr>
//             ))
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }


//this perfect
import { useState, useEffect } from "react";
import axios from "axios";
import { QRCodeCanvas } from "qrcode.react";
import "./TeacherDashboard.css";

export default function TeacherDashboard() {
  const [lectures, setLectures] = useState([]);
  const [attendance, setAttendance] = useState([]);
  const [selectedLecture, setSelectedLecture] = useState(null);

  const [form, setForm] = useState({
    title: "",
    description: "",
    videoUrl: "",
    date: "",
    time: "",
  });

  // ✅ IMPORTANT: use localhost for now
  // const BASE_URL = "http://localhost:5000";
  const BASE_URL = "http://10.62.213.163:5000";
  // const BASE_URL = "http://localhost:5000";

  const studentName = "Kalyani";

  // ================= FORMAT TIME =================
  const formatTime = (time) => {
    if (!time) return "N/A";
    let [hours, minutes] = time.split(":");
    hours = parseInt(hours);
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    return `${hours}:${minutes} ${ampm}`;
  };

  // ================= FETCH =================
  const fetchLectures = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/lectures`);
      setLectures(res.data);
    } catch (err) {
      console.log("Lecture fetch error:", err.message);
    }
  };

  const fetchAttendance = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/attendance`);
      setAttendance(res.data);
    } catch (err) {
      console.log("Attendance fetch error:", err.message);
    }
  };

  useEffect(() => {
    fetchLectures();
    fetchAttendance();
  }, []);

  // ================= FORM =================
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Submitting:", form);

    if (!form.title) {
      alert("Title required ❌");
      return;
    }

    try {
      const res = await axios.post(`${BASE_URL}/lectures`, form);
      console.log("Response:", res.data);

      alert("Lecture Added ✅");

      setForm({
        title: "",
        description: "",
        videoUrl: "",
        date: "",
        time: "",
      });

      fetchLectures();
    } catch (err) {
      console.log("❌ FULL ERROR:", err.response?.data || err.message);
      alert("Error adding lecture ❌");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/lectures/${id}`);
      fetchLectures();
    } catch (err) {
      console.log("Delete error:", err.message);
      alert("Delete error ❌");
    }
  };

  // ================= UI =================
  return (
    <div className="dashboard">
      <h2>👩‍🏫 Teacher Dashboard</h2>

      {/* ================= FORM ================= */}
      <form onSubmit={handleSubmit} className="form-card">
        <input
          name="title"
          placeholder="Lecture Title"
          value={form.title}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
        />

        <input
          name="videoUrl"
          placeholder="Video URL"
          value={form.videoUrl}
          onChange={handleChange}
        />

        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
        />

        <input
          type="time"
          name="time"
          value={form.time}
          onChange={handleChange}
        />

        <button type="submit">Add Lecture</button>
      </form>

      {/* ================= LECTURES ================= */}
      <div className="lecture-grid">
        {lectures.length === 0 ? (
          <p>No lectures yet ❌</p>
        ) : (
          lectures.map((lec) => (
            <div key={lec._id} className="lecture-card">
              <h3>{lec.title}</h3>

              <p>{lec.description}</p>

              <p>📅 Date: {lec.date || "N/A"}</p>
              <p>⏰ Time: {formatTime(lec.time)}</p>

              {lec.videoUrl && (
                <a href={lec.videoUrl} target="_blank" rel="noreferrer">
                  ▶ Watch Lecture
                </a>
              )}

              <br />

              <button onClick={() => setSelectedLecture(lec)}>
                Show QR
              </button>

              <button onClick={() => handleDelete(lec._id)}>
                Delete
              </button>
            </div>
          ))
        )}
      </div>

      {/* ================= QR ================= */}
      {selectedLecture && (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <h3>{selectedLecture.title}</h3>

          {/* <QRCodeCanvas
            value={`${BASE_URL}/scan?lectureId=${selectedLecture._id}&studentName=${studentName}`}
            size={220}
          /> */}

          <QRCodeCanvas
  value={`http://10.62.213.163:5000/scan?lectureId=${selectedLecture._id}&studentName=${studentName}`}
  size={220}
/>

          <p>📱 Scan this QR</p>

          <button onClick={() => setSelectedLecture(null)}>
            Close ❌
          </button>
        </div>
      )}

      {/* ================= ATTENDANCE ================= */}
      <h3>📊 Attendance</h3>

      <table border="1" width="100%">
        <thead>
          <tr>
            <th>Lecture</th>
            <th>Student</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {attendance.length === 0 ? (
            <tr>
              <td colSpan="4">No Attendance Yet</td>
            </tr>
          ) : (
            attendance.map((a, i) => (
              <tr key={i}>
                <td>{a.lectureTitle}</td>
                <td>{a.studentName}</td>
                <td>{a.status}</td>
                <td>
                  {a.date
                    ? new Date(a.date).toLocaleString("en-IN")
                    : "No Date"}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}