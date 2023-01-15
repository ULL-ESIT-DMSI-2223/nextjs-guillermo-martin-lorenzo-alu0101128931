[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-f4981d0f882b2a3f0472912d15f9806d57e124e0fc890972558857b51b24a6f9.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=9621000)
- [PRÁCTICA - NETX.JS](#práctica---netxjs)
  - [1. Generador de nombres](#1-generador-de-nombres)
  - [2. Generador de imágenes](#2-generador-de-imágenes)
  - [3. Despliegue en Netlify](#3-despliegue-en-netlify)
  - [4. Separación código en varios ficheros](#4-separación-código-en-varios-ficheros)
  - [5. Ejercicios REST](#5-ejercicios-rest)



  ## 1. Generador de nombres
Para el generador de nombres debemos mdodifcar el código de index.js. Para hacer la petición a la API de OpenAI y escribir con POST a espera de una respuesta necesitamos el siguiente código:


![pet-code](docs/images/pet-code.png)

Una vez completado el codigo para de index.js. Nos aparecera la api para generar nombre:

![perro-name](docs/images/nombre-perros.png)

## 2. Generador de imágenes
Para el generador de imágenes debemos modificar el código de index.js y crear en la carpeta /pages/api/ otro fichero para acceder a la generación de imágenes. Para hacer la petición a la API de OpenAI y escribir con POST a espera de una respuesta necesitamos este código en /pages/pai/images.js:

Luego para adaptar el índice a la salida esperada cambiamos el texto para solicitar qué imagen quiere el cliente y finalmente la imprimimos por pantalla.
Una vez completado el codigo para de index.js. Nos aparecera la api para generar imágenes:

![photo-gen](docs/images/photo-gen.png)

## 3. Despliegue en Netlify
Se puede ver el despliegue en Netlify [pinchando aqui](https://main--curious-beignet-dbddca.netlify.app/):

![netlify](docs/images/netlify.png)

## 4. Separación código en varios ficheros

Primero creamos el índice en index.js:

![index](docs/images/index.png)

Su principal función es llamar a las funciones de los otros ficheros. Los otros ficheros son images.js, pet.js y 404.js, esto nos llevarian a sus respectivos generadores de imágenes, nombres y errores 404.

Con todo esto ya podríamos mostrar el despliegue y navegar entre ellos.

![index-ejemplo](docs/images/index-ejemplo.png)

## 5. Ejercicios REST

1. Todos los modelos:
![rest1](docs/images/rest1.png)

2. Información sobre un modelo:
![rest2](docs/images/rest2.png)

3. Generador de una imagen:
![rest3](docs/images/rest3.png)

4. Completar una frase:
![rest4](docs/images/rest4.png)

5. Moderación (clasifica si el texto viola el OpenAI's Content Policy):
![rest5](docs/images/rest5.png)


