const assert = require('chai').assert;

import { PagingParams } from 'pip-services3-commons-nodex';

import { InvitationV1 } from '../../src/version1/InvitationV1';
import { IInvitationsClientV1 } from '../../src/version1/IInvitationsClientV1';

let INVITATION1: InvitationV1 = {
    id: '1',
    action: 'activate',
    org_id: '1',
    role: 'manager',
    create_time: new Date(),
    creator_id: '1',
    invitee_email: 'test@somewhere.com'
};
let INVITATION2: InvitationV1 = {
    id: '2',
    action: 'activate',
    org_id: '1',
    create_time: new Date(),
    creator_id: '1',
    invitee_email: 'test2@somewhere.com'
};
let INVITATION3: InvitationV1 = {
    id: '4',
    action: 'approve',
    org_id: '1',
    create_time: new Date(),
    creator_id: '1',
    invitee_email: 'test2@somewhere.com'
};

export class InvitationsClientFixtureV1 {
    private _client: IInvitationsClientV1;
    
    constructor(client: IInvitationsClientV1) {
        this._client = client;
    }
        
    public async testCrudOperations() {
        let invitation1, invitation2;

        // Create one invitation
        invitation1 = await this._client.createInvitation(null, INVITATION1);

        assert.isObject(invitation1);
        assert.equal(invitation1.creator_id, INVITATION1.creator_id);
        assert.equal(invitation1.org_id, INVITATION1.org_id);
        assert.equal(invitation1.invitee_email, INVITATION1.invitee_email);

        // Create another invitation
        invitation2 = await this._client.createInvitation(null, INVITATION2);

        assert.isObject(invitation2);
        assert.equal(invitation2.creator_id, INVITATION2.creator_id);
        assert.equal(invitation2.org_id, INVITATION2.org_id);
        assert.equal(invitation2.invitee_email, INVITATION2.invitee_email);

        // Get all invitations
        let page = await this._client.getInvitations(null, null, new PagingParams(0, 5, false));

        assert.isObject(page);
        assert.isTrue(page.data.length >= 2);

        // Delete invitation
        await this._client.deleteInvitationById(null, invitation1.id);

        // Try to get delete invitation
        let invitation = await this._client.getInvitationById(null, invitation1.id);

        assert.isNull(invitation || null);
    }

    public async testNotifyInvitation() {
        await this._client.notifyInvitation(
            null,
            INVITATION3
        );
    }    
}
