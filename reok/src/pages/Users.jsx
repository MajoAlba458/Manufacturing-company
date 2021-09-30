import Navbar from "components/Navbar";
import Footer from "components/Footer";
import "assets/css/usuarios.css"
function Users() {
  return (
    <div className="Users">
      <Navbar title={'Gestion de Usuario'}/>
        <section id="section" class="intro-section" >
        <form action="#" method="post" name="gestion_usuario" class="form-usuario">
          <label for="us_nombre">Nombre</label>
          <div class="inputs">
            <input
              id="us_nombre"
              name="us_nombre"
              required="true"
              placeholder="Nombre/apellidos"
              size="50"
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
              size="50"
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
              size="50"
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
              size="50"
              type="password"
              value=""
            />
          </div>
          <label for="rol">Rol del usuario</label>
          <div class="inputs">
            <select name="rol" id="rol" >
              <option value="#"> </option>
              <option value="admin_sist">Administrador de sistema</option>
              <option value="admin_ventas">Administrador de ventas</option>
              <option value="vendedor">Vendedor</option>
              <option value="operario">Operario</option>
              <option value="ejecutivo">Ejecutivo</option>
            </select>
          </div>
          <div class="inputs">
            <button id="reset" name="reset" type="reset">
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
        <div class="table-responsive">
            <table class="table table-hover text-center">
									<thead>
										<tr>
											<th class="text-center">ID</th>
											<th class="text-center">Nombre</th>
											<th class="text-center">Apellidos</th>
											<th class="text-center">Usuario</th>
											<th class="text-center">Email</th>
											<th class="text-center">Phone</th>
											<th class="text-center">Rol</th>
											<th class="text-center">Autorizacion</th>
											<th class="text-center">Borrar</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>1</td>
											<td>Maria</td>
											<td>Jadnat</td>
											<td>MAJAXX</td>
											<td>majoxx@gmail.com</td>
											<td>1234</td>
											<td>Admin</td>
											<td>Pendiente</td>
											<td>false</td>
										</tr>
										<tr>
											<td>2</td>
											<td>Juan</td>
											<td>Hernandez</td>
											<td>JUHEXX</td>
											<td>juhexx@gmail.com</td>
											<td>1234</td>
											<td>User</td>
											<td>No autorizado</td>
											<td>true</td>
										</tr>
                    <tr>
											<td>3</td>
											<td>Daniel</td>
											<td>Ramirez</td>
											<td>DARAXX</td>
											<td>daraxx@gmail.com</td>
											<td>1234</td>
											<td>User</td>
											<td>Autorizado</td>
											<td>false</td>
										</tr>
									</tbody>
				    </table>
				</div>

        <div class="footer-usuario">
          <Footer />
        </div>
        
      </section>
        
    </div>
  );
}

export default Users;