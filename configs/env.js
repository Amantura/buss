const path = require('path')
const fs = require('fs')

const env = process.env.NODE_ENV

const envPath = path.resolve(__dirname, `../.env.${env}`)

if (!fs.existsSync(envPath)) {
  console.log(`.env.${env} NOT FOUND`)
  process.exit(1)
}

require('dotenv').config({ path: envPath })
