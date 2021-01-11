# Simple Kanban - Backend

 A simple kanban backend for the [kanban web project](https://github.com/GbCarvalho/simple-kanban-web-project)

# Instructions

For this project you must have [Yarn](https://yarnpkg.com/) (Recommended) or [Node and NPM](https://nodejs.org/en/)

- For full code intialization you may run:

  ```bash
  docker-compose up
  ```

## OR

- If you want to execute the server locally you may do:

  ```bash
  docker-compose run kanban-postgres -d #not working
  #you must have an postgres db running to do the following steps
  yarn
  yarn typeorm migration:run
  yarn start
  ```

- You shall be fine from there.

# Methods

  Here are some available methods that this API attend
  ===

  ## GET (/tasks)
  The get route for /tasks should return the following JSON:

  ```json
  {
    {
      "id": "1",
      "description": "The card description should be here",
      "state": "1"
    },
    {
      "id": "2",
      "description": "The card description should be here",
      "state": "2"
    }
  }
  ```

  - id: Is the db ID for one card
  - description: Is the card description for one card
  - state: defines the position of the card in the front-end


  ## POST (/tasks)
  This method receives a JSON and returns a JSON

  - Receives:
  ```json
    {
      "description": "some description",
      "state": "1"
    }
  ```

  - This follows the same schema from the get command and the state should be 1, 2 or 3, otherwise it shall be deleted.

  - Returns:
  ```json
  {
      "id": "1",
      "description": "The card description should be here",
      "state": "1"
  }
  ```

  The response shall be the JSON and status 201 (success / created)

  ## PUT (/tasks/:id)
  This method only updates the state from the card and returns success or failure.

  - Receives:
  ```json
    {
      "state": "1"
    }
  ```

  This must alter the state data on the db and return (204 - success / no content).

  ## DELETE (/tasks/:id)
  This method only recieves the ID trough the URL and delete it.

  Shall return 204 (success / no content)
