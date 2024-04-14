import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, Input, NgZone } from '@angular/core';
import { Level3Component } from "../level-3/level-3.component";

@Component({
  selector: 'app-level-2',
  standalone: true,
  templateUrl: './level-2.component.html',
  styleUrl: './level-2.component.css',
  imports: [Level3Component, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class Level2Component {
  @Input() childData: any;
  constructor(private elementRef: ElementRef, private zone: NgZone) { }

  public visualizeChangeDetection() {
    this.elementRef.nativeElement.classList.add('detecting');
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        this.elementRef.nativeElement.classList.remove('detecting');
      }, 1000);
    });
  }

  fireCD(): void { }

}
