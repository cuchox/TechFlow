pipeline {
    agent any

    stages {
        stage('Clonar repositorio código') {
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

        stage('Test y cobertura') {
            steps {
            bat 'npm test -- --coverage'
            }
        }


        stage('Construir y correr imagen Docker') {
            steps {
            bat 'docker build -t js-app .'
            bat 'docker run -d -p 8083:3000 js-app'
            }
          }

    }
}
