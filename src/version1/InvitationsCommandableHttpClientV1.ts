import { ConfigParams } from 'pip-services3-commons-nodex';
import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { CommandableHttpClient } from 'pip-services3-rpc-nodex';

import { InvitationV1 } from './InvitationV1';
import { IInvitationsClientV1 } from './IInvitationsClientV1';

export class InvitationsCommandableHttpClientV1 extends CommandableHttpClient implements IInvitationsClientV1 {       
    
    constructor(config?: any) {
        super('v1/invitations');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }
                
    public async getInvitations(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<InvitationV1>> {
        return await this.callCommand(
            'get_invitations',
            correlationId,
            {
                filter: filter,
                paging: paging
            }
        );
    }

    public async getInvitationById(correlationId: string, invitationId: string): Promise<InvitationV1> {
        return await this.callCommand(
            'get_invitation_by_id',
            correlationId,
            {
                invitation_id: invitationId
            }
        ); 
    }

    public async createInvitation(correlationId: string, invitation: InvitationV1): Promise<InvitationV1> {
        return await this.callCommand(
            'create_invitation',
            correlationId,
            {
                invitation: invitation
            }
        );
    }

    public async deleteInvitationById(correlationId: string, invitationId: string): Promise<InvitationV1> {
        return await this.callCommand(
            'delete_invitation_by_id',
            correlationId,
            {
                invitation_id: invitationId
            }
        );
    }

    public async activateInvitations(correlationId: string, email: string, userId: string): Promise<InvitationV1[]> {
        return await this.callCommand(
            'activate_invitations',
            correlationId,
            {
                email: email,
                user_id: userId
            }
        );
    }

    public async approveInvitation(correlationId: string, invitationId: string, role: string): Promise<InvitationV1> {
        return await this.callCommand(
            'approve_invitation',
            correlationId,
            {
                invitation_id: invitationId,
                role: role
            }
        );
    }

    public async denyInvitation(correlationId: string, invitationId: string): Promise<InvitationV1> {
        return await this.callCommand(
            'deny_invitation',
            correlationId,
            {
                invitation_id: invitationId
            }
        );
    }
    
    public async resendInvitation(correlationId: string, invitationId: string): Promise<InvitationV1> {
        return await this.callCommand(
            'resend_invitation',
            correlationId,
            {
                invitation_id: invitationId
            }
        );
    }

    public async notifyInvitation(correlationId: string, invitation: InvitationV1): Promise<void> {
        
        await this.callCommand(
            'notify_invitation',
            correlationId,
            {
                invitation: invitation
            }
        );
    }
    
}
