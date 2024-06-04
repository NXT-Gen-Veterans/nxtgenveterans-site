
export interface ResourceCardType {
    title: string;
    link: string;
    description: string;
}

export interface ResourceGroupType {
    title: string;
    bgImage: string;
    cards: ResourceCardType[];
}

export const resources: ResourceGroupType[] = [
    {
        title: "Medical",
        bgImage: "bg-[url('/assets/rsrc-med.png')]",
        cards: [
            {
                title: "U.S. Department of Veteran Affairs - Health Care",
                link: "https://www.va.gov/health-care/",
                description: "Through VA healthcare, you have access to comprehensive services, including routine checkups with your primary care provider and consultations with specialists such as cardiologists, gynecologists, and mental health professionals. Additionally, veterans can utilize services like home health care and geriatric care, as well as obtain medical equipment, prosthetics, and prescriptions. Learn more about how to apply for and manage the healthcare benefits you've rightfully earned.",
            },
            {
                title: "HealthCare",
                link: "https://www.healthcare.gov/veterans/",
                description: "This website offers a range of healthcare programs tailored for veterans, based on their eligibility. Whether or not you have existing healthcare coverage, this platform provides you with options to access the care you need.",
            },
            {
                title: "USAGov - Veterans' Health",
                link: "https://www.usa.gov/veterans-health",
                description: "Provides you with information about health care benefits for veterans nationwide.",
            },
        ],
    },
    {
        title: "Mental Health",
        bgImage: "bg-[url('/assets/rsrc-mh.png')]",
        cards: [
            {
                title: "U.S. Department of Veteran Affairs - Mental Health Services",
                link: "https://www.va.gov/health-care/health-needs-conditions/mental-health/",
                description: "If you're struggling with a specific mental health challenge, having trouble sleeping, coping with anger, or adapting to civilian life after military service, remember that you're not alone, and assistance is accessible through the VA. Last year alone, over 1.7 million Veterans sought mental health support through the VA. Their services offer a range of options, including peer support from fellow Veterans, counseling, therapy, medication, or a combination of these approaches.",
            },
            {
                title: "U.S. Vets - Mental Health",
                link: "https://usvets.org/how-we-serve/mental-health-and-wellness/",
                description: "Transitioning from military to civilian life can present considerable challenges and stress for Veterans. Frequently, these challenges arise from traumatic experiences associated with combat, which, if left unaddressed, can hinder stability and success in civilian life. U.S. VETS offers complimentary counseling and treatment services designed to address the unique needs of each client in a secure and confidential environment.",
            },
            {
                title: "Military Onesource - Non-Medical Counseling",
                link: "https://www.militaryonesource.mil/non-medical-counseling/military-onesource/free-confidential-face-to-face-non-medical-counseling/",
                description: "Military OneSource and the Military and Family Life Counseling Program offer complimentary, confidential, face-to-face non-medical counseling to help you address various challenges associated with military and family life. This assistance encompasses preparing for and managing relocations, as well as nurturing relationships with deployed spouses. Free in-person counseling sessions are available to active-duty, National Guard, and reserve members regardless of activation status, as well as their immediate family members and survivors.",
            },
        ],
    },
    {
        title: "Housing",
        bgImage: "bg-[url('/assets/rsrc-house.png')]",
        cards: [
            {
                title: "U.S. Department of Veteran Affairs - Homeless Programs",
                link: "https://www.va.gov/homeless/housing.asp",
                description: "The U.S. Department of Veterans Affairs offers two programs aimed at assisting homeless or low-income veterans nationwide.",
            },
            {
                title: "U.S. Department of Veteran Affairs - Housing Assistance",
                link: "https://www.va.gov/housing-assistance/home-loans/loan-types/",
                description: "The U.S. Department of Veterans Affairs offers several Home Loan programs. Explore each program to determine which one best suits your needs if you're eligible.",
            },
            {
                title: "Welcome Home Veterans",
                link: "https://www.welcomeveterans.org/vet-programs/resources-for-vets/",
                description: "Welcome Home's programs and services are presently available in Mid-Missouri. If you are situated outside this region and need assistance, please consult the resources provided in the link for available support options.",
            },
            {
                title: "National Coalition for Homeless Veterans",
                link: "https://nchv.org/",
                description: "The National Coalition for Homeless Veterans (NCHV) stands as the sole national organization dedicated exclusively to eradicating veteran homelessness. Their approach involves fostering collaboration, influencing policy, enhancing service provision, enforcing accountability, and operating a referral helpline for veterans facing or at risk of homelessness. ",
            },
        ],
    },
    {
        title: "Education & Training",
        bgImage: "bg-[url('/assets/rsrc-edu.png')]",
        cards: [
            {
                title: "Coursera",
                link: "https://www.coursera.org/",
                description: "Coursera is an excellent resource for obtaining certifications in various industries at low or no cost. Additionally, they provide free or low-cost college courses that are accessible to learners.",
            },
            {
                title: "Udemy",
                link: "https://www.udemy.com/",
                description: "Udemy is an online platform that offers affordable or even free courses covering a wide range of subjects. Additionally, it provides resources to assist individuals in obtaining certifications in various up and coming industries.",
            },
            {
                title: "Alison",
                link: "https://alison.com/",
                description: "Alison is an online platform where individuals can obtain certifications and diplomas at no cost or at a reasonable price.",
            },
            {
                title: "Deloitte Core Leadership Program",
                link: "https://www2.deloitte.com/us/en/pages/about-deloitte/articles/core-leadership-program.html",
                description: "Deloitte facilitates a smoother transition for veterans into the civilian workforce within their company by leveraging the skills, interests, strengths, and background experience acquired from their past.",
            },
            {
                title: "Heavy Construction Academy",
                link: "https://operator-academy.com/",
                description: "The Heavy Construction Academy provides training programs for various heavy equipment operator positions. While there is a tuition fee for courses, eligible veterans may receive benefits if eligible. To explore financial assistance options, please visit their website for more information.",
            },
            {
                title: "Salesforce Training for Veterans",
                link: "https://veterans.my.site.com/s/",
                description: "Salesforce provides military personnel, veterans, and spouses with free Salesforce training at absolutely no cost. This training is conducted fully remotely and is open to individuals from all educational backgrounds.",
            },
            {
                title: "AWS Educate",
                link: "https://aws.amazon.com/education/awseducate/",
                description: "AWS Educate provides free, self-paced training for individuals interested in learning more about the AWS cloud. This training is entirely remote and is open to individuals from all educational backgrounds and levels of experience.",
            },
            {
                title: "Grow with Google for Veterans",
                link: "https://grow.google/expanding-opportunity/military-community/#?modal_active=none",
                description: "Google offers educational tools and resources specifically designed for veterans and their families to pursue careers in the technology field. These resources help individuals prepare for in-demand jobs and certifications within the industry.",
            },
            {
                title: "Microsoft Training for Veterans",
                link: "https://military.microsoft.com/mssa/#MSSA-101",
                description: "Microsoft provides military veterans with a 17-week training program and career plan aimed at equipping them with the skills necessary to enter the technology industry and other career paths. This program offers flexibility, allowing veterans to select their preferred career path.",
            },
            {
                title: "Splunk Training for Veterans",
                link: "https://workplus.splunk.com/veterans",
                description: "Splunk offers veterans with online courses and training for highly touted jobs within the company. Just with a simple signup using the TroopID will allow veterans to have access to the resources and tools.",
            },
        ],
    },
    {
        title: "Job Board",
        bgImage: "bg-[url('/assets/rsrc-job.png')]",
        cards: [
            {
                title: "LinkedIn",
                link: "https://www.linkedin.com/feed/",
                description: "Signing up enables you to browse job listings and explore companies seeking to hire. Additionally, it provides an opportunity to network with individuals who share your field of interest.",
            },
            {
                title: "Indeed",
                link: "https://www.indeed.com/",
                description: "By quickly creating an Indeed account or profile, you can easily showcase your updated resume to potential recruiters. Additionally, you gain access to millions of job listings available on the website, allowing you to apply to positions that align with your skills and interests.",
            },
            {
                title: "Ziprecruiter",
                link: "https://www.ziprecruiter.com/jobseeker/home",
                description: "It serves as a marketplace for publicly available job opportunities. As a job seeker, all you need to do is upload your resume and apply for the positions that interest you.",
            },
            {
                title: "Dice",
                link: "https://www.dice.com/home/home-feed",
                description: "Enables you to search for top tech jobs that match your preferences. Recruiters can view your profile and resume to determine if you are a suitable candidate for the positions they are recruiting for.",
            },
            {
                title: "CareerOneStop",
                link: "https://www.careeronestop.org/",
                description: "Enables you to search for both local and remote job opportunities, as well as training opportunities, that match your preferences and location.",
            },
            {
                title: "Military Hire",
                link: "https://www.militaryhire.com/",
                description: "Provides a platform for active military members, veterans, military spouses, and reservists to search for job openings advertised by employers. Offers opportunities across various industries and promotes job fairs that may be happening in your region.",
            },
            {
                title: "U.S. Office of Personnel Management - Feds Hire Vets",
                link: "https://www.opm.gov/fedshirevets/",
                description: "This official government website is dedicated to facilitating the hiring of veterans for available government jobs.",
            },
            {
                title: "USA Jobs",
                link: "https://www.usajobs.gov/",
                description: "This government-run website enables individuals to apply for jobs nationwide. It's a reliable platform where you can simply upload your resume and apply for available job listings.",
            },
            {
                title: "Apprenticeship USA",
                link: "https://www.apprenticeship.gov/apprenticeship-job-finder",
                description: "This official government website offers individuals the opportunity to launch their desired careers through apprenticeships available across the country.",
            },
        ],
    },
    {
        title: "Financial",
        bgImage: "bg-[url('/assets/rsrc-fin.png')]",
        cards: [
            {
                title: "Military Pay - Regular Military Compensation (RMC) Calculator",
                link: "https://militarypay.defense.gov/calculators/rmc-calculator/",
                description: "Regular Military Compensation (RMC) encompasses the total of base salary, typical housing allowance, standard subsistence allowance, and the tax advantage derived from the non-taxable nature of these allowances. RMC serves as a fundamental form of compensation provided to all military members, either in monetary form or through benefits, and is uniform across all service personnel, base pay, tenure, and household size.",
            },
            {
                title: "Military OneSource - Retirement Calculator",
                link: "https://www.militaryonesource.mil/financial-legal/personal-finance/military-retirement-calculators/",
                description: "In under five minutes, you can obtain a reliable estimate using free retirement pension calculators available for both the High-36 and Final Pay legacy retirement systems provided by the Department of Defense. Here's a guide on how to utilize these calculators effectively, along with strategies to tailor the outcomes to align with your retirement goals and lifestyle needs.",
            },
            {
                title: "Military OneSource - Financial Tools and Services",
                link: "https://www.militaryonesource.mil/financial-legal/personal-finance/financial-tools-and-services/",
                description: "If you have inquiries regarding military finances or legal matters, rest assured that there are abundant resources and assistance available to you. By connecting with experts, utilizing powerful tools, accessing practical information, and tapping into valuable resources such as pay charts and personal consultations, you can address your concerns effectively, all without incurring any costs.",
            },
            {
                title: "Operation First Response - Military Family Assistance Program",
                link: "https://www.operationfirstresponse.org/military-family-assistance-program/",
                description: "The primary objective of this program is to alleviate the financial challenges encountered by the families of Military Heroes and First Responders. We extend our services to all branches of the military, catering to emergency needs. Financial assistance is provided on a case-by-case basis, tailored to individual requirements, which may include support for rent, utilities, vehicle payments, groceries, clothing, as well as travel expenses to and from major medical facilities.",
            },
            {
                title: "U.S. Department of Veteran Assistance - Money Management Services",
                link: "https://www.va.gov/REACH/challenge/money-challenges/",
                description: "The VA provides veterans with money management resources depending on what their needs are. They have plenty of financial tools and resources that can be utilized.",
            },
        ],
    },
]
