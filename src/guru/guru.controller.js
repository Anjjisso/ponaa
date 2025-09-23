"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuruController = void 0;
const common_1 = require("@nestjs/common");
const guru_service_1 = require("./guru.service");
const create_guru_dto_1 = require("./dto/create-guru.dto");
const update_guru_dto_1 = require("./dto/update-guru.dto");
const roles_guard_1 = require("/laragon/www/PONA/poona/src/auth/roles.guard");
const passport_1 = require("@nestjs/passport");
let GuruController = class GuruController {
    guruService;
    constructor(guruService) {
        this.guruService = guruService;
    }
    create(createGuruDto) {
        return this.guruService.create(createGuruDto);
    }
    findAll() {
        return this.guruService.findAll();
    }
    findOne(id_guru) {
        return this.guruService.findOne(+id_guru);
    }
    update(id_guru, updateGuruDto) {
        return this.guruService.update(+id_guru, updateGuruDto);
    }
    remove(id_guru) {
        return this.guruService.remove(+id_guru);
    }
};
exports.GuruController = GuruController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_guru_dto_1.CreateGuruDto]),
    __metadata("design:returntype", void 0)
], GuruController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GuruController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id_guru'),
    __param(0, (0, common_1.Param)('id_guru')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GuruController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id_guru'),
    __param(0, (0, common_1.Param)('id_guru')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_guru_dto_1.UpdateGuruDto]),
    __metadata("design:returntype", void 0)
], GuruController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id_guru'),
    __param(0, (0, common_1.Param)('id_guru')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GuruController.prototype, "remove", null);
exports.GuruController = GuruController = __decorate([
    (0, common_1.Controller)('guru'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, roles_guard_1.Roles)('ADMIN'),
    __metadata("design:paramtypes", [guru_service_1.GuruService])
], GuruController);
//# sourceMappingURL=guru.controller.js.map