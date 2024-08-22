import { useEffect, useState } from "react";

export default function Search() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  //Consumo de API
  const url = "https://jsonplaceholder.typicode.com/users";
  const urlPizza = "http://localhost:5000/api/pizzas/"

  const getData = async () => {
    const response = await fetch(url);
    const pizzas = await fetch(urlPizza);
    const dataPizzas = await pizzas.json();
    console.log(dataPizzas)
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    getData();
  }, []);

  let results = [];

  if (!search) {
    results = users;
  } else {
    results = users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) || user.username.toLowerCase().includes(search.toLowerCase())
    );
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar.."
        className="form-control"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <table className="table table-striped table-hover my-4 shadow-lg">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {results.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
