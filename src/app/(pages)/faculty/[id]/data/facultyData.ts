interface Qualification {
  degree: string;
  school: string;
  year: string;
}

interface Certification {
  name: string;
}

interface Experience {
  title: string;
  company: string;
  period: string;
}

interface Topic {
  title: string;
  link: string;
}

interface Material {
  unit: string;
  icon: string;
  topics: Topic[];
}

interface Course {
  courseName: string;
  courseId: string;
  materials: Material[];
}

interface Project {
  title: string;
  description: string;
  link: string;
}

interface Publication {
  title: string;
  journal: string;
  year: number;
  link: string;
}

interface Research {
  projects: Project[];
  publications: Publication[];
}

interface OutreachActivity {
  title: string;
  description: string;
  image: string;
  date: string;
  participants: number;
}

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

export interface Faculty {
  id: string;
  name: string;
  title: string;
  description: string;
  department: string;
  avatar: string;
  email: string;
  phone: string;
  linkedin: string;
  twitter: string;
  expertise: string[];
  about: string;
  qualifications: Qualification[];
  certifications: string[];
  experience: Experience[];
  courses: Course[];
  research: Research;
  outreachActivities: OutreachActivity[];
  blogPosts: BlogPost[];
}

export const facultyData: Faculty[] = [
  {
    id: "pradnya_muley",
    name: "Dr. Pradnya Muley",
    title: "Head Of Department, Department of MCA",
    description: "Specialist in Artificial Intelligence, Machine Learning, and Data Science",
    department: "MCA",
    avatar: "/images/profiles/pradnya_muley.jpg",
    email: "pradnya.muley@moderncoe.edu.in",
    phone: "+91 (020) 2569-6064",
    linkedin: "https://www.linkedin.com/in/drpradnyamuley",
    twitter: "https://twitter.com/DrPradnyaMuley",
    expertise: ["Artificial Intelligence", "Machine Learning", "Data Science"],
    about:
      "Dr. Pradnya Muley is the Head of Department for MCA at Modern College of Engineering. She is a distinguished researcher with expertise in artificial intelligence and machine learning, focusing on innovative solutions for natural language processing and computer vision. With over 20 years of experience, Dr. Muley has contributed significantly to AI advancements and their application across industries.",
    qualifications: [
      { degree: "Ph.D. in Computer Science", school: "Pune University", year: "2000" },
      { degree: "M.Sc. IT", school: "Savitribai Phule Pune University", year: "2010" },
      { degree: "MCA", school: "Pune University", year: "2005" },
    ],
    certifications: [
      "IBM Certified Data Scientist",
      "Microsoft Certified: Azure AI Engineer Associate",
      "Certified Professional in Machine Learning (CPML)",
    ],
    experience: [
      {
        title: "HOD, Department of MCA",
        company: "Modern College of Engineering, Pune",
        period: "2018 - Present",
      },
      {
        title: "Associate Professor",
        company: "Modern College of Engineering, Pune",
        period: "2012 - 2018",
      },
      {
        title: "Assistant Professor",
        company: "Modern College of Engineering, Pune",
        period: "2006 - 2012",
      },
    ],
    courses: [
      {
        courseName: "Artificial Intelligence",
        courseId: "AI101",
        materials: [
          {
            unit: "UNIT 1: Introduction to Artificial Intelligence",
            icon: "BookOpen",
            topics: [
              {
                title: "Introduction to AI",
                link: "https://drive.google.com/file/d/1aM7_78tYYZmMSmpAuWoIkLCPX-y23fMg/view",
              },
              {
                title: "Intelligent Agents",
                link: "https://drive.google.com/file/d/1xfA_IwZnCSwN0D8GwUXX1MrOs_-6O8Q1/view",
              },
            ],
          },
          {
            unit: "UNIT 2: Search Techniques",
            icon: "Presentation",
            topics: [
              {
                title: "Searching, BFS, DFS",
                link: "https://drive.google.com/file/d/1uii_HJvBNdZbTz-klu5STqUaKJ70xEMz/view",
              },
              {
                title: "Uninformed Searching Techniques",
                link: "https://drive.google.com/file/d/18kOjOEsdTa9rJlPau1aTQwvHH8h0i_K_/view",
              },
            ],
          },
        ],
      },
    ],
    research: {
      projects: [
        {
          title: "AI in Healthcare",
          description: "Developing AI-based solutions for early detection of chronic diseases.",
          link: "https://example.com/project1",
        },
        {
          title: "Computer Vision",
          description: "Researching advanced computer vision techniques for object recognition.",
          link: "https://example.com/project2",
        },
      ],
      publications: [
        {
          title: "A Survey of Transfer Learning Techniques in Natural Language Processing",
          journal: "Journal of Artificial Intelligence Research",
          year: 2022,
          link: "https://example.com/publication1",
        },
        {
          title: "Efficient Training of Large-Scale Vision Transformers",
          journal: "Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition",
          year: 2023,
          link: "https://example.com/publication2",
        },
      ],
    },
    outreachActivities: [
      {
        title: 'AI for Social Good Workshop',
        description: 'A hands-on workshop introducing AI concepts to high school students, focusing on applications that benefit society.',
        image: '/images/outreach-activities/ai-workshop.webp',
        date: '2023-09-15',
        participants: 50,
      },
      {
        title: 'Women in Tech Mentorship Program',
        description: 'A year-long mentorship program supporting women pursuing careers in technology and computer science.',
        image: '/images/outreach-activities/women-in-tech.webp',
        date: '2023-10-01',
        participants: 30,
      },
    ],
    blogPosts: [
      {
        id: "1",
        title: 'The Future of AI in Healthcare',
        excerpt: 'Exploring the potential applications and ethical considerations of AI in medical diagnosis and treatment.',
        date: '2023-05-15',
        category: 'Healthcare',
      },
      {
        id: "2",
        title: 'Demystifying Deep Learning: A Beginners Guide',
        excerpt: 'Breaking down the complex concepts of deep learning into easily understandable explanations for newcomers.',
        date: '2023-04-22',
        category: 'Machine Learning',
      },
      {
        id: "3",
        title: 'The Ethics of AI: Navigating the Gray Areas',
        excerpt: 'Discussing the ethical implications of AI development and deployment in various sectors.',
        date: '2023-03-10',
        category: 'Ethics',
      },
      {
        id: "4",
        title: 'Natural Language Processing: From Theory to Practice',
        excerpt: 'Exploring real-world applications of NLP and how theyre shaping our digital interactions.',
        date: '2023-02-05',
        category: 'NLP',
      },
    ],
  },
  {
    id: "smita_sontakke",
    name: "Dr. Smita Sontakke",
    title: "Assistant Professor",
    description: "Specialist in Data Science and Machine Learning",
    department: "MCA",
    avatar: "/profile-picture.jpg",
    email: "abc@gmail.com",
    phone: "+91 (020) 2569-6064",
    linkedin: "https://www.linkedin.com/in/drpradnyamuley",
    twitter: "https://twitter.com/DrPradnyaMuley",
    expertise: ["Data Science", "Machine Learning", "Big Data"],
    about:
      "Dr. Smita Sontakke is an Assistant Professor in the Department of MCA at Modern College of Engineering. She is a dedicated educator and researcher with a focus on data science and machine learning applications. Dr. Sontakke has a passion for exploring innovative solutions to real-world problems using advanced data analytics techniques.",
    qualifications: [
      { degree: "Ph.D. in Computer Science", school: "Pune University", year: "2015" },
      { degree: "M.Sc. IT", school: "Savitribai Phule Pune University", year: "2010" },
      { degree: "MCA", school: "Pune University", year: "2005" },
    ],
    certifications: [
      "Certified Data Scientist",
      "Certified Machine Learning Engineer",
      "Certified Big Data Professional",
    ],
    experience: [
      {
        title: "Assistant Professor",
        company: "Modern College of Engineering, Pune",
        period: "2015 - Present",
      },
      {
        title: "Research Assistant",
        company: "Pune University",
        period: "2010 - 2015",
      },
    ],
    courses: [
      {
        courseName: "Data Science",
        courseId: "DS101",
        materials: [
          {
            unit: "UNIT 1: Introduction to Data Science",
            icon: "BookOpen",
            topics: [
              {
                title: "Introduction to Data Science",
                link: "https://drive.google.com/file/d/1aM7_78tYYZmMSmpAuWoIkLCPX-y23fMg/view",
              },
              {
                title: "Data Preprocessing",
                link: "https://drive.google.com/file/d/1xfA_IwZnCSwN0D8GwUXX1MrOs_-6O8Q1/view",
              },
            ],
          },
          {
            unit: "UNIT 2: Machine Learning",
            icon: "Presentation",
            topics: [
              {
                title: "Machine Learning Basics",
                link: "https://drive.google.com/file/d/1uii_HJvBNdZbTz-klu5STqUaKJ70xEMz/view",
              },
              {
                title: "Supervised Learning",
                link: "https://drive.google.com/file/d/18kOjOEsdTa9rJlPau1aTQwvHH8h0i_K_/view",
              },
            ],
          },
        ],
      },
    ],
    research: {
      projects: [
        {
          title: "Predictive Analytics in Healthcare",
          description: "Developing predictive models for early diagnosis of chronic diseases.",
          link: "https://example.com/project1",
        },
        {
          title: "Big Data Analytics",
          description: "Researching scalable solutions for processing and analyzing large datasets.",
          link: "https://example.com/project2",
        },
      ],
      publications: [
        {
          title: "Scalable Machine Learning for Big Data",
          journal: "IEEE Transactions on Big Data",
          year: 2022,
          link: "https://example.com/publication1",
        },
        {
          title: "Predictive Modeling in Healthcare",
          journal: "Journal of Healthcare Analytics",
          year: 2023,
          link: "https://example.com/publication2",
        },
      ],
    },
    outreachActivities: [
      {
        title: 'Data Science Bootcamp',
        description: 'A week-long intensive bootcamp introducing students to the fundamentals of data science and machine learning.',
        image: '/images/data-bootcamp.webp',
        date: '2023-09-01',
        participants: 40,
      },
      {
        title: 'Machine Learning Workshop',
        description: 'A hands-on workshop covering the basics of machine learning algorithms and their applications.',
        image: '/images/ml-workshop.webp',
        date: '2023-10-15',
        participants: 30,
      },
    ],
    blogPosts: [
      {
        id: "1",
        title: 'The Impact of Big Data on Business Analytics',
        excerpt: 'Exploring how big data is transforming business analytics and decision-making processes.',
        date: '2023-05-20',
        category: 'Big Data',
      },
      {
        id: "2",
        title: 'Machine Learning Applications in Finance',
        excerpt: 'Analyzing the role of machine learning algorithms in financial forecasting and risk management.',
        date: '2023-04-10',
        category: 'Finance',
      },
      {
        id: "3",
        title: 'Data Science for Social Good',
        excerpt: 'Discussing the potential of data science in addressing social and environmental challenges.',
        date: '2023-03-05',
        category: 'Social Impact',
      },
      {
        id: "4",
        title: 'The Future of Artificial Intelligence',
        excerpt: 'Exploring the latest trends and advancements in AI technology and its impact on society.',
        date: '2023-02-01',
        category: 'AI',
      },
    ],
  },
  {
    id: "shivani_budhkar",
    name: "Dr. Shivani Budhkar",
    title: "Professor and Dean of Administration",
    description: "Specialist in Software Engineering, Software Testing, Machine Learning, and Artificial Intelligence",
    department: "MCA",
    avatar: "/images/profiles/shivani_budhkar.jpg",
    email: "shivani.budhkar@moderncoe.edu.in",
    phone: "020-25530968 (Ext-633)",
    linkedin: "",
    twitter: "",
    expertise: [
      "Software Engineering",
      "Software Testing",
      "Machine Learning",
      "Artificial Intelligence",
      "Java Programming",
      "Quality Assurance"
    ],
    about: "I have been deeply passionate about the field of Computer Applications for over 23 years. With a strong academic foundation and diverse professional experience, I specialize in software engineering, software testing, machine learning, artificial intelligence, and related domains. My expertise spans teaching, research, and administrative roles. Currently, I serve as a Professor and Dean of Administration, overseeing ERP implementation and website management, including client-side testing, coordination with vendor teams, curriculum design, course assessment, session planning, mentoring student projects, and conducting research. Additionally, I work as the Accreditation Coordinator for the Master of Computer Applications (MCA) Department. I hold a Ph.D. in Computer Management and have a strong academic background in teaching and research. My contributions to the field include 33 research papers published in international journals and conferences. Beyond academia, I am an efficient administrator, a strong team collaborator, and an effective communicator. I also have extensive experience teaching Java programming and software testing and quality assurance.",
    qualifications: [
      { degree: "Ph.D. in Computer Management", school: "", year: "" },
      { degree: "Master of Computer Application", school: "", year: "" },
      { degree: "Bachelor of Science in Physics", school: "", year: "" }
    ],
    certifications: [
      "Accreditation Coordinator for MCA Department"
    ],
    experience: [
      {
        title: "Professor and Dean of Administration",
        company: "Modern College of Engineering, Pune",
        period: "Present"
      }
    ],
    courses: [
      {
        courseName: "Java Programming",
        courseId: "JAVA101",
        materials: [
          {
            unit: "Java Programming Materials",
            icon: "BookOpen",
            topics: [
              {
                title: "Java IO Stream 1",
                link: "https://drive.google.com/drive/folders/1Zbire1l8x9PBpsc419vh9QgUM5Pxs2dt?usp=sharing"
              },
              {
                title: "Java IO Stream 2",
                link: "https://drive.google.com/drive/folders/1Zbire1l8x9PBpsc419vh9QgUM5Pxs2dt?usp=sharing"
              },
              {
                title: "Java Swing 1",
                link: "https://drive.google.com/drive/folders/1Zbire1l8x9PBpsc419vh9QgUM5Pxs2dt?usp=sharing"
              },
              {
                title: "Java Swing 2",
                link: "https://drive.google.com/drive/folders/1Zbire1l8x9PBpsc419vh9QgUM5Pxs2dt?usp=sharing"
              },
              {
                title: "Applet Tag",
                link: "https://drive.google.com/drive/folders/1Zbire1l8x9PBpsc419vh9QgUM5Pxs2dt?usp=sharing"
              }
            ]
          }
        ]
      },
      {
        courseName: "Software Testing & Quality Assurance",
        courseId: "STQA101",
        materials: [
          {
            unit: "STQA Materials",
            icon: "BookOpen",
            topics: [
              {
                title: "STQA Notes",
                link: "https://drive.google.com/drive/folders/1fLDRH2mP4kbYJtxzXroEHKFxuveePgV7?usp=drive_link"
              }
            ]
          }
        ]
      }
    ],
    research: {
      projects: [
        {
          title: "Fire Swift- An automated fire Extinguisher van",
          description: "Project on automated fire extinguisher system",
          link: ""
        },
        {
          title: "Aatmanirbhar Sinchan Pranali",
          description: "Project on irrigation system",
          link: ""
        },
        {
          title: "Brain Tumor detection",
          description: "Project on medical image processing",
          link: ""
        }
      ],
      publications: [
        {
          title: "The Symbiotic Relationship: Ethernet and the Rise of 5G Networks",
          journal: "International Journal of Scientific Research & Engineering Trends",
          year: 2024,
          link: ""
        },
        {
          title: "Comparative Study of Cloud Security Methods",
          journal: "First International Conference on Recent Trends in Engineering and Technology (RTET-2K24)",
          year: 2024,
          link: ""
        },
        {
          title: "Current Trends in Biometric System Security",
          journal: "First International Conference on Recent Trends in Engineering and Technology (RTET-2K24)",
          year: 2024,
          link: ""
        }
      ]
    },
    outreachActivities: [],
    blogPosts: []
  },
];

