# MongoDB Express y NodeJS con ES6

Una plantilla con MongoDb Express y NodeJS que permite usar la sintaxis ES6.

# Como usar

### 1 - Clonar repositorio

debe tener instalado node y mongodb en su computadora.

### 2 - Instalar paquetes

ejecute el comando `npm install` en una terminal ubicada en la carpeta donde clono el repositorio.

### 3 - Correr el server

ejecute el comando `npm run watch:dev` para correr el serve y quede en escucha, asi se reiniciará cada vez que se realice un cambio en el código.

### Otros comandos

* `transpile` - convierte el código ES6 de la carpeta `server-dev` a eES5 y lo guarda en una carpeta `server`
* `clean` - elimina la carpeta `server`
* `build` - ejecuta `clean` y luego `transpile`