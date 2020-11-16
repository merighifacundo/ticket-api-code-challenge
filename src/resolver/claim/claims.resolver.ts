import getClaim from './get.claim';
import getClaims from './get.claims';
import createClaim from './create.claim';
import updateClaim from './update.claim';

export default {
  Query: {
    getClaim,
    getClaims,
  },
  Mutation: {
    createClaim,
    updateClaim,
  },
};
