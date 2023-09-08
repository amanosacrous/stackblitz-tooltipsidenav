import { Component, OnInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { timer } from 'rxjs';

@Component({
  selector: 'tooltip-sidenav',
  templateUrl: './tooltip-sidenav.component.html',
  styleUrls: ['./tooltip-sidenav.component.css'],
  standalone: true,
  imports: [MatSidenavModule, MatTooltipModule],
})
export class TooltipSidenavComponent implements OnInit {
  public timerIntoTooltip: number = 0;

  constructor() {
    timer(1000, 3000).subscribe((val) => {
      this.timerIntoTooltip = val;
    });
  }

  ngOnInit() {}
}
