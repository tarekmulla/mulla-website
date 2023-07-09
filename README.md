[![Terraform deployment](https://github.com/tarekmulla/mulla-website/actions/workflows/terraform-deploy.yml/badge.svg)](https://github.com/tarekmulla/mulla-website/actions/workflows/terraform-deploy.yml)  [![CodeQL](https://github.com/tarekmulla/mulla-website/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/tarekmulla/mulla-website/actions/workflows/github-code-scanning/codeql)  [![Snyk Security](https://github.com/tarekmulla/mulla-website/actions/workflows/snyk-security.yml/badge.svg)](https://github.com/tarekmulla/mulla-website/actions/workflows/snyk-security.yml)

# mulla-website
The source code for [Tarek Mulla](https://www.linkedin.com/in/tarekmulla/) personal portfolio https://mulla.au


## About the project ##

Tarek created this project to showcase his personal brand, share his achievements and experience, and provide a platform for communication with others. He built the project himself, with a focus on [DevSecOps](https://www.redhat.com/en/topics/devops/what-is-devsecops) principles.
The portfolio is a Single-Page Application with the following features:
- 🔋 **Serverless architecture**: Utilizing services such as [S3](https://aws.amazon.com/s3/), [API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html), [CloudFront](https://aws.amazon.com/cloudfront/), and [Lambda](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html) to eliminate the need for managing servers.
- 🚀 **Automation**: Leveraging [GitHub Actions](https://github.com/features/actions) and [Cloudwatch alarms](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html) to automate various processes and ensure efficient workflows.
- 🛠️ **Multi-environment support**: The project includes separate development and production environments to facilitate testing and deployment.
- 🔐 **Enhanced security**: Implementing a Web Application Firewall [WAF](https://aws.amazon.com/waf/), token-based authentication, and [CloudFront policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/working-with-policies.html) to protect against potential threats.
- 💰 **Cost optimization**: The web application costs `$1 per month`, while the firewall (WAF) costs `$9 per month`, ensuring a cost-effective solution.
- 📊 **Monitoring**: Employing [CloudWatch dashboards](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Dashboards.html) to monitor performance metrics, track blocked requests, and identify bot requests.


## 🧰 Tech stack ##
The webapp uses the following technology and tools.
| Technology / Tool | Purpose |
| ----------- | ----------- |
| [Terraform](https://www.terraform.io/) | Build the infrastructure |
| [React](https://react.dev/) | Build the static page |
| [Node.js](https://nodejs.org) |  Build the dynamic backend |
| [Github actions](https://github.com/features/actions) | Automation pipelines |
| [Snyk](https://snyk.io/) | [SAST](https://snyk.io/learn/application-security/static-application-security-testing/) analysis, [SCA](https://snyk.io/series/open-source-security/software-composition-analysis-sca/) analysis, and [Infrastructure as Code (IaC)](https://docs.snyk.io/scan-cloud-configurations/snyk-infrastructure-as-code) analysis. |
| [CodeQL](https://codeql.github.com/) | Discover vulnerabilities across the codebase |
| [Dependabot](https://github.com/dependabot) | Send alert when the repository is using a dependency with a known vulnerability |



## 🛠️ Architecture ##

The project contains 3 parts: [Web application](./webapp/), [Infrastructure](./infrastructure/), and [Automation](./.github/workflow)



### 🕸️  Web application ###

The [frontend](./webapp/) of the project is a Single-Page Application ([SPA](https://en.wikipedia.org/wiki/Single-page_application)) built with [React library](https://react.dev/). The code is hosted in an S3 bucket along with other static files like images. You can access the web application through the URL: [https://mulla.au](https://mulla.au/).
The SPA interacts with the backend by sending requests to the [API gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html) at [api.mulla.au](api.mulla.au). The following diagram illustrates how the web application interprets the received requests:
<p align="center">
  <img src="/docs/images/webapp.webp" alt="design" width="80%"/>
</p>

### 🏗️ Infrastructure ###

The [infrastructure](./infrastructure/) component is responsible for provisioning cloud resources in [AWS](https://aws.amazon.com/), and it is built using [Terraform](https://www.terraform.io/). It includes the dynamic backend for the web application, which is constructed using [API gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html) and [Lambda functions](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html). The source code for the backend is written in [Node.js](https://nodejs.org).
The architecture diagram below illustrates all the components in the cloud infrastructure:
<p align="center">
  <img src="/docs/images/architecture.svg" alt="design" width="90%"/>
</p>

### 🚀 Automation ###

The [automation pipelines](./.github/worflows) are responsible for deploying the application, performing linting, vulnerability scanning, format checking, and other validation checks. These pipelines are built using [GitHub Actions](https://github.com/features/actions) and written in [YAML](https://en.wikipedia.org/wiki/YAML). The following are the available pipelines:

| Pipeline         | Purpose            |
| ---------------- | ------------------ |
| [terraform-plan](https://github.com/tarekmulla/mulla-website/actions/workflows/terraform-plan.yml) | Check the Terraform plan and show it in the pull request |
| [terraform-deploy](https://github.com/tarekmulla/mulla-website/actions/workflows/terraform-deploy.yml) | Deploy the terraform infrastructure when a new commit pushed to the main branch |
| [snyk-security](https://github.com/tarekmulla/mulla-website/actions/workflows/snyk-security.yml) | Scan the source code, and find vulnerabilities in Terraform files, and suggest security best practices |

## 🛡️ DevSecOps ##

The web application is developed with a focus on [DevSecOps](https://www.redhat.com/en/topics/devops/what-is-devsecops), and it incorporates the following features to support this claim:
- ☁️ **Multi-environments**: The web app is designed to support both a development environment and a [production](https://github.com/tarekmulla/mulla-website/deployments/activity_log?environment=production) environment. This allows for proper testing and staging before deploying changes to the live environment.
- 🚀 **Full Automation**: Dedicated pipelines are implemented to conduct comprehensive checks on any proposed changes before allowing them to be merged into the master branch. This ensures that only validated and approved changes are deployed.
- 🔒 **Protected Branches**: The repository is configured to prevent direct merges into the master branch, adding an extra layer of control and enforcing the use of pull requests for code review and approval.
- 🔍 **Snyk Integration**: [Snyk](https://snyk.io/) is employed for Static Application Security Testing ([SAST](https://snyk.io/learn/application-security/) analysis, Software Composition Analysis ([SCA](https://snyk.io/series/open-source-security/) analysis, and [Infrastructure as Code (IaC)](https://docs.snyk.io/scan-cloud-configurations/snyk-infrastructure-as-code)  analysis. This helps identify potential vulnerabilities and maintain the security of the application and its dependencies.
- 🪄 **CodeQL Integration**: [CodeQL](https://codeql.github.com/) is utilized to discover vulnerabilities across the codebase. It provides a powerful toolset for identifying and addressing security issues within the application code.
- 🔗 **Dependabot Integration**: [Dependabot](https://github.com/dependabot) is configured to send alerts when the repository utilizes a dependency with a known vulnerability. This ensures that vulnerable dependencies are promptly addressed and updated.
- 🚨 **Backend failure Alerting**: Email alerts are set up to notify relevant stakeholders whenever an exception occurs in the backend code. This allows for immediate attention and quick resolution of any issues.
- 📊 **Webapp Monitoring**: The webapp is monitored for performance metrics, blocked requests, and bot requests. This monitoring helps ensure optimal performance, identify potential security threats, and maintain a smooth user experience. The dashboard is showing below:
<p align="center">
  <img src="/docs/images/dashboard.webp" alt="design" width="70%"/>
</p>

- 👮 **Enhanced Security**: The web application is fully secured by implementing a Web Application Firewall ([WAF](https://aws.amazon.com/waf/)), API tokens for authentication, and [CloudFront policies](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/working-with-policies.html). These measures protect against common security threats and unauthorized access.
The following diagram illustrates the security measures implemented within the web application:
<p align="center">
  <img src="/docs/images/security.webp" alt="design" width="70%"/>
</p>


## How do I get set up? ##
Feel free to clone the repository and create your own portfolio. However, kindly note that the source code is licensed under the `BSD 2-Clause License`. To learn more about the license and its terms, please refer to the complete license documentation available [here](./LICENSE).

### Deployment prerequisites ###

Before proceeding with infrastructure provisioning, make sure to meet the following requirements:

- Set up an S3 bucket to store the infrastructure state file. Update the [backend section](./infrastructure/backend.tf) in the Terraform configuration file accordingly to specify the S3 bucket details. For more details please check this [page](https://developer.hashicorp.com/terraform/language/settings/backends/s3).
- Ensure that you have a public [Route 53](https://aws.amazon.com/route53/) domain where the desired domain is hosted. This domain will be used for the web application.
- Rename the [terraform variables file](./infrastructure/terraform.tfvars.example) to `terraform.tfvars` and set the values accordingly. For example, set the value of the `domain` variable to match the domain you created in Route 53. For more details, please check this [page](https://developer.hashicorp.com/terraform/language/values/variables).
- Rename the [Webapp env file](./webapp/.env.example) to `.env` and configure the necessary values. Please note that the `REACT_APP_TOKEN` can be retrieved from the [SSM parameter](./infrastructure/modules/api/authorizer/ssm.tf) after your first deployment. For more details, please check this [page](https://create-react-app.dev/docs/adding-custom-environment-variables/).

### Web application (React app) ###

* [Install npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
* [Install react](https://legacy.reactjs.org/docs/getting-started.html)
* Run commands that provided in *./Makefile*:
    * `make install`: install the dependencies
    * `make build`: build the webapp, the artifacts will be stored under `./webapp/build/` dirtectory
    * `make run`: run the webapp, after run the app can be accessed on [localhost:3000](https://localhost:3000)

### Infrastructure (Terraform) ###

* Install [Terraform](https://developer.hashicorp.com/terraform/tutorials/aws-get-started/install-cli)
* Install and configure [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html#getting-started-install-instructions) based on where you want to provision the tool.
* Create `terraform.tfvars` file, and customize the terraform variable values as explained before in the prerequisites.
* Init, plan and apply terraform. See: [Provisioning Infrastructure](https://developer.hashicorp.com/terraform/cli/run)

**NOTE**: _Terraform will deploy the webapp files (that generated when building the react app) and images stored under directory [./webapp/images](./webapp/images/) automatically._





## Who do I talk to? ##

You can contact Tarek Mulla directly using one of the following:
* 👔 Linkedin: [Tarek Mulla](https://www.linkedin.com/in/tarekmulla/)
* ✉️ Personal Email [tarek@mulla.au](mailto:tarek@mulla.au)
* 📇 Contact form [mulla.au](https://mulla.au)
