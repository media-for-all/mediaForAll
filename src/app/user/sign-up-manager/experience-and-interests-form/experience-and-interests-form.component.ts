import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-experience-and-interests-form',
  templateUrl: './experience-and-interests-form.component.html',
  styleUrls: ['./experience-and-interests-form.component.css']
})
export class ExperienceAndInterestsFormComponent implements OnInit {
  @Input() stage: string;
  radioValue = 'zero';

  searchNameList = [];
  filterNameList = [
    { text: 'Joe', value: 'Joe' },
    { text: 'Jim', value: 'Jim' }
  ];

  sortMap = {
    name   : null,
    age    : null,
    address: null
  };
  sortName = null;
  sortValue = null;

  data = [
    {
      name   : 'Job 1',
      level: 0
    },
    {
      name   : 'Job 2',
      level: 0
    },
    {
      name   : 'Job 3',
      level: 0
    },
    {
      name   : 'Job 4',
      level: 0
    }
  ];
  displayData = [ ...this.data ];

  sort(sortName: string, value: string): void {
    this.sortName = sortName;
    this.sortValue = value;
    for (const key in this.sortMap) {
      this.sortMap[ key ] = (key === sortName ? value : null);
    }
    this.search(this.searchNameList);
  }

  search(searchNameList: string[]): void {
    this.searchNameList = searchNameList;
    const filterFunc = item => (this.searchNameList.length ? this.searchNameList.some(name => item.name.indexOf(name) !== -1) : true);
    const data = this.data.filter(item => filterFunc(item));
    if (this.sortName && this.sortValue) {
      this.displayData = data.sort((a, b) => (this.sortValue === 'ascend') ? (a[ this.sortName ] > b[ this.sortName ] ? 1 : -1) : (b[ this.sortName ] > a[ this.sortName ] ? 1 : -1));
    } else {
      this.displayData = data;
    }
  }

  resetFilters(): void {
    this.filterNameList = [
      { text: 'Joe', value: 'Joe' },
      { text: 'Jim', value: 'Jim' }
    ];
    this.filterAddressList = [
      { text: 'London', value: 'London' },
      { text: 'Sidney', value: 'Sidney' }
    ];
    this.searchNameList = [];
    this.searchAddressList = [];
    this.search(this.searchNameList);
  }

  resetSortAndFilters(): void {
    this.sortName = null;
    this.sortValue = null;
    this.sortMap = {
      name   : null,
      age    : null,
      address: null
    };
    this.resetFilters();
    this.search(this.searchNameList);
  }
  constructor() { }

  ngOnInit() {
  }

}
