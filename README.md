# Node TypeScript Starter

Simple Node starter Express API project written in TypeScript. Supports simple CRUD operations, using a MySQL database. Database can be changed as required.

## Why Typescript?
Because OOP is good, and TypeScript supports type checking which without, is a serious pain to maintain.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
NodeJS - download from NodeJS's official website, see below 'Built With'
```

### Installing

A step by step series of examples that tell you how to get a development env running

First step is to open the terminal at the root directory, and install relevant dependencies using 

```
npm install
```

after that, build the js modules using 

```
tsc
```

and then, launch using

```
npm start
```

You should be able to then use an API testing service, or access the API endpoint using

```
GET 127.0.0.1/8000/<path>
```
where port 8000 and other settings can be changed at `./config/config.json`.

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Express](https://expressjs.com/en/4x/api.html) - The web framework used
* [NodeJS](https://nodejs.org/en/) - Dependency Management and Node framework

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

* **CK** - *Initial work* - [MeCode4Food](https://github.com/MeCode4Food)

See also the list of [contributors](https://github.com/MeCode4Food/node-ts-rest-starter/contributors) who participated in this project.

## Acknowledgments

* Food
* Inspiration
* Sleep