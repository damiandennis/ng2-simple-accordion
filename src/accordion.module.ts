import {NgModule} from "@angular/core";
import {AccordionDirective} from "./accordion.directive";
import {CommonModule} from "@angular/common";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        AccordionDirective
    ],
    exports: [
        AccordionDirective
    ]
})
export class AccordionModule {}