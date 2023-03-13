import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup() {
  let items = ['New York', 'San Fransisco', 'Tokyo', 'London', 'Paris'];
  
  const [selectedIndex, setSelectedIndex] = useState(-1);
  

  return (
    <>
      <h1>heading</h1>
      {items.length === 0 && <p>No item found</p> }
      <ul className="list-group">
        {items.map((item, index) => (
          <li 
            className={
              selectedIndex === index 
              ? 'list-group-item active' 
              : 'list-group-item'
            } 
            key={item}
            onClick={() => { selectedIndex = index;}}
          >
            {item}
          </li>
       ))}
      </ul>
    </>
  );
}
  
export default ListGroup;