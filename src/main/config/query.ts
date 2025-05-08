import { db } from "../db/connect"

export const findAll = (sql: string) => {
  db.prepare(sql).all()
}

export const findOne = (sql: string) => {
  db.prepare(sql).get()
}

export const insert = (sql: string) => {
  db.prepare(sql).run().lastInsertRowid
}

export const update = (sql: string) => {
  db.prepare(sql).run().changes
}

export const del = (sql: string) => {
  db.prepare(sql).run().changes
}
