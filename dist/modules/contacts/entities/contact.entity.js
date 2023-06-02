"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contact = void 0;
const crypto_1 = require("crypto");
class Contact {
    constructor() {
        this.id = (0, crypto_1.randomUUID)();
    }
}
exports.Contact = Contact;
//# sourceMappingURL=contact.entity.js.map