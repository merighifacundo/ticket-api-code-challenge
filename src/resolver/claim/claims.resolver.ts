import getClaim from './get.claim';
import createClaim from './create.claim';
import updateClaim from './update.claim';

export default {
  Query: {
    getClaim,
  },
  Mutation: {
    createClaim,
    updateClaim
  }
};
