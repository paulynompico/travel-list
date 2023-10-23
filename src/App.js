export default function App() {}

function Header() {
  return <h1>Travel Packing List</h1>;
}

function Form() {
  return (
    <div className="add-form">
      <h3>What do you need to bring on your trip?</h3>
    </div>
  );
}

function List() {
  return <div className="list">LIST</div>;
}

function Footer() {
  return (
    <footer>
      <em>You have x items on your list and you have packed x%</em>
    </footer>
  );
}
