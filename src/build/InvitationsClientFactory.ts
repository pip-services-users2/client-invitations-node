import { Descriptor } from 'pip-services3-commons-nodex';
import { Factory } from 'pip-services3-components-nodex';

import { InvitationsNullClientV1 } from '../version1/InvitationsNullClientV1';
import { InvitationsDirectClientV1 } from '../version1/InvitationsDirectClientV1';
import { InvitationsHttpClientV1 } from '../version1/InvitationsHttpClientV1';
import { InvitationsLambdaClientV1 } from '../version1/InvitationsLambdaClientV1';
import { InvitationsCommandableGrpcClientV1 } from '../version1/InvitationsCommandableGrpcClientV1';
import { InvitationsGrpcClientV1 } from '../version1/InvitationsGrpcClientV1';

export class InvitationsClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('service-invitations', 'factory', 'default', 'default', '1.0');
	public static NullClientV1Descriptor = new Descriptor('service-invitations', 'client', 'null', '*', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('service-invitations', 'client', 'direct', '*', '1.0');
	public static HttpClientV1Descriptor = new Descriptor('service-invitations', 'client', 'http', '*', '1.0');
	public static LambdaClientV1Descriptor = new Descriptor('service-invitations', 'client', 'lambda', '*', '1.0');
	public static CommandableGrpcClientV1Descriptor = new Descriptor('service-invitations', 'client', 'commandable-grpc', '*', '1.0');
	public static GrpcClientV1Descriptor = new Descriptor('service-invitations', 'client', 'grpc', '*', '1.0');
	
	constructor() {
		super();

		this.registerAsType(InvitationsClientFactory.NullClientV1Descriptor, InvitationsNullClientV1);
		this.registerAsType(InvitationsClientFactory.DirectClientV1Descriptor, InvitationsDirectClientV1);
		this.registerAsType(InvitationsClientFactory.HttpClientV1Descriptor, InvitationsHttpClientV1);
		this.registerAsType(InvitationsClientFactory.LambdaClientV1Descriptor, InvitationsLambdaClientV1);
		this.registerAsType(InvitationsClientFactory.CommandableGrpcClientV1Descriptor, InvitationsCommandableGrpcClientV1);
		this.registerAsType(InvitationsClientFactory.GrpcClientV1Descriptor, InvitationsGrpcClientV1);
	}
	
}
