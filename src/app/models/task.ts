export interface Task {
  id: number;
  date: string;
  activityName: string;
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  project: {
    id: number;
    name: string;
    tasks: string[];
  };
  user: {
    id: number;
    email: string;
    password: string;
    role: string;
    baseSalary: number;
    firstname: string;
    lastname: string;
    job: string;
    datejoined: string;
    status: string;
    tasks: string[];
    resetToken: string;
    salaryHistories: {
      id: number;
      event: string;
      effectiveFrom: string;
      field: string;
      changedFrom: number;
      changedTo: number;
      percentageChange: number;
    }[];
    enabled: boolean;
    accountNonExpired: boolean;
    credentialsNonExpired: boolean;
    username: string;
    accountNonLocked: boolean;
  };
}

