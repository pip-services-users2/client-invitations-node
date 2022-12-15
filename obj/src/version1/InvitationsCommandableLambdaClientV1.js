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
exports.InvitationsCommandableLambdaClientV1 = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_aws_nodex_1 = require("pip-services3-aws-nodex");
class InvitationsCommandableLambdaClientV1 extends pip_services3_aws_nodex_1.CommandableLambdaClient {
    constructor(config) {
        super('invitations');
        if (config != null)
            this.configure(pip_services3_commons_nodex_1.ConfigParams.fromValue(config));
    }
    getInvitations(correlationId, filter, paging) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.callCommand('get_invitations', correlationId, {
                filter: filter,
                paging: paging
            });
        });
    }
    getInvitationById(correlationId, invitationId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.callCommand('get_invitation_by_id', correlationId, {
                invitation_id: invitationId
            });
        });
    }
    createInvitation(correlationId, invitation) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.callCommand('create_invitation', correlationId, {
                invitation: invitation
            });
        });
    }
    deleteInvitationById(correlationId, invitationId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.callCommand('delete_invitation_by_id', correlationId, {
                invitation_id: invitationId
            });
        });
    }
    activateInvitations(correlationId, email, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.callCommand('activate_invitations', correlationId, {
                email: email,
                user_id: userId
            });
        });
    }
    approveInvitation(correlationId, invitationId, role) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.callCommand('approved_invitation', correlationId, {
                invitation_id: invitationId,
                role: role
            });
        });
    }
    denyInvitation(correlationId, invitationId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.callCommand('deny_invitation', correlationId, {
                invitation_id: invitationId
            });
        });
    }
    resendInvitation(correlationId, invitationId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.callCommand('resend_invitation', correlationId, {
                invitation_id: invitationId
            });
        });
    }
    notifyInvitation(correlationId, invitation) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.callCommand('notify_invitation', correlationId, {
                invitation: invitation
            });
        });
    }
}
exports.InvitationsCommandableLambdaClientV1 = InvitationsCommandableLambdaClientV1;
//# sourceMappingURL=InvitationsCommandableLambdaClientV1.js.map