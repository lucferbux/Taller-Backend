# Execute the backend
.PHONY: dev-api
dev-api:
	cd backend && npm run dev

# Execute de frontend
.PHONY: dev-ui
dev-ui:
	cd ui && npm run start
