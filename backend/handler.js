'use strict'

module.exports.whoami = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      username: 'jea265',
    }),
  }

  callback(null, response)
}
