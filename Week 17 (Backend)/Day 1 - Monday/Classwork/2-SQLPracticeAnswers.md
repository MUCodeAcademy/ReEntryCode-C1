## More SQL Practice

Using the movie database picture, solve these problems:

1. Write a SQL query to find the name and year of the movies. Return movie title, movie release year.
```SQL
SELECT mov_title, mov_year
FROM movie;
```

2. Write a SQL query to find when the movie 'American Beauty' released. Return movie release year.
```SQL
SELECT mov_year
FROM movie
WHERE mov_title = "American Beauty";
```

3. Write a SQL query to find the movie that was released in 1999. Return movie title.
```SQL
SELECT mov_title
FROM movie
WHERE mov_year = 1999;
```

4. Write a SQL query to find those movies, which were released before 1998. Return movie title.
```SQL
SELECT mov_title
FROM movie
WHERE mov_year < 1998;
```

5. Write a SQL query to find the name of all reviewers and movies together in a single list.
<!-- Using a JOIN -->
```SQL
SELECT reviewer.rev_name, movie.mov_title
FROM rating
JOIN movie ON rating.mov_id = movie.mov_id
JOIN reviewer ON rating.rev_id = reviewer.rev_id;
```
<!-- Using UNION -->
<!-- UNION keyword combines two queries and puts it into one result -->
```SQL
SELECT rev_name
FROM reviewer
UNION
(SELECT mov_title
FROM movie);
```

6. Write a SQL query to find all reviewers who have rated seven or more stars to their rating. Return reviewer name.
```SQL
SELECT reviewer.rev_name
FROM reviewer
JOIN rating ON reviewer.rev_id = rating.rev_id
WHERE rating.rev_stars >= 7;
```

7. Write a SQL query to find the movies without any rating. Return movie title.
```SQL
SELECT mov_title
FROM movie
JOIN rating ON movie.mov_id = rating.mov_id
WHERE num_o_ratings = 0;
```

8. Write a SQL query to find the movies with ID 905 or 907 or 917. Return movie title.
```SQL
SELECT mov_title
FROM movie
WHERE mov_id IN (905, 907, 917);
```
<!-- More code version -->
```SQL
SELECT mov_title
FROM movie
WHERE mov_id = 905 OR mov_id = 907 OR mov_id = 917;
```

9. Write a SQL query to find the movie titles that contain the word 'Boogie Nights'. Sort the result-set in ascending order by movie year. Return movie ID, movie title and movie release year.
```SQL
SELECT mov_title, mov_id, mov_year
FROM movie
-- LIKE will look for any title that contains the words between the percentage signs
WHERE mov_title LIKE "%Boogie Nights%"
ORDER BY mov_year ASC;
```

10. Write a SQL query to find those actors with the first name 'Woody' and the last name 'Allen'. Return actor ID.
```SQL
SELECT act_id
FROM actor
WHERE act_fname = "Woody"
AND act_lname = "Allen";
```