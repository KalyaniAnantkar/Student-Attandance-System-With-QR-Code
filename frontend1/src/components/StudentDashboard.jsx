// // import { useEffect, useState } from "react";
// // import axios from "axios";
// // import "./studentDashboard.css";

// // export default function StudentDashboard() {
// //   const [lectures, setLectures] = useState([]);

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

// //   // ✅ Format Time
// //   const formatTime = (time) => {
// //     if (!time || !time.includes(":")) return "Not set";

// //     return new Date(`1970-01-01T${time}`).toLocaleTimeString([], {
// //       hour: "2-digit",
// //       minute: "2-digit",
// //       hour12: true,
// //     });
// //   };

// //   return (
// //     <div className="sdashboard">
// //       <h1>🎓 Student Dashboard</h1>

// //       <div className="slecture-grid">
// //         {lectures.map((lec) => (
// //           <div key={lec._id} className="slecture-card">
// //             <h3>{lec.title}</h3>

// //             <p>{lec.description}</p>

// //             <p><b>Date:</b> {lec.date || "Not set"}</p>

// //             <p><b>Time:</b> {formatTime(lec.time)}</p>

// //             <p>
// //               <b>Posted:</b>{" "}
// //               {lec.createdAt
// //                 ? new Date(lec.createdAt).toLocaleDateString()
// //                 : "N/A"}
// //             </p>

// //             {/* VIDEO */}
// //             {lec.videoUrl && (
// //               <a
// //                 href={lec.videoUrl}
// //                 target="_blank"
// //                 rel="noreferrer"
// //                 className="watch-btn"
// //               >
// //                 ▶ Watch Video
// //               </a>
// //             )}

// //             {/* ACTION BUTTON */}
// //             <button
// //               className="scan-btn"
// //               onClick={() => alert("Scan QR from teacher screen 📱")}
// //             >
// //               Scan Attendance
// //             </button>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }



// //


// // import React, { useState, useEffect } from "react";
// // import { QrReader } from "react-qr-reader";
// // import axios from "axios";

// // const StudentDashboard = () => {
// //   const [showScanner, setShowScanner] = useState(false);
// //   const [attendance, setAttendance] = useState([]);

// //   const studentId = "123"; // replace with real login ID

// //   // Fetch attendance
// //   const fetchAttendance = async () => {
// //     try {
// //       const res = await axios.get(
// //         `http://localhost:5000/api/attendance/student/${studentId}`
// //       );
// //       setAttendance(res.data);
// //     } catch (err) {
// //       console.error(err);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchAttendance();
// //   }, []);

// //   // Handle QR scan
// //   const handleScan = async (data) => {
// //     if (data) {
// //       try {
// //         await axios.post("http://localhost:5000/api/attendance/mark", {
// //           qrData: data,
// //           studentId,
// //         });

// //         alert("✅ Attendance Marked");

// //         setShowScanner(false);
// //         fetchAttendance(); // refresh UI
// //       } catch (err) {
// //         alert("❌ Error marking attendance");
// //       }
// //     }
// //   };

// //   return (
// //     <div style={{ padding: "20px" }}>
// //       <h2>Student Dashboard</h2>

// //       {/* 🔹 Scan Button */}
// //       <button onClick={() => setShowScanner(true)}>
// //         Scan Attendance
// //       </button>

// //       {/* 🔹 QR Scanner */}
// //       {showScanner && (
// //         <div style={{ width: "300px", marginTop: "20px" }}>
// //           <QrReader
// //             constraints={{ facingMode: "environment" }}
// //             onResult={(result, error) => {
// //               if (result) {
// //                 handleScan(result?.text);
// //               }
// //             }}
// //           />
// //         </div>
// //       )}

// //       {/* 🔹 Attendance List */}
// //       <h3>Your Attendance</h3>

// //       <ul>
// //         {attendance.map((item, index) => (
// //           <li key={index}>
// //             {item.subjectId} - {item.date} - {item.status}
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // export default StudentDashboard;



// //
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Html5Qrcode } from "html5-qrcode";

// const StudentDashboard = () => {
//   const [attendance, setAttendance] = useState([]);
//   const [selectedLecture, setSelectedLecture] = useState("");

//   const studentId = "123";

//   // Fetch attendance
//   const fetchAttendance = async () => {
//     const res = await axios.get(
//       `http://localhost:5000/api/attendance/student/${studentId}`
//     );
//     setAttendance(res.data);
//   };

//   useEffect(() => {
//     fetchAttendance();
//   }, []);

//   // Handle QR image upload
//   const handleFileScan = async (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     const html5QrCode = new Html5Qrcode("reader");

//     try {
//       const decodedText = await html5QrCode.scanFile(file, true);

//       // ✅ Send to backend
//       await axios.post("http://localhost:5000/api/attendance/mark", {
//         qrData: decodedText,
//         studentId,
//       });

//       alert("✅ Attendance Marked");

//       fetchAttendance();

//     } catch (err) {
//       alert("❌ Invalid QR or scan failed");
//     }
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Student Dashboard</h2>

//       {/* ✅ Lecture Selection */}
//       <select onChange={(e) => setSelectedLecture(e.target.value)}>
//         <option value="">Select Lecture</option>
//         <option value="Lec-1">Linux - Lec 1</option>
//         <option value="Lec-2">Linux - Lec 2</option>
//       </select>

//       {/* ✅ Upload QR Image */}
//       <div style={{ marginTop: "20px" }}>
//         <input type="file" accept="image/*" onChange={handleFileScan} />
//       </div>

//       {/* ✅ Attendance Display */}
//       <h3>Your Attendance</h3>

//       <table border="1" cellPadding="10">
//         <thead>
//           <tr>
//             <th>Subject</th>
//             <th>Lecture</th>
//             <th>Date</th>
//             <th>Status</th>
//           </tr>
//         </thead>

//         <tbody>
//           {attendance.map((item, index) => (
//             <tr key={index}>
//               <td>{item.subjectId}</td>
//               <td>{item.lectureId}</td>
//               <td>{new Date(item.date).toLocaleDateString()}</td>
//               <td style={{ color: "green" }}>{item.status}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default StudentDashboard;

//3


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Html5QrcodeScanner } from "html5-qrcode";

// const StudentDashboard = () => {
//   const [lecture, setLecture] = useState(null);
//   const [attendance, setAttendance] = useState([]);
//   const [scannerStarted, setScannerStarted] = useState(false);

//   const studentId = "123"; // Replace with logged-in student ID

//   // ✅ Fetch active lecture
//   const fetchLecture = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/lectures/active");
//       setLecture(res.data);
//     } catch (err) {
//       console.log("Lecture API error:", err.message);
//     }
//   };

//   // ✅ Fetch attendance
//   const fetchAttendance = async () => {
//     try {
//       const res = await axios.get(
//         `http://localhost:5000/attendance/student/${studentId}`
//       );
//       setAttendance(res.data);
//     } catch (err) {
//       console.log("Attendance API error:", err.message);
//     }
//   };

//   useEffect(() => {
//     fetchLecture();
//     fetchAttendance();
//   }, []);

//   // ✅ Start QR Scanner
//   const startScanner = () => {
//     if (scannerStarted) return;

//     const scanner = new Html5QrcodeScanner("reader", {
//       fps: 10,
//       qrbox: 250,
//     });

//     scanner.render(
//       async (decodedText) => {
//         try {
//           await axios.post("http://localhost:5000/attendance/mark", {
//             qrData: decodedText,
//             studentId,
//           });

//           alert("✅ Attendance Marked Successfully");

//           scanner.clear();
//           setScannerStarted(false);
//           fetchAttendance(); // refresh attendance

//         } catch (err) {
//           alert("❌ Failed to mark attendance");
//         }
//       },
//       (error) => {
//         console.log("Scan error:", error);
//       }
//     );

//     setScannerStarted(true);
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>🎓 Student Dashboard</h2>

//       {/* ✅ Active Lecture */}
//       {lecture ? (
//         <div style={{ border: "1px solid #ccc", padding: "15px", marginBottom: "20px" }}>
//           <h3>📘 {lecture.subject}</h3>
//           <p><b>Lecture:</b> {lecture.title}</p>

//           <button onClick={startScanner} style={{ padding: "10px" }}>
//             📷 Scan Teacher QR
//           </button>

//           <div id="reader" style={{ marginTop: "20px" }}></div>
//         </div>
//       ) : (
//         <p>❌ No Active Lecture Available</p>
//       )}

//       {/* ✅ Attendance List */}
//       <h3>📊 Your Attendance</h3>

//       {attendance.length === 0 ? (
//         <p>No attendance found</p>
//       ) : (
//         <table border="1" cellPadding="10">
//           <thead>
//             <tr>
//               <th>Subject</th>
//               <th>Lecture</th>
//               <th>Date</th>
//               <th>Status</th>
//             </tr>
//           </thead>

//           <tbody>
//             {attendance.map((item, index) => (
//               <tr key={index}>
//                 <td>{item.subjectId}</td>
//                 <td>{item.lectureId}</td>
//                 <td>{new Date(item.date).toLocaleDateString()}</td>
//                 <td style={{ color: "green" }}>{item.status}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default StudentDashboard;



// import { useState } from "react";
// import axios from "axios";

// export default function StudentDashboard() {
//   const [lectureId, setLectureId] = useState("");

//   const markAttendance = async () => {
//     await axios.post("http://localhost:5000/attendance", {
//       lectureId,
//       studentEmail: "student@gmail.com",
//     });

//     alert("Attendance marked ✅");
//   };

//   return (
//     <div>
//       <h2>Student Dashboard</h2>

//       <input
//         placeholder="Enter Lecture ID"
//         onChange={(e) => setLectureId(e.target.value)}
//       />

//       <button onClick={markAttendance}>
//         Mark Attendance
//       </button>
//     </div>
//   );
// }


// import { useEffect } from "react";
// import axios from "axios";
// import { Html5QrcodeScanner } from "html5-qrcode";

// export default function StudentDashboard() {

//   useEffect(() => {
//     const scanner = new Html5QrcodeScanner(
//       "reader",
//       { fps: 5, qrbox: 250 },
//       false
//     );

//     scanner.render(
//       async (decodedText) => {
//         // ✅ QR scanned
//         await axios.post("http://localhost:5000/attendance", {
//           lectureId: decodedText,
//           studentEmail: "student@gmail.com", // later dynamic
//         });

//         alert("Attendance marked ✅");
//         scanner.clear();
//       },
//       (error) => {
//         console.log(error);
//       }
//     );
//   }, []);

//   return (
//     <div>
//       <h2>Student Dashboard</h2>
//       <div id="reader" style={{ width: "300px" }}></div>
//     </div>
//   );
// }



// import { useEffect } from "react";
// import axios from "axios";
// import { Html5QrcodeScanner } from "html5-qrcode";

// export default function StudentDashboard() {

//   useEffect(() => {
//     const scanner = new Html5QrcodeScanner(
//       "reader",
//       { fps: 5, qrbox: 250 },
//       false
//     );

//     scanner.render(
//       async (decodedText) => {
//         console.log("QR:", decodedText);

//         await axios.post("http://localhost:5000/attendance", {
//           lectureId: decodedText,
//           studentEmail: "student@gmail.com"
//         });

//         alert("Attendance marked ✅");

//         scanner.clear();
//       },
//       (error) => {
//         console.log(error);
//       }
//     );

//   }, []);

//   return (
//     <div style={{ textAlign: "center" }}>
//       <h2>Student Dashboard</h2>

//       {/* 🔥 THIS IS IMPORTANT */}
//       <div id="reader" style={{ width: "300px", margin: "auto" }}></div>
//     </div>
//   );
// }


//
// import { useEffect } from "react";
// import { Html5QrcodeScanner } from "html5-qrcode";

// export default function StudentDashboard() {

//   useEffect(() => {
//     const scanner = new Html5QrcodeScanner(
//       "reader",
//       { fps: 5, qrbox: 250 },
//       false
//     );

//     scanner.render(
//       (decodedText) => {
//         alert("QR Scanned: " + decodedText);
//       },
//       (error) => {}
//     );

//   }, []);

//   return (
//     <div style={{ textAlign: "center", padding: "20px" }}>
//       <h2>Student Dashboard</h2>

//       {/* THIS SHOWS CAMERA */}
//       <div
//         id="reader"
//         style={{ width: "300px", margin: "auto" }}
//       ></div>
//     </div>
//   );
// }






// import { useEffect, useState } from "react";
// import axios from "axios";
// import "./StudentDashboard.css";

// export default function StudentDashboard() {
//   const [lectures, setLectures] = useState([]);
//   const [attendance, setAttendance] = useState([]);

//   // ✅ Fetch lectures
//   const fetchLectures = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/lectures");
//       setLectures(res.data);
//     } catch (err) {
//       console.log("Error fetching lectures", err);
//     }
//   };

//   // ✅ Fetch attendance
//   const fetchAttendance = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/attendance");
//       setAttendance(res.data);
//     } catch (err) {
//       console.log("Error fetching attendance", err);
//     }
//   };

//   useEffect(() => {
//     fetchLectures();
//     fetchAttendance();
//   }, []);

//   // ✅ Mark attendance
//   const markAttendance = async (lectureId) => {
//     try {
//       await axios.post("http://localhost:5000/attendance", {
//         lectureId,
//         time: new Date().toLocaleString(),
//       });

//       alert("Attendance Marked ✅");

//       fetchAttendance();
//     } catch (err) {
//       alert("Already marked or error ❌");
//     }
//   };

//   return (
//     <div className="student-dashboard">
//       <h2>Student Dashboard</h2>

//       {/* 🔥 LECTURES */}
//       <h3>Lectures</h3>
//       <div className="lecture-grid">
//         {lectures.map((lec) => (
//           <div key={lec._id} className="lecture-card">
//             <h4>{lec.title}</h4>

//             {/* QR IMAGE */}
//             <img
//               src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${lec._id}`}
//               alt="QR Code"
//             />

//             {/* BUTTON */}
//             <button onClick={() => markAttendance(lec._id)}>
//               Scan QR (Mark Attendance)
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* 🔥 ATTENDANCE */}
//       <h3>Your Attendance</h3>
//       <div className="attendance-box">
//         {attendance.length === 0 ? (
//           <p>No attendance yet</p>
//         ) : (
//           attendance.map((att, index) => (
//             <p key={index}>
//               Lecture ID: {att.lectureId} | {att.time}
//             </p>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }



























// import { useEffect, useState } from "react";
// import axios from "axios";
// import { QRCodeCanvas } from "qrcode.react";

// export default function StudentDashboard() {
//   const [lectures, setLectures] = useState([]);
//   const [attendance, setAttendance] = useState([]);

//   const studentEmail = "student@gmail.com"; // later dynamic

//   // ✅ fetch lectures
//   const fetchLectures = async () => {
//     const res = await axios.get("http://localhost:5000/lectures");
//     setLectures(res.data);
//   };

//   // ✅ fetch attendance
//   const fetchAttendance = async () => {
//     const res = await axios.get(
//       `http://localhost:5000/attendance/${studentEmail}`
//     );
//     setAttendance(res.data);
//   };

//   useEffect(() => {
//     fetchLectures();
//     fetchAttendance();
//   }, []);

//   // ✅ mark attendance
//   const markAttendance = async (lectureId) => {
//     await axios.post("http://localhost:5000/attendance", {
//       lectureId,
//       studentEmail,
//     });

//     alert("Attendance marked ✅");
//     fetchAttendance();
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Student Dashboard</h2>

//       {/* LECTURES */}
//       <h3>Lectures</h3>

//       {lectures.map((lec) => (
//         <div key={lec._id} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
//           <h4>{lec.title}</h4>

//           {/* QR CODE */}
//           <QRCodeCanvas value={lec._id} size={120} />

//           <br />

//           <button onClick={() => markAttendance(lec._id)}>
//             Scan QR (Mark Attendance)
//           </button>
//         </div>
//       ))}

//       {/* ATTENDANCE */}
//       <h3>Your Attendance</h3>

//       {attendance.map((a, i) => (
//         <p key={i}>
//           Lecture ID: {a.lectureId} | {new Date(a.time).toLocaleString()}
//         </p>
//       ))}
//     </div>
//   );
// }











//
// import { useEffect, useState } from "react";
// import axios from "axios";
// import "./StudentDashboard.css";

// export default function StudentDashboard() {
//   const [lectures, setLectures] = useState([]);
//   const [attendance, setAttendance] = useState([]);

//   // Fetch lectures
//   const fetchLectures = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/lectures");
//       setLectures(res.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   // Fetch attendance
//   const fetchAttendance = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/attendance");
//       setAttendance(res.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     fetchLectures();
//     fetchAttendance();
//   }, []);

//   // Mark attendance
//   const markAttendance = async (lectureId) => {
//     try {
//       await axios.post("http://localhost:5000/attendance", {
//         lectureId,
//         time: new Date().toLocaleString(),
//       });

//       alert("Attendance Marked ✅");
//       fetchAttendance();
//     } catch (err) {
//       alert("Already marked ❌");
//     }
//   };

//   return (
//     <div className="student-dashboard">
//       <h2>Student Dashboard</h2>

//       <h3>Lectures</h3>
//       {lectures.map((lec) => (
//         <div key={lec._id}>
//           <h4>{lec.title}</h4>

//           <img
//             src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${lec._id}`}
//             alt="QR"
//           />

//           <br />

//           <button onClick={() => markAttendance(lec._id)}>
//             Scan QR (Mark Attendance)
//           </button>
//         </div>
//       ))}

//       <h3>Your Attendance</h3>
//       {attendance.map((att, index) => (
//         <p key={index}>
//           Lecture ID: {att.lectureId} | {att.time}
//         </p>
//       ))}
//     </div>
//   );
// }





//
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Html5QrcodeScanner } from "html5-qrcode";

// const StudentDashboard = () => {
//   const [lectures, setLectures] = useState([]);
//   const [attendance, setAttendance] = useState([]);
//   const [activeScanner, setActiveScanner] = useState(null);

//   const studentId = "123";

//   useEffect(() => {
//     fetchLectures();
//     fetchAttendance();
//   }, []);

//   const fetchLectures = async () => {
//     const res = await axios.get("http://localhost:5000/lectures");
//     setLectures(res.data);
//   };

//   const fetchAttendance = async () => {
//     const res = await axios.get(
//       `http://localhost:5000/attendance/student/${studentId}`
//     );
//     setAttendance(res.data);
//   };

//   const startScanner = (lecture) => {
//     setActiveScanner(lecture._id);

//     const scanner = new Html5QrcodeScanner(`reader-${lecture._id}`, {
//       fps: 10,
//       qrbox: 250,
//     });

//     scanner.render(async (decodedText) => {
//       if (decodedText !== lecture.qrData) {
//         alert("❌ Wrong QR for this lecture");
//         return;
//       }

//       await axios.post("http://localhost:5000/attendance/mark", {
//         qrData: decodedText,
//         studentId,
//       });

//       alert("✅ Attendance Marked");

//       scanner.clear();
//       setActiveScanner(null);
//       fetchAttendance();
//     });
//   };

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial" }}>
//       <h1 style={{ color: "#2c3e50" }}>🎓 Student Dashboard</h1>

//       {/* Lectures */}
//       <h2>📚 Available Lectures</h2>

//       <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
//         {lectures.map((lec) => (
//           <div
//             key={lec._id}
//             style={{
//               width: "250px",
//               padding: "15px",
//               borderRadius: "10px",
//               boxShadow: "0 0 10px rgba(0,0,0,0.2)",
//               background: "#f9f9f9",
//             }}
//           >
//             <h3>{lec.subject}</h3>
//             <p>{lec.title}</p>

//             <button
//               onClick={() => startScanner(lec)}
//               style={{
//                 background: "#3498db",
//                 color: "#fff",
//                 border: "none",
//                 padding: "10px",
//                 borderRadius: "5px",
//                 cursor: "pointer",
//               }}
//             >
//               Scan QR
//             </button>

//             {activeScanner === lec._id && (
//               <div id={`reader-${lec._id}`} style={{ marginTop: "10px" }}></div>
//             )}
//           </div>
//         ))}
//       </div>

//       {/* Attendance */}
//       <h2 style={{ marginTop: "30px" }}>📊 Your Attendance</h2>

//       {attendance.length === 0 ? (
//         <p>No attendance yet</p>
//       ) : (
//         <table
//           border="1"
//           cellPadding="10"
//           style={{ marginTop: "10px", width: "100%" }}
//         >
//           <thead>
//             <tr style={{ background: "#2c3e50", color: "#fff" }}>
//               <th>Subject</th>
//               <th>Lecture</th>
//               <th>Date</th>
//               <th>Status</th>
//             </tr>
//           </thead>

//           <tbody>
//             {attendance.map((a, i) => (
//               <tr key={i}>
//                 <td>{a.subjectId}</td>
//                 <td>{a.lectureId}</td>
//                 <td>{new Date(a.date).toLocaleString()}</td>
//                 <td style={{ color: "green" }}>{a.status}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default StudentDashboard;






//
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Html5Qrcode } from "html5-qrcode";
// import "./StudentDashboard.css";

// const StudentDashboard = () => {
//   const [lectures, setLectures] = useState([]);
//   const [attendance, setAttendance] = useState([]);
//   const [activeLecture, setActiveLecture] = useState(null);

//   const studentId = "123";

//   // ✅ Fetch lectures
//   const fetchLectures = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/lectures");
//       setLectures(res.data);
//     } catch (err) {
//       console.log("Lecture fetch error", err);
//     }
//   };

//   // ✅ Fetch attendance
//   const fetchAttendance = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/attendance");
//       setAttendance(res.data);
//     } catch (err) {
//       console.log("Attendance error", err);
//     }
//   };

//   useEffect(() => {
//     fetchLectures();
//     fetchAttendance();
//   }, []);

//   // ✅ Start QR scanner
//   const startScanner = async (lectureId) => {
//     setActiveLecture(lectureId);

//     setTimeout(() => {
//       const qr = new Html5Qrcode("reader");

//       qr.start(
//         { facingMode: "environment" },
//         { fps: 10, qrbox: 250 },
//         async (decodedText) => {
//           try {
//             await axios.post("http://localhost:5000/attendance", {
//               lectureId,
//               studentId,
//               qrData: decodedText,
//               time: new Date(),
//             });

//             alert("✅ Attendance Marked");

//             qr.stop();
//             qr.clear();
//             setActiveLecture(null);

//             fetchAttendance();
//           } catch (err) {
//             alert("❌ Already marked or error");
//           }
//         }
//       );
//     }, 300); // wait for div render
//   };

//   return (
//     <div className="dashboard">
//       <h1>🎓 Student Dashboard</h1>

//       {/* ================= LECTURES ================= */}
//       <h2>📚 Available Lectures</h2>

//       <div className="lecture-list">
//         {lectures.length === 0 ? (
//           <p>No lectures available</p>
//         ) : (
//           lectures.map((lec) => (
//             <div key={lec._id} className="lecture-card">
//               <h3>{lec.subject}</h3>
//               <p>{lec.title}</p>

//               <button onClick={() => startScanner(lec._id)}>
//                 Scan QR
//               </button>

//               {activeLecture === lec._id && (
//                 <div id="reader" className="scanner-box"></div>
//               )}
//             </div>
//           ))
//         )}
//       </div>

//       {/* ================= ATTENDANCE ================= */}
//       <h2>📊 Your Attendance</h2>

//       {attendance.length === 0 ? (
//         <p>No attendance yet</p>
//       ) : (
//         <table>
//           <thead>
//             <tr>
//               <th>Lecture</th>
//               <th>Date</th>
//             </tr>
//           </thead>

//           <tbody>
//             {attendance.map((a, i) => (
//               <tr key={i}>
//                 <td>{a.lectureId}</td>
//                 <td>{new Date(a.time).toLocaleString()}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default StudentDashboard;













// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Html5Qrcode } from "html5-qrcode";
// import "./StudentDashboard.css";

// const StudentDashboard = () => {
//   const [lectures, setLectures] = useState([]);
//   const [attendance, setAttendance] = useState([]);
//   const [selectedLecture, setSelectedLecture] = useState(null);

//   const studentId = "123";

//   // ✅ Fetch lectures
//   const fetchLectures = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/lectures");
//       setLectures(res.data);
//     } catch (err) {
//       console.log("Lecture error");
//     }
//   };

//   // ✅ Fetch attendance
//   const fetchAttendance = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/attendance");
//       setAttendance(res.data);
//     } catch (err) {
//       console.log("Attendance error");
//     }
//   };

//   useEffect(() => {
//     fetchLectures();
//     fetchAttendance();
//   }, []);

//   // ✅ Handle QR Image Upload
//   const handleScan = async (e, lectureId) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     const qr = new Html5Qrcode("reader-temp");

//     try {
//       const decodedText = await qr.scanFile(file, true);

//       await axios.post("http://localhost:5000/attendance", {
//         lectureId,
//         studentId,
//         qrData: decodedText,
//         time: new Date(),
//       });

//       alert("✅ Attendance Marked");
//       fetchAttendance();
//     } catch (err) {
//       alert("❌ Invalid QR");
//     }
//   };

//   return (
//     <div className="dashboard">
//       <h1>🎓 Student Dashboard</h1>

//       {/* ================= LECTURES ================= */}
//       <h2>📚 Available Lectures</h2>

//       <div className="lecture-list">
//         {lectures.map((lec) => (
//           <div key={lec._id} className="lecture-card">
//             <h3>{lec.subject}</h3>
//             <p>{lec.title}</p>

//             {/* Upload QR Image */}
//             <input
//               type="file"
//               accept="image/*"
//               onChange={(e) => handleScan(e, lec._id)}
//             />
//           </div>
//         ))}
//       </div>

//       {/* ================= ATTENDANCE ================= */}
//       <h2>📊 Your Attendance</h2>

//       {attendance.length === 0 ? (
//         <p>No attendance yet</p>
//       ) : (
//         <table>
//           <thead>
//             <tr>
//               <th>Lecture</th>
//               <th>Date</th>
//             </tr>
//           </thead>

//           <tbody>
//             {attendance.map((a, i) => (
//               <tr key={i}>
//                 <td>{a.lectureId}</td>
//                 <td>{new Date(a.time).toLocaleString()}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}

//       {/* Hidden div for QR processing */}
//       <div id="reader-temp" style={{ display: "none" }}></div>
//     </div>
//   );
// };

// export default StudentDashboard;








// import { useEffect, useState } from "react";
// import axios from "axios";
// import { QRCodeCanvas } from "qrcode.react";
// import "./StudentDashboard.css";

// export default function StudentDashboard() {
//   const [lectures, setLectures] = useState([]);
//   const [attendance, setAttendance] = useState([]);

//   const studentId = "123";

//   // ✅ Fetch lectures
//   const fetchLectures = async () => {
//     const res = await axios.get("http://localhost:5000/lectures");
//     setLectures(res.data);
//   };

//   // ✅ Fetch attendance
//   const fetchAttendance = async () => {
//     const res = await axios.get(
//       `http://localhost:5000/attendance/student/${studentId}`
//     );
//     setAttendance(res.data);
//   };

//   useEffect(() => {
//     fetchLectures();
//     fetchAttendance();
//   }, []);

//   // ✅ DIRECT ATTENDANCE (NO SCAN)
//   const markAttendance = async (lecture) => {
//     try {
//       await axios.post("http://localhost:5000/attendance", {
//         lectureId: lecture._id,
//         studentId,
//         qrData: lecture.qrData, // 🔥 direct QR value
//       });

//       alert("✅ Attendance Marked");
//       fetchAttendance();
//     } catch (err) {
//       alert(err.response?.data?.message || "Error ❌");
//     }
//   };

//   return (
//     <div className="dashboard">
//       <h1>🎓 Student Dashboard</h1>

//       {/* ================= LECTURES ================= */}
//       <h2>📚 Lectures</h2>

//       <div className="grid">
//         {lectures.map((lec) => (
//           <div key={lec._id} className="card">
//             <h3>{lec.title}</h3>
//             <p>{lec.description}</p>

//             {/* ✅ SHOW SAME QR AS TEACHER */}
//             <QRCodeCanvas value={lec.qrData} size={150} />

//             <br />

//             {/* ✅ BUTTON INSTEAD OF SCAN */}
//             <button onClick={() => markAttendance(lec)}>
//               ✅ Mark Attendance
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* ================= ATTENDANCE ================= */}
//       <h2>📊 Your Attendance</h2>

//       {attendance.length === 0 ? (
//         <p>No attendance yet</p>
//       ) : (
//         <table>
//           <thead>
//             <tr>
//               <th>Lecture</th>
//               <th>Status</th>
//               <th>Date</th>
//             </tr>
//           </thead>

//           <tbody>
//             {attendance.map((a, i) => (
//               <tr key={i}>
//                 <td>{a.lectureId}</td>
//                 <td>{a.status}</td>
//                 <td>{new Date(a.date).toLocaleString()}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// }



























// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./StudentDashboard.css";

// const StudentDashboard = () => {
//   const [lectures, setLectures] = useState([]);
//   const [attendance, setAttendance] = useState([]);

//   const studentId = "123";

//   const fetchLectures = async () => {
//     const res = await axios.get("http://localhost:5000/lectures");
//     setLectures(res.data);
//   };

//   const fetchAttendance = async () => {
//     const res = await axios.get(
//       `http://localhost:5000/attendance/student/${studentId}`
//     );
//     setAttendance(res.data);
//   };

//   useEffect(() => {
//     fetchLectures();
//     fetchAttendance();
//   }, []);

//   return (
//     <div className="dashboard">
//       <h1>🎓 Student Dashboard</h1>

//       {/* LECTURES */}
//       <h2>📚 Lectures</h2>
//       <div className="lecture-grid">
//         {lectures.map((lec) => (
//           <div key={lec._id} className="card">
//             <h3>{lec.title}</h3>
//             <p>{lec.description}</p>

//             <p style={{ color: "green" }}>
//               📱 Scan QR from Teacher Screen
//             </p>
//           </div>
//         ))}
//       </div>

//       {/* ATTENDANCE */}
//       <h2>📊 Your Attendance</h2>

//       {attendance.length === 0 ? (
//         <p>No attendance yet</p>
//       ) : (
//         <table>
//           <thead>
//             <tr>
//               <th>Lecture</th>
//               <th>Status</th>
//               <th>Date</th>
//             </tr>
//           </thead>

//           <tbody>
//             {attendance.map((a, i) => (
//               <tr key={i}>
//                 <td>{a.lectureTitle}</td>
//                 <td>{a.status}</td>
//                 <td>{new Date(a.date).toLocaleString()}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default StudentDashboard;
















// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { QRCodeCanvas } from "qrcode.react";

// export default function StudentDashboard() {
//   const [lectures, setLectures] = useState([]);
//   const [attendance, setAttendance] = useState([]);

//   const studentId = "123";
//   const studentName = "Kalyani";

//   const fetchLectures = async () => {
//     const res = await axios.get("http://localhost:5000/lectures");
//     setLectures(res.data);
//   };

//   const fetchAttendance = async () => {
//     const res = await axios.get("http://localhost:5000/attendance");
//     setAttendance(res.data);
//   };

//   useEffect(() => {
//     fetchLectures();
//     fetchAttendance();
//   }, []);

//   return (
//     <div className="dashboard">
//       <h1>🎓 Student Dashboard</h1>

//       {/* LECTURES */}
//       <h2>📚 Lectures</h2>

//       <div className="lecture-grid">
//         {lectures.map((lec) => (
//           <div key={lec._id} className="card">
//             <h3>{lec.title}</h3>
//             <p>{lec.description}</p>

//             <QRCodeCanvas
//               value={`http://localhost:5000/scan?lectureId=${lec._id}&studentId=${studentId}&studentName=${studentName}`}
//               size={150}
//             />

//             <p>📱 Scan using mobile</p>
//           </div>
//         ))}
//       </div>

//       {/* ATTENDANCE */}
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






















// import { useEffect, useState } from "react";
// import axios from "axios";
// import { QRCodeCanvas } from "qrcode.react";
// import "./StudentDashboard.css";

// export default function StudentDashboard() {
//   const [lectures, setLectures] = useState([]);
//   const [attendance, setAttendance] = useState([]);

//   // 🔥 CHANGE THIS TO YOUR IP
//   const BASE_URL = "http://10.217.219.163:5000";

//   // ✅ STATIC STUDENT (for now)
//   const studentId = "123";
//   const studentName = "Kalyani";

//   // ================= FETCH LECTURES =================
//   const fetchLectures = async () => {
//     try {
//       const res = await axios.get(`${BASE_URL}/lectures`);
//       setLectures(res.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   // ================= FETCH ATTENDANCE =================
//   const fetchAttendance = async () => {
//     try {
//       const res = await axios.get(
//         `${BASE_URL}/attendance/student/${studentId}`
//       );
//       setAttendance(res.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     fetchLectures();
//     fetchAttendance();
//   }, []);

//   return (
//     <div className="student-container">
//       <h2>🎓 Student Dashboard</h2>

//       {/* ================= LECTURES ================= */}
//       <h3>📚 Lectures</h3>

//       <div className="lecture-grid">
//         {lectures.map((lec) => (
//           <div className="lecture-card" key={lec._id}>
//             <h4>{lec.title}</h4>
//             <p>{lec.description}</p>

//             {/* ✅ QR CODE */}
//             <QRCodeCanvas
//               value={`${BASE_URL}/scan?lectureId=${lec._id}&studentId=${studentId}&studentName=${studentName}`}
//               size={180}
//             />

//             <p>📱 Scan using mobile</p>

//             {/* OPTIONAL VIDEO */}
//             {lec.videoUrl && (
//               <a href={lec.videoUrl} target="_blank" rel="noreferrer">
//                 ▶ Watch Lecture
//               </a>
//             )}
//           </div>
//         ))}
//       </div>

//       {/* ================= ATTENDANCE ================= */}
//       <h3>📊 Attendance</h3>

//       <table className="attendance-table">
//         <thead>
//           <tr>
//             <th>Lecture</th>
//             <th>Status</th>
//             <th>Date</th>
//           </tr>
//         </thead>

//         <tbody>
//           {attendance.map((a, index) => (
//             <tr key={index}>
//               <td>{a.lectureTitle}</td>
//               <td>{a.status}</td>
//               <td>{new Date(a.date).toLocaleString()}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }




// import { useEffect, useState } from "react";
// import axios from "axios";
// import { QRCodeCanvas } from "qrcode.react";
// import "./StudentDashboard.css";

// export default function StudentDashboard() {
//   const [lectures, setLectures] = useState([]);
//   const [attendance, setAttendance] = useState([]);

//   // 🔥 YOUR IP (DO NOT USE localhost)
//   const BASE_URL = "http://10.217.219.163:5000";

//   const studentId = "123";
//   const studentName = "Kalyani";

//   // ================= FETCH =================
//   useEffect(() => {
//     fetchLectures();
//     fetchAttendance();
//   }, []);

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
//       const res = await axios.get(
//         `${BASE_URL}/attendance/student/${studentId}`
//       );
//       setAttendance(res.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div className="student-page">
//       {/* HEADER */}
//       <h1 className="title">🎓 Student Dashboard</h1>

//       {/* LECTURES */}
//       <h2 className="section">📚 Lectures</h2>

//       <div className="lecture-container">
//         {lectures.map((lec) => (
//           <div className="lecture-box" key={lec._id}>
//             <h3>{lec.title}</h3>

//             <QRCodeCanvas
//               value={`${BASE_URL}/scan?lectureId=${lec._id}&studentId=${studentId}&studentName=${studentName}`}
//               size={200}
//             />

//             <p className="scan-text">📱 Scan using mobile</p>
//           </div>
//         ))}
//       </div>

//       {/* ATTENDANCE */}
//       <h2 className="section">📊 Attendance</h2>

//       <table className="table">
//         <thead>
//           <tr>
//             <th>Lecture</th>
//             <th>Status</th>
//             <th>Date</th>
//           </tr>
//         </thead>

//         <tbody>
//           {attendance.map((a, i) => (
//             <tr key={i}>
//               <td>{a.lectureTitle}</td>
//               <td>{a.status}</td>
//               <td>{new Date(a.date).toLocaleString()}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }







































//this QR with dashbord  msg display QR


// import { useEffect, useState } from "react";
// import axios from "axios";

// const BASE_URL = "http://10.217.219.163:5000";

// export default function StudentDashboard() {
//   const [lectures, setLectures] = useState([]);
//   const [attendance, setAttendance] = useState([]);

//   const studentId = "123";
//   const studentName = "Kalyani";

//   const fetchData = async () => {
//     const lec = await axios.get(`${BASE_URL}/lectures`);
//     const att = await axios.get(
//       `${BASE_URL}/attendance/student/${studentId}`
//     );

//     setLectures(lec.data);
//     setAttendance(att.data);
//   };

//   useEffect(() => {
//     fetchData();
//     const interval = setInterval(fetchData, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div style={{ padding: 20 }}>
//       <h1>🎓 Student Dashboard</h1>

//       <h2>📚 Lectures (Scan QR)</h2>

//       {lectures.map((lec) => (
//         <div key={lec._id} style={{ margin: 20 }}>
//           <h3>{lec.title}</h3>

//           <img
//             src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${BASE_URL}/scan?lectureId=${lec._id}&studentId=${studentId}&studentName=${studentName}`}
//             alt="QR"
//           />

//           <p>📱 Scan this QR</p>
//         </div>
//       ))}

//       <h2>📊 Attendance</h2>

//       <table border="1" width="80%">
//         <thead>
//           <tr>
//             <th>Lecture</th>
//             <th>Status</th>
//             <th>Date</th>
//           </tr>
//         </thead>

//         <tbody>
//           {attendance.map((a, i) => (
//             <tr key={i}>
//               <td>{a.lectureTitle}</td>
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
// import { useState, useEffect } from "react";
// import axios from "axios";
// import "./StudentDashboard.css";

// export default function StudentDashboard() {
//   const [attendance, setAttendance] = useState([]);

//   const BASE_URL = "http://10.217.219.163:5000";

//   // Fetch attendance
//   const fetchAttendance = async () => {
//     const res = await axios.get(`${BASE_URL}/attendance`);
//     setAttendance(res.data);
//   };

//   useEffect(() => {
//     fetchAttendance();

//     // 🔥 Auto refresh
//     const interval = setInterval(() => {
//       fetchAttendance();
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="dashboard">

//       <h2>🎓 Student Dashboard</h2>

//       {/* ================= ATTENDANCE ================= */}
//       <h3>📊 Your Attendance</h3>

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




//Good code runnable

// import { useEffect, useState } from "react";
// import axios from "axios";
// import "./StudentDashboard.css";

// export default function StudentDashboard() {
//   const [lectures, setLectures] = useState([]);
//   const [attendance, setAttendance] = useState([]);

//   const BASE_URL = "http://10.217.219.163:5000";

//   // ✅ Demo student (you can later replace with login)
//   const studentId = "123";
//   const studentName = "Kalyani";

//   // ================= FETCH DATA =================
//   const fetchData = async () => {
//     try {
//       const lec = await axios.get(`${BASE_URL}/lectures`);
//       const att = await axios.get(
//         `${BASE_URL}/attendance/student/${studentId}`
//       );

//       setLectures(lec.data);
//       setAttendance(att.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     fetchData();

//     // 🔥 Auto refresh every 3 sec
//     const interval = setInterval(fetchData, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div style={{ padding: 20 }}>

//       <h1>🎓 Student Dashboard</h1>

//       {/* ================= LECTURES ================= */}
//       <h2>📚 Lectures (Scan QR)</h2>

//       {lectures.length === 0 ? (
//         <p>No lectures available</p>
//       ) : (
//         lectures.map((lec) => (
//           <div key={lec._id} style={{ margin: 20 }}>
//             <h3>{lec.title}</h3>

//             <img
//               src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${BASE_URL}/scan?lectureId=${lec._id}&studentId=${studentId}&studentName=${studentName}`}
//               alt="QR"
//             />

//             <p>📱 Scan this QR</p>
//           </div>
//         ))
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
//           {/* {attendance.length === 0 ? (
//             <tr>
//               <td colSpan="4">No Attendance Yet</td>
//             </tr>
//           ) : (
//             attendance.map((a, i) => (
//               <tr key={i}>
//                 <td>{a.lectureTitle}</td>
//                 <td>{a.studentName}</td>
//                 <td>{a.status}</td>
//                 <td>{new Date(a.date).toLocaleString()}</td>
//               </tr>
//             ))
//           )}
//         </tbody> */}
//          {attendance.map((a, i) => (
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








//testing



// import { useEffect, useState } from "react";
// import axios from "axios";
// import "./StudentDashboard.css";

// export default function StudentDashboard() {
//   const [lectures, setLectures] = useState([]);
//   const [attendance, setAttendance] = useState([]);

//   const BASE_URL = "http://10.217.219.163:5000";

//   // ✅ Use SAME NAME as backend
//   const studentName = "Kalyani";

//   // ================= FETCH DATA =================
//   const fetchData = async () => {
//     try {
//       const lec = await axios.get(`${BASE_URL}/lectures`);

//       // ✅ FIXED (use studentName)
//       const att = await axios.get(
//         `${BASE_URL}/attendance/student/${studentName}`
//       );

//       setLectures(lec.data);
//       setAttendance(att.data);

//     } catch (err) {
//       console.log("Fetch Error:", err);
//     }
//   };

//   useEffect(() => {
//     fetchData();

//     const interval = setInterval(fetchData, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div style={{ padding: 20 }}>

//       <h1>🎓 Student Dashboard</h1>

//       {/* ================= LECTURES ================= */}
//       <h2>📚 Lectures (Scan QR)</h2>

//       {lectures.length === 0 ? (
//         <p>No lectures available</p>
//       ) : (
//         lectures.map((lec) => (
//           <div key={lec._id} style={{ margin: 20 }}>
//             <h3>{lec.title}</h3>

//             {/* ✅ FIXED QR LINK */}
//             <img
//               src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${BASE_URL}/scan?lectureId=${lec._id}&studentName=${studentName}`}
//               alt="QR"
//             />

//             <p>📱 Scan this QR</p>
//           </div>
//         ))
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
//                     ? new Date(a.date).toLocaleString("en-IN", {
//                         day: "numeric",
//                         month: "numeric",
//                         year: "numeric",
//                         hour: "numeric",
//                         minute: "2-digit",
//                         hour12: true,
//                       })
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















//
// import { useEffect, useState } from "react";
// import axios from "axios";
// import "./StudentDashboard.css";

// export default function StudentDashboard() {
//   const [lectures, setLectures] = useState([]);
//   const [attendance, setAttendance] = useState([]);

//   const BASE_URL = "http://10.217.219.163:5000";

//   // ✅ Use SAME NAME as backend
//   const studentName = "Kalyani";

//   // ================= FETCH DATA =================
//   const fetchData = async () => {
//     try {
//       const lec = await axios.get(`${BASE_URL}/lectures`);

//       // ✅ FIXED (use studentName)
//       const att = await axios.get(
//         `${BASE_URL}/attendance/student/${studentName}`
//       );

//       setLectures(lec.data);
//       setAttendance(att.data);

//     } catch (err) {
//       console.log("Fetch Error:", err);
//     }
//   };

//   useEffect(() => {
//     fetchData();

//     const interval = setInterval(fetchData, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div style={{ padding: 20 }}>

//       <h1>🎓 Student Dashboard</h1>

//       {/* ================= LECTURES ================= */}
//       <h2>📚 Lectures (Scan QR)</h2>

//       {lectures.length === 0 ? (
//         <p>No lectures available</p>
//       ) : (
//         lectures.map((lec) => (
//           <div key={lec._id} style={{ margin: 20 }}>
//             <h3>{lec.title}</h3>

//             {/* ✅ FIXED QR LINK */}
//             <img
//               src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${BASE_URL}/scan?lectureId=${lec._id}&studentName=${studentName}`}
//               alt="QR"
//             />

//             <p>📱 Scan this QR</p>
//           </div>
//         ))
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
//                     ? new Date(a.date).toLocaleString("en-IN", {
//                         day: "numeric",
//                         month: "numeric",
//                         year: "numeric",
//                         hour: "numeric",
//                         minute: "2-digit",
//                         hour12: true,
//                       })
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




//
// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function StudentDashboard() {
//   const [lectures, setLectures] = useState([]);
//   const [attendance, setAttendance] = useState([]);

//   const BASE_URL = "http://10.62.213.163:5000";
//   const studentName = "Kalyani";

//   const fetchData = async () => {
//     const lec = await axios.get(`${BASE_URL}/lectures`);
//     const att = await axios.get(`${BASE_URL}/attendance`);

//     setLectures(lec.data);
//     setAttendance(att.data);
//   };

//   useEffect(() => {
//     fetchData();
//     const interval = setInterval(fetchData, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   const myAttendance = attendance.filter(
//     (a) => a.studentName === studentName
//   );

//   return (
//     <div style={{ padding: 20 }}>
//       <h1>🎓 Student Dashboard</h1>

//       <h2>📚 Lectures</h2>

//       {lectures.map((lec) => (
//         <div key={lec._id}>
//           <h3>{lec.title}</h3>

//           <img
//             src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${BASE_URL}/scan?lectureId=${lec._id}`}
//           />
//         </div>
//       ))}

//       <h2>📊 My Attendance</h2>

//       <table border="1">
//         <thead>
//           <tr>
//             <th>Lecture</th>
//             <th>Status</th>
//             <th>Date</th>
//           </tr>
//         </thead>

//         <tbody>
//           {myAttendance.map((a, i) => (
//             <tr key={i}>
//               <td>{a.lectureTitle}</td>
//               <td>{a.status}</td>
//               <td>{new Date(a.date).toLocaleString()}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }









//lallla
// import { useEffect, useState } from "react";
// import axios from "axios";
// import "./StudentDashboard.css";

// export default function StudentDashboard() {
//   const [lectures, setLectures] = useState([]);
//   const [attendance, setAttendance] = useState([]);

//   // ⚠️ IMPORTANT: Use SAME URL as TeacherDashboard / ngrok
//   const BASE_URL = "http://10.62.213.163:5000";
//   // OR (recommended for global)
//   // const BASE_URL = "https://your-ngrok-url.ngrok-free.app";

//   const studentName = "Kalyani"; // must match QR

//   // ================= FETCH DATA =================
//   const fetchData = async () => {
//     try {
//       // ✅ Get lectures (this should show QR)
//       const lec = await axios.get(`${BASE_URL}/lectures`);

//       // ✅ FIX: use studentName NOT studentId
//       const att = await axios.get(
//         `${BASE_URL}/attendance/student/${studentName}`
//       );

//       console.log("Lectures:", lec.data); // 🔍 debug
//       console.log("Attendance:", att.data);

//       setLectures(lec.data);
//       setAttendance(att.data);

//     } catch (err) {
//       console.log("ERROR:", err.message);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div style={{ padding: 20 }}>
//       <h1>🎓 Student Dashboard</h1>

//       {/* ================= LECTURES ================= */}
//       <h2>📚 Lectures (Scan QR)</h2>

//       {lectures.length === 0 ? (
//         <p>No lectures available ❌</p>
//       ) : (
//         lectures.map((lec) => (
//           <div key={lec._id} style={{ margin: 20 }}>
//             <h3>{lec.title}</h3>

//             {/* ✅ QR CODE FIX */}
//             <img
//               src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${BASE_URL}/scan?lectureId=${lec._id}&studentName=${studentName}`}
//               alt="QR"
//             />

//             <p>📱 Scan this QR</p>
//           </div>
//         ))
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








//


// import { useEffect, useState } from "react";
// import axios from "axios";
// import "./StudentDashboard.css";

// export default function StudentDashboard() {
//   const [lectures, setLectures] = useState([]);
//   const [attendance, setAttendance] = useState([]);

//   const BASE_URL = "http://10.62.213.163:5000";
//   const studentName = "Kalyani";

//   const fetchData = async () => {
//     try {
//       const lec = await axios.get(`${BASE_URL}/lectures`);
//       const att = await axios.get(
//         `${BASE_URL}/attendance/student/${studentName}`
//       );

//       setLectures(lec.data);
//       setAttendance(att.data);
//     } catch (err) {
//       console.log("ERROR:", err.message);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div className="dashboard">
//       <h1 className="title">🎓 Student Dashboard</h1>

//       {/* ================= LECTURES ================= */}
//       <h2 className="section-title">📚 Scan QR for Attendance</h2>

//       <div className="qr-container">
//         {lectures.length === 0 ? (
//           <p>No lectures available ❌</p>
//         ) : (
//           lectures.map((lec) => (
//             <div className="qr-card" key={lec._id}>
//               <h3>{lec.title}</h3>

//               <img
//                 src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${BASE_URL}/scan?lectureId=${lec._id}&studentName=${studentName}`}
//                 alt="QR"
//               />

//               <p className="scan-text">📱 Scan this QR</p>
//             </div>
//           ))
//         )}
//       </div>

//       {/* ================= ATTENDANCE ================= */}
//       <h2 className="section-title">📊 Attendance</h2>

//       <div className="table-container">
//         <table>
//           <thead>
//             <tr>
//               <th>Lecture</th>
//               <th>Student</th>
//               <th>Status</th>
//               <th>Date</th>
//             </tr>
//           </thead>

//           <tbody>
//             {attendance.length === 0 ? (
//               <tr>
//                 <td colSpan="4">No Attendance Yet</td>
//               </tr>
//             ) : (
//               attendance.map((a, i) => (
//                 <tr key={i}>
//                   <td>{a.lectureTitle}</td>
//                   <td>{a.studentName}</td>
//                   <td className={a.status === "Present" ? "present" : "absent"}>
//                     {a.status}
//                   </td>
//                   <td>
//                     {a.date
//                       ? new Date(a.date).toLocaleString("en-IN")
//                       : "No Date"}
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }


//sample
// import { useEffect, useState } from "react";
// import axios from "axios";
// import "./StudentDashboard.css";

// export default function StudentDashboard() {
//   const [lectures, setLectures] = useState([]);
//   const [attendance, setAttendance] = useState([]);

//   // const BASE_URL = "http://localhost:5000";
//   // const BASE_URL = "http://10.62.213.163:5000";
//   const BASE_URL = "https://abcd1234.ngrok-free.app";

//   // Demo student
//   const studentName = "Kalyani";

//   // ================= FETCH DATA =================
//   const fetchData = async () => {
//     try {
//       const lec = await axios.get(`${BASE_URL}/lectures`);
//       const att = await axios.get(
//         `${BASE_URL}/attendance/student/${studentName}`
//       );

//       setLectures(lec.data);
//       setAttendance(att.data);
//     } catch (err) {
//       console.log("Fetch Error:", err);
//     }
//   };

//   useEffect(() => {
//     fetchData();

//     const interval = setInterval(fetchData, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div style={{ padding: 20 }}>
//       <h1>🎓 Student Dashboard</h1>

//       {/* ================= LECTURES ================= */}
//       <h2>📚 Lectures (Scan QR)</h2>

//       {lectures.length === 0 ? (
//         <p>No lectures available</p>
//       ) : (
//         lectures.map((lec) => (
//           <div key={lec._id} style={{ margin: 20 }}>
//             <h3>{lec.title}</h3>

//             <img
//               src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${BASE_URL}/scan?lectureId=${lec._id}`}
//               alt="QR"
//             />

//             <p>📱 Scan this QR</p>
//           </div>
//         ))
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
import { useEffect, useState } from "react";
import axios from "axios";
import "./StudentDashboard.css";

export default function StudentDashboard() {
  const [lectures, setLectures] = useState([]);
  const [attendance, setAttendance] = useState([]);

  // ✅ LOCAL (CHANGE AFTER DEPLOY)
  // const BASE_URL = "http://localhost:5000";
  // const BASE_URL = "http://10.62.213.163:5000";
 const BASE_URL = "http://10.62.213.163:5000";

  const studentName = "Kalyani";

  // ================= FETCH =================
  const fetchData = async () => {
    try {
      const lec = await axios.get(`${BASE_URL}/lectures`);
      const att = await axios.get(
        `${BASE_URL}/attendance/student/${studentName}`
      );

      setLectures(lec.data);
      setAttendance(att.data);
    } catch (err) {
      console.log("Fetch Error:", err.response?.data || err.message);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>🎓 Student Dashboard</h1>

      {/* ================= LECTURES ================= */}
      <h2>📚 Lectures Shared by Teacher</h2>

      {lectures.length === 0 ? (
        <p>No lectures available</p>
      ) : (
        lectures.map((lec) => {
          const scanUrl = `${BASE_URL}/scan?lectureId=${lec._id}&studentName=${studentName}`;

          return (
            <div key={lec._id} style={{ margin: 20, borderBottom: "1px solid #ccc" }}>
              <h3>{lec.title}</h3>
              <p>{lec.description}</p>

              <p>📅 {lec.date || "N/A"}</p>
              <p>⏰ {lec.time || "N/A"}</p>

              {/* ▶ Lecture Video */}
              {lec.videoUrl && (
                <a href={lec.videoUrl} target="_blank" rel="noreferrer">
                  ▶ Watch Lecture
                </a>
              )}

              <br /><br />

              {/* ✅ SAME QR AS TEACHER */}
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${scanUrl}`}
                alt="QR Code"
              />

              <p>📱 Scan this QR using mobile</p>

              {/* ✅ DIRECT CLICK OPTION */}
              <a href={scanUrl} target="_blank" rel="noreferrer">
                👉 Mark Attendance
              </a>
            </div>
          );
        })
      )}

      {/* ================= ATTENDANCE ================= */}
      <h3>📊 My Attendance</h3>

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