  export const GuardarLocalStorage = (clave, elemento) => {
    let elementos = JSON.parse(localStorage.getItem(clave));
    console.log(elementos);

    if (Array.isArray(elementos)) {
      elementos.push(elemento);
    } else {
      elementos = [elemento];
    }

    localStorage.setItem(clave, JSON.stringify(elementos));

    return elemento;
  };