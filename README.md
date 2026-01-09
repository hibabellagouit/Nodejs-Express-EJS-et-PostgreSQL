
Application web de gestion de bibliothèque développée avec Node.js, Express, PostgreSQL et EJS.

## 🚀 Fonctionnalités

- **Gestion des auteurs** : CRUD complet (Créer, Lire, Modifier, Supprimer)
- **Gestion des livres** : CRUD complet avec association aux auteurs
- **Recherche** : Recherche de livres par titre, auteur ou genre
- **Interface moderne** : Design responsive avec CSS moderne
- **Base de données PostgreSQL** : Utilisation de PostgreSQL pour le stockage des données

## 📋 Prérequis

- Node.js (v14 ou supérieur)
- PostgreSQL (v12 ou supérieur)
- npm ou yarn


### 2. Installer les dépendances

```bash
npm install
```

### 3. Configuration de la base de données

#### Créer la base de données PostgreSQL

```bash
# Se connecter à PostgreSQL
psql -U postgres

# Créer la base de données
CREATE DATABASE bibliotheque_db;

# Créer un utilisateur (optionnel)
CREATE USER utilisateur WITH PASSWORD 'mot_de_passe';
GRANT ALL PRIVILEGES ON DATABASE bibliotheque_db TO utilisateur;
```

#### Exécuter le script de création des tables

```bash
psql -U utilisateur -d bibliotheque_db -f schema.sql
```

Ou depuis psql :

```sql
\c bibliotheque_db
\i schema.sql
```

### 4. Configuration des variables d'environnement

Créer un fichier `.env` à la racine du projet :

```env
DB_USER=utilisateur
DB_PASSWORD=mot_de_passe
DB_HOST=localhost
DB_PORT=5432
DB_DATABASE=bibliotheque_db
PORT=3000
```


## 🏃 Lancement de l'application

### Mode développement

```bash
npm run dev
```

L'application sera accessible sur `http://localhost:3000`

### Mode production

```bash
npm start
```

## 📁 Structure du projet

```
bibliotheque-app/
├── config/
│   └── db.js                 # Configuration de la connexion PostgreSQL
├── controllers/
│   ├── auteurController.js   # Logique métier pour les auteurs
│   └── livreController.js    # Logique métier pour les livres
├── models/
│   ├── auteurModel.js        # Modèle de données pour les auteurs
│   └── livreModel.js         # Modèle de données pour les livres
├── public/
│   ├── css/
│   │   └── style.css         # Styles CSS
│   └── js/
│       └── main.js           # Scripts JavaScript côté client
├── routes/
│   ├── auteurRoutes.js       # Routes pour les auteurs
│   └── livreRoutes.js        # Routes pour les livres
├── views/
│   ├── partials/
│   │   ├── header.ejs        # En-tête commun
│   │   ├── navigation.ejs    # Navigation et recherche
│   │   └── footer.ejs        # Pied de page commun
│   └── pages/
│       ├── accueil.ejs       # Page d'accueil
│       ├── 404.ejs           # Page d'erreur 404
│       ├── error.ejs         # Page d'erreur générique
│       ├── auteurs/
│       │   ├── liste.ejs     # Liste des auteurs
│       │   ├── ajouter.ejs   # Formulaire d'ajout d'auteur
│       │   ├── modifier.ejs  # Formulaire de modification d'auteur
│       │   └── details.ejs   # Détails d'un auteur
│       └── livres/
│           ├── liste.ejs     # Liste des livres
│           ├── ajouter.ejs   # Formulaire d'ajout de livre
│           ├── modifier.ejs  # Formulaire de modification de livre
│           └── details.ejs   # Détails d'un livre
├── .env                      # Variables d'environnement (à créer)
├── app.js                    # Point d'entrée de l'application
├── package.json              # Dépendances et scripts npm
├── schema.sql                # Script de création des tables
└── README.md                 # Ce fichier
```

## 🗄️ Schéma de la base de données

### Table `auteurs`

| Colonne         | Type          | Description                |
|----------------|---------------|----------------------------|
| id              | SERIAL        | Clé primaire               |
| nom             | VARCHAR(255)  | Nom de l'auteur            |
| prenom          | VARCHAR(255)  | Prénom de l'auteur         |
| date_naissance  | DATE          | Date de naissance          |
| nationalite     | VARCHAR(100)  | Nationalité                |
| biographie      | TEXT          | Biographie                 |
| created_at      | TIMESTAMP     | Date de création           |
| updated_at      | TIMESTAMP     | Date de mise à jour        |

### Table `livres`

| Colonne          | Type          | Description                |
|------------------|---------------|----------------------------|
| id               | SERIAL        | Clé primaire               |
| titre            | VARCHAR(255)  | Titre du livre             |
| auteur_id        | INTEGER       | Référence à l'auteur (FK)  |
| annee_publication| INTEGER       | Année de publication       |
| genre            | VARCHAR(100)  | Genre du livre             |
| isbn             | VARCHAR(20)   | Code ISBN                  |
| resume           | TEXT          | Résumé du livre            |
| disponible       | BOOLEAN       | Disponibilité              |
| created_at       | TIMESTAMP     | Date de création           |
| updated_at       | TIMESTAMP     | Date de mise à jour        |

## 🛣️ Routes de l'application

### Routes principales

- `GET /` - Page d'accueil
- `GET /auteurs` - Liste des auteurs
- `GET /auteurs/ajouter` - Formulaire d'ajout d'auteur
- `POST /auteurs/ajouter` - Traitement de l'ajout d'auteur
- `GET /auteurs/:id` - Détails d'un auteur
- `GET /auteurs/:id/modifier` - Formulaire de modification
- `POST /auteurs/:id/modifier` - Traitement de la modification
- `POST /auteurs/:id/supprimer` - Suppression d'un auteur

- `GET /livres` - Liste des livres
- `GET /livres/ajouter` - Formulaire d'ajout de livre
- `POST /livres/ajouter` - Traitement de l'ajout de livre
- `GET /livres/recherche` - Recherche de livres
- `GET /livres/:id` - Détails d'un livre
- `GET /livres/:id/modifier` - Formulaire de modification
- `POST /livres/:id/modifier` - Traitement de la modification
- `POST /livres/:id/supprimer` - Suppression d'un livre

## 🎨 Technologies utilisées

- **Backend** : Node.js, Express.js
- **Base de données** : PostgreSQL
- **Template Engine** : EJS (Embedded JavaScript)
- **Style** : CSS3 avec variables CSS
- **JavaScript** : ES6+ (Modules natifs)

## 📦 Dépendances principales

- `express` : Framework web pour Node.js
- `pg` : Client PostgreSQL pour Node.js
- `ejs` : Moteur de template
- `dotenv` : Gestion des variables d'environnement

## 🔍 Fonctionnalités détaillées

### Gestion des auteurs

- Consulter la liste des auteurs avec tri alphabétique
- Ajouter un nouvel auteur avec validation
- Modifier les informations d'un auteur
- Consulter les détails d'un auteur avec la liste de ses livres
- Supprimer un auteur (avec confirmation)

### Gestion des livres

- Consulter la liste des livres avec leurs auteurs
- Rechercher des livres par titre, auteur ou genre
- Ajouter un nouveau livre avec sélection d'auteur
- Modifier les informations d'un livre
- Consulter les détails d'un livre
- Supprimer un livre (avec confirmation)
- Gérer la disponibilité des livres

### Recherche

- Barre de recherche dans la navigation
- Recherche dans les titres, noms d'auteurs et genres
- Résultats affichés avec mise en évidence

## 🎯 Fonctionnalités futures possibles

- Système d'authentification utilisateur
- Emprunts et retours de livres
- Statistiques et rapports
- Export des données (CSV, PDF)
- API REST pour intégration externe
- Gestion des catégories/collections
- Photos de couverture des livres
- Commentaires et notes

`




```
<img width="1366" height="728" alt="Accueil - Bibliothèque - Google Chrome 09_01_2026 23_51_29" src="https://github.com/user-attachments/assets/a2df9a63-d061-45d1-bb0b-e398a554369c" />

<img width="1366" height="728" alt="Ajouter auteur - Google Chrome 09_01_2026 23_52_19" src="https://github.com/user-attachments/assets/0d225ea3-4327-4cbc-9338-ba10d4cdda3e" />


