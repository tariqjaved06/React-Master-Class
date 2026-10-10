const fruitList = ["apple", "banana", "cherry"];

function MyList() {
  return (
    <ul>
      {fruitList.map((fruit) => (
        <li key={fruit}>{fruit}</li>
      ))}
    </ul>
  );
}
export default MyList
