# InsuredMine Project Documentation

This repository contains the code for InsuredMine, a backend application designed to handle insurance-related data using Node.js and MongoDB.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
  - [User Endpoints](#user-endpoints)
  - [Policy Endpoints](#policy-endpoints)
  - [Account Endpoints](#account-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The InsuredMine project is a backend application developed in Node.js that handles insurance-related data. It provides APIs to upload insurance data from XLSX/CSV files into MongoDB and perform CRUD operations on various collections like User, Account, and Policy.

## Features

- API to upload XLSX/CSV data into MongoDB
- CRUD operations for User, Account, and Policy collections
- Separates data into different MongoDB collections (Agent, User, User's Account, LOB, Carrier, Policy)
- Utilizes MongoDB for efficient storage and retrieval

## Getting Started

### Prerequisites

- Node.js (version 8.19.2)
- MongoDB (version 1.39.0)

### Installation

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/henryts/insureMine.git
2. Install the required dependencies using npm:
    npm install
3. Start the application using nodemon:
    nodemon 
## Running the Application
To run the application, ensure you have MongoDB running and properly configured. Also, create a .env file in the root directory with the following details:
MONGO_URI='mongodb+srv://henrysathyan:insureMine1231968%40@cluster0.p9lxxvt.mongodb.net/'
PORT=8001

### API Documentation
## User Endpoints
### Create a new user:

POST /user/createUser
### Read user details by ID:

GET /user/readUser/:id

### Update user details by ID:
PUT /user/createUser/:id

### Delete a user by ID:
DELETE /user/createUser/:id

### Policy Endpoints
### Create a new policy:
POST /policy/createPolicy
### Get policy details by ID:
GET /policy/getPolicyDetails/:id
### Update policy details by ID

PUT /policy/updatePolicy/:id
### Delete a policy by ID:

DELETE /policy/delete/:id

### Account Endpoints
### Create a new account:

POST /account/createAccount
### Get account details by ID:

GET /account/getAccountDetails/:id
###Update account details by ID:


PUT /account/updateAccount/:id
### Delete an account by ID:

DELETE /account/deleteAcount/:id


