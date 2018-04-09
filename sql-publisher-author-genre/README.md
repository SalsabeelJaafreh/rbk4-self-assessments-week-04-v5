## SQL
Using [WWW SQL Designer](http://ondras.zarovi.cz/sql/demo/) or [DB designer](http://dbdsgnr.appspot.com/), draw the schema for the following data
* Create the following 3 tables (and any additional [junction tables](https://en.wikipedia.org/wiki/Junction_table) you might need) with the specified relationships:
  * [ ] publisher, has many authors, has one genre

  (publisher-author)(many to many)
  we should here make new table contain foreign keys, author-id
 and (publisher-id);



  (publisher-genre)(one to many)
  we shoula make forign key in genre table(publisher-id)
  * [ ] author, has many publishers, has many genres
  * [ ] genre, has many publishers, has many authors

  (genre-author)(many to many)
   we should here make new table contain foreign keys, (author-id
 and (genre-id);

  * Be sure to include any foreign keys you will need, as columns of the tables you design
  * Export as an image and save to the `sql-publisher-author-genre` folder. To take a screen shot on a Mac, use the shortcut `Cmd+Shift+4` then drag a box around your desired image. The image will be saved to the desktop.
* [ ] Separately from the above 3 tables, imagine you have a table called `Users`. Write an `INSERT` query that stores a new user record inside `Users` table with a `name`, `age`, and `location`. You can use any values for name, age, and location.
