pipeline {
    agent {
        docker {
            image 'node:lts-buster-slim' 
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
                sh 'npm run build' 
                sh 'tar -cvf build.tar build'
                sh 'ls -laoh'
            }
        }
    }
}
