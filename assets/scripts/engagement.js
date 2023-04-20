import { loadOnlineSource } from "./resources.js";


// Objects
const recruiter = [{
    imageURL: '',
    firstname: 'James',
    lastname: 'Trinidad',
    timeposted: 'Posted 30 minutes ago',
    jobtitle: 'Marketing Manager',
    jobdescription: 'We are seeking a talented Marketing Manager to join our team. The Marketing Manager will be responsible for the overseeing the development and implentation of marketing strategies and campaigns to promote our products or services. The successful candidate will have a deep understaing of consumer behavior and market trends, as well as the ability to manage a team of marketing professionals.',
    numofapplicants: "433",
        fullname: () =>  {
            return this.firstname + ' ' + this.lastname;
        }
    },
    {
    numofapplicants: 433,
    fullname: () => {
        return this.firstname + ' ' + this.lastname;
    }
},
{
    firstname: 'June',
    lastname: 'Li',
    timeposted: 'Posted 30 minutes ago',
    jobtitle: 'Magit rketing Strategist',
    jobdescription: 'We are seeking a talented Marketing Strategist to join our team. As a Marketing Strategist, you will be responsible for developing and implementing marketing strategies that drive growth and revenue for our company. You will work closely with our marketing and sales teams to develop campaigns that generate leads and engage customers.',
    numofapplicants: "433",
        fullname: () => {
            return this.firstname + ' ' + this.lastname;
        }
    
}];
    numofapplicants: 433,
    fullname: () => {
        return this.firstname + ' ' + this.lastname;
    }

}];


console.log(recruiter);

// Create Card Function 
export const createCard = () => {
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

    cards.className =  ".engagement-cards";
    card.className =  ".engagement-cards-name";
    imgContainer.className =  ".recruiter-image";
    recNameTime.className =  ".recruiter-name-timeposted";
    recName.className =  ".recruiter-name";
    timePost.className =  ".time-posted";
    recOps.className =  ".recruiter-options";
    recOpsBtn.className =  ".fa-solid fa-ellipsis fa-xs";
    engCardsContent.className =  ".engagement-cards-content";
    jobTitle.className =  ".job-title";
    jobDescript.className =  ".job-description";
    hireCompany.className =  ".hiring-company";
    engInfo.className =  ".engagement-info";
    engBot.className =  ".engagement-bottom";


    cards.appendChild("card");
    card.appendChild("imgContainer", "recNameTime", "recOps", "engCardsContent", "engInfo", "engBot")
    imgContainer.appendChild("img")
    recNameTime.appendChild("recName", "timePost")
    recOps.appendChild("recOpsBtn")
    engCardsContent.appendChild("jobTitle", "jobDescript", "hireCompany");
    engInfo.appendChild("engInfoNum");
    engBot.appendChild("engBotBtn", "const engBotBtn2");

    
};


createCard();