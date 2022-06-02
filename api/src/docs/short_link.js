const shortLinkIndex = {
  tags: ["Short links"],
  description: "List user short links",
  operationId: "shortLinksIndex",
  security: [
    {
      bearerAuth: [],
    },
  ],
  parameters: [
    {
      name: "offset",
      in: "query",
      type: "string",
      required: true,
    },
  ],
  responses: {
    200: {
      description: "User short links list",
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/allShortLinks",
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
    401: {
      description: "Unauthorized",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              message: {
                type: "string",
                example: "Unauthorized",
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

const shortLinkIndexQuery = {
  type: "object",
  properties: {
    offset: {
      type: "int",
      example: "0",
      description: "Offseting short links by short link id (pagination)",
    },
  },
};

const allShortLinks = {
  type: "array",
  items: {
    $ref: "#/components/schemas/shortLink",
  },
};

const shortLink = {
  type: "object",
  properties: {
    id: {
      type: "string",
      example: "id",
    },
    short_url: {
      type: "string",
      example: "http://localhost/75sPDGejG",
    },
    original_url: {
      type: "string",
      example: "http://monsef.me",
    },
    created_at: {
      type: "date",
      example: "2022-06-01T22:03:11.551Z",
    },
    updated_at: {
      type: "date",
      example: "2022-06-01T22:03:11.551Z",
    },
  },
};

const shortLinkCreate = {
  tags: ["Short links"],
  description: "Create user short links",
  operationId: "shortLinkCreate",
  security: [
    {
      bearerAuth: [],
    },
  ],
  requestBody: {
    content: {
      "application/json": {
        schema: {
          $ref: "#/components/schemas/shortLinkCreateBody",
        },
      },
    },
    required: true,
  },

  responses: {
    200: {
      description: "User short links list",
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/shortLink",
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
    401: {
      description: "Unauthorized",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              message: {
                type: "string",
                example: "Unauthorized",
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

const shortLinkCreateBody = {
  type: "object",
  properties: {
    original_url: {
      type: "string",
      example: "http://monsef.me",
    },
  },
};

const shortLinkRedirect = {
  tags: ["Short links"],
  description: "Redirect to the original link",
  operationId: "shortLinkRedirect",
  security: [
    {
      bearerAuth: [],
    },
  ],
  parameters: [
    {
      name: "shortId",
      in: "path",
      type: "string",
      example: "75sPDGejG",
      required: true,
    },
  ],
  responses: {
    302: {
      description: "Redirect to the original link",
      headers: {
        location: {
          type: "string",
        },
      },
    },
    404: {
      description: "Not Found",
      content: {
        "application/json": {
          schema: {
            type: "object",
            properties: {
              message: {
                type: "string",
                example: "Not found",
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

module.exports = {
  shortLinkIndex,
  shortLink,
  shortLinkIndexQuery,
  allShortLinks,
  shortLinkCreate,
  shortLinkCreateBody,
  shortLinkRedirect,
};
