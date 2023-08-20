# InsuredMine Project Documentation

This repository contains the code for the InsuredMine, which is designed to handle insurance-related data using Node.js and MongoDB.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
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

1. Clone this repository to your local machine.
2. Install the required dependencies using npm:

```bash
npm install
