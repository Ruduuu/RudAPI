# RudAPI

Personal backbone API with Express, PostgreSQL, Sequelize, JWT, and Swagger.

## Setup

1. Copy `.env.example` to `.env`
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create PostgreSQL database.
4. Run:
   ```bash
   npm run dev
   ```

## Docs

Open:
`http://localhost:3000/api-docs`

## Endpoints

- `GET /v1/health`
- `POST /v1/auth/register`
- `POST /v1/auth/login`
- `GET /v1/profile/me`
- `PUT /v1/profile/me`
- `GET /v1/projects`
- `POST /v1/projects`
- `PUT /v1/projects/:id`
- `DELETE /v1/projects/:id`
- `GET /v1/skills`
- `POST /v1/skills`
- `DELETE /v1/skills/:id`
- `GET /v1/links`
- `POST /v1/links`
- `DELETE /v1/links/:id`
- `GET /v1/notes`
- `POST /v1/notes`
- `DELETE /v1/notes/:id`