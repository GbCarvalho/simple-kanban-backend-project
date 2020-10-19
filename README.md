# Simple Kanban - Backend
 A simple kanban backend for the [kanban web project](https://github.com/GbCarvalho/simple-kanban-web-project)

# Instructions
 - For database intialization run:
  ```
  docker-compose up
  ```

  - Then for runnign the application you should run
 ```
  npm install
  npm tsc --init
  npm typeorm migration:run
  npm start
 ```

  - You shall be fine from there.
