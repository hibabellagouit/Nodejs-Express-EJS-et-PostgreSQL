-- Script de création des tables pour la base de données bibliothèque

-- Table des auteurs
CREATE TABLE IF NOT EXISTS auteurs (
    id SERIAL PRIMARY KEY,
    nom VARCHAR(255) NOT NULL,
    prenom VARCHAR(255) NOT NULL,
    date_naissance DATE,
    nationalite VARCHAR(100),
    biographie TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table des livres
CREATE TABLE IF NOT EXISTS livres (
    id SERIAL PRIMARY KEY,
    titre VARCHAR(255) NOT NULL,
    auteur_id INTEGER NOT NULL REFERENCES auteurs(id) ON DELETE CASCADE,
    annee_publication INTEGER,
    genre VARCHAR(100),
    isbn VARCHAR(20) UNIQUE,
    resume TEXT,
    disponible BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Index pour améliorer les performances
CREATE INDEX IF NOT EXISTS idx_livres_auteur_id ON livres(auteur_id);
CREATE INDEX IF NOT EXISTS idx_livres_titre ON livres(titre);
CREATE INDEX IF NOT EXISTS idx_auteurs_nom ON auteurs(nom);
CREATE INDEX IF NOT EXISTS idx_auteurs_prenom ON auteurs(prenom);
