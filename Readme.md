# Log server for node.js applications

## Description
The server is based on [winstond]("https://github.com/winstonjs/winstond") project

The server accepts log-messages vie HTTP and saves in configured files.

## Configuration

The configuration of the server is stored in conf.js

Configuration parameters are:

* host - host name or ip address of the server (default: localhost)
* port - port to listen (default: 4114)
* log_dir - directory where log files are stored (default: /log)
* files - this option allows to assign the output file for each log levels; the list of log levels: error, warn, info, verbose, debug, silly (default: {info: info.log})

# Starting server

## Starting from root directory
```
$ npm start
```
or you can run the server via docker

## Starting via docker
1. Create service directory
```
$ mkdir -p /path/to/service/dir
```
2. Place conf.js from this repository in the created direcory. Adjust configuration
3. Run docker container
```
$ docker run -d --name log-server -p 4114:4114 -v /path/to/service/dir/conf.js:/server/conf.js -v /path/to/service/dir/log:/log alexd1971/log-server
```
4. Alternatively you can use docker-compose to run the server
    1. Copy log-server.yml from this repository to /path/to/service/dir
    2. Run server
    ```
    $ docker-compose -f /path/to/service/dir/log-server.yml up -d
    ```

