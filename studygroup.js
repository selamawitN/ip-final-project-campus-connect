const initialGroups = [
    {
        subject: "Database Systems",
        year: "1st Year",
        days: ["Tue"],
        time: "04:00 - 05:00",
        members: "Selam, Tom",
        organizer: "Selamawit"
    },
    {
        subject: "Data Structures",
        year: "4th Year",
        days: ["Mon", "Wed"],
        time: "09:00 - 10:10",
        members: "Hana, Mike",
        organizer: "Hana"
    },
    {
        subject: "Web Development",
        year: "3rd Year",
        days: ["Fri"],
        time: "02:00 - 04:00",
        members: "Tsion, Yosef",
        organizer: "Tsion"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("groups-container");
    const countLabel = document.getElementById("group-count");

    function renderGroups(groups) {
        container.innerHTML = "";
        countLabel.textContent = groups.length;

        groups.forEach(group => {
            const card = document.createElement("div");
            card.className = "group-card";

            card.innerHTML = `
                <div class="group-info">
                    <h4>${group.subject}</h4>
                    <div class="group-meta">
                        <span>${group.year}</span>
                        <span>${group.days.join(", ")}</span>
                    </div>
                    <div class="group-members">
                        Members: ${group.members}
                    </div>
                </div>
                <button class="btn-join" onclick="alert('Joined!')">Join</button>
            `;

            container.appendChild(card);
        });
    }

    // Initial render
    renderGroups(initialGroups);

    // Day Selection Logic
    const dayBtns = document.querySelectorAll(".day-btn");
    dayBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            btn.classList.toggle("selected");
        });
    });

    // Create Group Logic
    const createForm = document.getElementById("create-group-form");
    createForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const selectedDays = Array.from(
            document.querySelectorAll(".day-btn.selected")
        ).map(btn => btn.dataset.day);

        if (selectedDays.length === 0) {
            alert("Select a day!");
            return;
        }

        initialGroups.unshift({
            subject: document.getElementById("subject").value,
            year: document.getElementById("year").value,
            days: selectedDays,
            time: "10:00 - 12:00",
            members: document.getElementById("members").value,
            organizer: document.getElementById("organizer").value
        });

        renderGroups(initialGroups);
        createForm.reset();
        dayBtns.forEach(btn => btn.classList.remove("selected"));
        alert("Group Created!");
    });

    // Filter Logic
    window.filterGroups = function () {
        const filterYear = document.getElementById("filter-year").value;
        const filterSubject = document.getElementById("filter-subject").value;

        const filtered = initialGroups.filter(group => {
            return (filterYear === "all" || group.year === filterYear) &&
                   (filterSubject === "all" || group.subject === filterSubject);
        });

        renderGroups(filtered);
    };
});
