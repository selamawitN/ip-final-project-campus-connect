document.addEventListener('DOMContentLoaded', () => {
    const resultsContainer = document.getElementById('results-container');
    const filterFieldSelect = document.getElementById('filter-field'); // Changed to select
    const filterYearInput = document.getElementById('filter-year');
    const filterSemesterInput = document.getElementById('filter-semester');

    // 1. Flatten the nested data structure for easy searching
    function flattenCourseData(data) {
        const flatList = [];
        // Note: The general 'Engineering Department info' entry has no years/courses, so it's skipped here which is correct for course search
        data.forEach(field => {
            if (field.years.length > 0) {
                field.years.forEach(year => {
                    year.semesters.forEach(semester => {
                        semester.courses.forEach(course => {
                            flatList.push({
                                field: field.field,
                                year: year.year,
                                semester: semester.semester,
                                code: course.code,
                                title: course.title,
                                credit: course.credit,
                                prereq: course.prereq
                            });
                        });
                    });
                });
            }
        });
        return flatList;
    }

    const allCourses = flattenCourseData(courseData);

    // 2. Rendering Function
    function renderResults(filteredCourses) {
        resultsContainer.innerHTML = '';

        if (filteredCourses.length === 0) {
            resultsContainer.innerHTML = '<p class="no-results">No courses found matching your criteria.</p>';
            return;
        }
        
        // Group results back by Field/Year/Semester for cleaner display
        const groupedCourses = filteredCourses.reduce((acc, course) => {
            const key = `${course.field} - ${course.year} - ${course.semester}`;
            if (!acc[key]) {
                acc[key] = {
                    header: key,
                    courses: []
                };
            }
            acc[key].courses.push(course);
            return acc;
        }, {});

        for (const key in groupedCourses) {
            const group = groupedCourses[key];
            const card = document.createElement('div');
            card.classList.add('course-card');
            
            let coursesHtml = group.courses.map(c => `
                <div class="course-item-row">
                    <span class="code">${c.code}</span>
                    <span class="title">${c.title}</span>
                    <span class="credits">${c.credit} Cr</span>
                    <span class="prereq">Prereq: ${c.prereq || 'None'}</span>
                </div>
            `).join('');

            card.innerHTML = `
                <div class="course-header">${group.header}</div>
                ${coursesHtml}
            `;
            resultsContainer.appendChild(card);
        }
    }

    // 3. Filtering Logic
    function applyFilters() {
        // Get value from select element. It will be an empty string if "All" is selected.
        const fieldQuery = filterFieldSelect.value; 
        const yearQuery = filterYearInput.value.toLowerCase();
        const semesterQuery = filterSemesterInput.value.toLowerCase();

        const filtered = allCourses.filter(course => {
            // If fieldQuery is empty string ("All"), this condition is true for all courses.
            const matchesField = fieldQuery === "" || course.field === fieldQuery;
            const matchesYear = course.year.toLowerCase().includes(yearQuery);
            const matchesSemester = course.semester.toLowerCase().includes(semesterQuery);
            
            return matchesField && matchesYear && matchesSemester;
        });

        renderResults(filtered);
    }

    // 4. Attach Event Listeners
    // Use 'change' event for the select menu, 'input' for text fields
    filterFieldSelect.addEventListener('change', applyFilters); 
    filterYearInput.addEventListener('input', applyFilters);
    filterSemesterInput.addEventListener('input', applyFilters);

    // Initial render message (handled by HTML/CSS until search is used)
});
