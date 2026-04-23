// import { useState } from "react";
// import axios from "axios";
// import "./styles.css";

// function CreateUser() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     role: "student",
//   });

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post(
//         "http://localhost:5000/users/register",
//         form
//       );
//       alert(res.data.message);
//     } catch (err) {
//       alert("Error creating user");
//     }
//   };

//   return (
//     <div className="container">
//       <div className="card">
//         <h2>Create User</h2>

//         <form onSubmit={handleSubmit}>
//           <div className="input-group">
//             <label>Name</label>
//             <input name="name" onChange={handleChange} required />
//           </div>

//           <div className="input-group">
//             <label>Email</label>
//             <input name="email" type="email" onChange={handleChange} required />
//           </div>

//           <div className="input-group">
//             <label>Password</label>
//             <input name="password" type="password" onChange={handleChange} required />
//           </div>

//           <div className="input-group">
//             <label>Role</label>
//             <select name="role" onChange={handleChange}>
//               <option value="student">Student</option>
//               <option value="teacher">Teacher</option>
//               <option value="admin">Admin</option>
//             </select>
//           </div>

//           <button type="submit">Create User</button>
//           <button type="submit">Login</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default CreateUser;


//runable mogodb not stored data
import { useState } from "react";
import axios from "axios";
import "./styles.css";

function CreateUser() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/users", // ✅ FIXED URL
        form
      );

      alert(res.data.message || "User created ✅");

    } catch (err) {
      console.log("FULL ERROR:", err);

      alert(
        err.response?.data?.message ||
        err.message ||
        "Error creating user ❌"
      );
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Create User</h2>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Name</label>
            <input name="name" onChange={handleChange} required />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input name="email" type="email" onChange={handleChange} required />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input name="password" type="password" onChange={handleChange} required />
          </div>

          <div className="input-group">
            <label>Role</label>
            <select name="role" onChange={handleChange}>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <button type="submit">Create User</button>

          {/* ✅ FIXED BUTTON */}
          <button
            type="button"
            onClick={() => (window.location.href = "/")}
          >
            Go to Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateUser;


























//
// import { useState } from "react";
// import axios from "axios";
// import "./styles.css";

// export default function CreateUser() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     role: "student",
//   });

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post(
//         "http://localhost:5000/users",
//         form
//       );

//       alert(res.data.message);

//       // ✅ Clear form after success
//       setForm({
//         name: "",
//         email: "",
//         password: "",
//         role: "student",
//       });

//     } catch (err) {
//       console.log(err);
//       alert(
//         err.response?.data?.message ||
//         "Error creating user ❌"
//       );
//     }
//   };

//   return (
//     <div className="container">
//       <div className="card">
//         <h2>Create User</h2>

//         <form onSubmit={handleSubmit}>
//           <input
//             name="name"
//             placeholder="Enter Name"
//             value={form.name}
//             onChange={handleChange}
//             required
//           />

//           <input
//             name="email"
//             type="email"
//             placeholder="Enter Email"
//             value={form.email}
//             onChange={handleChange}
//             required
//           />

//           <input
//             name="password"
//             type="password"
//             placeholder="Enter Password"
//             value={form.password}
//             onChange={handleChange}
//             required
//           />

//           <select name="role" onChange={handleChange} value={form.role}>
//             <option value="student">Student</option>
//             <option value="teacher">Teacher</option>
//             <option value="admin">Admin</option>
//           </select>

//           <button type="submit">Create User</button>

//           <button type="button" onClick={() => window.location.href = "/"}>
//             Go to Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }


//new
// import { useState } from "react";
// import axios from "axios";
// import "./styles.css";

// export default function CreateUser() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     role: "student",
//   });

//   const BASE_URL = "http://10.62.213.163:5000";

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post(`${BASE_URL}/users`, form);
//       alert(res.data.message);

//       setForm({
//         name: "",
//         email: "",
//         password: "",
//         role: "student",
//       });

//     } catch (err) {
//       console.log(err);
//       alert("Error ❌");
//     }
//   };

//   return (
//     <div className="container">
//       <div className="card">
//         <h2>Create User</h2>

//         <form onSubmit={handleSubmit}>
//           <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
//           <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} />
//           <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} />

//           <select name="role" value={form.role} onChange={handleChange}>
//             <option value="student">Student</option>
//             <option value="teacher">Teacher</option>
//             <option value="admin">Admin</option>
//           </select>

//           <button type="submit">Create User</button>
//         </form>
//       </div>
//     </div>
//   );
// }










//cretae new
// import { useState } from "react";
// import axios from "axios";

// export default function CreateUser() {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     role: "student",
//   });

//   const [loading, setLoading] = useState(false);

//   // 🔥 IMPORTANT: change to your IP if using mobile
//   const BASE_URL = "http://localhost:5000";

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!form.name || !form.email || !form.password) {
//       return alert("Please fill all fields ❌");
//     }

//     try {
//       setLoading(true);

//       const res = await axios.post(`${BASE_URL}/users`, form);

//       alert(res.data.message || "User created ✅");

//       // ✅ Clear form
//       setForm({
//         name: "",
//         email: "",
//         password: "",
//         role: "student",
//       });

//     } catch (err) {
//       console.log("ERROR:", err);

//       alert(
//         err.response?.data?.error ||
//         err.response?.data?.message ||
//         err.message ||
//         "Error creating user ❌"
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
//       <h2>Create User</h2>

//       <form onSubmit={handleSubmit}>
//         <input
//           name="name"
//           placeholder="Enter Name"
//           value={form.name}
//           onChange={handleChange}
//         />
//         <br /><br />

//         <input
//           name="email"
//           type="email"
//           placeholder="Enter Email"
//           value={form.email}
//           onChange={handleChange}
//         />
//         <br /><br />

//         <input
//           name="password"
//           type="password"
//           placeholder="Enter Password"
//           value={form.password}
//           onChange={handleChange}
//         />
//         <br /><br />

//         <select name="role" value={form.role} onChange={handleChange}>
//           <option value="student">Student</option>
//           <option value="teacher">Teacher</option>
//           <option value="admin">Admin</option>
//         </select>

//         <br /><br />

//         <button type="submit" disabled={loading}>
//           {loading ? "Creating..." : "Create User"}
//         </button>
//       </form>
//     </div>
//   );
// }









