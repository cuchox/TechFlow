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

- Inicialmente las pruebas fallaban porque el servidor no se iniciaba correctamente en el entorno de Jenkins. Se resolvió agregando un retraso después de iniciar el servidor.
- Los reportes de Jest no se generaban en el formato esperado por Jenkins. Se solucionó instalando jest-junit y configurando el procesador de resultados.