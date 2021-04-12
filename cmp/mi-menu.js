class MiMenu extends HTMLElement{

    connectedCallback(){
        this.innerHTML = 
        `<nav>
            <table>
                <thead>
                    <tr>
                        <th>
                            <a target="BLANK__" href="index.html">
                                 <span class="material-icons">
                                      home
                                 </span>
                            </a>
                        </th>    
                        <th></th><th></th>
                        <th>
                          <a href="dispositivo.html"
                               target="_blank">
                                    <span class="material-icons">
                                        devices
                                    </span>
                          </a>
                        </th>    
                        <th></th><th></th>
                        <th>
                             <a href="historial.html"
                                target="_blank">
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
                            <a target="BLANK__" href="index.html">
                              Inicio
                            </a>
                        </td>
                        <td></td><td></td>
                        <td>
                        <a href="dispositivo.html"
                             target="_blank">
                                 Simulación
                        </a>
                        </td>
                        <td></td><td></td>
                        <td>
                           <a href="historial.html"
                              target="_blank">
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