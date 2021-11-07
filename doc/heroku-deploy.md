# Heroku

## Creación de cuenta y repositorio

1. Dirígete a la [web de heroku](https://www.heroku.com) y registra una nueva cuenta o accede con alguna creada.
2. Crea un nuevo proyecto, con el nombre `node-personal-portfolio` o similar.
3. Descarga la herramienta [heroku cli](https://devcenter.heroku.com/articles/heroku-cli) e instalala en tu ordenador.
4. Ejecuta la inicialización de heroku con `heroku login`
5. Añade el repostiorio al espacio de heroku `heroku git:remote -a node-personal-portfolio`
6. Ejecuta el comando para usar node en modo desarrollo `heroku config:set NODE_ENV=development`
7. Crea un nuevo git path para el repositorio ejecutando --> git push heroku `git subtree split --prefix backend main`:master --force
