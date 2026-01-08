CREATE TABLE articles (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  slug TEXT UNIQUE,
  title TEXT,
  description TEXT,
  date TEXT,
  image TEXT,
  categories TEXT,
  authors TEXT,
  tags TEXT,
  draft INTEGER DEFAULT 1,
  views INTEGER DEFAULT 0,
  markdown TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
