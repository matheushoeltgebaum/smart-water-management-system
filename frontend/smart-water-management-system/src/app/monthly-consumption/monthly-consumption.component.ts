import { WaterLevel } from "./../model/water-level";
import { Component, OnInit } from "@angular/core";
import { SigfoxService } from "../service/sigfox/sigfox.service";

@Component({
  selector: "app-monthly-consumption",
  templateUrl: "./monthly-consumption.component.html",
  styleUrls: ["./monthly-consumption.component.scss"]
})
export class MonthlyConsumptionComponent implements OnInit {
  public waterLevels: WaterLevel[];
  public chartData: Array<any>;
  public chartLabels: Array<any>;
  public label = "Mês de consumo";

  constructor(private sigfoxService: SigfoxService) {}

  ngOnInit() {
    this.loadMessages(new Date());
  }

  loadMessages(filterDate: Date) {
    this.sigfoxService.getMonthlyDeviceMessages(filterDate).subscribe(
      response => {
        console.log(response);
        let levels = this.getLevelsData(response, filterDate);
        let days = this.getDaysOrdered(filterDate);
        this.chartData = [{ data: levels, label: "Consumo (l)" }];
        this.chartLabels = days;
      },
      error => {
        console.log(error);
      }
    );
  }

  getLevelsData(waterLevels: WaterLevel[], filterDate: Date) {
    let dayLevels = [];
    let currentMonth = filterDate.getMonth();
    let currentYear = filterDate.getFullYear();
    let lastDay = new Date(currentYear, currentMonth + 1, 0).getDate();

    for (let i = lastDay; i > 0; i--) {
      let currentLevel = this.getLevelOfDay(
        waterLevels,
        i,
        currentMonth,
        currentYear
      );
      dayLevels.push(currentLevel);
    }

    return dayLevels.map(level => Math.fround(level.data));
  }

  getLevelOfDay(
    waterLevels: WaterLevel[],
    day: number,
    month: number,
    year: number
  ) {
    let date = new Date(year, month, day);
    return waterLevels
      .filter(level => {
        let levelDate = new Date(level.time);
        return (
          levelDate.getDate() == date.getDate() &&
          levelDate.getMonth() == date.getMonth() &&
          levelDate.getFullYear() == date.getFullYear()
        );
      })
      .reduce(
        (acc, cur) => ({
          data: acc.data + cur.data,
          time: Date.parse(date.toDateString())
        }),
        {
          data: 0,
          time: Date.parse(date.toDateString())
        }
      );
  }

  getDaysOrdered(filterDate: Date) {
    let orderedDays = [];
    let currentMonth = filterDate.getMonth() + 1;
    let currentYear = filterDate.getFullYear();
    let lastDay = new Date(currentYear, currentMonth, 0).getDate();

    for (let i = lastDay; i > 0; i--) {
      orderedDays.push(i + "/" + currentMonth + "/" + currentYear);
    }

    return orderedDays;
  }

  changeFilterDate(date: Date) {
    this.loadMessages(date);
  }
}
