import {Component, Input, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-experience-and-interests',
  templateUrl: './experience-and-interests.component.html',
  styleUrls: ['./experience-and-interests.component.css', '../../../../theme.less']
})
export class ExperienceAndInterestsComponent implements OnInit {
@Input() stage: string;
  value1 = 1;
  value2 = 0;
  isVisibleTop = false;

  categoriesOfJobs = [
    {category: 'Production Office',
      description: 'The production office is referred to the “front office” and includes staff such as the production manager, production coordinator and their assistants; the accounting staff; the assistant directors, sometimes the locations manager and assistants.'
    },
    {category: 'Lighting/Electrical Department',
      description: 'Grips are the lighting and rigging technicians. They function as a cross between a mechanic and a construction worker on the set. A grip’s job responsibilities include: working closely with the camera department especially if the camera is mounted onto a dolly or crane; work closely with the electrical department to put in lighting set ups necessary for a shot. Grips do not actually work on the lighting (they are not technically electricians) but handle all other necessary equipment; responsible for all “rigging” on the set including lighting equipment rigged over actors and crew, working with pulleys, steel cables; responsible for all safety on the set as it relates to the equipment they work with..'
    },
    {category: 'Art Department',
      description: 'The art department is responsible for the overall look of the film. In a major film it can include hundreds of people. Generally there are several sub-departments including an art director and set designers; the set decoration; the props master; construction headed by the construction coordinator; scenic headed by the key scenic artist and special effects.'
    },
    {category: 'Construction department',
      description: 'Constructs the sets.'
    },
    {category: 'Props Department',
      description: 'This department is responsible for the procurement or production, inventory , care and maintenance of all props associated with productions, ensuring that they are all available on time, and with budgetary requirements. They also ensure that selected props suit the film style and overall design, and that they reflect the production’s time period and culture..'
    },
    {category: 'Camera Department',
      description: 'This department is responsible for everything related to the actual filming.'
    },
    {category: 'Make-up and Hair Department',
      description: 'This department is responsible for the design and execution of make-up and hair styles.'
    },
    {category: 'Craft Service',
      description: 'Craft Service provides food that is always available to the crew while they are working, and can range from a small supply of refreshments to more elaborate meals..'
    },
    {category: 'Audience Manager',
      description: 'The audience manager is responsible for overseeing the audience.'
    }
  ];

  jobs = [
    {
      department: 'Production Office',
      title: 'Production Manager',
      scale: '',
      description: 'supervises the physical aspects of the production (not the creative aspects) including personnel, technology, budget and scheduling. It is the production manager’s responsibility to make sure the filming stays on schedule and within its budget. The production manager also helps manage the day-to-day budget by managing operating costs such as salaries, production costs and everyday equipment rental costs.'
    },
    {
      department: 'Production Office',
      title: 'Production Coordinator',
      scale: '',
      description: 'the information nexus of the production. Responsible for organizing all the logistics from hiring crew, renting equipment, and booking talent. The production coordinator is an integral part of the film production.'
    },
    {
      department: 'Production Office',
      title: 'Assistant Director (1st and 2nd)',
      scale: '',
    description: 'assists the production manager and the director. Generally in charge of overseeing the day-to-day management of the cast and crew including scheduling, equipment, script and the set.'
    },
    {
      department: 'Production Office',
      title: 'Production Assistant',
      scale: '',
    desscription: 'assists the first assistant director with set operations. Production assistants, referred to as “pa’s”. Also assists in the production office with general tasks.'
    },
    {
      department: 'Production Office',
      title: 'Script supervisor',
      decription: 'also known as “continuity person” keeps track of what parts of the script have been filmed and makes notes of any deviations between what was actually filmed and what appeared in the script}'
    },
    {
      department: 'Lighting/Electrical Department',
      title: 'Key grip',
      scale: '',
      description: 'the foreman of the grip department. Overseas the work and responsibilities of all of the grips on the set.'
    },
    {
      department: 'Lighting/Electrical Department',
      title: 'Best boy grip',
      scale: '',
      description: 'assists the key grip but assumes more responsibility for the hiring and scheduling of the crew; overseas the rental of the equipment on the set.'
    },
    {
      department: 'Lighting/Electrical Department',
      title: 'Dolly grip',
      description: 'operates the camera dollies or camera cranes.'
    },
    {
      department: 'Lighting/Electrical Department',
      title: 'Gaffer',
      scale: '',
      description: 'head of the electrical department (sometimes called the chief lighting technician). Works closely with the director of photography and overseas the work of the assistants'
    },
    {
      department: 'Lighting/Electrical Department',
      title: 'Best boy electric',
      scale: '',
      description: 'assistant to the gaffer. Generally responsible for the daily running of the lighting, hiring and scheduling of the crew; coordinating the rigging crews (depending upon the size of the production).'
}
  ];

  jobsInCategories = []

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
  this.router.events.subscribe((path) => {
      window.scrollTo(0, 0);
  });
  }

  showModalTop(category): void {
    this.jobsInCategories = [];
    this.jobs.forEach( job => {
      if (category.category === job.department) {
        this.jobsInCategories.push(job);
      }
    })

    this.isVisibleTop = true;
  }

  handleOkTop(): void {
    console.log('click ok');
    this.isVisibleTop = false;
  }

  handleCancelTop(): void {
    this.isVisibleTop = false;
  }
}
