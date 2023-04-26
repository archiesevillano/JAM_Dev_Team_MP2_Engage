const headernavburger = () => {
    let icon = document.getElementById("myLinks");
    if (icon.style.display === "block") {
        icon.style.display = "none";
    } else {
        icon.style.display = "block";
    }
    console.log(headernavburger)
  }
  
  const openModal = document.getElementById("open-modal");
  const modal = document.getElementById("modal");
  const closeBtn = document.getElementsByClassName("close")[0];
  
  openModal.onclick = function() {
    modal.style.display = "block";
  }
  
  closeBtn.onclick = function() {
    modal.style.display = "none";
  }
  
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

const dropdownBtn = document.querySelector('.drop-btn');
const dropdownContent = document.querySelector('.dropdown-content');

const selectCategory = () => {
  dropdownContent.addEventListener('click', event => {
    if (event.target.tagName === 'A') {
      const selectedCategory = event.target.textContent;
      dropdownBtn.textContent = selectedCategory;
    }
  });
}

selectCategory();
  
  

const jobCategories = {};

const fetchJobs = async () => {
  try {
    const response = await fetch('./../assets/db/career.json');
    const data = await response.json();

    // Group jobs by category
    data.forEach((jobnametext) => {
      if (jobnametext.Category in jobCategories) {
        jobCategories[jobnametext.Category].push(jobnametext);
      } else {
        jobCategories[jobnametext.Category] = [jobnametext];
      }
    });

    // Create job cards up to 8 per category
    const cardsContainer = document.querySelector('.jobposted-cards');
    for (const category in jobCategories) {
      const categoryJobs = jobCategories[category];
      const numJobs = Math.min(categoryJobs.length, 8);
      for (let i = 0; i < numJobs; i++) {
        const job = categoryJobs[i];

        const card = document.createElement('div');
        card.classList.add('jobposted-cards');

        const jobImage = document.createElement('img');
        jobImage.classList.add('job-image');
        jobImage.setAttribute('src', job.JobImage);

        const jobName = document.createElement('p');
        jobName.classList.add('job-name-text');
        jobName.textContent = job.JobTitle;

        const companyName = document.createElement('p');
        companyName.classList.add('company-hiring');
        companyName.textContent = job.Company;

        const viewJobBtn = document.createElement('button');
        viewJobBtn.setAttribute('id', `open-modal-${job.JobID}`);
        viewJobBtn.textContent = 'VIEW JOB';

        const modal = document.createElement('div');
        modal.setAttribute('id', `modal-${job.JobID}`);
        modal.innerHTML = `
          <div class="modal-content">
            <div class="job-header">
              <h1>${job.JobTitle}</h1>
              <button class="close-btn">&times;</button>
            </div>
            <div class="content">
              <section class="summary">
                <p class="job-labels">Job Summary</p>
                <p>${job.JobDescription}</p>
              </section>
              <section class="j-qualifications">
                <p class="job-labels">Job Qualifications</p>
                <ul class="qualification-list">
                  ${job.JobQualifications.map(q => `<li>${q}</li>`).join('')}
                </ul>
              </section>
            </div>
          </div>
        `;

        viewJobBtn.addEventListener('click', () => {
          modal.style.display = 'block';
        });

        const closeBtn = modal.querySelector('.close-btn');
        closeBtn.addEventListener('click', () => {
          modal.style.display = 'none';
        });

        card.appendChild(jobImage);
        card.appendChild(jobName);
        card.appendChild(companyName);
        card.appendChild(viewJobBtn);
        card.appendChild(modal);

        cardsContainer.appendChild(card);
      }
    }
  } catch (error) {
    console.error(error);
  }
};

fetchJobs();
``