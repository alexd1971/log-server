module.exports = {
  /**
   * host - server host name or ip-address (default: localhost)
   */
  host: '0.0.0.0',
  /**
   * port - port to listen on (default: 4114)
   */
  port: 4114,
  /**
   * log_dir - directory where log files will be stored (default: /log)
   */
  log_dir: '/log',
  /**
   * Log files configuration.
   * You can assign log file for every log level
   * Log levels are:
   *   - error
   *   - warn
   *   - info
   *   - verbose
   *   - debug
   *   - silly
   * Default:
   * 
   * files: {
   *   info: info.log
   * }
   */
  files: {
    error: 'error.log',
    info: 'info.log'
  }
};