import { readFileSync, writeFileSync } from 'fs'

const path = 'dist/server/wrangler.json'
const config = JSON.parse(readFileSync(path, 'utf-8'))

// Aggiungi pages_build_output_dir
config.pages_build_output_dir = '..'

// Rimuovi il binding ASSETS riservato da Pages
if (config.assets) delete config.assets

// Rimuovi anche KV e IMAGES bindings auto-iniettati
if (config.kv_namespaces) config.kv_namespaces = []
if (config.images) delete config.images

writeFileSync(path, JSON.stringify(config, null, 2))
console.log('✓ wrangler.json patched')