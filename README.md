# Serverless GraphQL Demo

This repo demonstrates deploying and running a GraphQL server as a serverless function via AWS Lambda, Azure Functions, and Google Cloud Functions.

> Warning: This demo is partially broken on Windows. Running the local server and deploying to Google should work.

## Prerequesites

- Node.js 8+
- A running MongoDB instance. [MongoDB Atlas](https://www.mongodb.com/cloud) has a great free option.
- This repo cloned to your computer.

## Usage

### Environment Variables

This project requires a MongoDB instance

### Seed Database

`npm run db:seed`

### Set Up Credentials

Serverless uses credentials specific to each cloud provider to authenticate during deployment. See the Serverless Docs for walkthroughs on setting up your credentials:

- [AWS](https://serverless.com/framework/docs/providers/aws/guide/credentials/)
- [Azure](https://serverless.com/framework/docs/providers/azure/guide/credentials/)
- [Google Cloud](https://serverless.com/framework/docs/providers/google/guide/credentials/)

### Install Dependencies

All depencencies are managed at the root of the repo. Run the following command to install dependencies:

`npm install`

### Deploy Services

Services for each provider can be deployed as a group or individually. Run the following command to deploy all services:

`npm deploy`

## CLI Commands

The following scripts are available via npm scripts.

### `npm run start`

Runs a local Express server with the same configuration as the cloud provider functions.

### `npm run db.drop`

Delete the data in MongoDB.

### `npm run db.reset`

Resets the database by running `npm run db.drop` then `npm run db.seed`.

### `npm run db.seed`

Create seed data in MongoDB.

### `npm run deploy`

Deploys functions to all providers.

### `npm run deploy.aws`

Deploys functions to AWS.

### `npm run deploy.azure`

Deploys functions to Azure.

### `npm run deploy.gcp`

Deploys functions to Google Cloud.

### `npm run remove`

Removes functions from all providers.

### `npm run remove.aws`

Removes functions from AWS.

### `npm run remove.azure`

Removes functions from Azure.

### `npm run remove.gcp`

Removes functions from Google Cloud.
