import { ApolloError } from 'apollo-server';
import {Claim, ClaimStatus} from '../../models/claim';
import { CreateClaimRequest, ClaimResponse } from '../../schema/claims';

export default async (root:any, params:any):Promise<ClaimResponse> => {
    console.log(root);
    const data:CreateClaimRequest = params.data;
		let claim = new Claim();
		claim.ticketId = data.ticketId;
		claim.status = ClaimStatus.PENDING;
		claim = await claim.save();
    return {
      claimId: claim.claimId,
      ticketId: claim.ticketId,
      status: ClaimStatus[claim.status]
    }
 
};
