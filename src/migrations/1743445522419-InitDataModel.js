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
exports.InitDataModel1743445522419 = void 0;
class InitDataModel1743445522419 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield queryRunner.query(`
                CREATE TABLE IF NOT EXISTS "user"
                (`
                + `"id" SERIAL PRIMARY KEY,`
                + `"name" VARCHAR(255) NOT NULL,`
                + `"email" VARCHAR(255) NOT NULL,`
                + `"created_at" TIMESTAMP DEFAULT NOW(),`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield queryRunner.query(`
        DROP TABLE IF EXISTS "user";
		`);
        });
    }
}
exports.InitDataModel1743445522419 = InitDataModel1743445522419;
//# sourceMappingURL=1743445522419-InitDataModel.js.map