exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: 'PJH',
      age: 26,
      email: 'hijh1200@naver.com'
    })
  }
}