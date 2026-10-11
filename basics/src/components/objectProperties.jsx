function MyCar() {
  const myObj = {
    name: "Fait",
    model: "500",
    color: "white",
  };
  return (
    <>
      <h1>
        My car is a {myObj.color} {myObj.name} {myObj.model}
      </h1>
    </>
  );
}

export default MyCar