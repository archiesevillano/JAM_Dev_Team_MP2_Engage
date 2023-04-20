// Objects
const recruiter = {
    firstname: 'James',
    lastname: 'Trinidad',
    timeposted: 'Posted 30 minutes ago',
    jobdescription: 'We are seeking a talented Marketing Manager to join our team. The Marketing Manager will be responsible for the overseeing the development and implentation of marketing strategies and campaigns to promote our products or services. The successful candidate will have a deep understaing of consumer behavior and market trends, as well as the ability to manage a team of marketing professionals.',
    numofapplicants: "433 Applicants",
    fullname: function {
        return this.firstname + ' ' + this.lastname;
    }
    
};

// Create Card Function 
const CreateCard = () => {
    // Card Creation
    // Create Element
    const cards = document.createElement('div');
    const card = document.createElement('div');
    const imgContainer = document.createElement('div');
    const img = document.createElement('img');
    const recNameTime = document.createElement("div");
    const recName = document.createElement('p');
    const timePost = document.createElement('p');
    const recOps = document.createElement('div');
    const recOpsBtn = document.createElement('button');
    const engCardsContent = document.createElement('div');
    const jobTitle = document.createElement('div');
    const jobTitleCntnt = document.createElement('p');
    const jobDescript = document.createElement('div');
    const jobSumName = document.createElement('p');
    const jobSummary = document.createElement('p');
    const hireCompany = document.createElement('div');
    const hiringComp = document.createElement('img');
    const engInfo = document.createElement('div');
    const engInfoNum = document.createElement('p');
    const engBot = document.createElement('div');
    const engBotBtn = document.createElement('button');
    const engBotBtn2 = document.createElement('button');

    // Class Adding
    card.classList.add(".engagement-cards-name");
    cards.classList.add(".engagement-cards");
    imgContainer.classList.add(".recruiter-image");
    recNameTime.classList.add(".recruiter-name-timeposted");
    recName.classList.add(".recruiter-name");
    timePost.classList.add(".time-posted");
    recOps.classList.add(".recruiter-options");
    recOpsBtn.classList.add(".fa-solid fa-ellipsis fa-xs");
    engCardsContent.classList.add(".engagement-cards-content");
    jobTitle.classList.add(".job-title");
    jobDescript.classList.add(".job-description");
    hireCompany.classList.add(".hiring-company");
    engInfo.classList.add(".engagement-info");
    engBot.classList.add(".engagement-bottom");


    cards.appendChild("card");
    card.appendChild("imgContainer", "recNameTime", "recOps", "engCardsContent", "engInfo", "engBot")
    imgContainer.appendChild("img")
    recNameTime.appendChild("recName", "timePost")
    recOps.appendChild("recOpsBtn")
    engCardsContent.appendChild("jobTitle", "jobDescript", "hireCompany");
    engInfo.appendChild("engInfoNum");
    engBot.appendChild("engBotBtn", "const engBotBtn2");




};



