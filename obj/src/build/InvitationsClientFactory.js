"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvitationsClientFactory = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_components_nodex_1 = require("pip-services3-components-nodex");
const InvitationsNullClientV1_1 = require("../version1/InvitationsNullClientV1");
const InvitationsDirectClientV1_1 = require("../version1/InvitationsDirectClientV1");
const InvitationsHttpClientV1_1 = require("../version1/InvitationsHttpClientV1");
const InvitationsLambdaClientV1_1 = require("../version1/InvitationsLambdaClientV1");
const InvitationsCommandableGrpcClientV1_1 = require("../version1/InvitationsCommandableGrpcClientV1");
const InvitationsGrpcClientV1_1 = require("../version1/InvitationsGrpcClientV1");
class InvitationsClientFactory extends pip_services3_components_nodex_1.Factory {
    constructor() {
        super();
        this.registerAsType(InvitationsClientFactory.NullClientV1Descriptor, InvitationsNullClientV1_1.InvitationsNullClientV1);
        this.registerAsType(InvitationsClientFactory.DirectClientV1Descriptor, InvitationsDirectClientV1_1.InvitationsDirectClientV1);
        this.registerAsType(InvitationsClientFactory.HttpClientV1Descriptor, InvitationsHttpClientV1_1.InvitationsHttpClientV1);
        this.registerAsType(InvitationsClientFactory.LambdaClientV1Descriptor, InvitationsLambdaClientV1_1.InvitationsLambdaClientV1);
        this.registerAsType(InvitationsClientFactory.CommandableGrpcClientV1Descriptor, InvitationsCommandableGrpcClientV1_1.InvitationsCommandableGrpcClientV1);
        this.registerAsType(InvitationsClientFactory.GrpcClientV1Descriptor, InvitationsGrpcClientV1_1.InvitationsGrpcClientV1);
    }
}
exports.InvitationsClientFactory = InvitationsClientFactory;
InvitationsClientFactory.Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-invitations', 'factory', 'default', 'default', '1.0');
InvitationsClientFactory.NullClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-invitations', 'client', 'null', '*', '1.0');
InvitationsClientFactory.DirectClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-invitations', 'client', 'direct', '*', '1.0');
InvitationsClientFactory.HttpClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-invitations', 'client', 'http', '*', '1.0');
InvitationsClientFactory.LambdaClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-invitations', 'client', 'lambda', '*', '1.0');
InvitationsClientFactory.CommandableGrpcClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-invitations', 'client', 'commandable-grpc', '*', '1.0');
InvitationsClientFactory.GrpcClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-invitations', 'client', 'grpc', '*', '1.0');
//# sourceMappingURL=InvitationsClientFactory.js.map