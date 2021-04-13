class MiMenu extends HTMLElement{

    connectedCallback(){
        this.innerHTML = 
        `<nav>
            <table>
                <thead>
                    <tr>
                        <th>
                            <a href="index.html">
                                 <span class="material-icons">
                                      home
                                 </span>
                            </a>
                        </th>    
                        <th></th><th></th>
                        <th>
                          <a href="dispositivo.html"
                               >
                                    <span class="material-icons">
                                        devices
                                    </span>
                          </a>
                        </th>    
                        <th></th><th></th>
                        <th>
                             <a href="historial.html"
                                
                                      <span class="material-icons">
                                           backup_table
                                      </span>
                             </a>
                        </th>  
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <a href="index.html">
                              Inicio
                            </a>
                        </td>
                        <td></td><td></td>
                        <td>
                        <a href="dispositivo.html">
                                 Simulación
                        </a>
                        </td>
                        <td></td><td></td>
                        <td>
                           <a href="historial.html"
                              >
                                Historial
                           </a>
                        </td>
                    </tr>
                </tbody>
            </table>
            <mi-footer></mi-footer>
        </nav>`;
    }


}
customElements.define("mi-menu",MiMenu);
