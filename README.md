# TechFlow - Backend API

Proyecto backend desarrollado para la gestión de usuarios y flujo de datos, 
como parte de la práctica de integración continua (CI) y despliegue continuo 
(CD) utilizando Jenkins y Docker.

---

## Descripción

TechFlow es un proyecto backend construido en Node.js con Express.js que expone un conjunto de endpoints REST para la gestión de usuarios.

El objetivo de este proyecto es integrar un pipeline de CI/CD que permita:

- Automatización de pruebas.
- Construcción de imagen Docker.
- Despliegue automático del backend en un contenedor.
- Validación del flujo completo a través de Jenkins.

---

## Tecnologías Utilizadas

- Node.js
- Express.js
- Docker
- Docker Compose
- Jenkins
- Git / GitHub
- Jest (para pruebas)

---

## Estructura del Pipeline CI/CD

El pipeline implementado en Jenkins sigue los siguientes stages:

1. Checkout del repositorio desde GitHub.
2. Instalación de dependencias.
3. Análisis estático de código con ESLint.
4. Ejecución de pruebas unitarias con Jest.
5. Construcción de la imagen Docker.
6. Despliegue del contenedor Docker en local.

---

## Instalación Local

1. Clonar el proyecto:
```bash
git clone https://github.com/cuchox/TechFlow.git
cd TechFlow
