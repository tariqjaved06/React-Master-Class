import MyList from "./components/MyList.jsx";
import UserList from "./components/UserList.jsx";
import Car from "./components/Expression.jsx"
import MyCar from "./components/objectProperties.jsx"
import AlertButton from "./components/camelcaseEvent.jsx";
import Style from "./components/styleAttribute.jsx";
import Fruits from "./components/conditional.jsx";
import Garage from "./components/Props.jsx";
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
      <Car />
      <MyCar />
      <AlertButton />
      <Style />
      <Fruits />
      <Garage />
    </div>
  );
}

export default App;
