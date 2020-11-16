import db from '../../dao/connection';
import { Claim } from '../../models/claim';
import { ClaimsResponse } from '../../schema/claims';
import ClaimService from '../../services/claim.service';

export default async (): Promise<ClaimsResponse> => {
  const claimRepository = db.getRepository(Claim);
  const claimsRetrived = await claimRepository.findAll();
  return {
    claims: claimsRetrived.map((claim) => ClaimService.transform(claim)),
  };
};
