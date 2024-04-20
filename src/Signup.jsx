import React, { useEffect, useState } from "react";

const Signup = () => {
  const [username, setUsername] = useState("Salvi Jaimin Rajankumar");
  const [email, setEmail] = useState("salvijaimin275@gmail.com");
  const [password, setPassword] = useState("12345678");
  const [topics, setTopics] = useState([]);
  const [error, setError] = useState("");
  //   const [object, setObject] = useState({});

  const handleCheckboxChange = (e) => {
    const { value } = e.target;
    if (e.target.checked) {
      setTopics([...topics, value]);
    } else {
      setTopics(topics.filter((topic) => topic !== value));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username === "" || email === "" || password === "") {
      setError("All fields are required");
    } else if (topics.length < 3) {
      setError("Select at least 3 topics");
    } else {
      try {
        const object = {
          username: username,
          email: email,
          password: password,
          interest: topics,
        };
        console.log(object);
        const response = await fetch("http://localhost:8000/api/createuser", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // "Cache-Control": "no-cache",
          },
          body: JSON.stringify(object),
        });
        console.log(response);
        if (response.ok) {
          setUsername("");
          setEmail("");
          setPassword("");
          setTopics([]);
          setError("");
          alert("User added successfully");
        } else {
          const errorData = await response.json();
          throw new Error(errorData.msg || "Failed to add user");
        }
      } catch (error) {
        console.error("Error adding user:", error.message);
        setError(error.message || "Failed to add user");
      }
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Signup
        </h2>
        {error && (
          <p className="text-red-500 mb-4 text-center font-semibold">{error}</p>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-3 rounded border focus:outline-none focus:border-blue-400"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded border focus:outline-none focus:border-blue-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded border focus:outline-none focus:border-blue-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="space-y-2">
            <label className="block text-gray-700">
              Topics (Select at least 3)
            </label>
            <div className="grid grid-cols-2 gap-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  value="Trie Series"
                  onChange={handleCheckboxChange}
                />
                <span className="ml-2 text-gray-800">Trie Series</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  value="Node.js"
                  onChange={handleCheckboxChange}
                />
                <span className="ml-2 text-gray-800">Node.js</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  value="HTML"
                  onChange={handleCheckboxChange}
                />
                <span className="ml-2 text-gray-800">HTML</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  value="CSS"
                  onChange={handleCheckboxChange}
                />
                <span className="ml-2 text-gray-800">CSS</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  value="Python Basic"
                  onChange={handleCheckboxChange}
                />
                <span className="ml-2 text-gray-800">Python Basic</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  value="Ethical Hacking"
                  onChange={handleCheckboxChange}
                />
                <span className="ml-2 text-gray-800">Ethical Hacking</span>
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-3 rounded hover:bg-blue-600 w-full"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
