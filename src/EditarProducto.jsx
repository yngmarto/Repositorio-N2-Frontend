// EditarProducto.jsx
import React from 'react';
import { useParams, useNavigate, NavLink } from 'react-router-dom';
import { Box, TextField, Stack, Button } from '@mui/material';

export const EditarProducto = ({ items, actualizarDatos}) => {
  const { id } = useParams();
  const navigate = useNavigate()

  const dataOriginal = React.useMemo(
    () => items.find((it) => String(it.id) === String (id))
  )

  console.log(dataOriginal);

  const [form, setForm] = React.useState(() =>({
    nombre: dataOriginal.nombre,
    precio: dataOriginal.precio,
    imagen: dataOriginal.imagen,
    descripcion: dataOriginal.descripcion
  }))
  
  const onChange = (e) => {
    console.log(e);
    console.log(e.target);
    const {name, value} = e.target;
    console.log(name);
    console.log(value);

    setForm(f => ({
      ...f,
      [name]: name === 'precio' ? Number(value) : value
    }))

    console.log(form);
  }


  const onSubmit = (e) => {
    e.preventDefault()
    console.log('Envio de formulario ');
    actualizarDatos(id, form)
    navigate('/')

  }

  // Render básico del form
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <h1>Editar Videojuego {id}</h1>

      <Box
        component="form"
        onSubmit={onSubmit}
        sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete="off"
        
      >
        <Stack direction={'column'} spacing={2}>
          <TextField id="outlined-basic" label="Nombre" variant="outlined" name='nombre' value={form.nombre} onChange={onChange}  />

          <TextField id="outlined-basic" label="Precio" variant="outlined" type='number' name='precio'  value={form.precio} onChange={onChange} />

          <TextField id="outlined-basic" label="Descripción" variant="outlined" multiline rows={5} name='descripcion' value={form.descripcion} onChange={onChange} />

          <TextField id="outlined-basic" label="URL de Imagen" variant="outlined" name='imagen' value={form.imagen} onChange={onChange} />
        </Stack>
        <Stack direction={'row'}>
          <Button >
            Cancelar
          </Button>
           <Button variant='outlined' type='submit' >
            Guardar
          </Button>
        </Stack>
      </Box>
    </div>
  );
};
