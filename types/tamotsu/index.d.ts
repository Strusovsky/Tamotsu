// Type definitions for [~THE LIBRARY NAME~] [~OPTIONAL VERSION NUMBER~]
// Project: [~THE PROJECT NAME~]
// Definitions by: [~YOUR NAME~] <[~A URL FOR YOU~]>

/// <reference types="google-apps-script" />

export as namespace Tamotsu;

export function initialize(spreadsheet: GoogleAppsScript.Spreadsheet.Spreadsheet): void;
export function onInitialized(callback: { (): void }): void;

interface Model {
    save(): void;
    destroy(): void;
    isValid(): boolean;
    isNewRecord(): boolean;
    [key: string]: Object
}

interface NewModel extends Model {
    errors: Object
}

type Condition = Object | ((model: Model) => boolean);

type 


interface Table {

    define(): Table;
    first(): Model;
    last(): Model;
    find(id: Object): Model;
    all(): Model[];
    pluck(column: number): Object[];
    sum(column: number): number;
    max(column: number): number;
    min(column: number): number;
    where(conditions: Condition): Table;
    /**
     * TODO:
     * - [ ] replace by Comparator Type
     */
    order(comparator: Object): Table;
    create(): NewModel;

}


export const Table: Tamotsu.Table;