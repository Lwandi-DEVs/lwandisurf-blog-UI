.PHONY: build run clean

build:
	docker build -t lwandisurf-ui .

run:
	docker run -d --rm --name lwandisurf-ui-container \
		-v $(PWD)/dist:/app/dist \
		lwandisurf-ui

clean:
	docker stop lwandisurf-ui-container || true
	docker rm lwandisurf-ui-container || true

deploy-prd:
	@echo "Deploying to production..."
	scp -r dist/* zorgen@zorgen.tech:/home/zorgen/nginx_proxy_manager/staticfiles/lwandi/site