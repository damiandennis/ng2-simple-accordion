import {Directive, ElementRef, OnInit, Input, EventEmitter, Output} from "@angular/core";

@Directive({
    selector: "[accordion]",
    exportAs: "accordion"
})
export class AccordionDirective implements OnInit {

    static elements: {[key: string]: Array<ElementRef>} = {};
    static channels: {[key: string]: EventEmitter<any>} = {};
    @Input("accordion") public name: string;
    protected isShown = false;
    protected areAnyShown = false;
    @Output() public onInit = new EventEmitter();

    constructor(public elementRef: ElementRef) {}

    /**
     * @inheritDoc
     */
    public ngOnInit() {

        if (this.name === undefined) {
            console.error("accordion directive must be assigned a name.");
            return;
        }
        if (AccordionDirective.channels[this.name] === undefined) {
            AccordionDirective.channels[this.name] = new EventEmitter<any>();
        }
        AccordionDirective.channels[this.name].subscribe(
            (value: any) => {
                this.isShown = value !== false && this.elementRef.nativeElement.isEqualNode(value);
                this.areAnyShown = value !== false;
            }
        );
        this.onInit.emit(true);
    }

    /**
     * When item is closed.
     *
     * @param event
     */
    public close(event: Event = null) {
        if (event) {
            event.preventDefault();
        }
        AccordionDirective.channels[this.name].emit(false);
    }

    /**
     * When item is opened.
     *
     * @param event
     */
    public open(event: Event = null) {
        if (event) {
            event.preventDefault();
        }
        AccordionDirective.channels[this.name].emit(this.elementRef.nativeElement);
    }

    /**
     * Toggles open close.
     *
     * @param {Event} event
     */
    public toggle(event: Event = null) {
        this.isShown ? this.close(event) : this.open(event);
    }


}
