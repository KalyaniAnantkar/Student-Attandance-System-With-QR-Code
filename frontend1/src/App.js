// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Login from "./components/Login";
// import CreateUserForm from "./components/CreateUserForm";

// // ✅ Import Dashboards (make sure names match your files)
// import AdminDashboard from "./components/adminDashboard";
// import TeacherDashboard from "./components/teacherDashboard";
// import StudentDashboard from "./components/studentDashboard";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
        
//         {/* Login Page */}
//         <Route path="/" element={<Login />} />

//         {/* Register Page */}
//         <Route path="/register" element={<CreateUserForm />} />

//         {/* Dashboards */}
//         <Route path="/admin" element={<AdminDashboard />} />
//         <Route path="/teacher" element={<TeacherDashboard />} />
//         <Route path="/student" element={<StudentDashboard />} />

//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// import LectureForm from "./components/LectureForm";

// function App() {
//   return (
//     <div>
//       <h2>Add Lecture</h2>
//       <LectureForm />
//     </div>
//   );
// }

// export default App;


// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import CreateUser from "./components/CreateUser";
// import Login from "./components/Login";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/register" element={<CreateUser />} />

//         <Route path="/teacher" element={<h1>Teacher Dashboard</h1>} />
//         <Route path="/student" element={<h1>Student Dashboard</h1>} />
//         <Route path="/admin" element={<h1>Admin Dashboard</h1>} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import CreateUser from "./components/CreateUser";
// import Login from "./components/Login";
// import TeacherDashboard from "./components/TeacherDashboard";
// import StudentDashboard from "./components/StudentDashboard";

// // Optional (you can replace later with real components)
// const StudentDashboard = () => <h1>Student Dashboard</h1>;
// const AdminDashboard = () => <h1>Admin Dashboard</h1>;

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>

//         {/* 🔐 Auth Routes */}
//         <Route path="/" element={<Login />} />
//         <Route path="/register" element={<CreateUser />} />

//         {/* 📊 Dashboards */}
//         <Route path="/teacher" element={<TeacherDashboard />} />
//         <Route path="/student" element={<StudentDashboard />} />
//         <Route path="/admin" element={<AdminDashboard />} />

//         {/* ❌ Optional: 404 Page */}
//         <Route path="*" element={<h1>Page Not Found ❌</h1>} />

//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;














// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import CreateUser from "./components/CreateUser";
// import Login from "./components/Login";
// import TeacherDashboard from "./components/TeacherDashboard";
// import StudentDashboard from "./components/StudentDashboard";
// import AdminDashboard from "./components/AdminDashboard";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/register" element={<CreateUser />} />

//         <Route path="/teacher" element={<TeacherDashboard />} />
//         <Route path="/student" element={<StudentDashboard />} />

//         <Route path="/admin" element={<h1>Admin Dashboard</h1>} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;






import { BrowserRouter, Routes, Route } from "react-router-dom";

// ✅ Correct imports (check file names EXACTLY same)
import CreateUser from "./components/CreateUser";
import Login from "./components/Login";
import TeacherDashboard from "./components/TeacherDashboard";
import StudentDashboard from "./components/StudentDashboard";
import AdminDashboard from "./components/AdminDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ✅ Login Page */}
        <Route path="/" element={<Login />} />

        {/* ✅ Register Page */}
        <Route path="/register" element={<CreateUser />} />

        {/* ✅ Dashboards */}
        <Route path="/teacher" element={<TeacherDashboard />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;











