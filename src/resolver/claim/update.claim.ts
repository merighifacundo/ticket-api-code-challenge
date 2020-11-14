import { ApolloError } from 'apollo-server';
import db from '../../dao/connection';
import {Claim, ClaimStatus} from '../../models/claim';
import { UpdateClaimRequest, ClaimResponse } from '../../schema/claims';

export default async (root:any, params:any):Promise<ClaimResponse> => {
    console.log(root);
    const data:UpdateClaimRequest = params.data;
    const claimRepository = db.getRepository(Claim);
    
    let claimRetrived = await claimRepository.findByPk(data.claimId);
    if (!claimRetrived) {
      throw new ApolloError("Claim not Found", "NOT-FOUND");
		}
		claimRetrived.status = ClaimStatus[data.status as keyof typeof ClaimStatus];
		claimRetrived = await claimRetrived.save();
    return {
      claimId: claimRetrived.claimId,
      ticketId: claimRetrived.ticketId,
      status: ClaimStatus[claimRetrived.status]
    }
 
};
