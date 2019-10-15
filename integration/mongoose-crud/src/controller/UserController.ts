import {Get, Inject} from '@akajs/core'
import {CrudController, ICurdController} from '@akajs/crud'

@CrudController('/user')
export class UserController implements ICurdController {

  @Inject(Symbol.for('UserModel'))
  public crudModel

  @Get('/hello/:name')
  async hello (ctx) {
    const {name} = ctx.params
    ctx.body = 'hello ' + name
  }
}