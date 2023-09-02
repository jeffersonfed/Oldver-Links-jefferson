
const resume = {
    firstName: 'Ritch Johan',
    lastName: 'Jefferson',
    // jobTitle: 'Self-Taught Developer | Entry-Level Japanese Translator',

    city: 'Jakarta',
    postalCode: '15339',
    country: 'Indonesia',
    phone: '+62 82155409329',
    email: 'ritchjjong@gmail.com',
    education: [
      {
        school: 'Institute computer japan',
        degree: 'Diploma',
        graduationDate: 'March 2023',
        description: 'Web Development'
      }
    ],
    links: [
      {
        label: 'Social Links',
        link: 'https://links-jefferson.vercel.app'
      },
      {
        label: 'LinkedIn',
        link: 'https://www.linkedin.com/in/jeffersonfed/'
      },
      {
        label: 'My Portfolio',
        link: 'https://jeffersonfed.github.io'
      }
      // {
      //   label: 'Social Links',
      //   link: 'https://links-jefferson.vercel.app'
      // }
    ],
    // skills: [
    //   'HTML5',
    //   'HTML5',
    //   'Javascript',
    //   'Astro',
    //   // 'Bootstrap',
    //   // 'ReactJS',
    //   // 'Tailwind CSS',
    //   'Git/Github',
    //   // 'APIs'
    // //   'ReactJS',
    // //   'Nextjs',
    // //   'React Native',
    // //   'Graphql',
    // //   'Docker',
    // //   'Kubernetes',
    // //   'AWS',
    // //   'PostgreSQL',
    // //   'MongoDB'
    // ],
    languages: ['English', 'Indonesia', 'Japanese'],
    // professionalSummary: `As an independent web development student, I'm continuously learning through structured roadmaps from roadmap.sh and courses on Coursera, Udemy, Hackerrank, edX, freeCodeCamp, Codecademy, and Skillup. Seeking job experience to complement my studies and grow professionally.`,
    // professionalSummary: [
    //   {
    //     'I studied Japanese language for 2 years at KLA School in Kyoto and continued my studies in IT web development at Senmongakkou for 2 years.',
    //   }
    // ],
    employmentHistory: [
      {
        jobTitle: 'Hotel エムズプラスホテル',
        jobsubTitle : 'Part-Time',
        startDate: 'Oct 2020',
        endDate: 'Feb 2023',
        employer: 'Hotel Inspector, Hotel Cleaning service |',
        city: 'Kyoto-Japan',
        achievements: [
  'Hotel Cleaning Service, and sometimes an inspector, also database management using Microsoft Excel.',
          
        ]
      },
      {
        jobTitle: 'Traditional japanese restaurant (和食）',
        jobsubTitle : 'Part-Time',
        startDate: 'Oct 2019',
        endDate: 'Oct 2022',
        employer: 'Food Service Worker |',
        city: 'Kyoto-Japan',
        achievements: [
  'Waiter and DishWasher',
          
        ]
      },
      {
        jobTitle: 'Freepik Contributor',
        jobsubTitle : 'Freelance',
        startDate: 'May 2023',
        endDate: 'Present',
        employer: 'Individual Contributor |',
        city: 'Indonesia',
        achievements: [
  'Creating a Self-hosted stable diffusion using Python, C++ and Java to generate AI images and upload the images to Freepik contributor site.',
        
          
        ]
      }
      
    ],
    
    photo: 'https://media.licdn.com/dms/image/D5603AQFXRiQlgP77Yw/profile-displayphoto-shrink_400_400/0/1692771975135?e=1698883200&v=beta&t=jxj4P4lAmThTlmkTDDH9DU1mhqcQshNQJjlvly1o8N8',
  }
  
  const formatResume = (r) => ({
    ...r,
    address: [
      r.country,
      r.city,
      r.postalCode
    ].filter(Boolean).join(', ')
  })
  
  new Vue({
    el: "#app",
    data: formatResume(resume)
  });
  
  /**
   * Wait for animatable-component to be loaded (Only for VanillaJS)
   **/
  function animatableLoaded() {
    document.querySelector('body').classList.remove('d-none');
  }
  if (customElements) {
    customElements.whenDefined('animatable-component').then(animatableLoaded);
  } else animatableLoaded()