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
  const cardsContainer = document.querySelector('.cards-container');
  
  // Fetch data from JSON file
  const fetchData = async () => {
    const response = await fetch(`./../assets/db/data.json`);
    const data = await response.json();
    return data;
  }
  
  containerCards.className = ".card-container";
  jobsPostedCards.className = ".jobposted-cards";
  jobImgContainer.className = ".job-image";
  jobImg.className = ".job-image";
  jobTextContent.className = ".jobtext-content";
  jobName.className = ".job-name";
  jobNameText.className = ".job-name-text";
  companyHiring.className = ".company-hiring";
  viewJobBtn.className = ".viewjob-btn";
  openModal.className = ".open-modal";
  modal.className = ".modal";
  modalContent.className = ".modal-content";
  closer.className = ".close";
  jobDescriptContain.className = ".job-description-container";
  jobDescriptionH3.className = ".job-description";
  jobDescpBtn.className = ".jobdescp-btn";
  applyJobBtn.className = ".jobdescp-btn";
  
  
  const containerCards = document.createElement('div');
  const jobsPostedCards = document.createElement('div');
  const jobImgContainer = document.createElement('div');
  const jobImg = document.createElement('img');
  const jobTextContent = document.createElement('div');
  const jobName = document.createElement('div');
  const jobNameText = document.createElement('p');
  const companyHiring = document.createElement('p');
  const viewJobBtn = document.createElement('div');
  const openModal = document.createElement('button');
  const modalDiv = document.createElement('div');
  const modalContent = document.createElement('div');
  const closer = document.createElement('span');
  const jobDescriptContain = document.createElement('div');
  const jobDescriptionH3 = document.createElement('h3');
  const jobDescrpt = document.createElement('p');
  const jobDescpBtn = document.createElement('div');
  const applyJobBtn = document.createElement('button');
  
  containerCards.appendChild(jobsPostedCards);
  jobsPostedCards.appendChild(jobImgContainer, jobTextContent, viewJobBtn, modal, jobDescriptContain, modalContent);
  jobImgContainer.appendChild(jobImg);
  jobDescriptContain.appendChild(recName, timePost);
  jobDescriptContain.appendChild(jobDescriptionH3, jobDescrpt);
  jobDescpBtn.appendChild(applyJobBtn);
  engInfo.appendChild(engInfoNum);
  engBot.appendChild(engBotBtn, engBotBtn2);
  
  
  