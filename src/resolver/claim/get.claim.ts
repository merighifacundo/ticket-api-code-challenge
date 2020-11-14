import { ApolloError } from 'apollo-server';
import db from '../../dao/connection';
import {Claim, ClaimStatus} from '../../models/claim';
import { GetClaimRequest, ClaimResponse } from '../../schema/claims';

export default async (root:any, params:any):Promise<ClaimResponse> => {
    console.log(root);
    const data:GetClaimRequest = params.data;
    const claimRepository = db.getRepository(Claim);
    console.log(`Getting an Claim with id: ${JSON.stringify(data)}`);
    const claimRetrived = await claimRepository.findByPk(data.id);
    if (!claimRetrived) {
      throw new ApolloError("Claim not Found", "NOT-FOUND");
    }
    return {
      claimId: claimRetrived.claimId,
      ticketId: claimRetrived.ticketId,
      status: ClaimStatus[claimRetrived.status]
    }
 
};
