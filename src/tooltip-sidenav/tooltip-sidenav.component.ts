import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { timer } from 'rxjs';

@Component({
  selector: 'tooltip-sidenav',
  templateUrl: './tooltip-sidenav.component.html',
  styleUrls: ['./tooltip-sidenav.component.css'],
  standalone: true,
  imports: [MatSidenavModule, MatTooltipModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TooltipSidenavComponent implements OnInit {
  public timerIntoTooltip: number = 0;

  constructor(private cd: ChangeDetectorRef) {
    timer(1000, 2000).subscribe((val) => {
      this.timerIntoTooltip = val;
      this.cd.detectChanges();
    });
  }

  ngOnInit() {}
}
