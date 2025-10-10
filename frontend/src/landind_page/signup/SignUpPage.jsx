import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignUpPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState("signup"); // 'signup' | 'login'
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const API_BASE = "http://localhost:8080";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    try {
      if (mode === "signup") {
        const res = await axios.post(`${API_BASE}/signup`, { username, email, password });
        if (res?.data?.token) {
          localStorage.setItem("authToken", res.data.token);
          localStorage.setItem("userId", res.data.userId);
          if (res.data.username) localStorage.setItem("username", res.data.username);
          if (res.data.email) localStorage.setItem("email", res.data.email);
          setSuccess("Signup successful! You are now logged in.");
          try { window.dispatchEvent(new Event('auth-changed')); } catch {}
          // redirect to home (do not auto-open dashboard)
          navigate("/");
        }
      } else {
        const res = await axios.post(`${API_BASE}/login`, { email, password });
        if (res?.data?.token) {
          localStorage.setItem("authToken", res.data.token);
          localStorage.setItem("userId", res.data.userId);
          if (res.data.username) localStorage.setItem("username", res.data.username);
          if (res.data.email) localStorage.setItem("email", res.data.email);
          setSuccess("Login successful!");
          try { window.dispatchEvent(new Event('auth-changed')); } catch {}
          // redirect to home (do not auto-open dashboard)
          navigate("/");
        }
      }
    } catch (err) {
      const msg = err?.response?.data?.message || "Something went wrong";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mb-5">
      <div className="row align-items-center" style={{ minHeight: "70vh" }}>
        {/* Left Image */}
        <div className="col-12 col-lg-6 p-4 text-center">
          <img
            src="/media/images/open.svg"
            style={{ width: "90%", maxWidth: 520 }}
            alt="Get started"
          />
        </div>

        {/* Right Form */}
        <div className="col-12 col-lg-6">
          <div className="card shadow-sm border-0">
            <div className="card-body p-4 p-md-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h1 className="fs-4 mb-0">
                  {mode === "signup" ? "Create your account" : "Welcome back"}
                </h1>
                <div>
                  <button
                    className={`btn btn-sm me-2 ${mode === "signup" ? "btn-primary" : "btn-outline-primary"}`}
                    onClick={() => setMode("signup")}
                  >
                    Sign up
                  </button>
                  <button
                    className={`btn btn-sm ${mode === "login" ? "btn-primary" : "btn-outline-primary"}`}
                    onClick={() => setMode("login")}
                  >
                    Log in
                  </button>
                </div>
              </div>

              <p className="text-muted mb-4">
                {mode === "signup"
                  ? "Join TradeX and start investing in minutes."
                  : "Log in to continue to your account."}
              </p>

              {error && (
                <div className="alert alert-danger py-2" role="alert">
                  {error}
                </div>
              )}
              {success && (
                <div className="alert alert-success py-2" role="alert">
                  {success}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                {mode === "signup" && (
                  <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
                  </div>
                )}

                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100"
                  disabled={loading}
                >
                  {loading ? "Please wait..." : mode === "signup" ? "Create account" : "Log in"}
                </button>

                <p className="text-muted small mb-0 mt-3 text-center">
                  By proceeding, you agree to the TradeX
                  <a href="#"> terms</a> & <a href="#">privacy policy</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
