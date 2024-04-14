import { ChangeDetectionStrategy, Component, ElementRef, Input, NgZone } from '@angular/core';
import { Level2Component } from "../level-2/level-2.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-level-1',
  standalone: true,
  templateUrl: './level-1.component.html',
  styleUrl: './level-1.component.css',
  imports: [Level2Component, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class Level1Component {
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
