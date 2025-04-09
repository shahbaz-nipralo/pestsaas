export interface Report {
    id: number;
    name: string;
    description: string;
    category: string;
    lastGenerated: string;
  }
  
  export interface ChartData {
    name: string;
    [key: string]: string | number;
  }
  
  export interface TechnicianPerformance {
    name: string;
    completedJobs: number;
    customerRating: number;
  }