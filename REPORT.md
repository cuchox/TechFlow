# Reporte de Implementación del Pipeline CI

## Pasos realizados

1. Configuración inicial del repositorio Git local y remoto en GitHub.
2. Verificación del funcionamiento básico de la API con json-server.
3. Configuración de Jenkins en un contenedor Docker.
4. Implementación del pipeline con las siguientes etapas:
   - Checkout del código
   - Instalación de dependencias
   - Ejecución de pruebas unitarias
   - Inicio y verificación de la API
5. Configuración de reportes de pruebas con jest-junit.

## Problemas encontrados

- El archivo app.js no tenía exportado el módulo para las pruebas.
- Ajusté la ruta y lectura de db.json.
- Corregí algunos nombres de variables en las pruebas.

## Resultado Final

Pipeline exitoso que:
- Clona el repositorio.
- Instala dependencias.
- Ejecuta pruebas.
- Genera imagen Docker.
- Levanta contenedor.
- Ejecuta aplicación.
