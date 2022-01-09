const numbers = [2, 4, 6, 8];

const ListItems = () => {
  const items = numbers.map((item) => 
    <li key={item.toString()}>{item}</li>
  );

  console.log(items);
  
  return <ul>{items}</ul>;
}

export default function App() {
  return <ListItems />;
}