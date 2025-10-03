import { IEvent, IProject } from '@/types';

export const GENERAL_INFO = {
    slogan: 'United By Nerves',
    email: 'plexusclub@gmail.com',
    website: 'https://plexusclub.github.io/',
    college: 'MRCE',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/plexusclub' },
    { name: 'website', url: GENERAL_INFO.website },
];

export const ABOUT_US = `
Plexus is a dynamic initiative aimed at empowering students through a wide range of 
technical, non-technical, and hackathon events. <br/><br/>
With clubs, events, and collaborative opportunities, Plexus strives to nurture talent, 
drive innovation, and unite students under one community: <strong>United By Nerves</strong>.
`;

export const CLUB_ASSOCIATION = [
    {
        name: 'Sai Harshaadithya',
        role: 'President',
        message: 'Our college is a beacon of knowledge, fostering an environment that encourages growth and intellectual curiosity.',
    },
    {
        name: 'Parthiban',
        role: 'Vice President',
        message: 'Our college is a beacon of knowledge, fostering an environment that encourages growth and intellectual curiosity.',
    },
    {
        name: 'B Akilesh',
        role: 'Secretary',
        message: 'Our college is a beacon of knowledge, fostering an environment that encourages growth and intellectual curiosity.',
    },
];

export const MANAGEMENT = [
    {
        name: 'SRI. CH. MAHENDER REDDY',
        role: 'Secretary',
        message: 'As Secretary, I am pleased to introduce Plexus Hub, a dedicated platform for nurturing talent and driving innovation.',
    },
    {
        name: 'DR. CH. BHADRA REDDY',
        role: 'President',
        message: 'As President, I am honored to launch Plexus Hub, a forward-thinking initiative aimed at cultivating innovation and excellence.',
    },
];

export const OUR_COLLEGE = {
    name: 'MRCE',
    description: `
    Our college is a beacon of knowledge, fostering an environment that encourages 
    growth and intellectual curiosity. Plexus is proud to be part of this institution, 
    empowering students to innovate and collaborate.
    `,
};
export const IMAGES = [
    { name: "MGRI", link: "./assets/MRGI.png" },
    { name: "MRCE", link: "./assets/MRCE.png" },
    { name: "Plexus", link: "./assets/Plexus.png" },
];

export const LINKS = [
    { name: "Our Members", link: "/members" },
    { name: "Our Management", link: "/management" },
    { name: "Our College", link: "/college" },
    { name: "Events", link: "/events" },
    { name: "About Us", link: "/about" },
    { name: "Contact Us", link: "/contact" },
    { name: "Clubs", link: "/clubs" },
    { name: "Stories", link: "/stories" },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'TypeScript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Redux',
            icon: '/logo/redux.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'GSAP',
            icon: '/logo/gsap.png',
        },
        {
            name: 'Framer Motion',
            icon: '/logo/framer-motion.png',
        },
        {
            name: 'Sass',
            icon: '/logo/sass.png',
        },
        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'NestJS',
            icon: '/logo/nest.svg',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
        {
            name: 'Prisma',
            icon: '/logo/prisma.png',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
        {
            name: 'AWS',
            icon: '/logo/aws.png',
        },
    ],
};
export const PLEXUS_COMMITTEE = {
    patrons: [
        {
            name: 'Dr. Anantha Raman G. R',
            designation: 'Professor',
            role: 'HOD',
            link: 'https://mrce.in/cse_AI&MLFacultyhome.html',
            icon: ['https://mrce.in/img/facultyimages/DeanIQAC12ar.jpg']
        },
        {
            name: 'Mr. R. Venkatesh',
            designation: 'Assistant Professor',
            role: 'Faculty Coordinator',
            icon: ['https://raw.githubusercontent.com/PlexusClub/PlexusClub.github.io/refs/heads/main/assets/PFP/venki.jpg']
        },
    ],
    clubAssociation: [
        {
            name: 'N Parthiban',
            designation: 'Student',
            role: 'President',
            icon: ['https://raw.githubusercontent.com/PlexusClub/PlexusClub.github.io/refs/heads/main/assets/PFP/parthiban.jpg']
        },
        {
            name: 'Arvind Singh',
            designation: 'Student',
            role: 'Vice President',
            icon: ['https://raw.githubusercontent.com/PlexusClub/PlexusClub.github.io/refs/heads/main/assets/PFP/arvind-singh.jpeg']
        },
        {
            name: 'Aishi Jain',
            designation: 'Student',
            role: 'Secretary',
            icon: ['https://raw.githubusercontent.com/PlexusClub/PlexusClub.github.io/refs/heads/main/assets/PFP/aishi-jain.jpg']
        },
        {
            name: 'R. Dileep Kumar',
            designation: 'Student',
            role: 'Secretary',
            icon: ['https://raw.githubusercontent.com/PlexusClub/PlexusClub.github.io/refs/heads/main/assets/PFP/dileep-kumar.png']
        },
        {
            name: 'Jahnavi',
            designation: 'Student',
            role: 'Joint Secretary',
            icon: ['https://raw.githubusercontent.com/PlexusClub/PlexusClub.github.io/refs/heads/main/assets/PFP/jahnavi.png']
        },
        {
            name: 'Taaha',
            designation: 'Student',
            role: 'Associate Secretary',
            icon: ['https://raw.githubusercontent.com/PlexusClub/PlexusClub.github.io/refs/heads/main/assets/PFP/taaha.png']
        },
        {
            name: 'Druvika',
            designation: 'Student',
            role: 'Member',
            icon: ['https://raw.githubusercontent.com/PlexusClub/PlexusClub.github.io/refs/heads/main/assets/PFP/druvika.png']
        },
        {
            name: 'M Vyshnavi',
            designation: 'Student',
            role: 'Member',
        },
        {
            name: 'Lochani',
            designation: 'Student',
            role: 'Member',
            icon: ['https://raw.githubusercontent.com/PlexusClub/PlexusClub.github.io/refs/heads/main/assets/PFP/lochani.jpeg']
        },
        {
            name: 'Swasthik',
            designation: 'Student',
            role: 'Member',
            icon: ['https://raw.githubusercontent.com/PlexusClub/PlexusClub.github.io/refs/heads/main/assets/PFP/swasthik.png']
        },
        {
            name: 'Vishnu',
            designation: 'Student',
            role: 'Member',
        },
    ],
    clubHeads: [
        {
            name: 'P Guna Ranjan  & R Aksheetha',
            designation: 'Student',
            role: 'Technical Club Head',
            icon: ['https://raw.githubusercontent.com/PlexusClub/PlexusClub.github.io/refs/heads/main/assets/PFP/guna-ranjan.png', 'https://raw.githubusercontent.com/PlexusClub/PlexusClub.github.io/refs/heads/main/assets/PFP/akeheetha.png']
        },
        {
            name: 'E Deepika & G Akshitha',
            designation: 'Students',
            role: 'Non-Technical Club Heads',
            icon: ['https://raw.githubusercontent.com/PlexusClub/PlexusClub.github.io/refs/heads/main/assets/PFP/deepika.jpg', 'https://raw.githubusercontent.com/PlexusClub/PlexusClub.github.io/refs/heads/main/assets/PFP/akshitha.png']
        },
        {
            name: 'B. Arjun & Aarthi',
            designation: 'Students',
            role: 'Social Media Club Heads',
            icon: ['https://raw.githubusercontent.com/PlexusClub/PlexusClub.github.io/refs/heads/main/assets/PFP/arjun.jpg', 'https://raw.githubusercontent.com/PlexusClub/PlexusClub.github.io/refs/heads/main/assets/PFP/aarthi.png']
        },
        {
            name: 'Dimple Yadav & Harsh RB',
            designation: 'Students',
            role: 'Design Club Heads',
            link: 'https://plexusclub.github.io/DesignTeam/',
            icon: ['https://plexusclub.github.io/DesignTeam/resources/members/dimple.png', 'https://harshrb2424.github.io/profile/resources/images/Harsh%20R%20Bagtharia.jpg']
        },
        {
            name: ' G Chareeth Kumar',
            designation: 'Students',
            role: 'Sports Club Heads',
        },
    ],
    coordinators: [
        // Technical Coordinators
        { name: 'Siddappa', role: 'Technical' },
        { name: 'Ramya', role: 'Technical' },
        { name: 'G Ramya', role: 'Technical' },

        // Non-Technical Coordinators
        { name: 'Poojitha', role: 'Non-Technical' },
        { name: 'Nikhil', role: 'Non-Technical' },
        { name: 'Deekshitha', role: 'Non-Technical' },
        { name: 'Chandrakala', role: 'Non-Technical' },
        { name: 'Subhash', role: 'Non-Technical' },
        { name: 'Anmol', role: 'Non-Technical' },
        { name: 'Khyathi', role: 'Non-Technical' },
        { name: 'Pallavi', role: 'Non-Technical' },

        // Design Coordinators
        { name: 'Purushottam', role: 'Design' },
        { name: 'Sruthi', role: 'Design' },
        { name: 'Nidhi', role: 'Design' },
        { name: 'Kevin', role: 'Design' },
        { name: 'Matthew', role: 'Design' },
        { name: 'Rakshitha', role: 'Design' },

        // Social Media Coordinators
        { name: 'Bharath Chandra', role: 'Social Media' },
        { name: 'Sumanth', role: 'Social Media' },
        { name: 'Yashwanth', role: 'Social Media' },

        // Sports Coordinators
        { name: 'Karthikeyan', role: 'Sports' },
        { name: 'Venkatesh', role: 'Sports' },
        { name: 'Nitish', role: 'Sports' },
        { name: 'Chandu', role: 'Sports' },
        { name: 'G Tarun', role: 'Sports' },
    ],

    members: [
        // Technical Members
        { name: 'Lokesh', role: 'Technical' },
        { name: 'Koushil', role: 'Technical' },
        { name: 'Roshan', role: 'Technical' },
        { name: 'Aishwarya', role: 'Technical' },
        { name: 'Nandini', role: 'Technical' },
        { name: 'Atulya', role: 'Technical' },
        { name: 'Harshavardhan', role: 'Technical' },

        // Non-Technical Members
        { name: 'Rayan', role: 'Non-Technical' },
        { name: 'Niharika', role: 'Non-Technical' },
        { name: 'Gretchen', role: 'Non-Technical' },
        { name: 'Triveni', role: 'Non-Technical' },
        { name: 'Virat', role: 'Non-Technical' },
        { name: 'Sameeksha', role: 'Non-Technical' },

        // Design Members
        { name: 'Hymavathi', role: 'Design' },
        { name: 'Malasri', role: 'Design' },
        { name: 'Shikara', role: 'Design' },

        // Social Media Members
        { name: 'Varsha', role: 'Social Media' },
        { name: 'Karthik', role: 'Social Media' },
        { name: 'Abhinav', role: 'Social Media' },
        { name: 'Sriya', role: 'Social Media' },
        { name: 'Triya', role: 'Social Media' },

        // Sports Members
        { name: 'Rohini', role: 'Sports' },
        { name: 'Anil', role: 'Sports' },
        { name: 'Abhiram', role: 'Sports' },
        { name: 'Akshay', role: 'Sports' },
        { name: 'Dayakar', role: 'Sports' },
        { name: 'Rakesh', role: 'Sports' },
        { name: 'Jashwanth', role: 'Sports' },
        { name: 'Shiva Shankar', role: 'Sports' },
    ],
    description: "🏛️ Plexus has been formed for monitoring CSE (AI&ML) Department activities and ensuring holistic student development."
};


export const PROJECTS: IProject[] = [
    {
        title: 'MTI Electronics',
        slug: 'mti-electronics',
        liveUrl: 'https://mti-electronics.vercel.app/',
        year: 2025,
        description: `
      A complete agency portfolio platform built for MTI Electronics to showcase their services, blog content, and product offerings. <br/> <br/>
      
      Key Features:<br/>
      <ul>
        <li>🛠️ Service Display System: Interactive service showcase with synchronized sliders</li>
        <li>✍️ Blog Management: SEO-friendly blog with categorization and search</li>
        <li>🛒 Product Catalog: Organized product display with filtering capabilities</li>
        <li>📱 Fully Responsive: Optimized for all device sizes</li>
        <li>⚡ Fast Performance: Optimized Next.js frontend with ISR (Incremental Static Regeneration)</li>
      </ul><br/>
      
      Technical Highlights:
      <ul>
        <li>Implemented complex slider synchronization logic using Swiper.js</li>
        <li>Customized Payload CMS admin panel for intuitive content management</li>
        <li>Developed reusable UI components with shadcn for design consistency</li>
        <li>Configured efficient data fetching strategies in Next.js</li>
      </ul>
      `,
        role: `
      Full-Stack Developer <br/>
      Owned the entire development lifecycle:
      <ul>
        <li>✅ Backend: Configured Payload CMS with custom collections for services, blogs, and products</li>
        <li>🎨 Frontend: Built all UI components using Tailwind CSS and shadcn</li>
        <li>🔄 State Management: Implemented client-side data fetching and caching</li>
        <li>🖥️ CMS Customization: Created admin interfaces for content editors</li>
        <li>🚀 Deployment: Set up CI/CD pipeline for Vercel hosting</li>
        <li>🧩 Third-Party Integration: Added Swiper.js for interactive sliders</li>
      </ul>
      `,
        techStack: [
            'Next.js',
            'Payload CMS',
            'Tailwind CSS',
            'shadcn',
            'Swiper.js',
            'React Hook Form',
            'Vercel',
        ],
        thumbnail: '/projects/thumbnail/mti-electronics.webp',
        longThumbnail: '/projects/long/mti-electronics.webp',
        images: [
            '/projects/images/mti-electronics-1.webp',
            '/projects/images/mti-electronics-2.webp',
        ],
    },
    {
        title: 'Epikcart',
        slug: 'epikcart',
        techStack: [
            'React',
            'Redux',
            'React i18n',
            'Tailwind CSS',
            'Framer Motion',
            'debouncing',
            'Api Integration',
        ],
        thumbnail: '/projects/thumbnail/epikcart.jpg',
        longThumbnail: '/projects/long/epikcart.jpg',
        images: [
            '/projects/images/epikcart-1.png',
            '/projects/images/epikcart-2.png',
            '/projects/images/epikcart-3.png',
            '/projects/images/epikcart-4.png',
            '/projects/images/epikcart-5.png',
        ],
        liveUrl: 'https://demo.epikcart.siphertech.com/',
        year: 2023,
        description: `Epikcart is a feature-rich, scalable e-commerce platform tailored for large businesses. It features dynamic product filtering, multi-language support with RTL, advanced inventory management, order tracking, and refund systems, offering a comprehensive solution for multi-vendor operations.`,
        role: `As the frontend developer in a team of five, I: <br/>
        - Built the frontend from scratch using React, Redux, RTK Query, and Tailwind CSS.<br/>
        - Developed dynamic filtering logic for the product search page with admin-configurable parameters.<br/>
        - Integrated multi-language support with React i18n, including RTL handling.<br/>
        - Delivered a responsive, user-friendly interface in collaboration with the UI/UX designer.`,
    },
    {
        title: 'Resume Roaster',
        slug: 'resume-roaster',
        techStack: [
            'GPT-4',
            'Next.js',
            'Postgressql',
            'Prisma',
            'Tailwind CSS',
        ],
        thumbnail: '/projects/thumbnail/resume-roaster.jpg',
        longThumbnail: '/projects/long/resume-roaster.jpg',
        images: [
            '/projects/images/resume-roaster-1.png',
            '/projects/images/resume-roaster-2.png',
            '/projects/images/resume-roaster-3.png',
        ],
        liveUrl: 'https://resume-roaster.vercel.app/',
        year: 2023,
        description:
            'Resume Roaster is a web application designed to provide tailored resume feedback and professional writing services. Built with Next.js, PostgreSQL, Prisma, and Tailwind CSS, it integrates GPT-4 for AI-powered recommendations. The platform also includes peer-to-peer reviews with a points-based system, fostering a collaborative and engaging experience. Targeting freshers, experienced professionals, and programmers, it helps optimize resumes for job-specific success.',
        role: `As the sole developer and business owner, I:<br/>
        - Designed and developed the platform end-to-end using Next.js, PostgreSQL, Prisma, and Tailwind CSS.<br/>
        - Integrated GPT-4 for AI-driven feedback and insights.<br/>
        - Implemented complex SQL queries, including one to identify the top two resumes based on user points.`,
    },
    {
        title: 'Real Estate',
        slug: 'property-pro',
        techStack: [
            'React.js',
            'Redux',
            'Tailwind CSS',
            'React i18n',
            'Framer Motion',
        ],
        thumbnail: '/projects/thumbnail/property-pro.jpg',
        longThumbnail: '/projects/long/property-pro.jpg',
        images: [
            '/projects/images/property-pro-1.png',
            '/projects/images/property-pro-2.png',
            '/projects/images/property-pro-3.png',
        ],
        liveUrl: 'https://demo.propertypro.siphertech.com/',
        year: 2023,
        description:
            'PropertyPro is a real estate management platform offering users a seamless experience to explore, manage, and view property listings. The application emphasizes accessibility and responsive design, ensuring a smooth interface across devices.',
        role: `As the frontend developer, I:<br/>
        - Built the frontend using React, Redux, RTK Query, Framer Motion, and Tailwind CSS.<br/>
        - Integrated dynamic state management for efficient handling of property data.<br/>
        - Implemented multi-language support with React i18n to cater to diverse audiences.<br/>
        - Enhanced user interaction with animations and transitions using Framer Motion.`,
    },
    {
        title: 'Consulting Finance',
        slug: 'crenotive',
        techStack: ['HTML', 'CSS & SCSS', 'Javascript', 'Bootstrap'],
        thumbnail: '/projects/thumbnail/consulting-finance.jpg',
        longThumbnail: '/projects/long/consulting-finance.jpg',
        images: [
            '/projects/images/consulting-finance-1.png',
            '/projects/images/consulting-finance-2.png',
            '/projects/images/consulting-finance-3.png',
        ],
        sourceCode: 'https://github.com/Tajmirul/crenotive',
        liveUrl: 'https://crenotive.netlify.app/',
        year: 2023,
        description:
            'I developed Crenotive, a portfolio website using Html, SASS, and jQuery to showcase services and expertise. The design focuses on responsive user experience and effective presentation of professional achievements.',
        role: ``,
    },
    {
        title: 'devLinks',
        slug: 'devLinks',
        techStack: ['Next.js', 'Formik', 'Drag & Drop', 'Tailwind CSS'],
        thumbnail: '/projects/thumbnail/devLinks.jpg',
        longThumbnail: '/projects/long/devLinks.jpg',
        images: [
            '/projects/images/devLinks-1.png',
            '/projects/images/devLinks-2.png',
            '/projects/images/devLinks-3.png',
        ],
        sourceCode: 'https://github.com/Tajmirul/devsLink',
        liveUrl: 'https://devlinks-demo.vercel.app/auth/signin',
        year: 2023,
        description: `One of the most challenging projects in Frontend Mentor.<br/><br/>

            I developed a LinkSharing App as part of the Frontend Mentor challenge, utilizing React, Redux, and Tailwind CSS to create a responsive and feature-rich platform. The app allows users to share, save, and explore links, with a focus on intuitive design and smooth navigation. Advanced state management ensures efficient data handling for user interactions.`,
        role: ``,
    },
];

export const EVENTS: IEvent[] = [
    // {
    //     title: 'Figma Workshop',
    //     year: 2025,
    //     month: 3,
    //     link: "",
    //     description: 'This is a 3-day Figma UI/UX Workshop agenda covering everything from basic UI/UX principles to prototyping and team collaboration. Participants will learn how to master visual design, create interactive prototypes, and work on a final project.',
    //     role: 'Coordinated by Design Team Plexus',
    //     tags: ['UI/UX', 'Workshop', 'Figma', 'Design'],
    //     thumbnail: 'https://cdn.prod.website-files.com/59e16042ec229e00016d3a66/64309e7ce733f37f0a4c0880_Figma-rebrand-assets_Blog-hero.webp',
    //     longThumbnail: 'https://cdn.prod.website-files.com/59e16042ec229e00016d3a66/64309e7ce733f37f0a4c0880_Figma-rebrand-assets_Blog-hero.webp',
    //     images: ['https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg'],
    // },
    {
        title: 'MISSION: ZERO BUG',
        year: 2025,
        month: 9,
        link: "https://www.instagram.com/p/DObK-hQE3dg/?img_index=1",
        description: 'An electrifying coding battle with three intense levels: Quick Fixes, Logic Traps, and a Final Showdown. This debugging challenge, presented on Engineer’s Day, is for teams of two to test their speed, survival, and brainpower in a thrilling coding arena.',
        role: 'Presented by Department of CSE (AI & ML) in association with PLEXUS',
        tags: ['Coding', 'Debugging', 'Technical', 'Competition'],
        thumbnail: 'https://raw.githubusercontent.com/PlexusClub/events/refs/heads/main/images/zero-bug.png',
        longThumbnail: 'https://raw.githubusercontent.com/PlexusClub/events/refs/heads/main/images/zero-bug-poster.png',
        images: [],
    },
    {
        title: 'VERBO FIESTA - An Exciting Verbal Arena',
        year: 2025,
        month: 3,
        link: "https://www.instagram.com/p/DHNWgwXyi2f/",
        description: 'VERBO FIESTA is a thrilling verbal showdown with events like a Debate Competition, "Commercial Time," "Word Weave," and "JAM" (Just a Minute). It aims to promote verbal dexterity, critical thinking, creativity, and teamwork through fun and competitive challenges.',
        role: 'Coordinated by PLEXUS - Non-Technical Club',
        tags: ['Verbal', 'Debate', 'Communication', 'Non-Technical'],
        thumbnail: 'https://plexusclub.github.io/events/images/verbofita.png',
        longThumbnail: 'https://raw.githubusercontent.com/PlexusClub/events/refs/heads/main/images/verbofita-poster.png',
        images: [],
    },
    {
        title: 'Code-Con: The Ultimate Tech Challenge',
        year: 2025,
        month: 3,
        link: "https://www.instagram.com/p/DHNWZIzSWfo/",
        description: 'Code-Con is a progressive tech challenge with rounds like "Tech Trivia," "Time Trial," and "The Conquest." It empowers students to work under pressure, solve problems, and increase their domain knowledge in C-language and Python.',
        role: 'Coordinated by PLEXUS - Technical Club',
        tags: ['Coding', 'Technical', 'Challenge', 'Python', 'C Language'],
        thumbnail: 'https://plexusclub.github.io/events/images/codecon.png',
        longThumbnail: 'https://raw.githubusercontent.com/PlexusClub/events/refs/heads/main/images/codecon-poster.png',
        images: [],
    },
];


export const CLUBS = [
    {
        name: 'Technical Club',
        description: 'Encourages innovation through hackathons, workshops, paper presentations, and collaborative projects.',
    },
    {
        name: 'Non-Technical Club',
        description: 'Focuses on debates, JAM sessions, arts, crafts, cultural programs, and talent shows.',
    },
    {
        name: 'Sports & Esports Club',
        description: 'Encourages physical fitness and mental sharpness through outdoor games, indoor tournaments, and esports competitions.',
    },
    {
        name: 'Social Media Club',
        description: 'Handles promotions, manages official social handles, creates engaging content, and ensures outreach.',
    },
    {
        name: 'Design Club',
        description: 'Responsible for posters, reels, event branding, and creative media production.',
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Technical Club',
        company: '',
        duration: 'Encourages innovation through hackathons, workshops, paper presentations, and collaborative projects.',
    },
    {
        title: 'Non-Technical Club',
        company: '',
        duration: 'Focuses on debates, JAM sessions, arts, crafts, cultural programs, and talent shows.',
    },
    {
        title: 'Sports & Esports Club',
        company: '',
        duration: 'Encourages physical fitness and mental sharpness through outdoor games, indoor tournaments, and esports competitions.',
    },
    {
        title: 'Social Media Club',
        company: '',
        duration: 'Handles promotions, manages official social handles, creates engaging content, and ensures outreach.',
    },
    {
        title: 'Design Club',
        company: '',
        duration: 'Responsible for posters, reels, event branding, and creative media production.',
    },
];