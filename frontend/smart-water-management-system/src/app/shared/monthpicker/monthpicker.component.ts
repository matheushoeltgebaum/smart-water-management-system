import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormControl } from "@angular/forms";
import { MomentDateAdapter } from "@angular/material-moment-adapter";
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE
} from "@angular/material/core";
import {
  MatDatepicker,
  MatDatepickerInputEvent
} from "@angular/material/datepicker";
import * as _moment from "moment";
import { default as _rollupMoment, Moment } from "moment";

const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: "MM/YYYY"
  },
  display: {
    dateInput: "MMMM/YYYY",
    monthYearLabel: "MMM YYYY",
    dateA11yLabel: "LL",
    monthYearA11yLabel: "MMMM YYYY"
  }
};

@Component({
  selector: "app-monthpicker",
  templateUrl: "./monthpicker.component.html",
  styleUrls: ["./monthpicker.component.scss"],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: "pt-BR" },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE]
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }
  ]
})
export class MonthpickerComponent implements OnInit {
  minDate = new Date(2018, 0, 1);
  maxDate = new Date();
  date = new FormControl({ value: moment(), disabled: true });

  @Input()
  label: string;

  @Output()
  change: EventEmitter<any> = new EventEmitter();

  canGoBack = true;
  canGoForward = false;

  constructor() {}

  ngOnInit() {}

  chosenYearHandler(normalizedYear: Moment) {
    const ctrlValue = this.date.value;
    ctrlValue.year(normalizedYear.year());
    this.date.setValue(ctrlValue);
  }

  chosenMonthHandler(
    normalizedMonth: Moment,
    datepicker: MatDatepicker<Moment>
  ) {
    const ctrlValue = this.date.value;
    let nextMonth = normalizedMonth.month() > ctrlValue.month();
    ctrlValue.month(normalizedMonth.month());
    this.date.setValue(ctrlValue);
    datepicker.close();
    this.change.emit(this.date.value.toDate());
    this.processPagination(nextMonth);
  }

  chosenDateHandler(event) {
    const ctrlValue = this.date.value;
    let nextMonth = event.value.year() > ctrlValue.year() || event.value.month() > ctrlValue.month();
    ctrlValue.year(event.value.year());
    ctrlValue.month(event.value.month());
    this.date.setValue(ctrlValue);
    this.change.emit(this.date.value.toDate());
    this.processPagination(nextMonth);
  }

  prevMonth() {
    const ctrlValue = this.date.value;
    ctrlValue.month(ctrlValue.month() - 1);
    this.date.setValue(ctrlValue);
    this.change.emit(this.date.value.toDate());
    this.processPagination(false);
  }

  nextMonth() {
    const ctrlValue = this.date.value;
    ctrlValue.month(ctrlValue.month() + 1);
    this.date.setValue(ctrlValue);
    this.change.emit(this.date.value.toDate());
    this.processPagination(true);
  }

  processPagination(nextMonth: boolean) {
    let date = this.date.value.toDate();
    let currentTimeStamp = Date.parse(
      new Date(
        date.getFullYear(),
        nextMonth ? date.getMonth() + 1 : date.getMonth() - 1,
        1
      ).toDateString()
    );
    let prevLimitTimeStamp = Date.parse(this.minDate.toDateString());
    let nextLimitTimeStamp = Date.parse(this.maxDate.toDateString());
    this.canGoBack = currentTimeStamp >= prevLimitTimeStamp;
    this.canGoForward = currentTimeStamp <= nextLimitTimeStamp;
  }
}
