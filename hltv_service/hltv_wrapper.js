"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hltv_1 = __importDefault(require("hltv"));
// IMPORTANT INFO
// The HLTV data is scraped, not through API. If HLTV changes their format, this could fail and need changes to the HLTV scraper
// Just gonna do this through CLI for now for testing
const method = process.argv[2];
const arg = parseInt(process.argv[3]);
// run this to test for now, should return vitality: node hltv_wrapper.js getTeam 9565
const instance = hltv_1.default.createInstance({});
(async () => {
    let result;
    switch (method) {
        case "getTeam":
            result = await instance.getTeam({ id: arg });
            break;
        default:
            throw new Error(`Unknown method: ${method}`);
    }
    // Simplify or restructure result as needed
    console.log(JSON.stringify(result));
})();
