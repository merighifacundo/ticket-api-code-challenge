# GraphQL queries and mutations

## Authenticate

### Authentication Mutation:

`mutation{
	authenticate(
		data: 
		{username: "merighifacundo@gmail.com", password:"*****"})
	{jwtToken}
}`

### Authentication Response:

`{
  "data": {
    "authenticate": {
      "jwtToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im1lcmlnaGlmYWN1bmRvQGdtYWlsLmNvbSIsImZpcnN0TmFtZSI6IkZhY3VuZG8iLCJyb2xlIjoxLCJpYXQiOjE2MDU1NTIwMzUsImV4cCI6MTYwNTU4ODAzNX0.QvvAKLEHiGAFPQGqW7phkcGzv6BFTkvCYXtSxAjN3h4"
    }
  }
}`


## Claim

### Claim Create:

`mutation{
	createClaim(
		data: 
		{ticketId: "IIII7779", description: "The flight was cancelled"})
	{claim {claimId, status, description}}
}`

### Claim Create Response:

`{
  "data": {
    "createClaim": {
      "claim": {
        "claimId": "16",
        "status": "PENDING",
        "description": "The flight was cancelled"
      }
    }
  }
}`

### Claim Get:

`query{getClaim(data: {id: "16"}){ claim {claimId,status, description}}
}`

### Claim Get Response:

`{
  "data": {
    "getClaim": {
      "claim": {
        "claimId": "16",
        "status": "PENDING",
        "description": "The flight was cancelled"
      }
    }
  }
}`



