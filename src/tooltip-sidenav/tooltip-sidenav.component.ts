import { Component, OnInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'tooltip-sidenav',
  templateUrl: './tooltip-sidenav.component.html',
  styleUrls: ['./tooltip-sidenav.component.css'],
  standalone: true,
  imports: [MatSidenavModule, MatTooltipModule],
})
export class TooltipSidenavComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
