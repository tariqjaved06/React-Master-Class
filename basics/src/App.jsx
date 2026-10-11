import MyList from "./components/MyList.jsx";
import UserList from "./components/UserList.jsx";
import Car from "./components/Expression.jsx";
import MyCar from "./components/objectProperties.jsx";
import AlertButton from "./components/camelcaseEvent.jsx";
import Style from "./components/styleAttribute.jsx";
import Fruits from "./components/conditional.jsx";
import Garage from "./components/Props.jsx";
import CarInfo from "./components/Objectprops.jsx";
import CarArray from "./components/ArrayProps.jsx";
import CarCard from "./components/destructringProps.jsx";
import CarHis from "./components/DefaultDestructringProp.jsx";
const carInfo = {
  name: "Ford",
  model: "Mustang",
  color: "red",
  year: 1969,
};
const carInfo1 = ["Ford", "Mustang"];
const carData = { brand: "Ford", model: "Mustang", color: "red" };
const carHis = { brand: "Ford" };

function App() {
  return (
    <div>
      <h1>Hello world</h1>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
          </tr>
          <tr>
            <td>Tariq</td>
          </tr>
          <tr>
            <td>Javed</td>
          </tr>
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
      <CarInfo carinfo={carInfo} />
      <CarArray carinfo={carInfo1} />
      <CarCard {...carData}/>
      < CarHis {...carHis}/>
    </div>
  );
}

export default App;
