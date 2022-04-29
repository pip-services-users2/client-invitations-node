import { ConfigParams } from 'pip-services3-commons-nodex';
import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { CommandableHttpClient } from 'pip-services3-rpc-nodex';

import { InvitationV1 } from './InvitationV1';
import { IInvitationsClientV1 } from './IInvitationsClientV1';

export class InvitationsHttpClientV1 extends CommandableHttpClient implements IInvitationsClientV1 {       
    
    constructor(config?: any) {
        super('v1/invitations');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }
                
    public async getInvitations(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<InvitationV1>> {
        let timing = this.instrument(correlationId, 'invitations.get_invitations');

        try {
            return await this.callCommand(
                'get_invitations',
                correlationId,
                {
                    filter: filter,
                    paging: paging
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async getInvitationById(correlationId: string, invitationId: string): Promise<InvitationV1> {
        let timing = this.instrument(correlationId, 'invitations.get_invitation_by_id');

        try {
            return await this.callCommand(
                'get_invitation_by_id',
                correlationId,
                {
                    invitation_id: invitationId
                }
            );    
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async createInvitation(correlationId: string, invitation: InvitationV1): Promise<InvitationV1> {
        let timing = this.instrument(correlationId, 'invitations.create_invitation');

        try {
            return await this.callCommand(
                'create_invitation',
                correlationId,
                {
                    invitation: invitation
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async deleteInvitationById(correlationId: string, invitationId: string): Promise<InvitationV1> {
        let timing = this.instrument(correlationId, 'invitations.delete_invitation_by_id');

        try {
            return await this.callCommand(
                'delete_invitation_by_id',
                correlationId,
                {
                    invitation_id: invitationId
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async activateInvitations(correlationId: string, email: string, userId: string): Promise<InvitationV1[]> {
        let timing = this.instrument(correlationId, 'invitations.activate_invitations');

        try {
            return await this.callCommand(
                'activate_invitations',
                correlationId,
                {
                    email: email,
                    user_id: userId
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async approveInvitation(correlationId: string, invitationId: string, role: string): Promise<InvitationV1> {
        let timing = this.instrument(correlationId, 'invitations.approve_invitation');

        try {
            return await this.callCommand(
                'approve_invitation',
                correlationId,
                {
                    invitation_id: invitationId,
                    role: role
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async denyInvitation(correlationId: string, invitationId: string): Promise<InvitationV1> {
        let timing = this.instrument(correlationId, 'invitations.deny_invitation');

        try {
            return await this.callCommand(
                'deny_invitation',
                correlationId,
                {
                    invitation_id: invitationId
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }
    
    public async resendInvitation(correlationId: string, invitationId: string): Promise<InvitationV1> {
        let timing = this.instrument(correlationId, 'invitations.resend_invitation');

        try {
            return await this.callCommand(
                'resend_invitation',
                correlationId,
                {
                    invitation_id: invitationId
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async notifyInvitation(correlationId: string, invitation: InvitationV1): Promise<void> {
        
        let timing = this.instrument(correlationId, 'invitations.notify_invitation');

        try {
            await this.callCommand(
                'notify_invitation',
                correlationId,
                {
                    invitation: invitation
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }
    
}
