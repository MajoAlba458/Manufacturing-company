import Navbar from "components/Navbar";
import Footer from "components/Footer";
function Sales() {
    return (
        <div className="Sales">
            <Navbar title = {"Informacion de Ventas"}/>
           <header ul class="navbar">
        <h1 class="Titulo 1"></h1> 
    </header>
    <main>
        <label for = "numero de pedido">Numero de Pedido :</label>
        <input type="number" name="numero de pedido"/>
        <br/>
        <label for="fecha de ingreso">Fecha de Ingreso</label>
        <input type="date"/>
        <br/>
        <label for="id identificador">Id Vendedor</label>
        <input type="number"/>
        <br/>
        <label for="Codigo de producto">Codigo de Producto</label>
        <input type="number"/>
        <br/>
        <label for="Valor producto">Valor del Producto</label>
        <input type="number"/>
        <br/>
        <label for="Descripcion del produto">Descripcion del Producto</label>
        <button>Ir</button>
        <br/>
        <label for="Valor total venta">Valor Total de la Venta</label>
        <button>Generar</button>
        <input type="number"/>
        <br/>
        <label for="Fecha de entrega">Fecha de Entrega</label>
        <input type="date"/>
        <br/>
        <label for="lugar de entrega">Forma de Entrega</label>
        <button>Domicilio</button>
        <button>Almacen</button>
        <br/>
        <label for="Forma de pago">Forma de Pago</label>
        <br/>
        <button>Credito</button>
        <button>Contado</button>
        <br/>
        <label for="feha de pago">Fecha de Pago</label>
        <input type="date"/>

    </main>
    <footer></footer> 
        </div>
    )
}

export default Sales;