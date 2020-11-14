

## Code Challenge Details

It is required to engineer a platform to manage all the tickets for claims in for an Airline. And this needs to handle priority order.

## Pre-conditions:


- Code Coverage.
- Every Incidence should have asociated the flight code which will be compose by a String of 8 characters.
- The system will create an Claim Number.
- A Claim can be resolve inmediately or require further comunications with the user that created the claim. The platform should support both cases. withouth having to create new claims. Which means if I have a ticket with id: ABCD1234 there shouldn't be 2 claims for the same ticket.
- The states for the claim are: "pending", "wip" and "resolved".
- The platform should support roles as: user, and administrator.
- The Claim can have multiple attachments.

### The following dependencies are required:
- Express
- Sequelize [ORM]
- dotenv

### For Development this are required too:
- ESLint (Airbnb)
- Mocha
- Chai

## Restrictions:
- The attachments for the claim should be a separate microservice.
- The authentication should happen with JWT.
- The code should pass the linter.
