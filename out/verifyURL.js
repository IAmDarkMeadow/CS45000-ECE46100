"use strict";
/*
 * VerifyURL.ts
 *
 * Description:
 * This file will take a NPMJS link, and find a github repo link to return. If it does not find one, then it returns null
 * It does this by first taking in an entire npm URL. It will extract the package name from said URL, and concatenate it to the npm registry URL.
 * Once this has been done, the file will fetch the package data from the npm registry.
 *  It will then check if the repository field exists and points to GitHub.
 * If it exists, it will get the repository URL and convert it to HTTPS format.
 * Finally, the system will return the formatted URL for use in the rest of the program.
 *
 * Author: Logan Kurker
 * Date: 9-29-2024
 * Version: 1.0
 *
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPackageOnGitHub = isPackageOnGitHub;
const axios_1 = __importDefault(require("axios"));
const Logger_1 = __importDefault(require("./Logger"));
function isPackageOnGitHub(packageName) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            //Extract package name from URL
            const regex = /npmjs\.com\/package\/([^\/]+)/;
            const match = packageName.match(regex);
            if (match && match[1]) {
                packageName = match[1];
            } //end if statement
            // Fetch package data from npm registry
            const response = yield axios_1.default.get(`https://registry.npmjs.org/${packageName}`);
            // Check if the repository field exists and points to GitHub
            const repository = response.data.repository;
            // If the repository is an object, use its URL
            if (repository) {
                let repoUrl = null;
                // Check if the repository is a string
                if (typeof repository === 'string') {
                    repoUrl = repository;
                }
                else if (typeof repository === 'object' && repository.url) {
                    repoUrl = repository.url;
                }
                // Ensure the URL is in HTTP format
                if (repoUrl && repoUrl.includes('github.com')) {
                    // Convert SSH URL or other formats to HTTPS format
                    if (repoUrl.startsWith('git+ssh://')) {
                        repoUrl = repoUrl.replace('git+ssh://', 'https://').replace('git@', '').replace('.git', '');
                    }
                    else if (repoUrl.startsWith('git@')) {
                        repoUrl = repoUrl.replace('git@', 'https://').replace(':', '/').replace('.git', '');
                    }
                    else if (repoUrl.startsWith('git+')) {
                        repoUrl = repoUrl.replace('git+', "");
                    }
                    else if (repoUrl.startsWith("https://git+")) {
                        // Replace with "https://"
                        repoUrl = repoUrl.replace("https://git+", "");
                    }
                    else if (!repoUrl.startsWith('http://') && !repoUrl.startsWith('https://')) {
                        repoUrl = `https://${repoUrl}`; // Handle any other cases
                    }
                    if (repoUrl.endsWith(".git")) {
                        repoUrl = repoUrl.replace(".git", "");
                    }
                    return repoUrl; // Return the formatted URL
                }
            }
            return null; // Return null if no repository URL is found
        }
        catch (error) {
            Logger_1.default.info("Something went wrong connecting to the npmjs link " + packageName + " from VerifyURL");
            Logger_1.default.info(error);
            return null; // Return null in case of error
        }
    });
}
//# sourceMappingURL=VerifyURL.js.map