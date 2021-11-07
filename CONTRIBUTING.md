# Contributin

Contributing explica como configurar los requerimientos del projecto

## Instalación

Antes de desarrollar, es necesario tener instalado:

* [NodeJS y NPM](https://nodejs.org/)

## Ejecución

### Configuración de entornos

Antes de ejecutar la apliación, es recomendable revisar las variables de entorno para la correcta configuración del proyecto, estas se pueden revisar aquí:

```.env
********* ui/.env *********
REACT_APP_LOCALE=es-ES
REACT_APP_BASE_URI=
REACT_APP_API_URI=http://localhost:4000
SECRET=e89f987sdfs9d879f8798dsf78978
```

* `REACT_APP_LOCALE` configura el idioma local del proyecto.
* `REACT_APP_API_URI` configura la url a la que la API apuntará.
* `REACT_APP_BASE_URI` configura un path extra para la uri si fuera necesario (si se configura con por ejemplo `/extra` la url final será `http://localhost:4000/extra/...`)
* `SECRET` configura el secreto del JWT (para verificación, actualmente no tiene uso)

```.env
********* backend/.env *********
#can be 'development' or 'production'
NODE_ENV=development

#your app port
PORT=4000

SECRET=e89f987sdfs9d879f8798dsf78978
```

* `NODE_ENV` configura el entorno para desarrollo o producción
* `PORT` configura el puerto de la aplicación
* `SECRET` configura el secreto del JWT para verificación

### Instalación dependencias

Instalar las dependencias de ambos proyectos, puedes seguir este script

```bash
cd backend
npm install
cd ../ui
npm install
```

### Ejecución Makefile

Para la ejecución, usamos un **Makefile** con las instrucciones para las dos infraestructuras. Aquí puedes consultar el uso de los [Phony Targets](https://www.gnu.org/software/make/manual/html_node/Phony-Targets.html).

* Para ejecución del backend `make dev-api`
* Para ejecución del frontend `make dev-ui`