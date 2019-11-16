export default {
  body: {
    type: "object",
    properties: {
      username: {
        type: "string"
      },
      password: {
        type: "string"
      }
    },
    required: ["username", "password"]
  },
  response: {
    200: {
      type: "object",
      properties: {
        msg: {
          type: "string"
        },
        userInfo: {
          type: "object",
          properties: {
            username: {
              type: "string"
            },
            createAt: {
              type: "string",
              format: "date-time"
            },
            updateAt: {
              type: "string",
              format: "date-time"
            },
            userId: {
              type: "string"
            }
          }
        }
      }
    },
    409: {
      type: "object",
      properties: {
        msg: {
          type: "string"
        }
      }
    },
    500: {
      type: "object",
      properties: {
        msg: {
          type: "string"
        }
      }
    }
  }
};
