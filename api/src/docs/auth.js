const login = {
  tags: ["Auth"],
  description: "Login a user",
  operationId: "login",
  requestBody: {
    content: {
      "application/json": {
        schema: {
          $ref: "#/components/schemas/loginBody",
        },
      },
    },
    required: true,
  },
  responses: {
    200: {
      description: "User authencated successfully!",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              access_token: {
                type: "string",
                example:
                  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2ZDllMTA1Ni0yZDlmLTRjYWQtODhiMi03MDgyOWRkYmFlNTMiLCJpYXQiOjE2NTQxMjM5MzgsImV4cCI6MTY1NDIxMDMzOH0.IbjRuszFaeR5qveMeh6zR4Dg5Jw-rTJdHhl0fH6e_jE",
              },
            },
          },
        },
      },
    },
    400: {
      description: "Bad request",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              message: {
                type: "string",
                example: "invalid_credential",
              },
            },
          },
        },
      },
    },
    500: {
      description: "Internal Server Error",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              message: {
                type: "string",
                example: "internal_server_error",
              },
            },
          },
        },
      },
    },
  },
};

const loginBody = {
  type: "object",
  properties: {
    email: {
      type: "string",
      example: "john.snow@email.com",
    },
    password: {
      type: "string",
      description: "unencrypted user's password",
      example: "!1234aWe1Ro3$#",
    },
  },
};

const register = {
  tags: ["Auth"],
  description: "Register a user",
  operationId: "register",
  requestBody: {
    content: {
      "application/json": {
        schema: {
          $ref: "#/components/schemas/registerBody",
        },
      },
    },
    required: true,
  },
  responses: {
    200: {
      description: "User authencated successfully!",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              access_token: {
                type: "string",
                example:
                  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2ZDllMTA1Ni0yZDlmLTRjYWQtODhiMi03MDgyOWRkYmFlNTMiLCJpYXQiOjE2NTQxMjM5MzgsImV4cCI6MTY1NDIxMDMzOH0.IbjRuszFaeR5qveMeh6zR4Dg5Jw-rTJdHhl0fH6e_jE",
              },
            },
          },
        },
      },
    },
    400: {
      description: "Bad request",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              message: {
                type: "string",
                example: "validation_error",
              },
            },
          },
        },
      },
    },
    500: {
      description: "Internal Server Error",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              message: {
                type: "string",
                example: "internal_server_error",
              },
            },
          },
        },
      },
    },
  },
};

const registerBody = {
  type: "object",
  properties: {
    name: {
      type: "string",
      example: "john john",
    },
    email: {
      type: "string",
      example: "john.john@email.com",
    },
    password: {
      type: "string",
      description: "unencrypted user's password",
      example: "!1234aWe1Ro3$#",
    },
    confirm_password: {
      type: "string",
      description: "confirm user password",
      example: "!1234aWe1Ro3$#",
    },
  },
};

module.exports = {
  login,
  loginBody,
  register,
  registerBody,
};
