pipeline {
    agent any

    stages {

        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                sh 'npx playwright install'
            }
        }

        stage('Run API Tests') {
            steps {
                sh 'npx playwright test'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: '**/*.html', allowEmptyArchive: true
        }
    }
}