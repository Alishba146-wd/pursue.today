"use client";

import { useState } from "react";
import { Button } from "@/components/common/button";

const jobs = [
  {
    id: 1,
    title: "Marketing Manager",
    department: "SaaS Growth & Revenue Generation",
    type: "Full-Time - In Office",
    email: "farzeen@pursue.today",
    description: "We're seeking a results-driven Marketing Manager with a proven track record of scaling SaaS products in startup environments. You will lead campaigns, own revenue-driven marketing strategies, and collaborate with sales/product teams to accelerate GoCustomer's market penetration.\n\nGoCustomer.ai is a fast-growing AI-powered customer acquisition platform that helps businesses scale hyper-personalized outreach, optimize customer journeys, and drive revenue.",
    responsibilities: [
      "Revenue-Focused Campaign Strategy: Design and execute multi-channel campaigns (email, LinkedIn, webinars, paid ads) to drive pipeline growth, conversions, and ARR. Own KPIs: CAC reduction, lead-to-customer conversion rates, and revenue attribution.",
      "Product Launches & Go-to-Market Execution: Lead end-to-end launches for new AI features (e.g., Email Recipe Library, deliverability tools). Partner with product teams to translate technical capabilities into customer-centric messaging.",
      "Startup-Scale Growth Hacking: Identify and test high-impact growth channels (e.g., partnerships, affiliate programs, viral loops). Leverage data to iterate campaigns rapidly and allocate budgets for maximum ROI.",
      "Content & Demand Generation: Oversee creation of case studies, whitepapers, and sales collateral that highlight ROI for SaaS/startup audiences. Build SEO-driven content frameworks to dominate keywords in AI sales automation.",
      "Analytics & Optimization: Track campaign performance using HubSpot, Google Analytics, and custom dashboards. Report on metrics weekly to leadership, with actionable insights to refine strategies.",
      "Market & Competitor Intelligence: Monitor trends in AI marketing tools (e.g., Lavender AI, Outreach) to identify differentiation opportunities.",
    ],
    requirements: [
      "Proven success launching products and hitting revenue targets (e.g., \"Grew ARR by 200% in 12 months through paid social campaigns and organic efforts\").",
      "Expertise in marketing automation tools (HubSpot, Marketo), CRM integration (Salesforce), and analytics platforms.",
      "Strong grasp of SaaS metrics (LTV:CAC, churn reduction, funnel optimization).",
      "Startup DNA: Thrives in ambiguity, prioritizes ruthlessly, and executes with limited resources.",
      "Experience with AI/ML-driven marketing tools (e.g., ChatGPT for content, predictive lead scoring).",
      "Background in scaling PLG (product-led growth) motions for SaaS.",
      "Familiarity with Series A/B startup environments.",
    ],
    qualifications: "Bachelor's degree in Marketing, Business, or a related field",
    experience: "5+ years in SaaS marketing, with a focus on B2B/startup environments.",
    howToApply: "If you meet the criteria, feel free to drop the following at farzeen@pursue.today:\n• Your Resume\n• 1-paragraph cover letter explaining your biggest SaaS marketing win\n• 2–3 examples of campaigns you've driven (e.g., case study links, metrics screenshots)",
  },
  {
    id: 2,
    title: "Quality Assurance Intern",
    department: "Engineering",
    type: "Full-Time - In Office",
    email: "farzeen@pursue.today",
    description: "We are seeking a motivated and detail-oriented Quality Assurance (QA) Intern to join our team. This internship provides an excellent opportunity to gain hands-on experience in software quality assurance and learn from experienced professionals. The QA Intern will assist in the testing and validation of our software products, ensuring they meet the highest quality standards.",
    responsibilities: [
      "Support the QA team in performing manual and automated testing on software applications to identify defects and ensure functionality",
      "Help create, document, and execute test plans, test cases, and test scripts based on project requirements and specifications",
      "Assist in identifying, documenting, and tracking software defects using appropriate tools, providing clear and detailed reports for the development team",
      "Work closely with QA analysts, developers, and product managers to understand project requirements and provide feedback",
      "Assist in creating and maintaining documentation related to testing processes, procedures, and outcomes",
      "Gain knowledge of QA methodologies, tools, and best practices, and apply them in a real-world setting",
    ],
    requirements: [
      "Understanding of software development lifecycle (SDLC) and basic QA concepts",
      "Familiarity with programming languages such as Java, Python, or similar is a plus",
      "Basic knowledge of QA tools like Selenium, JIRA, or similar is advantageous",
      "Strong analytical and problem-solving skills",
      "Excellent attention to detail",
      "Good communication and interpersonal skills",
      "Ability to work well both independently and as part of a team",
      "Any previous projects or practical experience in software testing or development is a plus",
    ],
    qualifications: "Bachelor's degree or equivalent experience in Computer Science or related field",
    experience: "Fresh to 6 months of experience in the relevant field",
    howToApply: "It's a full-time role. If you meet the criteria, apply away. You may drop your resume at farzeen@pursue.today.",
  },
  {
    id: 3,
    title: "Quality Assurance Analyst",
    department: "Engineering",
    type: "Full-Time - In Office",
    email: "farzeen@pursue.today",
    description: "We are seeking a meticulous and dedicated Quality Assurance (QA) Analyst to join our team. The QA Analyst will be responsible for ensuring that our products meet the highest quality standards by conducting thorough testing and analysis. This role involves collaborating with cross-functional teams to identify and resolve issues, improve processes, and ensure the delivery of high-quality software solutions.",
    responsibilities: [
      "Develop, document and execute test plans to ensure that all objectives are met",
      "Implement and monitor test scripts to assess functionality, reliability, performance, and quality of the service or product",
      "Identify and remedy defects within the production process",
      "Recommend, implement, and monitor preventative and corrective actions to ensure that quality assurance standards are achieved",
      "Work closely with developers, product managers, and other stakeholders to understand requirements, provide feedback, and ensure smooth project progression",
      "Ensure that user expectations are met during the testing process",
      "Contribute to the continuous improvement of QA processes and methodologies to enhance product quality and testing efficiency",
      "Investigate customer complaints and product issues",
      "Ensure ongoing compliance with quality and industry regulatory requirements",
    ],
    requirements: [
      "Knowledge of a broad range of software applications and of hardware and networks",
      "Strong programming knowledge",
      "A good understanding of business",
      "Ability to think in the abstract and see how small details fit into the bigger picture",
      "A creative mindset and the ability to approach a problem creatively",
      "Good communications skills, both written and verbal",
      "Ability to use logic and reasoning to identify the strengths and weaknesses of IT systems",
      "Strong computer skills and knowledge of QA databases and applications",
      "Proficient with programming/scripting languages such as JavaScript, Python, etc",
      "Experience with Selenium or any other UI automation tool",
      "Solid experience with CI/CD for automated tests",
      "Solid experience automation test cases (unit, e2e, integration, performance etc)",
      "Ability to work both independently and as part of a team",
      "Excellent attention to detail",
    ],
    qualifications: "Bachelor's degree in Computer Science or related field",
    experience: "At least 2 - 3 years of experience in the relevant field",
    howToApply: "It's a full-time role. If you fulfill the criteria, apply away. You may drop your resume at farzeen@pursue.today.",
  },
  {
    id: 4,
    title: "HR Intern",
    department: "Human Resources",
    type: "Full-Time - In Office",
    email: "farzeen@pursue.today",
    description: "We are seeking a dynamic and motivated HR Intern to join our team. The HR Intern will have the opportunity to gain valuable hands-on experience in various aspects of human resources, including recruitment, onboarding, employee relations, and HR administration. This internship offers an excellent opportunity for individuals interested in pursuing a career in HR to develop essential skills and knowledge in a supportive and collaborative work environment.",
    responsibilities: [
      "Assist in the recruitment process by posting job openings, screening resumes, scheduling interviews, and communicating with candidates",
      "Support the onboarding process for new hires, including preparing orientation materials, conducting orientation sessions, and ensuring a smooth transition for new employees",
      "Assist with HR administrative tasks, such as maintaining employee records, updating HR databases, and preparing HR-related documents",
      "Contribute to employee engagement initiatives, including organizing company events, employee recognition programs, and wellness activities",
      "Assist in conducting employee surveys and analyzing feedback to identify trends and areas for improvement",
      "Provide support in employee relations matters, including assisting with conflict resolution, disciplinary actions, and performance management processes",
      "Collaborate with HR team members on special projects and initiatives to support the overall goals of the HR department",
    ],
    requirements: [
      "Strong interest in pursuing a career in Human Resources",
      "Excellent communication and interpersonal skills",
      "Detail-oriented with strong organizational skills",
      "Ability to maintain confidentiality and handle sensitive information with discretion",
      "Proactive attitude and ability to take initiative",
      "Proficiency in MS Office applications, including Word, Excel, and PowerPoint",
      "Ability to effectively learn and acquire new knowledge and skills",
    ],
    qualifications: "Currently pursuing a degree or graduate in Management Sciences, Business Administration, or related field",
    experience: "3 months internship, with the potential for a full-time role based on performance",
    howToApply: "It's a full-time, office-based role. If you fulfill the criteria, apply away. You may drop your resume at farzeen@pursue.today.",
  },
  {
    id: 5,
    title: "PMO Intern",
    department: "Project Management",
    type: "Full-Time - In Office",
    email: "farzeen@pursue.today",
    description: "We are looking for a proactive and detail-oriented PMO (Project Management Office) Intern to join our team for a 3-month internship. The PMO Intern will have the opportunity to gain hands-on experience in project management methodologies, processes, and tools. This internship offers an excellent opportunity for individuals interested in pursuing a career in project management to develop essential skills and knowledge in a dynamic work environment.",
    responsibilities: [
      "Assist in the development and maintenance of project management processes and standards",
      "Support project managers in project planning, execution, monitoring, and reporting",
      "Assist in creating and maintaining project documentation, including project plans, status reports, and meeting minutes",
      "Coordinate meetings and workshops, including scheduling, agenda preparation, and minute-taking",
      "Collaborate with cross-functional teams to gather project information and updates",
      "Assist in analyzing project data and generating reports to track project progress and performance",
      "Contribute to the continuous improvement of project management practices and tools",
      "Support ad-hoc PMO initiatives and projects as assigned",
    ],
    requirements: [
      "Strong interest in pursuing a career in Project Management or related fields",
      "Excellent organizational and time management skills",
      "Strong attention to detail and accuracy",
      "Effective communication and interpersonal skills",
      "Ability to work both independently and as part of a team",
      "Proficiency in Microsoft Office applications, especially Excel, Word, and PowerPoint",
      "Familiarity with project management tools and methodologies is a plus",
    ],
    qualifications: "Currently pursuing a degree in Project Management, Business Administration, or related field",
    experience: "3 months internship, with the potential for a full-time role based on performance",
    howToApply: "It's a full-time, office-based role. If you fulfill the criteria, apply away. You may drop your resume at farzeen@pursue.today.",
  },
  {
    id: 6,
    title: "Pricing Analyst",
    department: "Finance & Analytics",
    type: "Full-Time - Remote",
    email: "farzeen@pursue.today",
    description: "We are seeking an experienced Pricing Analyst to join our team. The Pricing Analyst will be responsible for assessing data from a variety of sources to gain insights into pricing strategies and market trends. You will work closely with the Director of Pricing based in the US and will be required to work full-time in US timings.",
    responsibilities: [
      "Analyzing competitor pricing and market trends to increase market share and profitability",
      "Tracking customer engagement to develop effective pricing strategies for products and offerings",
      "Applying statistical modeling methods to determine the potential impact of pricing strategies on profitability",
      "Recommending pricing strategies that align closely with market trends and identifying new market segments",
      "Forecasting revenue and market share based on market trends, production costs, profit margins, and sales volumes",
      "Collaborating with sales and marketing departments on developing and implementing competitive pricing strategies",
      "Developing dynamic pricing tools to effectively respond to changing market needs and trends",
      "Preparing and presenting pricing analysis findings to executives, marketing teams, and sales staff",
      "Keeping informed on pricing analysis methods and industry trends",
    ],
    requirements: [
      "In-depth knowledge of statistical methods and data analysis",
      "Extensive experience in analyzing pricing strategies and forecasting revenue and market share",
      "Experience in collaborating on pricing strategies with sales and marketing departments",
      "Ability to keep abreast of industry trends and develop dynamic pricing tools",
      "Advanced ability to present pricing analysis reports to relevant stakeholders",
      "Excellent analytical and communication skills",
      "Critical thinking, self-starter, ability to be a decision maker",
      "Collaborate effectively across teams - specially sales/Fulfillment",
      "Opportunity and/or trend identification/analysis",
      "Report creation capabilities",
      "Intermediate Proficiency in excel: vlookup, pivot tables, Index+match, nested if statements, array, potentially light macros/VBA",
      "Prior Pricing Experience is mandatory",
      "Merchandising background is a secondary preference",
      "Competitive data analysis Experience",
      "Ability to deliver tasks on strict timelines",
      "Ability to improve/simplify processes",
    ],
    qualifications: "A bachelor's degree in mathematics, statistics, finance, economics, or in a related field",
    experience: "At least 2 years of experience in the relevant field",
    howToApply: "It's a full-time, remote role. You will have to work full-time in US timings.",
  },
  {
    id: 7,
    title: "SEO Specialist",
    department: "Marketing",
    type: "Full-Time - In Office",
    email: "farzeen@pursue.today",
    description: "The ideal candidate will analyze, review, and implement changes to websites so they are optimized for search engines. This candidate will be able to implement actionable strategies that will improve site visibility.",
    responsibilities: [
      "Perform keyword research and competitive analysis",
      "Understand and implement technical SEO audits and changes",
      "Execute on-page optimizations",
      "Implement changes in content management systems (CMS)",
      "Manage content production by planning content calendars, managing writers (or collaborating with content writing teams), and supporting them on SEO",
      "Devise and execute methods to track, report, analyze and improve SEO performance",
      "Collaborate with SEO managers and other in-house marketing teams",
      "Collaborate with developers and product teams to implement necessary features and changes",
      "Develop new SEO tests and strategies",
      "Plan and execute offsite SEO campaigns to build high-quality backlinks",
      "Present and communicate SEO strategies and projects to clients and/or internal stakeholders",
      "Serve as the key SEO expert/advocate",
      "Keep up-to-date with latest SEO trends, strategies and algorithm changes",
    ],
    requirements: [
      "Good understanding of SEO best practices",
      "Ability to create, justify, communicate and implement SEO strategies",
      "Data-driven and analytical mindset",
      "Attention to detail",
      "Project management skills",
      "Familiarity with email marketing concepts is a plus",
    ],
    qualifications: "Bachelor's degree in Marketing, Communications, Management Sciences or related field",
    experience: "At least 2 years of technical experience working in SEO",
    howToApply: "It's a full-time, office-based role. If you fulfill the criteria, apply away.",
  },
  {
    id: 8,
    title: ".NET Developer",
    department: "Engineering",
    type: "Full-Time - In Office",
    email: "farzeen@pursue.today",
    description: "The ideal candidate will be familiar with the full software design life cycle. They should have experience in designing, coding, testing and consistently managing applications. They should be comfortable coding in a number of languages and have the ability to test code in order to maintain high-quality code.",
    responsibilities: [
      "Develop documentation throughout the software development life cycle (SDLC)",
      "Serve as an expert on applications and provide technical support",
      "Utilizing Microsoft's .NET infrastructure to create software solutions that meet clients' requirements",
      "Collaborating with coworkers to facilitate the creation of large, complex developments, as required",
      "Reformulating existing code to ensure adherence to stipulated guidelines",
      "Checking your code to detect and remedy errors and omissions",
      "Testing your outputs to ensure that they are in excellent working order",
      "Ensuring that outputs are visually appealing, user-friendly, and engaging",
      "Deploying developments and monitoring uptake by the target audience",
      "Using clients' feedback to inform the creation of subsequent versions of each development",
      "Remaining abreast of coding and technological changes that will impact your work",
    ],
    requirements: [
      "Proven experience as a .NET Developer or Application Developer",
      "Familiarity with the ASP.NET framework, SQL Server, and design/architectural patterns (e.g. Model-View-Controller (MVC))",
      "Knowledge of at least one of the .NET languages (e.g. C#, Visual Basic, .NET) and HTML5/CSS3",
      "Familiarity with architecture styles/APIs (REST, RPC)",
      "Understanding of Agile methodologies",
      "Experience with client-side web technologies such as HTML, CSS, and JavaScript/jQuery",
      "Excellent troubleshooting and communication skills",
      "Attention to detail",
      "Experience working in an agile development environment",
    ],
    qualifications: "Bachelor's degree or equivalent experience in Computer Science or related field",
    experience: "2 - 3 years of experience working with .NET or relevant experiences",
    howToApply: "It's a full-time, office-based role. If you fulfill the criteria, apply away.",
  },
  {
    id: 9,
    title: "LAMP Developer",
    department: "Engineering",
    type: "Full-Time - In Office",
    email: "farzeen@pursue.today",
    description: "The ideal candidate will be responsible for developing high-quality applications. They will also be responsible for designing and implementing testable and scalable code.",
    responsibilities: [
      "Collaborate with cross-functional teams to gather and analyze project requirements",
      "Design, develop, test, and deploy web applications using the LAMP stack",
      "Write clean, efficient, and maintainable code following industry best practices",
      "Troubleshoot and debug issues to ensure the smooth functioning of web applications",
      "Perform code reviews and provide constructive feedback to team members",
      "Optimize application performance and scalability",
      "Collaborate with front-end developers to integrate user-facing elements with server-side logic",
      "Develop and maintain database schemas and optimize SQL queries",
      "Keep up-to-date with emerging web technologies and frameworks, and apply them to enhance development processes",
      "Document technical specifications, project requirements, and system architecture",
    ],
    requirements: [
      "Well-versed in OOAD, Design Patterns, and Application framework development",
      "Well-skilled in API Design, Development, and integration (of the 3rd party available)",
      "Well interacted with SQL and relational databases",
      "Possess sufficient knowledge in designing multi-component / multi-server deployments of a solution",
      "Proficient in debugging skills",
      "Knowledge in PHP and LAMP stack will be given preference",
      "Familiarity with front-end technologies such as HTML, CSS, and JavaScript",
    ],
    qualifications: "Bachelor's degree or equivalent experience in Computer Science or related field",
    experience: "At least 2-3 years of experience as a LAMP Stack Developer or similar role",
    howToApply: "It's a full-time, office-based role. If you fulfill the criteria, apply away.",
  },
  {
    id: 10,
    title: "Python Developer",
    department: "Engineering",
    type: "Full-Time - In Office",
    email: "farzeen@pursue.today",
    description: "The ideal candidate will be responsible for developing high-quality applications. They will also be responsible for designing and implementing testable and scalable code.",
    responsibilities: [
      "Design and implement robust applications",
      "Implement security and data protection",
      "Assess and prioritize feature requests",
      "Develop back-end components to improve responsiveness and overall performance",
      "Implement security and data protection solutions",
      "Write effective, scalable code",
      "Able to work with minimum supervision and complete the deadlines",
    ],
    requirements: [
      "Candidates must have expertise in at least one Python framework (like Django, Flask or FAST API)",
      "Strong proficiency of code versioning tools such as Git, Mercurial or SVN",
      "Working experience of server-side templating languages such as Jinja 2, Mako",
      "Must have proficient understanding of object-relational mapping (ORM)",
      "Candidates must have a strong hold over front-end technologies (JavaScript, React and HTML5)",
      "Knowledge of databases (SQL, NoSQL)",
      "Experience with integration of user-facing elements with server-side logic in collaboration with front-end developers",
      "In-depth knowledge of popular Python libraries and frameworks",
      "Must have strong unit test and debugging skills",
      "Analytical mind with problem-solving aptitude",
    ],
    qualifications: "Bachelor's degree or equivalent experience in Computer Science or related field",
    experience: "At least 2+ years work experience in any Python web framework, like Django, Flask, or Pyramid",
    howToApply: "It's a full-time, office-based role. If you fulfill the criteria, apply away. You may drop your resume at farzeen@pursue.today.",
  },
  {
    id: 11,
    title: "Junior MERN Stack Developer",
    department: "Engineering",
    type: "Full-Time - In Office",
    email: "farzeen@pursue.today",
    description: "The ideal candidate will be responsible for developing high-quality applications. They will also be responsible for designing and implementing testable and scalable code.",
    responsibilities: [
      "Able to work under supervision and adhere to deadlines",
      "Analytical mind with problem-solving aptitude",
      "Automate tasks through appropriate tools and scripting",
      "Review and debug code",
      "Must have a knack for developing front-end and custom components in JavaScript",
      "Familiarity with MongoDB, NodeJS, Express, and React is a big plus",
      "Knowledge of JavaScript, HTML5, and CSS (Including common CSS framework)",
      "Knowledge of relational databases (e.g. MySQL, PostgreSQL) and NoSQL databases (e.g. MongoDB)",
      "Familiarity with RESTful principles",
    ],
    requirements: [
      "Knowledge of JavaScript, HTML5, and CSS (Including common CSS framework)",
      "Familiarity with MongoDB, NodeJS, Express, and React",
      "Knowledge of relational databases (e.g. MySQL, PostgreSQL) and NoSQL databases (e.g. MongoDB)",
      "Familiarity with RESTful principles",
      "Analytical mind with problem-solving aptitude",
      "Ability to work under supervision and adhere to deadlines",
    ],
    qualifications: "Bachelor's degree or equivalent experience in Computer Science or related field",
    experience: "Fresh or 5-6 months of experience in relevant field",
    howToApply: "It's a full-time, office-based role. If you meet the criteria, apply away. You may drop your resume at farzeen@pursue.today.",
    benefits: [
      "Flexible Hours",
      "Family Treats",
      "Annual Retreats",
      "Performance based Bi-annual Bonuses",
      "Health Insurance",
      "Insane Learning",
      "Indoor gaming",
      "Tea on the house",
    ],
  },
  {
    id: 12,
    title: "Talent Acquisition Specialist",
    department: "Human Resources",
    type: "Full-Time - Hybrid",
    email: "farzeen@pursue.today",
    description: "We are seeking a Talent Acquisition Specialist to join our team. This role involves coordinating with hiring managers to identify staffing needs, sourcing potential candidates, and leading employer branding initiatives.",
    responsibilities: [
      "Coordinate with hiring managers to identify staffing needs",
      "Determine selection criteria",
      "Source potential candidates through online channels (e.g. social platforms and professional networks)",
      "Plan interview and selection procedures, including screening calls, assessments and in-person interviews",
      "Assess candidate information, including resumes and contact details, using Applicant Tracking System",
      "Design job descriptions and interview questions that reflect each position's requirements",
      "Lead employer branding initiatives",
      "Organize and attend job fairs and recruitment events",
      "Forecast quarterly and annual hiring needs by department",
      "Foster long-term relationships with past applicants and potential candidates",
    ],
    requirements: [
      "Proven work experience as a Talent Acquisition Specialist or similar role",
      "Familiarity with social media, resume databases and professional networks",
      "Hands-on experience with full-cycle recruiting using various interview techniques and evaluation methods",
      "Knowledge of Applicant Tracking Systems (ATS)",
      "A keen understanding of the differences between various roles within organizations",
      "Excellent verbal and written communication skills",
    ],
    qualifications: "BSc in Human Resources Management or relevant field",
    experience: "6 months to 1 year of experience in the relevant field",
    howToApply: "It's a full-time role. You may work remotely, however, required to come to the office in the beginning. If you fulfill the criteria, apply away.",
  },
  {
    id: 13,
    title: "UI/UX Designer",
    department: "Design",
    type: "Full-Time - Hybrid",
    email: "farzeen@pursue.today",
    description: "We are seeking a talented UI/UX Designer to create user-centered designs by understanding business requirements and user feedback. The ideal candidate will create user flows, wireframes, prototypes and mockups while collaborating effectively with product, engineering, and management teams.",
    responsibilities: [
      "Creating user-centered designs by understanding business requirements, and user feedback",
      "Creating user flows, wireframes, prototypes and mockups",
      "Translating requirements into style guides, design systems, design patterns and attractive user interfaces",
      "Designing UI elements such as input controls, navigational components and informational components",
      "Creating original graphic designs (e.g. images, sketches and tables)",
      "Identifying and troubleshooting UX problems (e.g. responsiveness)",
      "Collaborating effectively with product, engineering, and management teams",
      "Incorporating customer feedback, usage metrics, and usability findings into design in order to enhance user experience",
    ],
    requirements: [
      "Prior experience as a UI/UX Designer as well as a strong portfolio of related projects",
      "Proficiency in Adobe Creative Suite (specifically Illustrator, InDesign and Photoshop)",
      "Proficiency in prototyping tools such as Figma, Sketch, InVision, etc.",
      "Basic HTML5, CSS3, and JavaScript skills are a plus",
      "Excellent attention to detail and a keen eye for aesthetics",
      "Excellent documentation skills",
      "Ability to articulate your ideas, designs, and suggestions",
      "Working Knowledge of Front end to communicate effectively with Devs",
      "Self Starter",
    ],
    qualifications: "A degree/diploma in Design, Fine Arts, Engineering or related field",
    experience: "At least 1 year of experience in the relevant field",
    howToApply: "It's a full-time role. You may work remotely, however, required to come to the office in the beginning. If you fulfill the criteria, apply away.",
  },
  {
    id: 14,
    title: "Graphic Designer",
    department: "Design",
    type: "Full-Time - Hybrid",
    email: "farzeen@pursue.today",
    description: "We are seeking a creative Graphic Designer to conceptualize visuals based on requirements and work on a wide range of projects and media, using various computer software to visualize and develop innovative graphic designs that meet business goals.",
    responsibilities: [
      "Conceptualize visuals based on requirements",
      "Work on a wide range of projects and media, using various computer software to visualize and develop innovative graphic designs that meet business goals",
      "Obtain input from management, ensuring designs meet organizational standards and brand expectations, express ideas accurately, and represent the company or client appropriately",
      "Work independently and cooperatively on multiple projects with marketing team and meeting deadlines",
      "Prepare rough drafts and present ideas",
      "Develop illustrations, logos and other designs using software or by hand",
      "Use the appropriate colors and layouts for each graphic",
      "Work with team to produce final design",
      "Test graphics across various media",
      "Amend designs after feedback",
      "Ensure final graphics and layouts are visually appealing and on-brand",
    ],
    requirements: [
      "Proven graphic designing experience",
      "A strong portfolio of illustrations or other graphics",
      "Familiarity with design software and technologies (such as InDesign, Illustrator, Photoshop)",
      "A keen eye for aesthetics and details",
      "Excellent communication skills",
      "Ability to work methodically and meet deadlines",
    ],
    qualifications: "Degree in Design, Fine Arts or related field",
    experience: "At least 1 year of experience in the relevant field",
    howToApply: "It's a full-time role. You may work remotely, however, required to come to the office in the beginning. If you fulfill the criteria, apply away.",
  },
  {
    id: 15,
    title: "Product Manager",
    department: "Product",
    type: "Full-Time - In Office",
    email: "farzeen@pursue.today",
    description: "The ideal candidate is an analytical team player who will be responsible for leading a team of high performing individuals who own the entire product lifecycle from strategy to evaluation. You will also work cross-functionally to complete product roadmaps and discover new opportunities.",
    responsibilities: [
      "Gain a deep understanding of customer experience, identify and fill product gaps and generate new ideas that grow market share, improve customer experience and drive growth",
      "Create buy-in for the product vision both internally and with key external partners",
      "Develop product pricing and positioning strategies",
      "Translate product strategy into detailed requirements and prototypes",
      "Scope and prioritize activities based on business and customer impact",
      "Work closely with engineering teams to deliver with quick time-to-market and optimal resources",
      "Drive product launches including working with executives, and other product management team members",
      "Evaluate promotional plans to ensure that they are consistent with product line strategy and that the message is effectively conveyed",
      "Act as a product evangelist to build awareness and understanding",
      "Represent the company by visiting customers to solicit feedback on company products and services",
    ],
    requirements: [
      "Knowledge of Agile principles (eg Kanban, Scrum) and development tools (eg Jira, Trello)",
      "A track record in product management, demonstrating a product that you have created and launched into the market",
      "Love finding, designing and deploying technical solutions, having proven experience in a technical role",
      "Previous experience in a similar role within a B2B SaaS environment",
      "Solid technical background with understanding and/or hands-on experience in software development and web technologies",
      "Excellent written and verbal communication skills",
      "Strong problem-solving skills and willingness to roll up one's sleeves to get the job",
      "Skilled at working effectively with cross-functional teams in a matrix organization",
    ],
    qualifications: "MS/BS degree in Computer Science, Engineering, Business or equivalent",
    experience: "At least 2 years of experience in the relevant field",
    howToApply: "It's a full-time role. If you meet the criteria, apply away.",
  },
  {
    id: 16,
    title: "MERN Stack Software Engineer",
    department: "Engineering",
    type: "Full-Time - Hybrid",
    email: "farzeen@pursue.today",
    description: "The ideal candidate will be responsible for developing high-quality applications. They will also be responsible for designing and implementing testable and scalable code.",
    responsibilities: [
      "In-depth knowledge of MongoDB, NodeJS, Express, and React",
      "Strong proficiency with Node.js and its frameworks i.e. Express",
      "Strong proficiency in front end JavaScript frameworks i.e. React",
      "Working knowledge of JavaScript, HTML5, and CSS",
      "Experience implementing applications using React.js",
      "Experience creating front end applications using HTML5",
      "In-depth knowledge of relational databases (e.g. MySQL, PostgreSQL) and NoSQL databases (e.g. MongoDB)",
      "Experience with GraphQL is a big plus",
      "Familiarity with RESTful principles",
      "Must have a knack for developing front-end and custom components in JavaScript",
      "Able to work with minimum supervision and complete the deadlines",
      "Analytical mind with problem-solving aptitude",
      "Automate tasks through appropriate tools and scripting",
      "Review and debug code",
    ],
    requirements: [
      "In-depth knowledge of MongoDB, NodeJS, Express, and React",
      "Strong proficiency with Node.js and its frameworks i.e. Express",
      "Strong proficiency in front end JavaScript frameworks i.e. React",
      "Experience implementing applications using React.js",
      "In-depth knowledge of relational databases and NoSQL databases",
      "Experience with GraphQL is a big plus",
      "Familiarity with RESTful principles",
      "Analytical mind with problem-solving aptitude",
    ],
    qualifications: "Bachelor's degree or equivalent experience in Computer Science or related field",
    experience: "At least 2 years of experience in the relevant field",
    howToApply: "It's a full-time role. You may work remotely, however, required to come to the office in the beginning. If you fulfill the criteria, apply away.",
  },
];

export default function OpenRoles() {
  const [selectedJob, setSelectedJob] = useState(jobs[0]);

  return (
    <div className="min-h-screen bg-white pt-16 lg:pt-[88px]">
      {/* Header Section */}
      <section className="py-12 md:py-16 px-4 text-center">
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-wide"
          style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.01em" }}
          data-aos="fade-up"
        >
          <span className="text-black">OPEN </span>
          <span className="text-[#2C7BBD] italic">ROLES</span>
        </h1>
        <p
          className="text-base md:text-lg text-gray-700"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Be part of something exciting
        </p>
      </section>

      {/* Main Content */}
      <section className="px-2 md:px-4 pb-20 max-w-7xl mx-auto">
        <div className="flex flex-row gap-2 md:gap-6">
          {/* Left Sidebar - Job Listings */}
          <div
            className="w-[120px] md:w-[280px] lg:w-[320px] flex-shrink-0 space-y-2 md:space-y-4 max-h-[70vh] md:max-h-[80vh] overflow-y-auto hide-scrollbar"
            data-aos="fade-right"
          >
            {jobs.map((job) => (
              <div
                key={job.id}
                onClick={() => setSelectedJob(job)}
                className={`cursor-pointer rounded-xl md:rounded-2xl overflow-hidden border-2 transition-all hover:shadow-lg ${
                  selectedJob.id === job.id
                    ? "border-[#2C7BBD]"
                    : "border-gray-200"
                }`}
              >
                {/* Blue Header */}
                <div
                  className="px-2 py-2 md:px-4 md:py-4"
                  style={{ backgroundColor: "#2C7BBD" }}
                >
                  <h3 className="text-white font-semibold text-[10px] md:text-base lg:text-lg leading-tight">
                    {job.title}
                  </h3>
                  <p className="text-white/90 text-[8px] md:text-xs lg:text-sm mt-0.5 leading-tight line-clamp-1">{job.department}</p>
                </div>
                {/* White Footer */}
                <div className="px-2 py-1.5 md:px-4 md:py-3 bg-white flex items-center gap-1 md:gap-2">
                  <svg
                    className="w-2.5 h-2.5 md:w-4 md:h-4 text-gray-600 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-600 text-[8px] md:text-xs lg:text-sm line-clamp-1">{job.type}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Content - Job Details */}
          <div
            className="flex-1 border-2 border-[#2C7BBD] rounded-xl md:rounded-2xl p-3 md:p-6 lg:p-8 max-h-[70vh] md:max-h-[80vh] overflow-y-auto hide-scrollbar"
            data-aos="fade-left"
          >
            {/* Job Title & Apply Button */}
            <div className="text-center mb-4 md:mb-8 pb-4 md:pb-8 border-b border-gray-200">
              <h2 className="text-sm md:text-2xl lg:text-3xl font-bold text-gray-900 mb-1 md:mb-2">
                {selectedJob.title}
              </h2>
              <p className="text-gray-600 text-[10px] md:text-sm mb-3 md:mb-6">{selectedJob.department}</p>
              <a href={`mailto:${selectedJob.email}?subject=Application for ${selectedJob.title}`}>
                <Button
                  className="rounded-full px-4 py-2 md:px-10 md:py-6 text-[10px] md:text-sm font-semibold hover:scale-105 transition-all"
                  style={{
                    backgroundColor: "#2C7BBD",
                    color: "white",
                  }}
                >
                  APPLY NOW
                </Button>
              </a>
            </div>

            {/* Description */}
            {selectedJob.description && (
              <div className="mb-4 md:mb-8">
                <p className="text-gray-600 text-[10px] md:text-sm leading-relaxed whitespace-pre-line">
                  {selectedJob.description}
                </p>
              </div>
            )}

            {/* Responsibilities */}
            <div className="mb-4 md:mb-8">
              <h3 className="text-xs md:text-lg font-semibold text-gray-900 mb-2 md:mb-4">
                Responsibilities
              </h3>
              <ul className="space-y-1.5 md:space-y-3">
                {selectedJob.responsibilities.map((item, index) => (
                  <li key={index} className="text-gray-600 text-[10px] md:text-sm leading-relaxed flex">
                    <span className="mr-1 md:mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div className="mb-4 md:mb-8">
              <h3 className="text-xs md:text-lg font-semibold text-gray-900 mb-2 md:mb-4">
                Requirements
              </h3>
              <ul className="space-y-1.5 md:space-y-3">
                {selectedJob.requirements.map((item, index) => (
                  <li key={index} className="text-gray-600 text-[10px] md:text-sm leading-relaxed flex">
                    <span className="mr-1 md:mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Qualifications */}
            <div className="mb-4 md:mb-8">
              <h3 className="text-xs md:text-lg font-semibold text-gray-900 mb-2 md:mb-4">
                Qualifications
              </h3>
              <p className="text-gray-600 text-[10px] md:text-sm leading-relaxed">
                {selectedJob.qualifications}
              </p>
            </div>

            {/* Experience */}
            <div className="mb-4 md:mb-8">
              <h3 className="text-xs md:text-lg font-semibold text-gray-900 mb-2 md:mb-4">
                Experience
              </h3>
              <p className="text-gray-600 text-[10px] md:text-sm leading-relaxed">
                {selectedJob.experience}
              </p>
            </div>

            {/* Benefits (if available) */}
            {selectedJob.benefits && (
              <div className="mb-4 md:mb-8">
                <h3 className="text-xs md:text-lg font-semibold text-gray-900 mb-2 md:mb-4">
                  What We Offer
                </h3>
                <ul className="space-y-1 md:space-y-2">
                  {selectedJob.benefits.map((item, index) => (
                    <li key={index} className="text-gray-600 text-[10px] md:text-sm leading-relaxed flex">
                      <span className="mr-1 md:mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* How to Apply */}
            <div className="mb-2 md:mb-4 p-2 md:p-4 bg-gray-50 rounded-lg md:rounded-xl">
              <h3 className="text-xs md:text-lg font-semibold text-gray-900 mb-2 md:mb-4">
                How to Apply
              </h3>
              <p className="text-gray-600 text-[10px] md:text-sm leading-relaxed whitespace-pre-line">
                {selectedJob.howToApply}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
