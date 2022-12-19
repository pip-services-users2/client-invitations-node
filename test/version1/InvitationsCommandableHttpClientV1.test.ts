import { Descriptor } from 'pip-services3-commons-nodex';
import { ConfigParams } from 'pip-services3-commons-nodex';
import { References } from 'pip-services3-commons-nodex';
import { ConsoleLogger } from 'pip-services3-components-nodex';

import { EmailNullClientV1 } from 'client-email-node';
import { RolesNullClientV1 } from 'client-roles-node';

import { InvitationsMemoryPersistence } from 'service-invitations-node';
import { InvitationsController } from 'service-invitations-node';
import { InvitationsCommandableHttpServiceV1 } from 'service-invitations-node';

import { InvitationsCommandableHttpClientV1 } from '../../src/version1/InvitationsCommandableHttpClientV1';
import { InvitationsClientFixtureV1 } from './InvitationsClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('InvitationsCommandableClientV1', ()=> {
    let service: InvitationsCommandableHttpServiceV1;
    let client: InvitationsCommandableHttpClientV1;
    let fixture: InvitationsClientFixtureV1;

    suiteSetup(async () => {
        let logger = new ConsoleLogger();
        let persistence = new InvitationsMemoryPersistence();
        let controller = new InvitationsController();

        service = new InvitationsCommandableHttpServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('service-email', 'client', 'null', 'default', '1.0'), new EmailNullClientV1(),
            new Descriptor('service-roles', 'client', 'null', 'default', '1.0'), new RolesNullClientV1(),
            new Descriptor('service-invitations', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('service-invitations', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('service-invitations', 'service', 'commandable-http', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new InvitationsCommandableHttpClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

        fixture = new InvitationsClientFixtureV1(client);

        await service.open(null);
        await client.open(null);
    });
    
    suiteTeardown(async () => {
        await client.close(null);
        await service.close(null);
    });

    test('CRUD Operations', async () => {
        await fixture.testCrudOperations();
    });

    test('Notify Invitation', async () => {
        await fixture.testNotifyInvitation();
    });
    
});
