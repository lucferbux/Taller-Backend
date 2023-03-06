# Execute the backend
.PHONY: dev-api
dev-api:
	cd backend && npm run start:dev

# Execute de frontend
.PHONY: dev-ui
dev-ui:
	cd ui && npm run dev

.PHONY: install-ui
install-ui:
	cd ui && npm install

.PHONY: install-api
install-api:
	cd api && npm install
