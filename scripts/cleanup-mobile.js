#!/usr/bin/env node
import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const target = path.join(__dirname, '..', 'AniqSalonApp')

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms))
}

async function cleanup() {
  const fallback = target + '.old'

  if (fs.existsSync(fallback)) {
    try {
      fs.rmSync(fallback, { recursive: true, force: true })
      console.log('AniqSalonApp.old removed.')
    } catch (_) {}
  }

  if (!fs.existsSync(target)) {
    console.log('AniqSalonApp already removed.')
    return
  }

  try {
    execSync('taskkill /F /IM ngrok.exe', { stdio: 'ignore' })
  } catch (_) {}

  console.log('Waiting for file handles to release...')
  await sleep(3000)

  for (let i = 0; i < 3; i++) {
    try {
      fs.rmSync(target, { recursive: true, force: true, maxRetries: 3, retryDelay: 1000 })
      console.log('AniqSalonApp removed.')
      return
    } catch (e) {
      if (i < 2) {
        console.log('Retrying in 2 seconds...')
        await sleep(2000)
      } else {
        try {
          fs.renameSync(target, fallback)
          console.log('AniqSalonApp renamed to AniqSalonApp.old (delete was locked).')
          console.log('You can delete AniqSalonApp.old manually after restarting your PC.')
          return
        } catch (_) {
          console.error('Could not remove or rename AniqSalonApp.')
          console.error('')
          console.error('Try this: Restart your PC, then BEFORE opening Cursor,')
          console.error('double-click cleanup-after-restart.bat in the project folder.')
          process.exit(1)
        }
      }
    }
  }
}

cleanup()
