const { login, loginBody, register, registerBody } = require("./auth");
const {
  shortLinkIndexQuery,
  shortLinkIndex,
  shortLink,
  allShortLinks,
  shortLinkCreate,
  shortLinkCreateBody,
  shortLinkRedirect,
} = require("./short_link");
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
      url: "http://localhost:8080",
      description: "Local Server",
    },
  ],
  tags: [
    {
      name: "Auth",
    },
    {
      name: "Short links",
    },
  ],
  paths: {
    "/api/auth/login": {
      post: login,
    },
    "/api/auth/regsiter": {
      post: register,
    },
    "/api/short-links": {
      get: shortLinkIndex,
    },
    "/api/short-links/create": {
      post: shortLinkCreate,
    },
    "/{shortId}": {
      get: shortLinkRedirect,
    },
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
    schemas: {
      loginBody,
      registerBody,
      shortLinkIndexQuery,
      shortLink,
      allShortLinks,
      shortLinkCreateBody,
    },
  },
};

module.exports = apiDocumentation;
