import React from 'react';
import PropTypes from 'prop-types';

const Gasto = ({eliminarGasto,gasto}) => ( 
    <li className="gastos">
        <p>
            {gasto.nombre}

            <span className="gasto">$ {gasto.cantidad} 
            </span>

            <button 
             onClick={()=>eliminarGasto(gasto)} 
             className="button"
             style={{backgroundColor: 'red', color: '#FFF'}}>&times;
                    
             </button>
                    
                    
        </p>
    </li>
);

Gasto.propTypes = {
    gasto: PropTypes.object.isRequired
}
 
export default Gasto;