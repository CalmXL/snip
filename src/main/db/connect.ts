import Database, * as BetterSqlite3 from 'better-sqlite3'
import { app } from 'electron'
import { resolve } from 'node:path'

const file = resolve(app.getPath('home'), 'Desktop', 'xl.db')
let db: BetterSqlite3.Database
try {
  db = new Database(file, {})
  db.pragma('journal_mode = WAL')

} catch (error) {
  console.error('Error opening database:', error)
}



export { db }
