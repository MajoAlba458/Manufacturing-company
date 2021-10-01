import Navbar from "components/Navbar";
import Footer from "components/Footer";
import "assets/css/styleVendedores.css";
function Vendors() {
    return (
        <div className="Vendors">
            <Navbar title={'Gestion de Vendedores'}/>
            <div class="main-content"> 

            {/* Se comento el header de esta interfaz ya que se esta utilizando la barra de navegacion reutilizable */}
        {/* <header>
            <h1>
                 <label for="nav-toggle">
                     <span class="las la-bars"></span>
                 </label>
                 Buscar
            </h1>
 
            <div class="search-wrapper">
                <span class="las la-search"></span>
                <input type="search" placeholder="Buscar aqui"/>
             </div>
 
             <div class="user-wrapper">
                 
             </div>
                 <h4>Daniel Felipe</h4>
                 <small>Vendedor</small>
         </header> */}



              
        <main>
            <div class="cards"> 
                
                <div class="card-single">
                    <div>
                        <h1>2</h1>
                        <span>Vendedores Actuales</span>
                    </div>
                    <div>
                       <span class="las la-users"></span>
    
                    </div>
                </div>
    
                <div class="card-single">
                    <div>
                        <h1>790000</h1>
                        <span>ventas de semana </span>
                    </div>
                    <div>
                       <span class="las la-clipboard"></span>
    
                    </div>
                </div>
    
                <div class="card-single">
                    <div>
                        <h1>4</h1>
                        <span>ingreso por día</span>
                    </div>
                    <div>
                       <span class="las la-shopping-bag"></span>
    
                    </div>
                </div>
    
    
                <div class="card-single">
                    <div>
                        <h1>40</h1>
                        <span>compras mensuales</span>
                    </div>
                    <div>
                       <span class="lab la-google-wallet"></span>
    
                    </div>
                </div> 
    
                
                
                   
        
                <div class="recent-grid">
                    <div class="projects">
                        <div class="card">
                            <div class="card-header">
                                <h2>Consultas recientes</h2>
                                <button>ver todo<span class="las la-arrow-right"></span></button>
                            </div>
                        
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table width="100%">
                                        <thead>
                                            <tr>
                                                <td>Project Title</td>
                                                <td>Department</td>
                                                <td>Status</td>
                                            </tr>
                                        </thead>
                
                
                                        <tbody>
                                            <tr>
                                                <td>UI/UX Design</td>
                                                <td>UI Team</td>
                                                <td>
                                                    
                                                    <span class="status purple"></span>
                                                    review
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Web development</td>
                                                <td>Frontend</td>
                                                <td>
                                                    <span class="status pink"></span>
                                                    In Progress
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Ushop app</td>
                                                <td>Mobile Team</td>
                                                <td>
                                                    <span class="status orange"></span>
                                                    pending
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>UI/UX Design</td>
                                                <td>UI Team</td>
                                                <td>
                                                        
                                                    <span class="status purple"></span>
                                                        review
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Web development</td>
                                                <td>Frontend</td>
                                                <td>
                                                    <span class="status pink"></span>
                                                        In Progress
                                                </td>
                                            </tr>
            
                                            <tr>
                                                <td>Ushop app</td>
                                                <td>Mobile Team</td>
                                                <td>
                                                    <span class="status orange"></span>
                                                        pending
                                                </td>
                
                                            </tr>
                                   
                        
                        
                                            <tr>
                                                <td>UI/UX Design</td>
                                                <td>UI Team</td>
                                                <td>
                                                    
                                                    <span class="status purple"></span>
                                                    review
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Web development</td>
                                                <td>Frontend</td>
                                                <td>
                                                    <span class="status pink"></span>
                                                    In Progress
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Ushop app</td>
                                                <td>Mobile Team</td>
                                                <td>
                                                    <span class="status orange"></span>
                                                    pending
                                                </td>
                                            </tr> 
                                        
                                         </tbody>
                                
                        
                                    </table>
                                        
                                </div>
                                 
                            </div>
                              
                        </div>
                           
                    </div>
                        
                </div>
            
        
        
                <div class="customers">
                    <div class="card">
                        <div class="card-header">
                            <h3>New Customer</h3>
        
                            <button>See all <span class="las la-arrow-right"></span></button>
                        </div>
                            
                        <div class="card-body">
                            <div class="customer">
                                <div class="info">
                                 
                                </div>
                                <div>
                                    <h4>Reok</h4>
                                    <small>company</small>
                                </div>
                            </div>
                            <div class="contact">
                                <span class="las la-user-circle"></span>
                                <span class="las la-comment"></span>
                                <span class="las la-phone"></span>
                            </div>    
                        </div>
                        
                    </div>
                </div>    
                
            
    


            </div>
            
          
        </main>

        </div>
        </div>
    )
}

export default Vendors;
