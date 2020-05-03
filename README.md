# Node Express REST Api

# Sample Todo REST API in NodeJS, Express and MySql

## Project setup

```
npm install
```

### Run

```
node server.js
```

# SQL

CREATE TABLE IF NOT EXISTS `tasks` (
id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
name varchar(255) NOT NULL,
details varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
