function AlertButton() {
  const handleClick = () => {
    alert("Hello World");
  };

  return <button onClick={handleClick} disabled = {false}>Click me</button>;
}

export default AlertButton;