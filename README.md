# RAG Help Desk - Frontend (Angular)

## Présentation

Application Angular servant d’interface utilisateur pour :

- l’authentification,
- l’accès au moteur RAG,
- l’administration documentaire.

L’interface communique avec le backend via une API REST sécurisée par JWT.

---

## Stack technique

- Angular 18
- TypeScript
- RxJS
- Angular Router
- Angular Guards
- Nginx
- Docker

---

## Architecture frontend

Le frontend utilise une architecture Angular moderne basée sur :

- composants standalone,
- services injectables,
- route guards,
- stockage JWT local.

### Structure simplifiée

```text
core/
  ├── auth.service.ts
  ├── auth.guard.ts

pages/
  ├── login/
  ├── register/
  ├── prompt/
  └── admin/
```

---

## Gestion des rôles

### USER

Accès :

- interface de prompt,
- consultation des réponses IA.

### ADMIN

Accès :

- ingestion documentaire,
- administration documentaire.

Les guards Angular contrôlent la navigation selon le rôle JWT.

---

## Sécurité frontend

### JWT

Le token est stocké dans le Local Storage.

Le frontend :

- ajoute automatiquement le token dans les headers,
- protège les routes privées,
- redirige les utilisateurs non authentifiés.

---

## Setup frontend

### Prérequis

- Node.js
- Angular CLI
- Docker

### Lancement local

```bash
npm install
npm start
```

Application disponible sur :

```text
http://localhost:4200
```

---

## Communication backend

Les appels API transitent via :

```text
/api/**
```

et seront reverse-proxyés par Nginx vers le backend Spring Boot.

---
