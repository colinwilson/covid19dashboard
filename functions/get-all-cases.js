const sendQuery = require("./helpers/send-query");

const GET_ALL_CASES = `
  query {
    cases {
      data {
        _id
        date
        total
        location {
            country
            state
            isoid
            latitude
            longitude
        }
      }
    }
  }
`;

exports.handler = async () => {
  const { data, errors } = await sendQuery(GET_ALL_CASES);

  if (errors) {
    return {
      statusCode: 500,
      body: JSON.stringify(errors)
    };
  }

  return {
    statusCode: 200,
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data.cases.data.map((item) => {
        return {
            z: item.total,
            name: item.location.state,
            lat: item.location.latitude,
            lon: item.location.longitude
        }
    }) )
  };
};