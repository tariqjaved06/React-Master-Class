function Car(props) {
  return (
    <h3>I am a {props.brand}!</h3>
  );
}

function Garage() {
  return (
    <>
      <h1>Who lives in my Garage?</h1>
      <Car brand = "Ford"/>
      <Car brand = "Mercendez"/>
    </>
  );
}

export default Garage
