import { db } from './connect'
import { Random } from 'mockjs';

db.exec(`
  create table if not exists categories (
    id integer primary key autoincrement not null,
    name text not null,
    create_at text not null
  );
`)


db.exec(`
  create table if not exists contents (
    id integer primary key autoincrement not null,
    title text not null,
    content text not null,
    category_id integer,
    create_at text not null
  );
`)



for (let i = 0; i < 10; i++) {
  const name = Random.title(5, 10)
  db.exec(`
    INSERT INTO categories (name, created_at) VALUES('${name}', datetime())
  `)
}
// db.exec(`
//     INSERT INTO contents (title, content, category_id, created_at) VALUES('react', 'zustand', 1, datetime())
//   `)
