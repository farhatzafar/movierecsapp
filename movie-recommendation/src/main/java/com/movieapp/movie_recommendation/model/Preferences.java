package com.movieapp.movie_recommendation.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Preferences {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long preferenceId;

    private Long userId; // This could be a foreign key to a User entity
    private String preferredGenre;
    private String preferredLeadActorGender;
    private int preferredReleaseYear;  // Added the preferred release year field

    // Getters and setters
    public Long getPreferenceId() {
        return preferenceId;
    }

    public void setPreferenceId(Long preferenceId) {
        this.preferenceId = preferenceId;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getPreferredGenre() {
        return preferredGenre;
    }

    public void setPreferredGenre(String preferredGenre) {
        this.preferredGenre = preferredGenre;
    }

    public String getPreferredLeadActorGender() {
        return preferredLeadActorGender;
    }

    public void setPreferredLeadActorGender(String preferredLeadActorGender) {
        this.preferredLeadActorGender = preferredLeadActorGender;
    }

    public int getPreferredReleaseYear() {
        return preferredReleaseYear;
    }

    public void setPreferredReleaseYear(int preferredReleaseYear) {
        this.preferredReleaseYear = preferredReleaseYear;
    }
}
