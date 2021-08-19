import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[fakeNgIf]'
})
export class FakeNgIfDirective {
  @Input() set fakeNgIf(condition: boolean) {
    this.renderElement(condition);
  }
  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) { 
    //
  }

  renderElement(condition: boolean) {
    if (condition) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }

}
