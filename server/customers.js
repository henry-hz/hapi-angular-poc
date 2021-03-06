

exports.get = {
  auth: {
    strategy: 'token',
    scope: 'admin'
  },
  handler: function (request, reply) {
    // console.Log('customers', request.auth.credentials);
    reply(customer);
  }
}

var customer = {
  "count": 8,
  "start": 0,
  "limit": 4,
  "docs": [
    {
      "status": "OK",
      "meta": {
        "updated_at": "2014-02-25T12:13:27.938Z",
        "created_at": "2014-02-25T12:05:44.761Z"
      },
      "email": "anthony@mail.com",
      "lastName": "Minghella",
      "firstName": "Anthony"
    },
    {
      "status": "OK",
      "meta": {
        "updated_at": "2014-02-17T11:19:24.721Z",
        "created_at": "2014-02-17T11:18:10.835Z"
      },
      "email": "victor@mail.com",
      "lastName": "Fleming",
      "firstName": "Victor"
    },
    {
      "status": "OK",
      "meta": {
        "updated_at": "2014-02-28T16:40:42.620Z",
        "created_at": "2014-02-14T11:30:45.140Z"
      },
      "email": "sam@mail.com",
      "lastName": "Mendes",
      "firstName": "Sam"
    },
    {
      "status": "OK",
      "meta": {
      "updated_at": "2014-02-14T17:03:15.709Z",
      "created_at": "2014-02-11T17:30:02.013Z"
      },
      "email": "george@mail.com",
      "lastName": "Stevens",
      "firstName": "George"
    }
  ]
}
