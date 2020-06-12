# MongoDB Express y NodeJS con ES6

Una plantilla con MongoDb Express y NodeJS que permite usar la sintaxis ES6.

## Clonar repositorio

antes de clonar debe tener instalado node y mongodb en su computadora.

## Instalar paquetes

con el comando npm install en la terminal ubicado en la carpeta donde clono el repositorio.

### Correr el server

ejecute el comando `npm run watch:dev`, para correr el serve y quede en escucha para reiniciarse cada vez que se realice un cambio en el código.

### Otros comandos

* `transpile` - convierte el código es6 de la carpeta `server-dev` a es5 y lo guarda en una carpeta llamada `server`
* `clean` - elimina la carpeta `server`
* `build` - ejecuta `clean` y luego `transpile`