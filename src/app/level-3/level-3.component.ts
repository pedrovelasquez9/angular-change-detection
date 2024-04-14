import { ChangeDetectionStrategy, Component, ElementRef, Input, NgZone } from '@angular/core';

@Component({
  selector: 'app-level-3',
  standalone: true,
  imports: [],
  templateUrl: './level-3.component.html',
  styleUrl: './level-3.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Level3Component {
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
