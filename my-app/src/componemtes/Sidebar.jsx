import React, { useState } from 'react';
import '../pasta de estilos/Sidebar.css';
import { FaBars } from 'react-icons/fa';

function Sidebar(props) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const sidebarItems = props.items.map((item, index) => (
    <li key={index}>
      <a href={item.url} target="_blank" rel="noopener noreferrer">
        {item.text}
      </a>
    </li>
  ));

  return (
    <div className="custom-sidebar"> {/* <--- Adicione esta div com uma classe personalizada */}
      <aside className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
        <button className="toggle-button" onClick={toggleSidebar}>
          <FaBars /> {}
        </button>
        {isSidebarOpen && (
          <>
            <h3>Mais sobre react</h3>
            <ul>{sidebarItems}</ul>
          </>
        )}
      </aside>
    </div>
  );
}

export default Sidebar;