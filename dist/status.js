"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const statusPlugin = {
    name: "app/status",
    register: async function (server) {
        server.route({
            // default status endpoint
            method: "GET",
            path: "/",
            handler: (_, h) => h.response({ up: true }).code(200),
            options: {
                auth: false,
            },
        });
    },
};
exports.default = statusPlugin;
//# sourceMappingURL=status.js.map