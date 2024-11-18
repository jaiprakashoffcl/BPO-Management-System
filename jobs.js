document.addEventListener('DOMContentLoaded', function() {
    const jobsLink = document.getElementById('jobs-link');
    const jobListSection = document.getElementById('job-list-section');

    jobsLink.addEventListener('click', function(event) {
        event.preventDefault();
        displayJobList();
    });

    function displayJobList() {
        // Simulated job data for demonstration
        const jobs = [
            { id: 1, title: 'Data Entry Operator', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
            { id: 2, title: 'Web Developer', description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.' },
            // Add more job listings as needed
        ];

        // Clear previous job listings
        jobListSection.innerHTML = '';

        // Create and append job listing elements
        const ul = document.createElement('ul');
        jobs.forEach(job => {
            const li = document.createElement('li');
            li.innerHTML = `
                <strong>${job.title}</strong>: ${job.description}
                <button class="apply-btn" data-job-id="${job.id}">Apply</button>
            `;
            ul.appendChild(li);
        });
        jobListSection.appendChild(ul);

        // Add event listeners to apply buttons
        const applyButtons = document.querySelectorAll('.apply-btn');
        applyButtons.forEach(button => {
            button.addEventListener('click', function() {
                const jobId = button.dataset.jobId;
                // Redirect to the job application page with job ID as parameter
                window.location.href = `apply.html?jobId=${jobId}`;
            });
        });
    }
});

