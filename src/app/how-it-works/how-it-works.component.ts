import { Component, OnInit } from '@angular/core';
import { ISteps } from '../core/interfaces/steps.interface';
import { StepsService } from '../core/services/steps.service';

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.scss']
})
export class HowItWorksComponent implements OnInit {
  public steps: ISteps[];
  constructor(private stepsService: StepsService) {}

  ngOnInit(): void {
    this.stepsService
      .getSteps()
      .subscribe((data: ISteps[]) => (this.steps = data));
  }
}
