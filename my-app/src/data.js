import actionImg from './media/GitHubActions.png';
import GitLabImg from './media/GitLab.png';
import JenkinsImg from './media/Jenkins.png';
import BBImg from './media/BitBucket.png';

export const data = [
    {
        titile: 'Github Actions',
        img: actionImg,
        code:
        `name: CI
        on: [push]
        jobs:
        build:
            runs-on: ubuntu-latest
            steps:
            - uses: actions/checkout@v2
            - name: Set up Node.js
            uses: actions/setup-node@v1
            with:
                node-version: '12.x'
            - name: Install dependencies
            run: npm install
            - name: Run tests
            run: npm test`,
        
    },
    {
        titile: 'Gitlab',
        img: GitLabImg,
        code:`image: node:latest
              stages:
                - test
              test:
                stage: test
                script:
                  - npm install`,
        
    },
    {
        titile: 'Jenkins',
        img: JenkinsImg,
        code: `pipeline {
                agent any
                stages {
                    stage('Build') {
                        steps {
                            echo 'Building..'
                        }
                    }
                    stage('Test') {
                        steps {
                            echo 'Testing..'
                        }
                    }
                    stage('Deploy') {
                        steps {
                            echo 'Deploying....'
                        }
                    }
                }
            }`,
        
    },
    {
        titile: 'BitBucket',
        img: BBImg,
        code:`image: node:latest
              pipelines:
                default:
                  - step:
                      caches:
                        - node
                      script:
                        - npm install
                        - npm test`,
    },

];
export default data