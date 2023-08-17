
const resume = {
    firstName: 'Ritch Johan',
    lastName: 'Jefferson',
    jobTitle: 'Self-Taught Developer',
    city: 'Jakarta',
    postalCode: '15339',
    country: 'Indonesia',
    phone: 'https://jeffersonrj.vercel.app',
    email: 'businessme430gmail.com',
    education: [
      {
        school: 'Institute computer japan',
        degree: 'Diploma',
        graduationDate: 'April 2023',
        description: 'Web Development'
      }
    ],
    links: [
      {
        label: 'GitHub',
        link: 'https://github.com/jeffersonfed'
      },
      {
        label: 'LinkedIn',
        link: 'https://www.linkedin.com/in/jeffersonfed/'
      },
      {
        label: 'My Portfolio',
        link: 'https://jeffersonrj.vercel.app'
      },
      {
        label: 'My Project',
        link: 'https://jeffersonrj.vercel.app/projects.html'
      }
    ],
    skills: [
      'HTML',
      'CSS',
      'Tailwind CSS',
      'Bootstrap',
      'Javascript',
      'Python',
      'ReactJS'
    //   'ReactJS',
    //   'Nextjs',
    //   'React Native',
    //   'Graphql',
    //   'Docker',
    //   'Kubernetes',
    //   'AWS',
    //   'PostgreSQL',
    //   'MongoDB'
    ],
    languages: ['English', 'Indonesia', 'Japanese'],
    professionalSummary: `As an independent web development student, I'm continuously learning through structured roadmaps from roadmap.sh and courses on Coursera, Udemy, Hackerrank, edX, freeCodeCamp, Codecademy, and Skillup. Seeking job experience to complement my studies and grow professionally.`,
    employmentHistory: [
      {
        jobTitle: 'Freepik Contributor',
        startDate: 'May 2023',
        endDate: 'Present',
        employer: 'Freelance',
        city: 'Part-Time',
        achievements: [
  'Creating a Mockup and Self-hosted stable diffusion using Python, C++ and Java to generate AI images and upload the images to Freepik contributor site.',
          'Total Assets: 300+ images/design.',
          
        ]
      }
      
    ],
    
    photo: 'https://media.licdn.com/dms/image/D5603AQFutc85aeSQMw/profile-displayphoto-shrink_400_400/0/1684853567734?e=1697673600&v=beta&t=mJnmIohB-wffHg1_4jS4o4SjDwqG_B05iFGCOYWALnU',
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