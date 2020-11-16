import { ApolloError } from 'apollo-server';
import db from '../../dao/connection';
import { Claim, ClaimStatus } from '../../models/claim';
import { UpdateClaimRequest, ClaimResponse } from '../../schema/claims';
import ClaimService from '../../services/claim.service';

export default async (root:any, params:any):Promise<ClaimResponse> => {
  console.log(root);
  const updateClaimRequest:UpdateClaimRequest = params.data;
  const claimRepository = db.getRepository(Claim);

  let claimRetrived = await claimRepository.findByPk(updateClaimRequest.claimId);
  if (!claimRetrived) {
    throw new ApolloError('Claim not Found', 'NOT-FOUND');
  }
  claimRetrived.status = ClaimStatus[updateClaimRequest.status as keyof typeof ClaimStatus];
  claimRetrived = await claimRetrived.save();
  return { claim: ClaimService.transform(claimRetrived) };
};
