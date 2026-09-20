import { useEffect, useState } from "react";

function App() {
  const [status, setStatus] = useState("loading...");

  useEffect(() => {
    fetch("http://localhost:3000/health")
      .then((res) => res.json())
      .then((data) => setStatus(data.status))
      .catch(() => setStatus("server not reachable"));
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-blue-600">Project Manager</h1>
      <p className="mt-2">Server status: {status}</p>
    </div>
  );
}

export default App;