import React from "react";
import "./ItemListContainer.css"; 
const ItemListContainer = () => {
    return (
        <div className="item-list-container">
            <div className="product">
                <img src="url_de_la_imagen_1.jpg" alt="Producto 1" />
                <p>Descripción del Producto 1</p>
                <button>Agregar al Carrito</button>
            </div>
            <div className="product">
                <img src="url_de_la_imagen_2.jpg" alt="Producto 2" />
                <p>Descripción del Producto 2</p>
                <button>Agregar al Carrito</button>
            </div>
            <div className="product">
                <img src="url_de_la_imagen_3.jpg" alt="Producto 3" />
                <p>Descripción del Producto 3</p>
                <button>Agregar al Carrito</button>
            </div>
        </div>
    );
};

export default ItemListContainer;