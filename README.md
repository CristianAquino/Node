# NODE

### Modulos para creacion de API

### Creando un package.json

`npm init -y`

#### [Instalando Express](https://expressjs.com/en/starter/installing.html "Instalando Express")

Proporciona una de las formas más sencillas pero potentes de crear un servidor web, asi crearemos rutas para ser consumidas desde el front
`npm i express`

### [Instalando fileupload](https://www.npmjs.com/package/express-fileupload "Instalando fileupload")

Es un middleware que permitira la subida de archivos
`npm i express-fileupload`

### [Instalando Mongoose](https://mongoosejs.com/docs/guide.html "Instalando Mongoose")

Permite la conexion con MongoDB y la creacion de schemas para validar datos
`npm i mongoose`

### [Instalando dotenv](https://www.npmjs.com/package/dotenv "Instalando dotenv")**Table of Contents**

Permite la creacion de variables de entorno
`npm i dotenv`

### [Instalando fs-extra](https://www.npmjs.com/package/fs-extra "Instalando fs-extra")

Para la manipulacion de archivos utilzando promesas
`npm i fs-extra`

[Instalando http-errors](https://www.npmjs.com/package/http-errors/v/1.7.0 "Instalando http-errors")
Para enviar mensajes personalisados al cliente
`npm i http-errors`

### [Instalando Morgan](https://www.npmjs.com/package/morgan "Instalando Morgan")

Permite visualizar por consola las peticiones que llegan
`npm i morgan`

### [Instalando nodemon](https://www.npmjs.com/package/nodemon "Instalando nodemon")

Se utiliza para reiniciar el servidor ante cualquier cambio realizado
`npm i nodemon -D`
Una vez instaldo, debemos modificar package.json, agregando el comando `"dev": "nodemon {nombre_carpeta}/{archivo_principal}"`; si no se especifica el archivo a ejecutar, buscara en la carpeta el archivo **_index.js_**
![]('/img/nodemon.png')
al tener instaldo nodemon, para ejecutar el servidor se debe escribir en consola `npm run dev`

Para poder realizar la importacion sin necesidad de utilizar require, debemos modificar package.json, agregando la propiedad `"type": "module",`
![]('/img/package.png')

**_Nota:_** Cuando realicemos la importacion de nuestros propios modulos, tenemos que especificar su extension

###### [Todo este markdown fue creado en pandao.github.io](https://pandao.github.io/editor.md/en.html#Headers%20(Underline)
