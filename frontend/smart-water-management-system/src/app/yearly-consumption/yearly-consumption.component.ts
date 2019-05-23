import { WaterLevel } from "./../model/water-level";
import { Component, OnInit } from '@angular/core';
import { SigfoxService } from "../service/sigfox/sigfox.service";

@Component({
  selector: 'app-yearly-consumption',
  templateUrl: './yearly-consumption.component.html',
  styleUrls: ['./yearly-consumption.component.scss']
})
export class YearlyConsumptionComponent implements OnInit {
  public waterLevels: WaterLevel[];
  public chartData: Array<any>;
  public chartLabels: Array<any>;
  public label = 'Mês final de consumo';

  constructor(private sigfoxService: SigfoxService) {}

  ngOnInit() {
    this.loadMessages(new Date());
  }

  loadMessages(filterDate: Date) {
    this.sigfoxService.getYearlyDeviceMessages(filterDate).subscribe(
      response => {
        let levels = this.getLevelsData(response, filterDate);
        let months = this.getMonthsOrdered(filterDate);
        this.chartData = [
          { data: levels, label: "Consumo (l)" }
        ];
        this.chartLabels = months;
      },
      error => {
        console.log(error);
      }
    );
  }

  getLevelsData(waterLevels: WaterLevel[], filterDate: Date) {
    let monthLevels = [];
    let currentMonth = filterDate.getMonth();
    let currentYear = filterDate.getFullYear();

    for (let i = 0; i < 12; i++) {
      let month = currentMonth - i;
      let year = currentYear;

      while (month < 0) {
        month += 12;
        year--;
      }

      let currentLevel = this.getLevelOfMonth(waterLevels, month, year);
      monthLevels.push(currentLevel);
    }

    return monthLevels.map(level => Math.fround(level.data));
  }

  getLevelOfMonth(
    waterLevels: WaterLevel[],
    monthIndex: number,
    year: number
  ) {
    let time = Date.parse(new Date(year, monthIndex, 1).toDateString());
    return waterLevels
      .filter(level => new Date(level.time).getMonth() == monthIndex)
      .reduce((acc, cur) => ({ data: acc.data + cur.data, time: time }), {
        data: 0,
        time: time
      });
  }

  getMonthsOrdered(filterDate: Date) {
    let months = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro"
    ];
    let orderedMonths = [];
    let currentMonth = filterDate.getMonth();
    let currentYear = filterDate.getFullYear();

    for (let i = 0; i < 12; i++) {
      let month = currentMonth - i;
      let year = currentYear;

      while (month < 0) {
        month += 12;
        year--;
      }

      orderedMonths.push(months[month] + "/" + year);
    }

    return orderedMonths;
  }

  changeFilterDate(date: Date) {
    this.loadMessages(date);
  }
}
