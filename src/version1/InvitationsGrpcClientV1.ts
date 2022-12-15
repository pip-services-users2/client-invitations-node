const services = require('../../../src/protos/invitations_v1_grpc_pb');
const messages = require('../../../src/protos/invitations_v1_pb');

import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { GrpcClient } from 'pip-services3-grpc-nodex';

import { IInvitationsClientV1 } from './IInvitationsClientV1';
import { InvitationV1 } from './InvitationV1';
import { InvitationsGrpcConverterV1 } from './InvitationsGrpcConverterV1';

export class InvitationsGrpcClientV1 extends GrpcClient implements IInvitationsClientV1 {
        
    public constructor() {
        super(services.InvitationsClient);
    }

    public async getInvitations(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<InvitationV1>> {

        let request = new messages.InvitationPageRequest();

        InvitationsGrpcConverterV1.setMap(request.getFilterMap(), filter);
        request.setPaging(InvitationsGrpcConverterV1.fromPagingParams(paging));

        let timing = this.instrument(correlationId, 'invitations.get_invitations');

        try {
            let response = await this.call<any>('get_invitations', correlationId, request);

            if (response.error != null)
                throw InvitationsGrpcConverterV1.toError(response.error);

            timing.endTiming();
            return response ? InvitationsGrpcConverterV1.toInvitationPage(response.getPage()) : null;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async getInvitationById(correlationId: string, invitationId: string): Promise<InvitationV1> {
        let request = new messages.InvitationIdRequest();
        request.setInvitationId(invitationId);

        let timing = this.instrument(correlationId, 'invitations.get_invitation_by_id');

        try {
            let response = await this.call<any>('get_invitation_by_id', correlationId, request);
            if (response.error != null)
                throw InvitationsGrpcConverterV1.toError(response.error);
            timing.endTiming();

            return response
                ? InvitationsGrpcConverterV1.toInvitation(response.getInvitation())
                : null;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }    
    }

    public async createInvitation(correlationId: string, invitation: InvitationV1): Promise<InvitationV1> {

        let invitationObj = InvitationsGrpcConverterV1.fromInvitation(invitation);

        let request = new messages.InvitationObjectRequest();
        request.setInvitation(invitationObj);

        let timing = this.instrument(correlationId, 'invitations.create_invitation');

        try {
            let response = await this.call<any>('create_invitation', correlationId, request);
            if (response.error != null)
                throw InvitationsGrpcConverterV1.toError(response.error);

            timing.endTiming();
            return response
                ? InvitationsGrpcConverterV1.toInvitation(response.getInvitation())
                : null;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async deleteInvitationById(correlationId: string, invitationId: string): Promise<InvitationV1> {

        let request = new messages.InvitationIdRequest();
        request.setInvitationId(invitationId);

        let timing = this.instrument(correlationId, 'invitations.delete_invitation_by_id');

        try {
            let response = await this.call<any>('delete_invitation_by_id', correlationId, request);
            if (response.error != null)
                throw InvitationsGrpcConverterV1.toError(response.error);

            timing.endTiming();
            return response
                ? InvitationsGrpcConverterV1.toInvitation(response.getInvitation())
                : null;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async activateInvitations(correlationId: string, email: string, userId: string): Promise<InvitationV1[]> {

        let request = new messages.InvitationActivateRequest();
        request.setEmail(email);
        request.setUserId(userId);
    
        let timing = this.instrument(correlationId, 'invitations.activate_invitations');

        try {
            let response = await this.call<any>('activate_invitations', correlationId, request);
            if (response.error != null)
                throw InvitationsGrpcConverterV1.toError(response.error);

            timing.endTiming();
            return response
                ? InvitationsGrpcConverterV1.toInvitationList(response.getInvitations())
                : null;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async approveInvitation(correlationId: string, invitationId: string, role: string): Promise<InvitationV1> {

        let request = new messages.InvitationApproveRequest();
        request.setInvitationId(invitationId);
        request.setRole(role);
    
        let timing = this.instrument(correlationId, 'invitations.approve_invitation');

        try {
            let response = await this.call<any>('approve_invitation', correlationId, request);
            if (response.error != null)
                throw InvitationsGrpcConverterV1.toError(response.error);

            timing.endTiming();
            return response
                ? InvitationsGrpcConverterV1.toInvitation(response.getInvitation())
                : null;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async denyInvitation(correlationId: string, invitationId: string): Promise<InvitationV1> {

        let request = new messages.InvitationIdRequest();
        request.setInvitationId(invitationId);
    
        let timing = this.instrument(correlationId, 'invitations.deny_invitation');

        try {
            let response = await this.call<any>('deny_invitation', correlationId, request);
            if (response.error != null)
                throw InvitationsGrpcConverterV1.toError(response.error);

            timing.endTiming();
            return response
                ? InvitationsGrpcConverterV1.toInvitation(response.getInvitation())
                : null;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }
    
    public async resendInvitation(correlationId: string, invitationId: string): Promise<InvitationV1> {

        let request = new messages.InvitationIdRequest();
        request.setInvitationId(invitationId);
    
        let timing = this.instrument(correlationId, 'invitations.resend_invitation');

        try {
            let response = await this.call<any>('resend_invitation', correlationId, request);
            if (response.error != null)
                throw InvitationsGrpcConverterV1.toError(response.error);

            timing.endTiming();
            return response
                ? InvitationsGrpcConverterV1.toInvitation(response.getInvitation())
                : null;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async notifyInvitation(correlationId: string, invitation: InvitationV1): Promise<void> {
        let invitationObj = InvitationsGrpcConverterV1.fromInvitation(invitation);

        let request = new messages.InvitationObjectRequest();
        request.setInvitation(invitationObj);

        let timing = this.instrument(correlationId, 'invitations.notify_invitation');

        try {
            let response = await this.call<any>('notify_invitation', correlationId, request);
            if (response.error != null)
                throw InvitationsGrpcConverterV1.toError(response.error);
            timing.endTiming();
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }
}
