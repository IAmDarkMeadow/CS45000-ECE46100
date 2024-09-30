"use strict";
/*
 * URLParser.ts
 *
 * Description:
 * This file takes a text file and splits each line as it's own URL. Then it performs an operation on each one
 *
 * Author: Jacob Esparza
 * Date: 9-29-2024
 * Version: 1.0
 *
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.UrlProcessor = void 0;
const fs = __importStar(require("fs"));
class UrlProcessor {
    // Function to read the file, parse URLs, and perform operations
    processUrlsFromFile(filePath, operation) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Read the file content
                const data = fs.readFileSync(filePath, 'utf-8');
                // Split the file content into lines (each line is a URL)
                const urls = data.split('\n').map(line => line.trim()).filter(line => line.length > 0);
                // Perform the provided operation on each URL
                urls.forEach((url, index) => {
                    operation(url, index + 1);
                });
            }
            catch (err) {
            }
        });
    }
}
exports.UrlProcessor = UrlProcessor;
//# sourceMappingURL=URLParser.js.map