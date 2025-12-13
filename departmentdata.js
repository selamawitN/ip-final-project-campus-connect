
const courseData = [
    {
        field: "Engineering Department info",
        overview: "The engineering faculty offers various technology and engineering fields aimed at producing highly skilled professionals.",
        years: []
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
                            { code: "PSYC101", title: "General Psychology", credit: 3, prereq: "None" },
                            { code: "ENGL101", title: "Communicative English Skills I", credit: 3, prereq: "None" },
                            { code: "PHYS101", title: "General Physics", credit: 3, prereq: "None" },
                            { code: "LOGI101", title: "Logic & Critical Thinking", credit: 3, prereq: "None" },
                            { code: "GEOG101", title: "Geography of Ethiopia and the Horn", credit: 3, prereq: "None" },
                            { code: "PE101", title: "Physical fitness", credit: 0, prereq: "None" }
                        ]
                    },
                    {
                        semester: "Semester 2",
                        courses: [
                            { code: "ETEG102", title: "Emerging Technology for Engineers", credit: 3, prereq: "None" },
                            { code: "ENTR102", title: "Entrepreneurship for Engineers", credit: 3, prereq: "None" },
                            { code: "ENGL102", title: "Communicative English Skills II", credit: 3, prereq: "ENGL101" },
                            { code: "CIVE102", title: "Civic & Ethical Education", credit: 2, prereq: "None" },
                            { code: "MATH102", title: "Applied Mathematics I", credit: 4, prereq: "MATH101" },
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
                            { code: "HIST211", title: "History of Ethiopia and the Horn", credit: 3, prereq: "None" },
                            { code: "SE2111", title: "Fundamentals of programming I", credit: 3, prereq: "None" },
                            { code: "MATH211", title: "Discrete Mathematics", credit: 3, prereq: "MATH102" },
                            { code: "SE2112", title: "Introduction to Software engineering and computing", credit: 4, prereq: "None" },
                            { code: "GTRN211", title: "Global Trends", credit: 2, prereq: "None" },
                            { code: "ECON211", title: "Economics", credit: 3, prereq: "None" }
                        ]
                    },
                    {
                        semester: "Semester 2",
                        courses: [
                            { code: "STAT212", title: "Probability and Statistics", credit: 3, prereq: "MATH102" },
                            { code: "SWEG2103", title: "Fundamentals of Programming II", credit: 3, prereq: "SWEG2101" },
                            { code: "SWEG2105", title: "Data Communication and Computer Networks", credit: 4, prereq: "None" },
                            { code: "SWEG2106", title: "Database Systems", credit: 4, prereq: "None" },
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
                            { code: "SWEG3103", title: "Data Structure and Algorithms", credit: 4, prereq: "SWEG2103" },
                            { code: "SWEG3109", title: "System Analysis and Modeling", credit: 4, prereq: "SWEG2101" },
                            { code: "SWEG3105", title: "Computer Organization and Architecture", credit: 4, prereq: "Engr 2004" },
                            { code: "SWEG3101", title: "Object Oriented Programming", credit: 3, prereq: "None" },
                            { code: "SWEG3107", title: "Internet Programming I", credit: 3, prereq: "SWEG2105" }
                        ]
                    },
                    {
                        semester: "Semester 2",
                        courses: [
                            { code: "SWEG3106", title: "Operating Systems", credit: 4, prereq: "SWEG3105" },
                            { code: "SWEG3110", title: "Formal Language and Automata Theory", credit: 3, prereq: "SWEG2105" },
                            { code: "SWEG3102", title: "Internet Programming II", credit: 3, prereq: "SWEG3107" },
                            { code: "SWEG3108", title: "Advanced Programming", credit: 4, prereq: "SWEG3101" },
                            { code: "SWEG3104", title: "Software Requirements Engineering", credit: 3, prereq: "SWEG3109" }
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
                            { code: "SWEG4101", title: "Principles of Compiler Design", credit: 3, prereq: "SWEG3110, SWEG2102" },
                            { code: "SWEG4103", title: "Mobile Computing and Programming", credit: 3, prereq: "SWEG2106, SWEG3108" },
                            { code: "SWEG4105", title: "Software Design and Architecture", credit: 3, prereq: "SWEG3109" },
                            { code: "SWEG4107", title: "Introduction to Artificial Intelligence", credit: 3, prereq: "SWEG2105, SWEG3103" },
                            { code: "SWEG4109", title: "Computer Graphics", credit: 3, prereq: "SWEG2102, SWEG3103" },
                            { code: "IETP4115", title: "Integrated Engineering team project", credit: 3, prereq: "None" }
            
                        ]
                    },
                    {
                        semester: "Semester 2",
                        courses: [
                            { code: "SWEG4112", title: "Introduction to Machine learning", credit: 3, prereq: "SWEG4103" },
                            { code: "SWEG4106", title: "Software Quality Assurance and Testing", credit: 3, prereq: "SWEG3104, SWEG4105" },
                            { code: "SWEG4102", title: "Embedded Systems", credit: 3, prereq: "SWEG3101, SWEG3106" },
                            { code: "SWEG4104", title: "Software Project Management", credit: 3, prereq: "SWEG3104" },
                            { code: "SWEG4110", title: "Human Computer Interaction", credit: 3, prereq: "SWEG4109" },
                            { code: "SWEG4108", title: "Research Methods in Software Engineering", credit: 2, prereq: "SWEG4105" },
                            { code: "SWEG4114", title: "Industrial Internship", credit: 6, prereq: "SWEG4112" }
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
                            { code: "SWEG5101", title: "Senior Research Project Phase I", credit: 0, prereq: "SWEG4114" },
                            { code: "SWEG5111", title: "Distributed System", credit: 4, prereq: "SWEG3101, SWEG2106" },
                            { code: "SWEG5201", title: "Introduction to Big Data Analytics", credit: 3, prereq: "SWEG4112" }, // Prereq inferred from prev data
                            { code: "SWEG5109", title: "Open source software paradigms", credit: 3, prereq: "SWEG4104" },
                            { code: "SWEG5107", title: "Software component design", credit: 3, prereq: "SWEG4105" },
                            { code: "SWEG5105", title: "Computer system security", credit: 3, prereq: "SWEG2106" },
                            { code: "SWEG5103", title: "Software Configuration Management", credit: 3, prereq: "SWEG4104" },
                            { code: "SWEG5203",title:"Data Mining and Data Warehousing",credit:3,prereq:"None" }, 
                            { code: "SWEG5205", title: "Simulation and Modeling", credit: 3, prereq: "None" }, 
                        ]
                    },
                    {
                        semester: "Semester 2",
                        courses: [
                            { code: "SWEG5102", title: "Senior Research Project II", credit: 6, prereq: "SWEG5101" },
                            { code: "SWEG5106", title: "Software evolution and maintenance", credit: 3, prereq: "SWEG4106, SWEG5107" },
                            { code: "SWEG5108", title: "Software defined system", credit: 3, prereq: "SWEG2106, SWEG3101, SWEG5107" }
                        ]
                    }
                ]
            }
        ]
    }
];
