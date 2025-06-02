import { useEffect, useState } from "react";

export default function EnhanceInputSearch() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [sortAsc, setSortAsc] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  useEffect(() => {
    const results = data.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );

    const sortedResults = [...results].sort((a, b) => {
      if (sortAsc) {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });

    setFilteredResults(sortedResults);
  }, [query, data, sortAsc]);

  return (
    <div className="EnhanceInputSearch">
      <h1>Live Search with Filter + Sort</h1>
      <input
        type="text"
        placeholder="Search by name..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={() => setSortAsc((prev) => !prev)}>
        Sort: {sortAsc ? "A–Z" : "Z–A"}
      </button>

      {filteredResults.length > 0 ? (
        <div>
          <h3>Matches ({filteredResults.length})</h3>
          <ul>
            {filteredResults.map((item) => (
              <li key={item.id}>
                <strong>{item.name}</strong> <br />
                <small>{item.email}</small> <br />
                <em>{item.body}</em>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        query && <p>No matches found.</p>
      )}
    </div>
  );
}
