import React from "react";
import "../App.css"; // Make sure the path is correct

function MainPage() {
  return (
    <div className="page-wrapper">
      <header className="header">My Header</header>
      <main className="main-content">
        <p>This is styled using shared CSS.</p>
      </main>
      <button className="button-primary">Click Me</button>
    </div>
  );
}


export default MainPage;
