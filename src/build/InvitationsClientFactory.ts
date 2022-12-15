import { Descriptor } from 'pip-services3-commons-nodex';
import { Factory } from 'pip-services3-components-nodex';

import { InvitationsNullClientV1 } from '../version1/InvitationsNullClientV1';
import { InvitationsDirectClientV1 } from '../version1/InvitationsDirectClientV1';
import { InvitationsCommandableHttpClientV1 } from '../version1/InvitationsCommandableHttpClientV1';
import { InvitationsCommandableLambdaClientV1 } from '../version1/InvitationsCommandableLambdaClientV1';
import { InvitationsCommandableGrpcClientV1 } from '../version1/InvitationsCommandableGrpcClientV1';
import { InvitationsGrpcClientV1 } from '../version1/InvitationsGrpcClientV1';

export class InvitationsClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('service-invitations', 'factory', 'default', 'default', '1.0');
	public static NullClientV1Descriptor = new Descriptor('service-invitations', 'client', 'null', '*', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('service-invitations', 'client', 'direct', '*', '1.0');
	public static CmdHttpClientV1Descriptor = new Descriptor('service-invitations', 'client', 'commandable-http', '*', '1.0');
	public static CmdLambdaClientV1Descriptor = new Descriptor('service-invitations', 'client', 'commandable-lambda', '*', '1.0');
	public static CommandableGrpcClientV1Descriptor = new Descriptor('service-invitations', 'client', 'commandable-grpc', '*', '1.0');
	public static GrpcClientV1Descriptor = new Descriptor('service-invitations', 'client', 'grpc', '*', '1.0');
	
	constructor() {
		super();

		this.registerAsType(InvitationsClientFactory.NullClientV1Descriptor, InvitationsNullClientV1);
		this.registerAsType(InvitationsClientFactory.DirectClientV1Descriptor, InvitationsDirectClientV1);
		this.registerAsType(InvitationsClientFactory.CmdHttpClientV1Descriptor, InvitationsCommandableHttpClientV1);
		this.registerAsType(InvitationsClientFactory.CmdLambdaClientV1Descriptor, InvitationsCommandableLambdaClientV1);
		this.registerAsType(InvitationsClientFactory.CommandableGrpcClientV1Descriptor, InvitationsCommandableGrpcClientV1);
		this.registerAsType(InvitationsClientFactory.GrpcClientV1Descriptor, InvitationsGrpcClientV1);
	}
	
}
