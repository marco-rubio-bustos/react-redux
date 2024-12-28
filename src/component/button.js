import React, { useState } from "react";

function Button() {
  const [nombre, setNombre] = useState("System of a down");
  const cambiarNombre = (nuevoNombre) => {
    setNombre(nuevoNombre);
  };
  return (
    <div>
      <button onClick={(e) => cambiarNombre("Metallica")}>{nombre}</button>
      <p>{nombre}</p>
    </div>
  );
}

export default Button;
