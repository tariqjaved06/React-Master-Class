import MyList from "./components/MyList.jsx";
import UserList from "./components/UserList.jsx";

function App() {
  return (
    <div>
      <h1>Hello world</h1>
      <table>
        <tbody>
          <tr><th>Name</th></tr>
          <tr><td>Tariq</td></tr>
          <tr><td>Javed</td></tr>
        </tbody>
      </table>
      <MyList />
      <UserList />
    </div>
  );
}

export default App;
