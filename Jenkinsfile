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
                sh 'npx playwright test --reporter=html'
            }
        }

        stage('Show Report Path') {
            steps {
                sh 'pwd'
                sh 'ls -la'
                sh 'ls -la playwright-report'
            }
        }
    }

    post {
        always {

            publishHTML([
                allowMissing: false,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright Report'
            ])

            archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
        }
    }
}