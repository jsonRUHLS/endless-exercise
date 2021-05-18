import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ISteps } from '../core/interfaces/steps.interface';
import { StepsService } from '../core/services/steps.service';

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.scss']
})
export class HowItWorksComponent implements OnDestroy, OnInit {
  public steps: ISteps[];
  private ngUnsubscribe: Subject<void> = new Subject<void>();

  // eslint-disable-next-line prettier/prettier
  constructor(private stepsService: StepsService) { }

  ngOnInit(): void {
    this.stepsService.getSteps().subscribe((data: ISteps[]) => {
      this.steps = data.sort((a, b) =>
        a.stepNumber.localeCompare(b.stepNumber)
      );

      // here I sort the data by effectiveDate
      this.steps.forEach(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const sortByDate = (data: any) => {
          const sorter = (
            a: { effectiveDate: string | number | Date },
            b: { effectiveDate: string | number | Date }
          ) => {
            return (
              new Date(a.effectiveDate).getTime() -
              new Date(b.effectiveDate).getTime()
            );
          };
          data.sort(sorter);
          return data;
        };
        sortByDate(data);

        // I haven't been able to figure out how to get
        // to the versionContent to be able to slice off the last
        // element to use for the data
        // if (this.steps.versionContent.length > 1) {
        //   this.steps.versionContent.length - 1;
        // }
      });
    });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
