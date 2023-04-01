[![Terraform deployment](https://github.com/tarekmulla/mulla-website/actions/workflows/terraform-deploy.yml/badge.svg)](https://github.com/tarekmulla/mulla-website/actions/workflows/terraform-deploy.yml)  [![CodeQL](https://github.com/tarekmulla/mulla-website/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/tarekmulla/mulla-website/actions/workflows/github-code-scanning/codeql)  [![Snyk Security](https://github.com/tarekmulla/mulla-website/actions/workflows/snyk-security.yml/badge.svg)](https://github.com/tarekmulla/mulla-website/actions/workflows/snyk-security.yml)

# mulla-website
The source code for [Tarek Mulla](https://www.linkedin.com/in/tarekmulla/) personal website https://mulla.au


## Architecture ##

The project contains 2 parts: [Infrastructure](./infrastructure/), and [Web application](./webapp/)

### Infrastructure ###

The infrastructure part responsible for provisioning the cloud resources in AWS, this part is built using [Terraform](https://www.terraform.io/).

The following architecture shows all the components in the cloud infrastructure:

<p align="center">
  <img src="/docs/images/architecture.svg" alt="design" width="800"/>
</p>


### Web application ###

The web application is built using [React library](https://react.dev/), and is hosted in S3 bucket in AWS.

The web application can be accessed via the URL: [mulla.au](https://mulla.au/); The application interacts with the backend by sending requests to the API gateway [api.mulla.au](api.mulla.au).


## Deployment prerequisites ##

Before you provision the infrastructure you will need to make sure the following requirements are satisfied:

1. Have an S3 bucket to store the infrastructure status


## DevSecOps practices ##

The application has couple of check to follow best practices, and make sure the application is secure.

### Github actions ###

The project use github action to check, test, and deploy the application. The followings are the actions it supported now:
* [terraform-plan](https://github.com/tarekmulla/mulla-website/actions/workflows/terraform-plan.yml): This action checks the Terraform plan and shows it in the pull request.
* [terraform-deploy](https://github.com/tarekmulla/mulla-website/actions/workflows/terraform-deploy.yml): This action deploys the terraform infrastructure when a new commit pushed to the main branch.
* [CodeQL](https://codeql.github.com/): To discover vulnerabilities across the codebase.
* [Snyk](https://snyk.io/): To scan the source code, and find vulnerabilities in Terraform files, and suggest security best practices.

### Other tools ###

* [Dependabot](https://github.com/dependabot): To alert developers when a repository is using a software dependency with a known vulnerability.

## How do I get set up? ##

### Terraform ###

* Install [Terraform](https://developer.hashicorp.com/terraform/tutorials/aws-get-started/install-cli)
* Install and configure [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html#getting-started-install-instructions) based on where you want to provision the tool.
* Create `terraform.tfvars` file, and customize the terraform variable values.
* Init, plan and apply terraform. See: [Provisioning Infrastructure](https://developer.hashicorp.com/terraform/cli/run)


### Web application ###

* [Install npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
* [Install react](https://legacy.reactjs.org/docs/getting-started.html)
* Run commands that provided in *./Makefile*:
    * `make build`: build the webapp
    * `make run`: run the webapp, can be accessed on [localhost:3000](https://localhost:3000)


## Who do I talk to? ##

You can contact me directly using one of the following:
* Linkedin: [Tarek Mulla](https://www.linkedin.com/in/tarekmulla/)
* Personal Email [tarek@mulla.au](mailto:tarek@mulla.au)
