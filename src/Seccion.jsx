import React, { useState } from 'react'
import ComponenteModal from './ComponenteModal'
import { Button, IconButton } from '@mui/material'
import BotonBasico from './BotonBasico'
import DeleteIcon from '@mui/icons-material/Delete';

import EditIcon from '@mui/icons-material/Edit';
import { NavLink } from 'react-router-dom';
import { DataVideojuegos } from './data/DataVideojuegos';
export const Seccion = ({ items, eliminarProducto }) => {




    const [open, setOpen] = React.useState(false);
    const [finalId, setFinalId] = React.useState('')
    const idEliminar = 'este es el boton eliminar'

    const idEditar = 'este es el boton editar'
    const handleOpen = (id) => {
        eliminarProducto(id)
        console.log(id);
        setFinalId(id)
        setOpen(true)
    };
    return (
        <div>
            <ComponenteModal open={open} setOpen={setOpen} finalId={finalId} />

            <h1>STEAMLITE</h1>
            {/* <CarritoCompras /> */}
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', }}>
                {items.map((item) => (
                    <div key={item.id} className='contenedor_producto_1' style={{ display: 'flex', border: '2px solid #acb', flex: '1 1 360px', }}>
                        <div style={{ width: "40%", height: "auto" }}>
                            <img style={{ width: "100%", height: "100%" }} src={item.imagen} />
                        </div>
                        <div style={{ width: "60%", height: "auto", backgroundColor: '#555', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', minHeight: '300px' }}>
                            <div style={{ position: 'absolute', top: '0px', right: '0px', display: 'flex', gap: '5px', padding: '5px' }}>
                                <IconButton aria-label="delete" onClick={() => handleOpen(item.id)}>
                                    <DeleteIcon style={{ color: '#f00' }} />
                                </IconButton>
                                <IconButton aria-label="edit" component={NavLink} to={`/editarProducto/${item.id}`} >
                                    <EditIcon style={{ color: '#f00' }} />
                                </IconButton>
                            </div>
                            
                            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', padding: '75px 10px 20px 10px', textAlign: 'center' }}>
                                <h2 style={{ margin: '0 0 10px 0' }}>{item.nombre}</h2>
                                <h3 style={{ color: '#3498db', margin: '10px 0' }}>${item.precio.toLocaleString()}</h3>
                                <p>{item.descripcion}</p>
                            </div>
                            
                            <div style={{ position: 'absolute', bottom: '60px', left: '50%', transform: 'translateX(-50%)' }}>
                                <BotonBasico isDisabled={false} />
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>



    )
}
