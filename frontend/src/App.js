import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/data")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React + FastAPI Demo</h1>
      {data ? (
        <p>
          <strong>Message:</strong> {data.message} <br />
          <strong>Status:</strong> {data.status}
        </p>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default App;
