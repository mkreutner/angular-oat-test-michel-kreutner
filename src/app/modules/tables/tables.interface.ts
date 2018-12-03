/**
 * Definition of an action button
 */
interface ActionButtons {
  icon: string;
  action: any;
  color?: string;
  confirm?: boolean;
  tooltip?: string;
  disabled?: any;
}

export const defaultActionButtons: ActionButtons = {
  icon: 'language',
  action: null,
  color: 'primary',
  confirm: false,
  tooltip: '',
  disabled: false,
}

export interface TablesConfig {
  displayedColumns: string[];
  displayedColumnsWithActions?: string[];
  columnsName?: string[];

  withFilter?: boolean;

  withActions?: boolean;
  actions?: ActionButtons[];

  withHeaderAction?: boolean;
  headerAction?: ActionButtons;

  pageSize?: number;
  pageSizeOptions?: number[];
}

export const defaultTablesConfig: TablesConfig = {
  displayedColumns: [],
  displayedColumnsWithActions: [],
  columnsName: [],

  withFilter: true,

  withActions: false,
  actions: [],

  withHeaderAction: false,
  headerAction: defaultActionButtons,

  pageSize: 5,
  pageSizeOptions: [5, 10, 15, 20]
}

