const courseData = [
    {
        field: "Engineering Department info",
        overview: "The engineering faculty offers various technology and engineering fields aimed at producing highly skilled professionals.",
        years: [] // No specific year breakdown for general info
    },
    {
        field: "Freshman (Common Courses)",
        overview: "These are common foundational courses taken by all freshman students.",
        years: [
            {
                year: "Year 1",
                semesters: [
                    {
                        semester: "Semester 1",
                        courses: [
                            { code: "MATH101", title: "Mathematics for Natural Science", credit: 3, prereq: "None" },
                            { code: "PSYC101", title: "General Psychology", credit: 2, prereq: "None" },
                            { code: "ENGL101", title: "Communicative English Skills I", credit: 3, prereq: "None" },
                            { code: "PHYS101", title: "General Physics", credit: 3, prereq: "None" },
                            { code: "LOGI101", title: "Logic & Critical Thinking", credit: 2, prereq: "None" },
                            { code: "GEOG101", title: "Geography of Ethiopia and the Horn", credit: 2, prereq: "None" },
                            { code: "PE101", title: "Physical fitness", credit: 1, prereq: "None" }
                        ]
                    },
                    {
                        semester: "Semester 2",
                        courses: [
                            { code: "ETEG102", title: "Emerging Technology for Engineers", credit: 2, prereq: "None" },
                            { code: "ENTR102", title: "Entrepreneurship for Engineers", credit: 2, prereq: "None" },
                            { code: "ENGL102", title: "Communicative English Skills II", credit: 3, prereq: "ENGL101" },
                            { code: "CIVE102", title: "Civic & Ethical Education", credit: 2, prereq: "None" },
                            { code: "MATH102", title: "Applied Mathematics I", credit: 3, prereq: "MATH101" },
                            { code: "ANTH102", title: "Social Anthropology", credit: 2, prereq: "None" },
                            { code: "INCL102", title: "Inclusiveness", credit: 2, prereq: "None" }
                        ]
                    }
                ]
            }
        ]
    },
    {
        field: "Software Engineering",
        overview: "Focuses on software development, system design, AI, and modern computing technologies.",
        years: [
            {
                year: "Year 2",
                semesters: [
                    {
                        semester: "Semester 1",
                        courses: [
                            { code: "HIST211", title: "History of Ethiopia and the Horn", credit: 2, prereq: "None" },
                            { code: "SE2111", title: "Fundamentals of programming I", credit: 3, prereq: "None" },
                            { code: "MATH211", title: "Discrete Mathematics", credit: 3, prereq: "MATH102" },
                            { code: "SE2112", title: "Introduction to Software engineering and computing", credit: 3, prereq: "None" },
                            { code: "GTRN211", title: "Global Trends", credit: 2, prereq: "None" },
                            { code: "ECON211", title: "Economics", credit: 2, prereq: "None" }
                        ]
                    },
                    {
                        semester: "Semester 2",
                        courses: [
                            { code: "STAT212", title: "Probability and Statistics", credit: 3, prereq: "MATH102" },
                            { code: "SE2121", title: "Fundamentals of programming II", credit: 3, prereq: "SE2111" },
                            { code: "SE2122", title: "Data Communication and computer networks", credit: 3, prereq: "None" },
                            { code: "SE2123", title: "Database Systems", credit: 3, prereq: "None" },
                            { code: "HARD212", title: "Digital Logic Design", credit: 3, prereq: "PHYS101" }
                        ]
                    }
                ]
            },
            {
                year: "Year 3",
                semesters: [
                    {
                        semester: "Semester 1",
                        courses: [
                            { code: "SE3111", title: "Data Structures & Algorithms", credit: 3, prereq: "SE2121, MATH211" },
                            { code: "SE3112", title: "System analysis and modeling", credit: 3, prereq: "SE2112" },
                            { code: "HARD311", title: "Computer Architecture and Organization", credit: 3, prereq: "HARD212" },
                            { code: "SE3113", title: "Object Oriented programming", credit: 3, prereq: "SE2121" },
                            { code: "SE3114", title: "Internet programming I", credit: 3, prereq: "SE2121" }
                        ]
                    },
                    {
                        semester: "Semester 2",
                        courses: [
                            { code: "SE3121", title: "Operating Systems", credit: 3, prereq: "HARD311" },
                            { code: "SE3122", title: "Formal Language and Automata theory", credit: 3, prereq: "MATH211" },
                            { code: "SE3123", title: "Internet programming II", credit: 3, prereq: "SE3114" },
                            { code: "SE3124", title: "Advanced programming", credit: 3, prereq: "SE3113" },
                            { code: "SE3125", title: "Software requirement Engineering", credit: 3, prereq: "SE3112" }
                        ]
                    }
                ]
            },
            {
                year: "Year 4",
                semesters: [
                    {
                        semester: "Semester 1",
                        courses: [
                            { code: "HARD411", title: "Principle of Computer Design", credit: 3, prereq: "HARD311" },
                            { code: "SE4111", title: "Mobile programming and computing", credit: 3, prereq: "SE3124" },
                            { code: "SE4112", title: "Software design and architecture", credit: 3, prereq: "SE3125" },
                            { code: "AI4111", title: "Introduction to Artificial Intelligence", credit: 3, prereq: "STAT212, SE3111" },
                            { code: "GRAPH411", title: "Computer Graphics", credit: 3, prereq: "SE3111" }
                        ]
                    },
                    {
                        semester: "Semester 2",
                        courses: [
                            { code: "AI4121", title: "Introduction Machine Learning", credit: 3, prereq: "AI4111" },
                            { code: "SE4121", title: "Software quality Assurance and testing", credit: 3, prereq: "SE4112" },
                            { code: "HARD412", title: "Embedded System", credit: 3, prereq: "HARD311" },
                            { code: "SE4122", title: "Software Project Management", credit: 3, prereq: "SE4112" },
                            { code: "HCI4121", title: "Human computer Interaction", credit: 3, prereq: "SE3112" },
                            { code: "RES4121", title: "Research method in software engineering", credit: 2, prereq: "None" },
                            { code: "INT4121", title: "Industrial Internship", credit: 6, prereq: "None" }
                        ]
                    }
                ]
            },
            {
                year: "Year 5",
                semesters: [
                    {
                        semester: "Semester 1",
                        courses: [
                            { code: "RES5111", title: "Senior Research Project Phase I", credit: 2, prereq: "RES4121" },
                            { code: "SE5111", title: "Distributed System", credit: 3, prereq: "SE3121, SE2122" },
                            { code: "BIGD511", title: "Introduction to big data Analytics", credit: 3, prereq: "AI4121" },
                            { code: "SE5112", title: "Open source software paradigms", credit: 2, prereq: "None" },
                            { code: "SE5113", title: "Software componenet design", credit: 3, prereq: "SE4112" },
                            { code: "SEC5111", title: "Computer system security", credit: 3, prereq: "SE2122" },
                            { code: "SE5114", title: "Software Configuration Management", credit: 2, prereq: "SE4112" }
                        ]
                    },
                    {
                        semester: "Semester 2",
                        courses: [
                            { code: "RES5121", title: "Senior Research Project II", credit: 3, prereq: "RES5111" },
                            { code: "SE5121", title: "Selected topics in software Engineering", credit: 3, prereq: "None" },
                            { code: "SE5122", title: "Software evolution and maintenance", credit: 3, prereq: "SE5114" },
                            { code: "SE5123", title: "Software defined system", credit: 3, prereq: "SE5111" }
                        ]
                    }
                ]
            }
        ]
    }
];
