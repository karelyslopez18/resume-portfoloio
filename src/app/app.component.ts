import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'my-resume';
  name: string = 'John Doe';
  jobTitle: string = 'Software Engineer';
  
  contact = {
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    github: 'https://github.com/johndoe'
  };

  profileDescription: string = 'Experienced software engineer with a strong background in Angular and web development. Passionate about building efficient, scalable web applications.';

  experience = [
    {
      title: 'Senior Software Engineer',
      company: 'Tech Solutions',
      startDate: 'Jan 2020',
      endDate: 'Present',
      responsibilities: [
        'Lead a team of developers in creating web applications',
        'Developed new features using Angular and TypeScript',
        'Collaborated with UI/UX designers'
      ]
    },
    {
      title: 'Software Developer',
      company: 'Innovatech',
      startDate: 'Feb 2017',
      endDate: 'Dec 2019',
      responsibilities: [
        'Built responsive web applications using HTML, CSS, and Angular',
        'Collaborated with cross-functional teams',
        'Implemented REST APIs for backend services'
      ]
    }
  ];

  skills = ['Angular', 'TypeScript', 'HTML', 'CSS', 'JavaScript'];

  education = {
    degree: 'B.Sc. in Computer Science',
    school: 'University of Technology',
    startDate: '2012',
    endDate: '2016'
  };

  extracurriculars = [
    {
      title: 'Hackathon Winner',
      organization: 'Tech Expo',
      year: '2022',
      description: 'Led a team that won the first prize in the national hackathon competition by developing an AI-powered web app.'
    },
    {
      title: 'Volunteer Web Developer',
      organization: 'Nonprofit Organization',
      year: '2021',
      description: 'Developed a website for a local nonprofit to help them increase community engagement.'
    }
  ];
}
