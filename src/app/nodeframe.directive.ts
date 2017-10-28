import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[nodeFrame]',
  host: {
    '[class.nodeFrame]': 'nodeFrame'
  }
})
export class NodeframeDirective {
  @Input() nodeFrame;
}
