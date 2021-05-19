# Penlearn

## Start

To start backend and db

```
  docker-compose up
```

## Test

To start tests in watch mode

```
  docker-compose -f docker-compose.test.yml -p test run test-watch
```

## Lint

To run lint

```
  npm run lint
```

To auto-fix lint errors

```
  npm run lint -- --fix
```

## DB

To connect to db running in docker

```
  docker-compose exec db psql -U battle
```

## Migrations

To create a migration skeleton with node-pg-migrate

```
  npm run migrate create [migration name]
```

To run node-pg-migrate cli against db in docker

```
  docker-compose exec db npm run migrate [command]
```

[List of available commands](https://github.com/salsita/node-pg-migrate/blob/master/docs/cli.md#cli-usage)
