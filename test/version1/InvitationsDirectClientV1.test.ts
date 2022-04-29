import { Descriptor } from 'pip-services3-commons-nodex';
import { References } from 'pip-services3-commons-nodex';
import { ConsoleLogger } from 'pip-services3-components-nodex';

import { EmailNullClientV1 } from 'client-email-node';
import { RolesNullClientV1 } from 'client-roles-node';

import { InvitationsMemoryPersistence } from 'service-invitations-node';
import { InvitationsController } from 'service-invitations-node';
import { InvitationsDirectClientV1 } from '../../src/version1/InvitationsDirectClientV1';
import { InvitationsClientFixtureV1 } from './InvitationsClientFixtureV1';

suite('InvitationsDirectClientV1', ()=> {
    let client: InvitationsDirectClientV1;
    let fixture: InvitationsClientFixtureV1;

    suiteSetup(async () => {
        let logger = new ConsoleLogger();
        let persistence = new InvitationsMemoryPersistence();
        let controller = new InvitationsController();

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('service-email', 'client', 'null', 'default', '1.0'), new EmailNullClientV1(),
            new Descriptor('service-roles', 'client', 'null', 'default', '1.0'), new RolesNullClientV1(),
            new Descriptor('service-invitations', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('service-invitations', 'controller', 'default', 'default', '1.0'), controller,
        );
        controller.setReferences(references);

        client = new InvitationsDirectClientV1();
        client.setReferences(references);

        fixture = new InvitationsClientFixtureV1(client);

        await client.open(null);
    });
    
    suiteTeardown(async () => {
        await client.close(null);
    });

    test('CRUD Operations', async () => {
        await fixture.testCrudOperations();
    });

    test('Notify Invitation', async () => {
        await fixture.testNotifyInvitation();
    });
    
});
