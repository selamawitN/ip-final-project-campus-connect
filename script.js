<script>

window.onload = function() {
  
    document.getElementById('year-filter').onchange = filterJobs;
    document.getElementById('stipend-filter').onchange = filterJobs;
    document.getElementById('worktype-filter').onchange = filterJobs;
    
    // Load applied jobs
    let save = localStorage.getItem('applied') || '';
    
    document.querySelectorAll('.apply-btn').forEach(btn => {
        let job = btn.closest('.internship-card').querySelector('h2').textContent;
        
        if (save.includes(job)) {
            btn.innerHTML = '✓ Applied';
            btn.style.background = 'gray';
        }
    });
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
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        
        let job = this.closest('.internship-card').querySelector('h2').textContent;
        let url = this.getAttribute('onclick').match(/'([^']+)'/)[1];
        
        window.open(url, '_blank');
        
       setTimeout(() => {
            if (confirm("Did you submit form for: " + job + "?\n OK = YES \n CANCEL = NO" )) {
                this.innerHTML = '✓ Applied';
                this.style.background = 'gray';
                
                let old = localStorage.getItem('applied') || '';
                localStorage.setItem('applied', old + '|' + job);
            }
        }, 1000); 
    });
});

</script>
