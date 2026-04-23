// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import "../styles.css";

// export default function Login() {
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//   });

//   const [loading, setLoading] = useState(false);

//   // Handle input change
//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setForm((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // Handle submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     console.log("Entered Email:", form.email);
//     console.log("Entered Password:", form.password);

//     if (!form.email || !form.password) {
//       alert("Please fill all fields");
//       return;
//     }

//     setLoading(true);

//     try {
//       const res = await axios.post(
//         "http://localhost:5000/users/login",
//         form
//       );

//       console.log("Server Response:", res.data);

//       // Save token + role
//       localStorage.setItem("token", res.data.token);
//       localStorage.setItem("role", res.data.role);

//       alert("Login successful ✅");

//       // Role-based redirect
//       const role = res.data.role;

//       if (role === "admin") {
//         navigate("/admin");
//       } else if (role === "teacher") {
//         navigate("/teacher");
//       } else {
//         navigate("/student");
//       }

//     } catch (err) {
//       console.log("Full Error:", err);

//       if (err.response) {
//         console.log("Backend Error:", err.response.data);
//       }

//       alert(
//         err.response?.data?.message ||
//         err.message ||
//         "Login failed ❌"
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="container">
//       <div className="card">
//         <h2>Login</h2>

//         <form onSubmit={handleSubmit}>
//           <div className="input-group">
//             <label>Email</label>
//             <input
//               type="email"
//               name="email"
//               value={form.email}
//               onChange={handleChange}
//               placeholder="Enter email"
//               required
//             />
//           </div>

//           <div className="input-group">
//             <label>Password</label>
//             <input
//               type="password"
//               name="password"
//               value={form.password}
//               onChange={handleChange}
//               placeholder="Enter password"
//               required
//             />
//           </div>

//           <button type="submit" disabled={loading}>
//             {loading ? "Logging in..." : "Login"}
//           </button>
//         </form>

//         {/* Register navigation */}
//         <p
//           onClick={() => navigate("/register")}
//           style={{
//             cursor: "pointer",
//             marginTop: "10px",
//             color: "#007bff",
//           }}
//         >
//           Create Account
//         </p>
//       </div>
//     </div>
//   );
// }


// 
// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// export default function Login() {
//   const [form, setForm] = useState({ email: "", password: "" });
//   const navigate = useNavigate();

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post(
//         "http://localhost:5000/api/users/login",
//         form
//       );

//       localStorage.setItem("token", res.data.token);
//       localStorage.setItem("role", res.data.role);

//       // Role-based redirect
//       if (res.data.role === "admin") navigate("/admin");
//       else if (res.data.role === "teacher") navigate("/teacher");
//       else navigate("/student");
//     } catch {
//       alert("Invalid credentials");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
//       <div className="bg-white p-8 rounded-xl shadow-lg w-96">
//         <h2 className="text-xl font-bold text-center mb-5">Login</h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input name="email" placeholder="Email" onChange={handleChange} className="w-full p-2 border rounded" />
//           <input name="password" type="password" placeholder="Password" onChange={handleChange} className="w-full p-2 border rounded" />

//           <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }




//
// import { useState } from "react";
// import axios from "axios";

// export default function Login() {
//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post(
//         "http://localhost:5000/login",
//         form
//       );

//       alert(res.data.message);

//       const role = res.data.user.role;

//       // 🔥 Role-based redirect
//       if (role === "teacher") {
//         window.location.href = "/teacher";
//       } else if (role === "student") {
//         window.location.href = "/student";
//       } else {
//         window.location.href = "/admin";
//       }

//     } catch (err) {
//       alert("Login failed ❌");
//     }
//   };

//   return (
//     <form onSubmit={handleLogin}>
//       <input
//         name="email"
//         placeholder="Email"
//         onChange={handleChange}
//         required
//       />
//       <input
//         name="password"
//         type="password"
//         placeholder="Password"
//         onChange={handleChange}
//         required
//       />
//       <button type="submit">Login</button>
//     </form>
//   );
// }








//create user
// import { useState } from "react";
// import axios from "axios";

// export default function Login() {
//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post(
//         "http://localhost:5000/login",
//         form
//       );

//       alert(res.data.message);

//       const role = res.data.user.role;

//       if (role === "teacher") {
//         window.location.href = "/teacher";
//       } else if (role === "student") {
//         window.location.href = "/student";
//       } else {
//         window.location.href = "/admin";
//       }

//     } catch (err) {
//       alert("Login failed ❌");
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>

//       <form onSubmit={handleLogin}>
//         <input
//           name="email"
//           placeholder="Email"
//           onChange={handleChange}
//           required
//         />

//         <input
//           name="password"
//           type="password"
//           placeholder="Password"
//           onChange={handleChange}
//           required
//         />

//         <button type="submit">Login</button>
//       </form>

//       {/* ✅ Create Account Button */}
//       <button
//         onClick={() => (window.location.href = "/register")}
//       >
//         Create Account
//       </button>
//     </div>
//   );
// }




















//not stored data in mongodb
// import { useState } from "react";
// import axios from "axios";
// import "./Login.css";

// export default function Login() {
//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//   });

//   const [loading, setLoading] = useState(false);

//   // handle input
//   const handleChange = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // login function
//   const handleLogin = async (e) => {
//     e.preventDefault();

//     if (!form.email || !form.password) {
//       return alert("Please fill all fields ❌");
//     }

//     try {
//       setLoading(true);

//       const res = await axios.post(
//         "http://localhost:5000/login",
//         form
//       );

//       const user = res.data.user;

//       // ✅ Save user
//       localStorage.setItem("user", JSON.stringify(user));

//       alert("Login successful ✅");

//       // ✅ Role based redirect (FIXED)
//       if (user.role === "teacher") {
//         window.location.href = "/teacher";
//       } else if (user.role === "student") {
//         window.location.href = "/student";
//       } else if (user.role === "admin") {
//         window.location.href = "/admin";
//       } else {
//         alert("Unknown role ❌");
//       }

//     } catch (err) {
//       console.log(err);
//       alert(err.response?.data?.message || "Login failed ❌");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-card">
//         <h2>🔐 Login</h2>

//         <form onSubmit={handleLogin}>
//           <input
//             name="email"
//             type="email"
//             placeholder="Enter Email"
//             value={form.email}
//             onChange={handleChange}
//           />

//           <input
//             name="password"
//             type="password"
//             placeholder="Enter Password"
//             value={form.password}
//             onChange={handleChange}
//           />

//           <button type="submit" disabled={loading}>
//             {loading ? "Logging in..." : "Login"}
//           </button>
//         </form>

//         {/* Register Button */}
//         <p style={{ marginTop: "10px" }}>
//           Don't have an account?
//         </p>

//         <button
//           className="register-btn"
//           onClick={() => (window.location.href = "/register")}
//         >
//           Create Account
//         </button>
//       </div>
//     </div>
//   );
// }

































// // import { useState } from "react";
// // import axios from "axios";

// // export default function Login() {
// //   const [form, setForm] = useState({
// //     email: "",
// //     password: "",
// //   });

// //   const handleChange = (e) => {
// //     setForm({ ...form, [e.target.name]: e.target.value });
// //   };

// //   const handleLogin = async (e) => {
// //     e.preventDefault();

// //     try {
// //       const res = await axios.post("http://localhost:5000/login", form);

// //       const user = res.data.user;

// //       localStorage.setItem("user", JSON.stringify(user));

// //       if (user.role === "teacher") {
// //         window.location.href = "/teacher";
// //       } else if (user.role === "student") {
// //         window.location.href = "/student";
// //       } else {
// //         window.location.href = "/admin";
// //       }

// //     } catch {
// //       alert("Login failed ❌");
// //     }
// //   };

// //   return (
// //     <div style={{ textAlign: "center", marginTop: "100px" }}>
// //       <h2>Login</h2>

// //       <form onSubmit={handleLogin}>
// //         <input name="email" placeholder="Email" onChange={handleChange} required />
// //         <br /><br />
// //         <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
// //         <br /><br />
// //         <button type="submit">Login</button>
// //       </form>
// //     </div>
// //   );
// // }



//
import { useState } from "react";
import axios from "axios";
import "./Login.css";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/login",
        form
      );

      const user = res.data.user;

      localStorage.setItem("user", JSON.stringify(user));

      alert("Login successful ✅");

      if (user.role === "teacher") {
        window.location.href = "/teacher";
      } else if (user.role === "student") {
        window.location.href = "/student";
      } else if (user.role === "admin") {
        window.location.href = "/admin";
      }

    } catch (err) {
      console.log(err);
      alert(err.response?.data?.message || "Login failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>

        <form onSubmit={handleLogin}>
          <input
            name="email"
            type="email"
            placeholder="Enter Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            name="password"
            type="password"
            placeholder="Enter Password"
            value={form.password}
            onChange={handleChange}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Logging..." : "Login"}
          </button>
        </form>

        <button onClick={() => window.location.href = "/register"}>
          Create Account
        </button>
      </div>
    </div>
  );
}