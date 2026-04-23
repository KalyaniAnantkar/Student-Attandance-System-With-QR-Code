import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles.css";

const AttendanceMark = () => {
  const [students, setStudents] = useState([]);
  const [attendance, setAttendance] = useState({});
  const [lectureId, setLectureId] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch students
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await axios.get("http://localhost:5000/users");

        const studentList = res.data.filter(
          (user) => user.role === "student"
        );

        setStudents(studentList);
      } catch (err) {
        console.log(err);
        alert("Error fetching students");
      }
    };

    fetchStudents();
  }, []);

  // Mark attendance
  const handleMark = async (studentId, status) => {
    if (!lectureId) {
      alert("Please enter Lecture ID");
      return;
    }

    try {
      setLoading(true);

      await axios.post("http://localhost:5000/attendance", {
        lectureId,
        studentId,
        status,
      });

      setAttendance((prev) => ({
        ...prev,
        [studentId]: status,
      }));

      alert("Attendance marked ✅");
    } catch (err) {
      console.log(err);
      alert("Error marking attendance ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Mark Attendance</h2>

        {/* Lecture ID Input */}
        <input
          type="text"
          placeholder="Enter Lecture ID"
          value={lectureId}
          onChange={(e) => setLectureId(e.target.value)}
          className="input"
        />

        <ul>
          {students.map((s) => (
            <li key={s._id} className="list-item">
              <span>{s.name}</span>

              <div>
                <button
                  onClick={() => handleMark(s._id, "present")}
                  disabled={loading}
                >
                  Present
                </button>

                <button
                  onClick={() => handleMark(s._id, "absent")}
                  disabled={loading}
                >
                  Absent
                </button>
              </div>

              {attendance[s._id] && (
                <span className="status">
                  ({attendance[s._id]})
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AttendanceMark;