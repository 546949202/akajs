import {TypeMongoModel} from '@akajs/mongoose'
import {prop, Typegoose, ModelType} from 'typegoose'

@TypeMongoModel('UserModel')
export class User extends Typegoose {
  @prop({index: true, required: true})
  phone: string
  @prop()
  name?: string
  @prop()
  count?: number
}

export type UserModel = ModelType<User>
