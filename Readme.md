# Log server for node.js applications

## Description
The server is based on [winstond]('https://github.com/winstonjs/winstond') project

The server accepts log-messages vie HTTP and saves in configured files.

## Configuration

The configuration of the server is stored in conf.js

Configuration parameters are:

* host - host name or ip address of the server (default: localhost)
* port - port to listen (default: 4114)
* log_dir - directory where log files are stored (default: ./logs)
* files - this option allows to assign the output file for each log levels; the list of log levels: error, warn, info, verbose, debug, silly (default: {info: info.log})

# Starting server

```
$ npm start
```
or you can run the server via docker
