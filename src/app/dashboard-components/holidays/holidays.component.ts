import { Component, OnInit } from '@angular/core';
import { HolidaysService } from 'src/app/services/holidays/holidays.service';
import { Holiday } from 'src/app/models/holiday';
@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.scss']
})
export class HolidaysComponent implements OnInit {
  showAddHoliday = false;
  showUpdateHoliday = false;
  holidayIdToUpdate: number | undefined;
  holidays: Holiday[] = [];

  constructor(private holidaysService: HolidaysService) { }

  ngOnInit(): void {
    this.loadHolidays();
  }

  loadHolidays(): void {
    this.holidaysService.getAllHolidays().subscribe(
      (data) => {
        console.log('Holidays fetched:', data);
        this.holidays = data;
      },
      (error) => {
        console.error('Error fetching projects', error);
      }
    );
  }

  deleteHoliday(id?: number): void {
    if (id !== undefined) {
      this.holidaysService.deleteHoliday(id).subscribe(
        () => {
          console.log('Holiday deleted:', id);
          this.loadHolidays();
        },
        (error) => {
          console.error('Error deleting project', error);
        }
      );
    } else {
      console.error('Holiday ID is undefined');
    }
  }

  toggleAddHoliday(): void {
    this.showAddHoliday = !this.showAddHoliday;
    if (this.showAddHoliday) {
      this.showUpdateHoliday = false;
      this.holidayIdToUpdate = undefined;
    }
  }

  onAddHolidayClose(): void {
    this.showAddHoliday = false;
    this.loadHolidays();
  }

  toggleUpdateHoliday(id?: number): void {
    this.holidayIdToUpdate = id;
    this.showUpdateHoliday = !this.showUpdateHoliday;
    if (this.showUpdateHoliday) {
      this.showAddHoliday = false;
    }
  }

  onUpdateHolidayClose(): void {
    this.showUpdateHoliday = false;
    this.holidayIdToUpdate = undefined;
    this.loadHolidays();
  }
}


