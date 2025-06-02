import React, { useEffect, useState } from "react";

function InputSearch() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
      .then((res) => res.json())
      .then((jsonData) => setData(jsonData));
  }, []);

  const handleChange = (e) => {
    setQuery(e.target.value);
    const found = data.find((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    found ? setResult(found) : nnull;
  };
  return (
    <div>
      <h1>Live Search</h1>
      <input type="text" value={query} onChange={handleChange} />
      {result ? (
        <div>
          <h4>Match Found</h4>
          <h4>{result.name}</h4>
          <p>{result.body}</p>
        </div>
      ) : (
        <h2>Match Not Found</h2>
      )}
    </div>
  );
}

export default InputSearch;
