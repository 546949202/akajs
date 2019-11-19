import {Application} from '@akajs/core'
import {initMongoose} from '@akajs/mongoose'

import './controller'
// mongoose 最好先导入
initMongoose()
const app: Application = new Application({})
export {app}
