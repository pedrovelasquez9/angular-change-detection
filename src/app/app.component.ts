import { ChangeDetectionStrategy, Component, ElementRef, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Level1Component } from "./level-1/level-1.component";
import { LevelData } from './types/data.type';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, RouterOutlet, Level1Component],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class AppComponent {
  public data: LevelData[] = [
    {
      label: "level 1 - branch 1",
      id: "1-1",
      childNodes: [
        {
          label: "level 2 - branch 1",
          id: "2-1"
        },
        {
          label: "level 2 - branch 2",
          id: "2-2",
          childNodes: [
            {
              label: "level 3 - branch 1",
              id: "3-1"
            }
          ]
        }
      ]
    },
    {
      label: "level 1 - branch 2",
      id: "1-2"
    }
  ];

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
