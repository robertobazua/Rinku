import * as au from "../aurelia";
export declare class MdDatePicker {
    private element;
    constructor(element: Element);
    static id: number;
    controlId: string;
    input: HTMLInputElement;
    labelElement: HTMLLabelElement;
    inputField: HTMLDivElement;
    label: string;
    inline: boolean;
    placeholder: string;
    autoClose: boolean;
    format: string;
    parse: (value: string, format: string) => Date;
    defaultDate: Date;
    setDefaultDate: boolean;
    disableWeekends: boolean;
    disableDayFn: (day: Date) => boolean;
    firstDay: number;
    minDate: Date;
    maxDate: Date;
    yearRange: number | number[];
    isRtl: boolean;
    showMonthAfterYear: boolean;
    showDaysInNextAndPreviousMonths: boolean;
    container: Element | string;
    showClearBtn: boolean;
    i18n: Partial<M.InternationalizationOptions>;
    events: string[];
    showErrortext: boolean;
    instance: M.Datepicker;
    value: Date;
    valueChangedSuppress: boolean;
    valueChanged(): void;
    setValue(newValue: Date): void;
    calendarIcon: any;
    attached(): void;
    suppressDone: boolean;
    done: (e: Event) => void;
    bind(): void;
    detached(): void;
    open(): void;
    close(): void;
    mdUnrenderValidateResults: (results: au.ValidateResult[], renderer: au.MaterializeFormValidationRenderer) => void;
    mdRenderValidateResults: (results: au.ValidateResult[], renderer: au.MaterializeFormValidationRenderer) => void;
}