import { Descriptor } from 'pip-services3-commons-nodex';
import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams} from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { DirectClient } from 'pip-services3-rpc-nodex';

import { IInvitationsClientV1 } from './IInvitationsClientV1';
//import { IInvitationsController } from 'service-invitations-node';
import { InvitationV1 } from './InvitationV1';

export class InvitationsDirectClientV1 extends DirectClient<any> implements IInvitationsClientV1 {
            
    public constructor() {
        super();
        this._dependencyResolver.put('controller', new Descriptor("service-invitations", "controller", "*", "*", "*"))
    }

    public async getInvitations(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<InvitationV1>> {
        let timing = this.instrument(correlationId, 'invitations.get_invitations');
        
        try {
            let res = await this._controller.getInvitations(correlationId, filter, paging);
            timing.endTiming();
            return res;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async getInvitationById(correlationId: string, invitationId: string): Promise<InvitationV1> {        
        let timing = this.instrument(correlationId, 'invitations.get_invitation_by_id');

        try {
            let res = await this._controller.getInvitationById(correlationId, invitationId);
            timing.endTiming();
            return res;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async createInvitation(correlationId: string, invitation: InvitationV1): Promise<InvitationV1> {
        let timing = this.instrument(correlationId, 'invitations.create_invitation');
        
        try {
            let res = await this._controller.createInvitation(correlationId, invitation);
            timing.endTiming();
            return res;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async deleteInvitationById(correlationId: string, invitationId: string): Promise<InvitationV1> {
        let timing = this.instrument(correlationId, 'invitations.delete_invitation_by_id');
        
        try {
            let res = await this._controller.deleteInvitationById(correlationId, invitationId);
            timing.endTiming();
            return res;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async activateInvitations(correlationId: string, email: string, userId: string): Promise<InvitationV1[]> {
        let timing = this.instrument(correlationId, 'invitations.activate_invitations');
        
        try {
            let res = await this._controller.activateInvitations(correlationId, email, userId);
            timing.endTiming();
            return res;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async approveInvitation(correlationId: string, invitationId: string, role: string): Promise<InvitationV1> {
        let timing = this.instrument(correlationId, 'invitations.approve_invitation');
        
        try {
            let res = await this._controller.approveInvitation(correlationId, invitationId, role);
            timing.endTiming();
            return res;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async denyInvitation(correlationId: string, invitationId: string): Promise<InvitationV1> {
        let timing = this.instrument(correlationId, 'invitations.deny_invitation');
        
        try {
            let res = await this._controller.denyInvitation(correlationId, invitationId);
            timing.endTiming();
            return res;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }
    
    public async resendInvitation(correlationId: string, invitationId: string): Promise<InvitationV1> {
        let timing = this.instrument(correlationId, 'invitations.resend_invitation');
        
        try {
            let res = await this._controller.resendInvitation(correlationId, invitationId);
            timing.endTiming();
            return res;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async notifyInvitation(correlationId: string, invitation: InvitationV1): Promise<void> {
        let timing = this.instrument(correlationId, 'invitations.notify_invitation');
        
        try {
            let res = await this._controller.notifyInvitation(correlationId, invitation);
            timing.endTiming();
            return res;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

}