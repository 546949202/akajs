import 'reflect-metadata'
import {interfaces as inversifyInterfaces} from 'inversify'
import {METADATA_KEY, NO_CONTROLLERS_FOUND, TYPE} from '../constants'
import {router} from '../interfaces/router'

export function getControllersFromContainer (
  container: inversifyInterfaces.Container,
  forceControllers: boolean
) {
  if (container.isBound(TYPE.Controller)) {
    return container.getAll<router.Controller>(TYPE.Controller)
  } else if (forceControllers) {
    throw new Error(NO_CONTROLLERS_FOUND)
  } else {
    return []
  }
}

export function getControllersFromMetadata () {
  let arrayOfControllerMetadata: router.ControllerMetadata[] = Reflect.getMetadata(
    METADATA_KEY.controller,
    Reflect
  ) || []
  return arrayOfControllerMetadata.map((metadata) => metadata.target)
}

export function getControllerMetadata (constructor: any) {
  let controllerMetadata: router.ControllerMetadata = Reflect.getMetadata(
    METADATA_KEY.controller,
    constructor
  )
  return controllerMetadata
}

export function getControllerMethodMetadata (constructor: any) {
  let methodMetadata: router.ControllerMethodMetadata[] = Reflect.getMetadata(
    METADATA_KEY.controllerMethod,
    constructor
  )
  return methodMetadata
}

export function getDtoMetadata (constructor: any, method: string): router.ControllerMethodParameterMetadata {
  return Reflect.getMetadata(
    METADATA_KEY.controllerParameter + method,
    constructor
  )
}

// export function getControllerParameterMetadata (constructor: any) {
//   let parameterMetadata: interfaces.ControllerParameterMetadata = Reflect.getMetadata(
//     METADATA_KEY.controllerParameter,
//     constructor
//   )
//   return parameterMetadata
// }

export function cleanUpMetadata () {
  Reflect.defineMetadata(
    METADATA_KEY.controller,
    [],
    Reflect
  )
}

//
// export function instanceOfIHttpActionResult (value: any): value is interfaces.IHttpActionResult {
//   return value != null && typeof value.executeAsync === 'function'
// }
