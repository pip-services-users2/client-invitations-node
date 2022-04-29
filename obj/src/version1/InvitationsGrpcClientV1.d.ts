import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { GrpcClient } from 'pip-services3-grpc-nodex';
import { IInvitationsClientV1 } from './IInvitationsClientV1';
import { InvitationV1 } from './InvitationV1';
export declare class InvitationsGrpcClientV1 extends GrpcClient implements IInvitationsClientV1 {
    constructor();
    getInvitations(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<InvitationV1>>;
    getInvitationById(correlationId: string, invitationId: string): Promise<InvitationV1>;
    createInvitation(correlationId: string, invitation: InvitationV1): Promise<InvitationV1>;
    deleteInvitationById(correlationId: string, invitationId: string): Promise<InvitationV1>;
    activateInvitations(correlationId: string, email: string, userId: string): Promise<InvitationV1[]>;
    approveInvitation(correlationId: string, invitationId: string, role: string): Promise<InvitationV1>;
    denyInvitation(correlationId: string, invitationId: string): Promise<InvitationV1>;
    resendInvitation(correlationId: string, invitationId: string): Promise<InvitationV1>;
    notifyInvitation(correlationId: string, invitation: InvitationV1): Promise<void>;
}
