"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTeamSquads = void 0;
const axios_1 = require("../../utils/axios");
const text_1 = __importDefault(require("../../utils/contentModifiers/text"));
const store_1 = require("../../utils/store");
const getTeamSquads = async () => {
    try {
        const response = await axios_1.apiInstance.get(`/v3/squads?owner_id=${await store_1.store.team.get()}`, {
            headers: {
                Authorization: `Bearer ${await store_1.store.accessToken.get()}`,
            },
        });
        if (response.status !== 200) {
            throw new Error(`Failed to get squads.Status: ${response.status}, Message: ${response.data?.message || "No additional details available."}`);
        }
        return (0, text_1.default)(`Squads found successfully. Squads:\n\n${JSON.stringify(response.data.data, null, 2)}`);
    }
    catch (error) {
        console.error(error);
        return (0, text_1.default)(error instanceof Error ? error.message : "Something went wrong.");
    }
};
exports.getTeamSquads = getTeamSquads;
