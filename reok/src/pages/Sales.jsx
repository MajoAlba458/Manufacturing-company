
function Sales() {
    return (
        <div className="Sales">
            <form class="MiForma" name="Formulario">
                <h4>Formulario Web: Venta Producto</h4>
                <label for="">Id. Venta:</label>
                <input type="number" required/><br/>
                <label for="">Fecha y Hora Actual:</label>
                <input type="datetime-local" required/><br/>
                <label for="">Fecha Venta del Producto:</label>
                <input type="date" required placeholder="dd/mm/aaaa"/><br/>
                <label for="">Id. Cliente:</label>
                <input type="number" required placeholder="# de identificacion"/><br/>
                <label for="">Nombre Cliente</label>
                <input type="text" required/><br/>
                <label for="">Direccion Cliente</label>
                <input type="text" required/><br/>
                <label for="">Telefono Cliente</label>
                <input type="text" required/><br/>
                <label for="">Id. Producto</label>
                <input type="number" required/><br/>
                <label for="">Cantidad Total Producto</label>
                <input type="number" required/><br/>
                <label for="">Total Venta Producto</label>
                <input type="number" required placeholder="$"/><br/>
                <input type="submit" name="Enviar" value="Enviar"/>
            </form>
        </div>
    )
}

export default Sales;