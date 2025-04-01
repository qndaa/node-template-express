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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const database_1 = require("./config/database");
const logger_1 = require("./util/logger");
const PORT = process.env.PORT || 3000;
let server;
(function () {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield database_1.AppDataSource.initialize();
            logger_1.logger.info("Database connection initialized");
            server = app_1.default.listen(PORT, () => {
                logger_1.logger.info(`Server is running on port ${PORT}`);
            });
        }
        catch (error) {
            logger_1.logger.error("Error initializing the server:", error);
            process.exit(1);
        }
    });
})();
function gracefulShutdown() {
    logger_1.logger.info("Graceful shutdown");
    if (server) {
        server.close(() => {
            logger_1.logger.info("Server closed");
        });
    }
    database_1.AppDataSource.destroy()
        .then(() => logger_1.logger.info("Database connection closed"))
        .catch((err) => logger_1.logger.error("Error closing database connection:", err))
        .finally(() => process.exit(0)); // Ensure process exits
}
process.on("SIGINT", gracefulShutdown);
process.on("SIGTERM", gracefulShutdown);
//# sourceMappingURL=server.js.map