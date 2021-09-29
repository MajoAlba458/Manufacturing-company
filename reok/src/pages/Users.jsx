import Navbar from "components/Navbar";
import Footer from "components/Footer";

function Users() {
  return (
    <div className="Users">
      <Navbar/>
      
      <section id="section" class="intro-section" >
        <h2>Gestion de Usuario</h2>
        <form action="#" method="post" name="gestion_usuario" class="form-usuario">
          <label for="us_nombre">Nombre</label>
          <div class="inputs">
            <input
              id="us_nombre"
              name="us_nombre"
              required="true"
              placeholder="Nombre/apellidos"
              size="80"
              type="text"
              value=""
            />
          </div>
          <label for="usuario">Usuario</label>
          <div class="inputs">
            <input
              id="usuario"
              name="usuario"
              required="true"
              placeholder="Usuario"
              size="80"
              type="text"
              value=""
            />
          </div>
          <label for="credenciales">Credenciales</label>
          <div class="inputs">
            <input
              id="passwd"
              name="passwd"
              required="true"
              placeholder="Password"
              size="80"
              type="password"
              value=""
            />
          </div>
          <label for="confirm">Confirmar Credenciales</label>
          <div class="inputs">
            <input
              id="confirm"
              name="confirm"
              required="true"
              placeholder="Confirmar Password"
              size="80"
              type="password"
              value=""
            />
          </div>
          <label for="rol">Rol del usuario</label>
          <div class="inputs">
            <select name="rol" id="rol">
              <option value="admin_sist">Administrador de sistema</option>
              <option value="admin_ventas">Administrador de ventas</option>
              <option value="vendedor">Vendedor</option>
              <option value="operario">Operario</option>
              <option value="ejecutivo">Ejecutivo</option>
            </select>
          </div>
          <div class="inputs">
            <button id="reset" name="reset" type="reset">
              {" "}
              Restaurar
            </button>
          </div>
          <div class="inputs">
            <input
              id="registrar_usuario"
              name="registrar_usuario"
              type="submit"
              value="Registrar Usuario"
            />
          </div>
        </form>
    </section>
    <Footer />
    </div>
  );
}

export default Users;