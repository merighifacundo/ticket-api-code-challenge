import { ApolloError } from 'apollo-server';
import db from '../../dao/connection';
import { Claim } from '../../models/claim';
import { GetClaimRequest, ClaimResponse } from '../../schema/claims';
import ClaimService from '../../services/claim.service';

export default async (root:any, params:any):Promise<ClaimResponse> => {
  console.log(root);
  const getClaimRequest:GetClaimRequest = params.data;
  const claimRepository = db.getRepository(Claim);
  console.log(`Getting an Claim with id: ${JSON.stringify(getClaimRequest)}`);
  const claimRetrived = await claimRepository.findByPk(getClaimRequest.id);
  if (!claimRetrived) {
    throw new ApolloError('Claim not Found', 'NOT-FOUND');
  }
  return { claim: ClaimService.transform(claimRetrived) };
};
