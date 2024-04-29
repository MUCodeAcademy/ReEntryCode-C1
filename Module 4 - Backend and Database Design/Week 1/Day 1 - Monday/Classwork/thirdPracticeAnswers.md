1. Write a SQL query to find the movies released before 1st January 1989. Sort the result-set in descending order by date of release. Return movie title, release year, date of release, duration, and first and last name of the director.

```SQL
SELECT movie.mov_title, mov_year, mov_dt_rel, mov_time,dir_fname, dir_lname 
FROM movie
JOIN  movie_direction ON movie.mov_id = movie_direction.mov_id
JOIN director ON movie_direction.dir_id=director.dir_id
WHERE mov_dt_rel < '01/01/1989'
ORDER BY mov_dt_rel DESC;
```

2. Write a SQL query to calculate the average movie length and count the number of movies in each genre. Return genre title, average time and number of movies for each genre.

```SQL
SELECT gen_title, AVG(mov_time), COUNT(gen_title) 
FROM movie
NATURAL JOIN  movie_genres
NATURAL JOIN  genres
GROUP BY gen_title;
```

3. Write a SQL query to find movies with the shortest duration. Return movie title, movie year, director first name, last name, actor first name, last name and role.

```SQL
SELECT mov_title, mov_year, dir_fname, dir_lname, act_fname, act_lname, role 
-- Natural JOIN will automatically join them based on their shared columns
FROM movie
NATURAL JOIN movie_direction
NATURAL JOIN movie_cast
NATURAL JOIN director
NATURAL JOIN actor
-- Filtering the result to include only records where mov_time is equal to the minimum mov_time in the movie table
WHERE mov_time = (SELECT MIN(mov_time) FROM movie);
```

4. Write a SQL query to find the years in which a movie received a rating of 3 or 4. Sort the result in increasing order on movie year.

```SQL
SELECT DISTINCT mov_year
FROM movie, rating
WHERE movie.mov_id = rating.mov_id 
AND rev_stars IN (3, 4)
ORDER BY mov_year;
```

5. Write a SQL query to get the reviewer name, movie title, and stars in an order that reviewer name will come first, then by movie title, and lastly by number of stars.

```SQL
SELECT rev_name, mov_title, rev_stars
FROM movie, rating, reviewer
WHERE movie.mov_id = rating.mov_id 
AND reviewer.rev_id = rating.rev_id 
AND rev_name IS NOT NULL
ORDER BY rev_name, mov_title, rev_stars;
```

6. Write a SQL query to find those movies that have at least one rating and received the most stars. Sort the result-set on movie title. Return movie title and maximum review stars.

```SQL
SELECT mov_title, MAX(rev_stars) AS MaxStars
FROM movie
JOIN rating ON movie.mov_id = rating.mov_id
GROUP BY mov_title 
HAVING MaxStars > 0
ORDER BY mov_title;
```

7. Write a SQL query to find out which actors have not appeared in any movies between 1990 and 2000 (Begin and end values are included.). Return actor first name, last name, movie title and release year.

```SQL
SELECT act_fname, act_lname, mov_title, mov_year
FROM actor
JOIN movie_cast ON actor.act_id = movie_cast.act_id
JOIN movie ON movie_cast.mov_id = movie.mov_id
WHERE mov_year NOT BETWEEN 1990 AND 2000;
```