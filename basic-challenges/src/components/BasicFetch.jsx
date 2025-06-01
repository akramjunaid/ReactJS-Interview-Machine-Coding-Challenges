import React, { useEffect, useState } from "react";

function BasicFetch() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  return (
    <div>
      {data ? (
        <div>
          <h1>Title: {data.title}</h1>
        </div>
      ) : null}
    </div>
  );
}

export default BasicFetch;
