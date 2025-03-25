.PHONY: login
login:
	@aws sso login --profile mulla

.PHONY: init
init:
	@export AWS_DEFAULT_PROFILE="mulla" && \
	cd ./infrastructure && \
	terraform init -upgrade

.PHONY: install
install:
	@cd webapp && \
	npm install

.PHONY: run
run:
	@cd webapp && \
	npm start

.PHONY: build
build:
	@cd webapp && \
	npm run build

.PHONY: format
format:
	@cd infrastructure && \
	terraform fmt -recursive .

.PHONY: plan
plan:
	@cd infrastructure && terraform plan

.PHONY: deploy
deploy:
	@cd infrastructure && \
	terraform init && \
	terraform apply --auto-approve

.PHONY: destroy
destroy:
	@export AWS_DEFAULT_PROFILE="mulla" && \
	cd infrastructure && \
	terraform destroy --auto-approve
