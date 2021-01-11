module.exports = {
  "name": "default",
  "type": "postgres",
  "host": "kanban-postgres",
  "port": process.env.DB_PORT || 5432,
  "username": "postgres",
  "password": process.env.DB_PASSWORD || "test",
  "database": process.env.DB_NAME || "kanban",
  "migrations": [
    "./src/database/migrations/*.ts"
  ],
  "entities": [
    "./src/models/*.ts"
  ],
  "cli": {
    "migrationsDir": "./src/database/migrations"
  }
}
