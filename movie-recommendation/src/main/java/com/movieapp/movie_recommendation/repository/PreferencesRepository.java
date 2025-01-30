package com.movieapp.movie_recommendation.repository;

import com.movieapp.movie_recommendation.model.Preferences;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PreferencesRepository extends JpaRepository<Preferences, Long> {
}
