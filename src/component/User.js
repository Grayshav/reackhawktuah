import React, {useState, useEffect} from "react";

function UserTable(){
    //variabel buat deklarasi tabel user
    const [users, setUsers] = useState([]);

    const fetchData = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => setUsers(data));

        // data sebuah objek
    };

    // menyiapkan variabel setelah deklarasi API utk ditampilkan
    useEffect(() => {
        fetchData();
    }, []);

    return (
      <div>
        <button onClick={fetchData}>Refresh Data</button>

        <table>
          <thead>
            <tr>
              <th>Nama</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}

export default UserTable;           