# Angular Simple Accordion

A very simple accordion directive.

~~~javascript

@NgModule({
  ...
  imports:      [
    ...,
    AccordionModule
  ],
  ...
})
export class AppModule { }
~~~

Usage:
~~~html
<div [accordion]="'group_identifier'" #accordionRef1="accordion">
<a (click)="accordionRef1.open($event)">First Row</a>
<template [ngIf]="accordionRef1.isShown">
  First View
</template>
</div>
<div [accordion]="'group_identifier'" #accordionRef2="accordion">
<a (click)="accordionRef2.open($event)">Second Row</a>
<template [ngIf]="accordionRef2.isShown">
  Second View
</template>
</div>
<div [accordion]="'group_identifier'" #accordionRef3="accordion">
<a (click)="accordionRef3.open($event)">Third Row</a>
<template [ngIf]="accordionRef3.isShown">
  Third View
</template>
</div>
~~~
