import { Claim, ClaimStatus } from '../models/claim';
import { Claim as ClaimDto } from '../schema/claims';

export default class ClaimService {
  public static transform(claim:Claim) : ClaimDto {
    return {
      claimId: claim.claimId,
      ticketId: claim.ticketId,
      status: ClaimStatus[claim.status],
      description: claim.description,
      resolution: claim.resolution,
    };
  }
}
