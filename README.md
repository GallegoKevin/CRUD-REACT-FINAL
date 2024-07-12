# CRUD-REACT-FINAL

![demo](https://i.ibb.co/QdKkK70/crud-react-final.png)


La aplicación nos permite crear, leer eliminar tareas. Además, cuenta con un diseño moderno.

## Descripción de Archivos

### `Form.jsx:`

Proporciona un formulario para agregar nuevas tareas. Incluye campos para el nombre de la tarea, el autor y la fecha, y valida la entrada.

###  `Header.jsx:`
Muestra el encabezado de la aplicación. Incluye el título "Task App Component" con un efecto de texto degradado.

###  `Listtasks.jsx:`
Muestra la lista de tareas. Cada elemento de tarea incluye el nombre de la tarea, el autor y un botón de eliminación. 

### `Loader.jsx y Loader.css:`
Este componente muestra un spinner de carga cuando se están obteniendo las tareas del servidor. El diseño incluye una animación de carga giratoria.

###  `App.jsx:`
Punto de entrada principal de la aplicación. Gestiona el estado y maneja las operaciones CRUD comunicándose con el servidor JSON usando Axios.

###  `db.json`
Este archivo es utilizado por el JSON Server para almacenar los datos de las tareas.

## Funcionalidades

1. Crear Tarea: Los usuarios pueden agregar una nueva tarea completando el formulario y haciendo clic en el botón "Agregar Task".
2. Leer Tareas: La aplicación obtiene y muestra la lista de tareas del JSON Server.
3. Eliminar Tarea: Los usuarios pueden eliminar una tarea haciendo clic en el botón "Eliminar" junto a la tarea.
4. Mostrar Mensaje: Cuando no hay ninguna tarea registrada, se muestra un mensaje indicando "No hay ninguna Tarea registrada".
5. Bloqueo de Botón: El botón para agregar una tarea permanece deshabilitado hasta que se escriban datos en los campos de nombre y autor.

## COMANDOS USADOS EN TERMINAL :

### Instalar todas las dependencias listadas en el package.json
```
yarn install
```

### Agregar Axios como una dependencia de desarrollo (-D indica desarrollo)

```
yarn add -D axios
```

### Instalar globalmente JSON Server en la versión específica 0.17.4
```
yarn global add json-server@0.17.4
```

### Iniciar JSON Server para servir un archivo JSON llamado db.json
```
npx json-server --watch db.json
```