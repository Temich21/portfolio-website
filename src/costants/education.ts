import { IEducation, ILicenses, IExperience } from '@/models/IEducationSection'

export const education: IEducation[] = [
    { id: 1, title: "Bachelor's degree", years: '2016-2020', programme: 'Fundamentals of Mechanical Engineering' },
    { id: 2, title: "Master's degree", years: '2020-2023', programme: 'Production Machines, Systems and Robots' },
]

export const licenses: ILicenses[] = [
    { id: 1, title: "HTML and CSS in depth", company: 'Meta' },
    { id: 2, title: "React Basics", company: 'Meta' },
    { id: 3, title: "Advanced React", company: 'Meta' },
    { id: 4, title: "Principles of UX/UI Design", company: 'Meta' },
    { id: 5, title: "Front-End Developer Capstone", company: 'Meta' },
    { id: 6, title: "Data Analysis and Visualization in Python", company: 'Brno University of Technology FIT' },
]

export const experience: IExperience[] = [
    {
        id: 1,
        title: "Sales Assistant",
        years: '2014-2015',
        company: 'Ural Oil',
        description: 'As a sales assistant, my primary responsibility was to provide vital support in the tender process. This involved gathering and organizing essential documentation, such as proposals, quotations, and technical specifications. I collaborated closely with the sales team, ensuring that all tender submissions were accurate, complete, and submitted within deadlines.'
    },
    {
        id: 2,
        title: "Mostly service staff",
        years: '2015- Oct 2019',
        company: 'Various companies',
        description: 'During university, I worked various service jobs such as waiter or help in a kitchen.'
    },
    {
        id: 3,
        title: "Mechnical designer",
        years: 'Oct 2019 - Jun 2021',
        company: 'Project Controls s.r.o.',
        description: "In my capacity as a Mechanical Designer, my core responsibilities encompassed crafting design proposals and innovative solutions for project documentation. I specialized in supporting manufacturing processes, ensuring that designs were optimized for seamless production. Moreover, I played a pivotal role in maintaining and updating technical documentation, serving both our customers and suppliers. I engaged in close collaboration with customers and suppliers to refine technical specifications, aligning our designs with their unique requirements."
    },
    {
        id: 4,
        title: "Mechnical designer",
        years: 'Jun 2021 - Present',
        company: 'IFE-CR',
        description: "In my role as a Mechanical Designer at IFE-CR, I&rsquo;m a key player in designing innovative product solutions and new models, with a specialization in door leaf design. Collaboration is at the heart of my work, as I engage with various departments and levels within the organization. Besides I&rsquo;m responsible for crafting comprehensive project documentation and implementing design changes to keep our projects adaptable. Additionally, I maintain and update technical documentation for both our customers and suppliers. Notably, my diploma work was conducted in collaboration with IFE - CR, further underscoring my dedication to the company&rsquo;s success. You can find it below."
    },
]
