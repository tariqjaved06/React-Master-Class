function CarInfo({ carinfo }) {
  return (
    <>
      <h2>My {carinfo.name} {carinfo.model}!</h2>
      <p>It is {carinfo.color} and it is from {carinfo.year}!</p>
    </>
  );
}

export default CarInfo;