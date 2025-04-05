pipeline {
    agent any

    stages {
        stage('Clonar código') {
            steps {
                git branch: 'main', url: 'https://github.com/cuchox/TechFlow.git'
            }
        }

        stage('Instalar dependencias') {
            steps {
                bat 'npm install'
            }
        }

        stage('Ejecutar pruebas') {
            steps {
                bat 'npm test'
            }
        }

        stage('Construir imagen Docker') {
            steps {
                bat 'docker build -t techflow-users-api .'
            }
        }

        stage('Levantar contenedor') {
            steps {
                bat 'docker run -d -p 3000:3000 --name techflow-api techflow-users-api || true'
            }
        }

        stage('Publicar imagen Docker') {
            steps {
                bat 'docker login -u TU_USUARIO -p TU_PASSWORD'
                bat 'docker tag techflow-users-api TU_USUARIO/techflow-users-api:latest'
                bat 'docker push TU_USUARIO/techflow-users-api:latest'
            }
        }

    }
}
