interface SignalCriteria {
    subFactor: string;
    signalName: string;
    optionMapping: { name: string; optionMapping: { max: number } }[];
    subFactorWeight: number;
  }
  
  interface TableDataItem {
    factor: string;
    factorWeight: number;
    signalCriteriaMappingAtSubFactor: SignalCriteria[];
  }
  
  interface ManualInputs {
    [key: string]: number | null;
  }