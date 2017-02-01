import { ElementRef, OnInit, EventEmitter } from "@angular/core";
export declare class AccordionDirective implements OnInit {
    elementRef: ElementRef;
    static elements: {
        [key: string]: Array<ElementRef>;
    };
    static channels: {
        [key: string]: EventEmitter<any>;
    };
    name: string;
    protected isShown: boolean;
    protected areAnyShown: boolean;
    onInit: EventEmitter<{}>;
    constructor(elementRef: ElementRef);
    /**
     * @inheritDoc
     */
    ngOnInit(): void;
    /**
     * When item is closed.
     *
     * @param event
     */
    close(event: Event): void;
    /**
     * When item is opened.
     *
     * @param event
     */
    open(event: Event): void;
}
