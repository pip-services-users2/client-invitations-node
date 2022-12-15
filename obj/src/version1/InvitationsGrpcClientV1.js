"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvitationsGrpcClientV1 = void 0;
const services = require('../../../src/protos/invitations_v1_grpc_pb');
const messages = require('../../../src/protos/invitations_v1_pb');
const pip_services3_grpc_nodex_1 = require("pip-services3-grpc-nodex");
const InvitationsGrpcConverterV1_1 = require("./InvitationsGrpcConverterV1");
class InvitationsGrpcClientV1 extends pip_services3_grpc_nodex_1.GrpcClient {
    constructor() {
        super(services.InvitationsClient);
    }
    getInvitations(correlationId, filter, paging) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = new messages.InvitationPageRequest();
            InvitationsGrpcConverterV1_1.InvitationsGrpcConverterV1.setMap(request.getFilterMap(), filter);
            request.setPaging(InvitationsGrpcConverterV1_1.InvitationsGrpcConverterV1.fromPagingParams(paging));
            let timing = this.instrument(correlationId, 'invitations.get_invitations');
            try {
                let response = yield this.call('get_invitations', correlationId, request);
                if (response.error != null)
                    throw InvitationsGrpcConverterV1_1.InvitationsGrpcConverterV1.toError(response.error);
                timing.endTiming();
                return response ? InvitationsGrpcConverterV1_1.InvitationsGrpcConverterV1.toInvitationPage(response.getPage()) : null;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    getInvitationById(correlationId, invitationId) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = new messages.InvitationIdRequest();
            request.setInvitationId(invitationId);
            let timing = this.instrument(correlationId, 'invitations.get_invitation_by_id');
            try {
                let response = yield this.call('get_invitation_by_id', correlationId, request);
                if (response.error != null)
                    throw InvitationsGrpcConverterV1_1.InvitationsGrpcConverterV1.toError(response.error);
                timing.endTiming();
                return response
                    ? InvitationsGrpcConverterV1_1.InvitationsGrpcConverterV1.toInvitation(response.getInvitation())
                    : null;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    createInvitation(correlationId, invitation) {
        return __awaiter(this, void 0, void 0, function* () {
            let invitationObj = InvitationsGrpcConverterV1_1.InvitationsGrpcConverterV1.fromInvitation(invitation);
            let request = new messages.InvitationObjectRequest();
            request.setInvitation(invitationObj);
            let timing = this.instrument(correlationId, 'invitations.create_invitation');
            try {
                let response = yield this.call('create_invitation', correlationId, request);
                if (response.error != null)
                    throw InvitationsGrpcConverterV1_1.InvitationsGrpcConverterV1.toError(response.error);
                timing.endTiming();
                return response
                    ? InvitationsGrpcConverterV1_1.InvitationsGrpcConverterV1.toInvitation(response.getInvitation())
                    : null;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    deleteInvitationById(correlationId, invitationId) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = new messages.InvitationIdRequest();
            request.setInvitationId(invitationId);
            let timing = this.instrument(correlationId, 'invitations.delete_invitation_by_id');
            try {
                let response = yield this.call('delete_invitation_by_id', correlationId, request);
                if (response.error != null)
                    throw InvitationsGrpcConverterV1_1.InvitationsGrpcConverterV1.toError(response.error);
                timing.endTiming();
                return response
                    ? InvitationsGrpcConverterV1_1.InvitationsGrpcConverterV1.toInvitation(response.getInvitation())
                    : null;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    activateInvitations(correlationId, email, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = new messages.InvitationActivateRequest();
            request.setEmail(email);
            request.setUserId(userId);
            let timing = this.instrument(correlationId, 'invitations.activate_invitations');
            try {
                let response = yield this.call('activate_invitations', correlationId, request);
                if (response.error != null)
                    throw InvitationsGrpcConverterV1_1.InvitationsGrpcConverterV1.toError(response.error);
                timing.endTiming();
                return response
                    ? InvitationsGrpcConverterV1_1.InvitationsGrpcConverterV1.toInvitationList(response.getInvitations())
                    : null;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    approveInvitation(correlationId, invitationId, role) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = new messages.InvitationApproveRequest();
            request.setInvitationId(invitationId);
            request.setRole(role);
            let timing = this.instrument(correlationId, 'invitations.approve_invitation');
            try {
                let response = yield this.call('approve_invitation', correlationId, request);
                if (response.error != null)
                    throw InvitationsGrpcConverterV1_1.InvitationsGrpcConverterV1.toError(response.error);
                timing.endTiming();
                return response
                    ? InvitationsGrpcConverterV1_1.InvitationsGrpcConverterV1.toInvitation(response.getInvitation())
                    : null;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    denyInvitation(correlationId, invitationId) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = new messages.InvitationIdRequest();
            request.setInvitationId(invitationId);
            let timing = this.instrument(correlationId, 'invitations.deny_invitation');
            try {
                let response = yield this.call('deny_invitation', correlationId, request);
                if (response.error != null)
                    throw InvitationsGrpcConverterV1_1.InvitationsGrpcConverterV1.toError(response.error);
                timing.endTiming();
                return response
                    ? InvitationsGrpcConverterV1_1.InvitationsGrpcConverterV1.toInvitation(response.getInvitation())
                    : null;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    resendInvitation(correlationId, invitationId) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = new messages.InvitationIdRequest();
            request.setInvitationId(invitationId);
            let timing = this.instrument(correlationId, 'invitations.resend_invitation');
            try {
                let response = yield this.call('resend_invitation', correlationId, request);
                if (response.error != null)
                    throw InvitationsGrpcConverterV1_1.InvitationsGrpcConverterV1.toError(response.error);
                timing.endTiming();
                return response
                    ? InvitationsGrpcConverterV1_1.InvitationsGrpcConverterV1.toInvitation(response.getInvitation())
                    : null;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    notifyInvitation(correlationId, invitation) {
        return __awaiter(this, void 0, void 0, function* () {
            let invitationObj = InvitationsGrpcConverterV1_1.InvitationsGrpcConverterV1.fromInvitation(invitation);
            let request = new messages.InvitationObjectRequest();
            request.setInvitation(invitationObj);
            let timing = this.instrument(correlationId, 'invitations.notify_invitation');
            try {
                let response = yield this.call('notify_invitation', correlationId, request);
                if (response.error != null)
                    throw InvitationsGrpcConverterV1_1.InvitationsGrpcConverterV1.toError(response.error);
                timing.endTiming();
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
}
exports.InvitationsGrpcClientV1 = InvitationsGrpcClientV1;
//# sourceMappingURL=InvitationsGrpcClientV1.js.map