export interface ISteps {
  id: string;
  stepNumber: string;
  versionContent: [
    {
      title: string;
      body: string;
      effectiveDate: string;
    }
  ];
}
