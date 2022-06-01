const { login, loginBody, register, registerBody } = require("./auth");

const apiDocumentation = {
  openapi: "3.0.1",
  info: {
    version: "1.3.0",
    title: "URL-Shortener API- Documentation",
    description: "",
    contact: {
      name: "MONSEF BEN DRIOUICHE",
      email: "contact@monsef.me",
      url: "https://monsef.me",
    },
  },
  servers: [
    {
      url: "http://localhost:8080/api",
      description: "Local Server",
    },
  ],
  tags: [
    {
      name: "Auth",
    },
  ],
  paths: {
    "/auth/login": {
      post: login,
    },
    "/auth/regsiter": {
        post: register,
      },
  },
  components: {
    schemas: {
      loginBody,
      registerBody,
    },
  },
};

module.exports = apiDocumentation;
