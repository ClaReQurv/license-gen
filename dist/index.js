"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = generateLicenseKey;
/**
 * Generate license key as per the readme.
 *
 * @param {number} length - the desired length in characters to represent the
 *                  unique license key (sans hyphens).
 * @param {number} pairs - the number of groups the randomised characters are collected into.
 * @return {string} randomised license key
 */
function generateLicenseKey(length, pairs = 4) {
    let result = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i += 1) {
        result += characters[Math.floor(Math.random() * charactersLength)];
    }
    return (result.match(new RegExp(`.{1,${pairs}}`, "g")) || []).join("-");
}
