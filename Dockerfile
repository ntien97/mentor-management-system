# Install prd dependencies only when needed
FROM --platform=linux/amd64 node:16.15.1-alpine as deps
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn --frozen-lockfile --ignore-scripts --production

FROM --platform=linux/amd64 node:16.15.1-alpine as builder
WORKDIR /app
COPY --from=deps /app/package.json /app/
COPY --from=deps /app/yarn.lock /app/
COPY --from=deps /app/node_modules/ /app/node_modules/
RUN yarn --frozen-lockfile --ignore-scripts

COPY . .
RUN npx nx run backend:build

# Runner
FROM --platform=linux/amd64 node:16.15.1-alpine AS runner
ENV NODE_ENV=production
WORKDIR /app
COPY --from=builder /app/package.json /app/
COPY --from=builder /app/yarn.lock /app/
COPY --from=builder /app/dist/ /app/dist/
COPY --from=deps /app/node_modules/ /app/node_modules/

# just to be sure
RUN yarn --frozen-lockfile --ignore-scripts --production

CMD ["node", "dist/apps/backend/main.js"]

