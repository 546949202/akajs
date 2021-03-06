import {task, src, dest} from 'gulp'
import {getDirs} from '../util/task-helpers'
import {samplePath, integrationPath} from '../config'
import {join} from 'path'

/**
 * Moves the compiled aka files into the
 * `samples/*` and `integration/*` dirs.
 */
function move () {
  // const samplesDirs = getDirs(samplePath)
  // const integrationDirs = getDirs(integrationPath)
  const directories = getDirs(integrationPath)

  const distFiles = src(['node_modules/@akajs/**/*'])

  return directories.reduce(
    (distFile, dir) => distFile.pipe(dest(join(dir, '/node_modules/@akajs'))),
    distFiles
  )
}

task('move', move)
