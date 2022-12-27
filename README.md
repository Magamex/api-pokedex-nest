<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

#Ejecutar en desarrollo

1. Clonar el repositorio
2. Ejecutar
```
yarn install
```

3. Tener Nest CLI instalado
```
npm i -g @nestjs/cli
```

4. Levantar la base de datos
```
docker-compose up -d
```

5. Clonar el archivo __.env.template__ y renombrarlo a __.env__

6. LLenar las variables de entorno definidas en el __.env__

7. Reconstruir la base de datos
```
http://localhost:3000/api/v2/seed
```

8. Ejecutar el proyecto en dev: 
```
yarn start:dev
```

## Stack tecnológico
* MongoDB
* NestJS

# Production Build

1. Crear el archivo __.env.prod__
2. LLenar las variables de entorno definidas en el __.env.prod__
3. Construir la nueva imagen 
```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
```
