const common = require('./common')
const utils = require('./utils')

require('./style.css')
common.info('hello common' + utils.add(1, 2))