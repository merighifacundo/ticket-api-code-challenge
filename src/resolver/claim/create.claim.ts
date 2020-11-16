import { ApolloError } from 'apollo-server';
import { Claim, ClaimStatus } from '../../models/claim';
import { User } from '../../models/user';
import { CreateClaimRequest, ClaimResponse } from '../../schema/claims';
import ClaimService from '../../services/claim.service';

export default async (
  root: any,
  params: any,
  context: any,
): Promise<ClaimResponse> => {
  console.log(root);
  const createClaimRequest: CreateClaimRequest = params.data;
  if (!context.user) {
    throw new ApolloError('A claim must be originated by an user.');
  }
  const { username } = context.user;
  const customer = await User.findOne({ where: { username } });
  if (!customer) {
    throw new ApolloError('A claim must be originated by an user.');
  }
  let claim: any = new Claim();
  claim.ticketId = createClaimRequest.ticketId;
  claim.status = ClaimStatus.PENDING;
  claim.description = createClaimRequest.description;
  claim.consumerId = customer.userId;
  claim = await claim.save();
  claim = await Claim.findOne({
    where: { ticketId: createClaimRequest.ticketId },
  });
  return { claim: ClaimService.transform(claim) };
};
