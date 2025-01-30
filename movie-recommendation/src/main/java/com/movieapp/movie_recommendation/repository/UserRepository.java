package com.movieapp.movie_recommendation.repository;

import com.movieapp.movie_recommendation.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
