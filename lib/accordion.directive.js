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
var core_1 = require("@angular/core");
var AccordionDirective = AccordionDirective_1 = (function () {
    function AccordionDirective(elementRef) {
        this.elementRef = elementRef;
        this.isShown = false;
        this.areAnyShown = false;
        this.onInit = new core_1.EventEmitter();
    }
    /**
     * @inheritDoc
     */
    AccordionDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (this.name === undefined) {
            console.error("accordion directive must be assigned a name.");
            return;
        }
        if (AccordionDirective_1.channels[this.name] === undefined) {
            AccordionDirective_1.channels[this.name] = new core_1.EventEmitter();
        }
        AccordionDirective_1.channels[this.name].subscribe(function (value) {
            _this.isShown = value !== false && _this.elementRef.nativeElement.isEqualNode(value);
            _this.areAnyShown = value !== false;
        });
        this.onInit.emit(true);
    };
    /**
     * When item is closed.
     *
     * @param event
     */
    AccordionDirective.prototype.close = function (event) {
        event.preventDefault();
        AccordionDirective_1.channels[this.name].emit(false);
    };
    /**
     * When item is opened.
     *
     * @param event
     */
    AccordionDirective.prototype.open = function (event) {
        event.preventDefault();
        AccordionDirective_1.channels[this.name].emit(this.elementRef.nativeElement);
    };
    return AccordionDirective;
}());
AccordionDirective.elements = {};
AccordionDirective.channels = {};
__decorate([
    core_1.Input("accordion"),
    __metadata("design:type", String)
], AccordionDirective.prototype, "name", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], AccordionDirective.prototype, "onInit", void 0);
AccordionDirective = AccordionDirective_1 = __decorate([
    core_1.Directive({
        selector: "[accordion]",
        exportAs: "accordion"
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], AccordionDirective);
exports.AccordionDirective = AccordionDirective;
var AccordionDirective_1;
//# sourceMappingURL=accordion.directive.js.map