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
// Import the function from LicenseMetric.ts
const LicenseMetric_1 = require("./LicenseMetric");
// Example usage of getBusFactor in RetrieveMetrics.ts
function retrieveMetrics() {
    return __awaiter(this, void 0, void 0, function* () {
        //Example repo
        const owner = 'KSXGitHub';
        const repo = 'GPL-3.0';
        //console.log(`Calculating bus factor for ${owner}/${repo}...`);
        //Call getBusFactor to calculate and log the bus factor
        // await getBusFactor(owner, repo);
        // await calculateResponsiveMaintainer(owner, repo);
        // console.log(`Calculating Correctness for ${owner}/${repo}...`);
        // await evaluateCorrectness(owner, repo);
        console.log(`Figuring out License compatibility for ${owner}/${repo}... `);
        yield (0, LicenseMetric_1.checkLicenseCompatibility)(owner, repo);
    });
}
retrieveMetrics();
//# sourceMappingURL=RetrieveMetrics.js.map