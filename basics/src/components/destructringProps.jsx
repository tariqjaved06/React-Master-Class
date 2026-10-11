function CarCard({ brand, ...rest }) {
  return <h2>My {brand} {rest.model} is {rest.color}</h2>;
}

export default CarCard;