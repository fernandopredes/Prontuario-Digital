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
const appointments_repository_1 = __importDefault(require("../../../adapters/repositories/appointments.repository"));
class ListExamUseCase {
    constructor(_repository) {
        this._repository = _repository;
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._repository.list();
        });
    }
}
exports.default = new ListExamUseCase(appointments_repository_1.default);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5hcHBvaW50bWVudC51c2VjYXNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2RvbWFpbi91c2VjYXNlcy9hcHBvaW50bWVudHMvbGlzdC5hcHBvaW50bWVudC51c2VjYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRUEscUhBQTJGO0FBRzNGLE1BQU0sZUFBZTtJQUNqQixZQUFvQixXQUFvQztRQUFwQyxnQkFBVyxHQUFYLFdBQVcsQ0FBeUI7SUFDeEQsQ0FBQztJQUNLLE9BQU87O1lBQ1QsT0FBTyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekMsQ0FBQztLQUFBO0NBQ0o7QUFFRCxrQkFBZSxJQUFJLGVBQWUsQ0FDOUIsaUNBQXFCLENBQ3hCLENBQUMifQ==