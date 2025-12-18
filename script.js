window.onload = function() {
    document.getElementById('year-filter').onchange = filterJobs;
    document.getElementById('stipend-filter').onchange = filterJobs;
    document.getElementById('worktype-filter').onchange = filterJobs;
};

function filterJobs() {
    let year = document.getElementById('year-filter').value;
    let stipend = document.getElementById('stipend-filter').value;
    let worktype = document.getElementById('worktype-filter').value;
    
    document.querySelectorAll('.internship-card').forEach(card => {
        let cardYear = card.getAttribute('data-years');
        let cardStipend = card.getAttribute('data-stipend');
        let cardWorktype = card.getAttribute('data-worktype');
        
        let show = true;
        
        if (year !== 'all' && !cardYear.includes(year)) show = false;
        if (stipend !== 'all' && cardStipend !== stipend) show = false;
        if (worktype !== 'all' && cardWorktype !== worktype) show = false;
        
        card.style.display = show ? 'block' : 'none';
    });
}

document.querySelectorAll('.apply-btn').forEach(btn => {
    btn.onclick = function(e) {
        e.preventDefault();
        
        let card = this.closest('.internship-card');
        let jobTitle = card.querySelector('h2');
        let job = jobTitle.textContent;
        let url = this.getAttribute('onclick').match(/'([^']+)'/)[1];
        
        window.open(url, '_blank');
        
        window.onfocus = function() {
            if (confirm("Did you submit form for: " + job + "?\n OK = YES \n CANCEL = NO")) {
                // Mark as applied
                btn.innerHTML = '✓ Applied';
                btn.style.background = 'gray';
                btn.disabled = true;
                
                jobTitle.style.textDecoration = 'line-through';
                jobTitle.style.color = '#888';
            }
            window.onfocus = null; 
        };
    };
});
