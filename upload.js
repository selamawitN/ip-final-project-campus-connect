const submitBtn = document.querySelector('.submit');
const resetBtn = document.querySelector('.reset');
const fileInput = document.getElementById('file');
const yearRadios = document.querySelectorAll('input[name="year"]');
const departmentSelect = document.getElementById('department');
const typeSelect = document.getElementById('type');
const fullNameInput = document.getElementById('fulln');
const courseInput = document.getElementById('materialtitle');

function getSelectedYear() {
    for (const radio of yearRadios) {
        if (radio.checked) return radio.value;
    }
    return '';
}

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const file = fileInput.files[0];
    if (!file) {
        alert('Please choose a file!');
        return;
    }

    const year = getSelectedYear();
    const department = departmentSelect.value;
    const type = typeSelect.value;
    const uploader = fullNameInput.value.trim() || "Anonymous";
    const title = courseInput.value.trim() || file.name;

    // Uppercase validation
    const uppercasePattern = /^[A-Z\s]+$/;
    if (!uppercasePattern.test(uploader)) {
        alert('Full Name must be in CAPITAL letters only.');
        return;
    }

    if (!uppercasePattern.test(title)) {
        alert('Course title must be in CAPITAL letters only.');
        return;
    }

    // Read file as Base64 to store in localStorage
    const reader = new FileReader();
    reader.onload = function() {
        const fileData = reader.result; // Base64 string

        const newMaterial = {
            title: title,
            fullName: uploader,
            year: year,
            department: department,
            type: type,
            fileName: file.name,
            fileData: fileData
        };
        

        const materials = JSON.parse(localStorage.getItem('materials') || '[]');
        materials.push(newMaterial);
        localStorage.setItem('materials', JSON.stringify(materials));

        alert('File uploaded successfully!');

        // Reset form after submit
        fileInput.value = '';
        yearRadios.forEach(radio => radio.checked = false);
        departmentSelect.selectedIndex = 0;
        typeSelect.selectedIndex = 0;
        fullNameInput.value = '';
        courseInput.value = '';
    };

    reader.readAsDataURL(file);
});

resetBtn.addEventListener('click', (e) => {
    e.preventDefault();
    fileInput.value = '';
    yearRadios.forEach(radio => radio.checked = false);
    departmentSelect.selectedIndex = 0;
    typeSelect.selectedIndex = 0;
    fullNameInput.value = '';
    courseInput.value = '';
});
