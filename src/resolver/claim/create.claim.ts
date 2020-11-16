import { Claim, ClaimStatus } from '../../models/claim';
import { CreateClaimRequest, ClaimResponse } from '../../schema/claims';
import ClaimService from '../../services/claim.service';

export default async (root: any, params: any): Promise<ClaimResponse> => {
  console.log(root);
  const createClaimRequest: CreateClaimRequest = params.data;
  let claim = new Claim();
  claim.ticketId = createClaimRequest.ticketId;
  claim.status = ClaimStatus.PENDING;
  claim = await claim.save();
  return { claim: ClaimService.transform(claim) };
};
