CREATE TABLE movies (
    movie_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    genre VARCHAR(50) NOT NULL,
    release_year INT NOT NULL,
    lead_actor_gender VARCHAR(10) CHECK (lead_actor_gender IN ('male', 'female')) NOT NULL,
    poster_url TEXT
);


INSERT INTO movies (title, genre, release_year, lead_actor_gender, poster_url)
VALUES
    ('The Invisible Man', 'Horror', 2020, 'female', 'https://image.tmdb.org/t/p/w1280/5EufsDwXdY2CVttYOk2WtYhgKpa.jpg'),
    ('A Quiet Place Part II', 'Horror', 2020, 'male', 'https://image.tmdb.org/t/p/w1280/4q2hz2m8hubgvijz8Ez0T2Os2Yv.jpg'),
    ('Promising Young Woman', 'Drama', 2020, 'female', 'https://image.tmdb.org/t/p/w1280/73QoFJFmUrJfDG2EynFjNc5gJxk.jpg'),
    ('The Father', 'Drama', 2020, 'male', 'https://image.tmdb.org/t/p/original/uxWXW1YYQENSv7OzHB4Hds0bK3b.jpg'),
    ('Borat Subsequent Moviefilm', 'Comedy', 2020, 'male', 'https://image.tmdb.org/t/p/w1280/3L1Ml5RWjFVfVq3rQENvgFymT0U.jpg'),
    ('Barb and Star Go to Vista Del Mar', 'Comedy', 2021, 'female', 'https://image.tmdb.org/t/p/w1280/8oiV8GtBG7GDJa3ejvxZzJnBgff.jpg'),
    ('Scream', 'Horror', 2022, 'female', 'https://image.tmdb.org/t/p/w1280/1m3W6cpgwuIyjtg5nSnPx7yFkXW.jpg'),
    ('The Menu', 'Drama', 2022, 'male', 'https://image.tmdb.org/t/p/w1280/fPtUgMcLIboqlTlPrq0bQpKK8eq.jpg'),
    ('Everything Everywhere All at Once', 'Drama', 2022, 'female', 'https://image.tmdb.org/t/p/w1280/u68AjlvlutfEIcpmbYpKcdi09ut.jpg'),
    ('Spider-Man: No Way Home', 'Comedy', 2021, 'male', 'https://image.tmdb.org/t/p/w1280/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg'),
    ('House of Gucci', 'Drama', 2021, 'female', 'https://image.tmdb.org/t/p/w1280/oJCQjD2byiVF1EG408F9dBn9ndU.jpg'),
    ('Halloween Kills', 'Horror', 2021, 'male', 'https://image.tmdb.org/t/p/w1280/4CclCDyQXBBgz62Qtp3CoflQE5g.jpg'),
    ('Shang-Chi and the Legend of the Ten Rings', 'Drama', 2021, 'male', 'https://image.tmdb.org/t/p/w1280/d08HqqeBQSwN8i8MEvpsZ8Cb438.jpg'),
    ('Death on the Nile', 'Drama', 2022, 'female', 'https://image.tmdb.org/t/p/w1280/kVr5zIAFSPRQ57Y1zE7KzmhzdMQ.jpg'),
    ('Minions: The Rise of Gru', 'Comedy', 2022, 'male', 'https://image.tmdb.org/t/p/w1280/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg'),
    ('Smile', 'Horror', 2022, 'female', 'https://image.tmdb.org/t/p/w1280/aPqcQwu4VGEewPhagWNncDbJ9Xp.jpg'),
    ('M3GAN', 'Horror', 2023, 'female', 'https://image.tmdb.org/t/p/w1280/rxDPzExeovcBZY2IVWdYs87AzVE.jpg'),
    ('The Whale', 'Drama', 2022, 'male', 'https://image.tmdb.org/t/p/w1280/jQ0gylJMxWSL490sy0RrPj1Lj7e.jpg'),
    ('Cocaine Bear', 'Comedy', 2023, 'female', 'https://image.tmdb.org/t/p/w1280/gOnmaxHo0412UVr1QM5Nekv1xPi.jpg'),
    ('Scream VI', 'Horror', 2023, 'male', 'https://image.tmdb.org/t/p/w1280/wDWwtvkRRlgTiUr6TyLSMX8FCuZ.jpg'),
    ('Guardians of the Galaxy Vol. 3', 'Drama', 2023, 'male', 'https://image.tmdb.org/t/p/w1280/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg'),
    ('Barbie', 'Comedy', 2023, 'female', 'https://image.tmdb.org/t/p/w1280/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg'),
    ('The Super Mario Bros. Movie', 'Comedy', 2023, 'male', 'https://image.tmdb.org/t/p/w1280/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg'),
    ('It Chapter Two', 'Horror', 2023, 'male', 'https://image.tmdb.org/t/p/w1280/zfE0R94v1E8cuKAerbskfD3VfUt.jpg'),
    ('The Hunger Games: The Ballad of Songbirds and Snakes', 'Drama', 2024, 'female', 'https://image.tmdb.org/t/p/w1280/lrkOYL5GBTFW9cgs9RlojxAcZZF.jpg'),
    ('John Wick: Chapter 4', 'Drama', 2024, 'male', 'https://image.tmdb.org/t/p/w1280/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg'),
    ('Exorcist: Believer', 'Horror', 2023, 'female', 'https://image.tmdb.org/t/p/w1280/fFXkAlMH2iQrNknv4eq7LGTkcti.jpg'),
    ('Deadpool 3', 'Comedy', 2024, 'male', 'https://image.tmdb.org/t/p/w1280/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg');
