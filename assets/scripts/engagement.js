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
    fullname: () => {
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


//     numofapplicants: 433,
//     fullname: () => {
//         return this.firstname + ' ' + this.lastname;
//     }

// }];


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

    cards.className = ".engagement-cards";
    card.className = ".engagement-cards-name";
    imgContainer.className = ".recruiter-image";
    recNameTime.className = ".recruiter-name-timeposted";
    recName.className = ".recruiter-name";
    timePost.className = ".time-posted";
    recOps.className = ".recruiter-options";
    recOpsBtn.className = ".fa-solid fa-ellipsis fa-xs";
    engCardsContent.className = ".engagement-cards-content";
    jobTitle.className = ".job-title";
    jobDescript.className = ".job-description";
    hireCompany.className = ".hiring-company";
    engInfo.className = ".engagement-info";
    engBot.className = ".engagement-bottom";


    cards.appendChild(card);
    card.appendChild(imgContainer, recNameTime, recOps, engCardsContent, engInfo, engBot);
    imgContainer.appendChild(img);
    recNameTime.appendChild(recName, timePost);
    recOps.appendChild(recOpsBtn);
    engCardsContent.appendChild(jobTitle, jobDescript, hireCompany);
    engInfo.appendChild(engInfoNum);
    engBot.appendChild(engBotBtn, engBotBtn2);


};

const jobInfo = () => {
    const jobBox = document.querySelector(".job-information");
    const jobPosition = document.querySelector(".job-position");
    const qualifications = document.querySelector(".qualification-list");
    const applyBtn = document.querySelector(".apply-btn");
    const savePost = document.querySelector(".save-btn");
    const more = document.querySelector(".more-job-details");
    const clsBtn = document.querySelector(".close-btn");
    const overlay = document.querySelector(".modal-overlay");

    jobBox.classList.add("active");
    overlay.classList.add("active");
    clsBtn.addEventListener('click', () => {
        jobBox.classList.remove('active');
        overlay.classList.remove('active');
    })
}

const createJobPost = () => {

    const wrapper = document.querySelector(".cards-container");

    // Create the main div element
    let engagementCardDiv = document.createElement("div");
    engagementCardDiv.className = "engagement-card";

    // Create the header div element and its children
    let headerDiv = document.createElement("div");
    headerDiv.className = "header";
    headerDiv.style.width = "100%";
    headerDiv.style.display = "flex";
    headerDiv.style.flexDirection = "row";
    headerDiv.style.justifyContent = "space-between";

    let userProfileDiv = document.createElement("div");
    userProfileDiv.className = "user_profile";

    let userImg = document.createElement("img");
    userImg.src = "assets/images/user-pic.png";
    userProfileDiv.appendChild(userImg);

    let postHeaderDiv = document.createElement("div");
    postHeaderDiv.className = "post-header";

    let postHeaderH3 = document.createElement("h3");
    postHeaderH3.innerHTML = "Julies Sarmiento";
    postHeaderDiv.appendChild(postHeaderH3);

    let postHeaderP = document.createElement("p");
    postHeaderP.innerHTML = "Posted 15 minutes ago";
    postHeaderDiv.appendChild(postHeaderP);

    let dotsButton = document.createElement("button");
    dotsButton.className = "dots";

    let dotsIcon = document.createElement("i");
    dotsIcon.className = "fa-solid fa-ellipsis";
    dotsButton.appendChild(dotsIcon);

    headerDiv.appendChild(userProfileDiv);
    headerDiv.appendChild(postHeaderDiv);
    headerDiv.appendChild(dotsButton);

    // Create the body div element and its child
    let bodyDiv = document.createElement("div");
    bodyDiv.className = "body";

    let bodyImg = document.createElement("img");
    bodyImg.src = "assets/images/job/FB_IMG_1682290828586.jpg";
    bodyImg.style.width = "100%";
    bodyImg.style.marginTop = "20px";
    bodyDiv.appendChild(bodyImg);

    // Create the Apply now button element
    let applyNowButton = document.createElement("button");
    applyNowButton.className = "apply-now-btn btn-primary";
    applyNowButton.innerHTML = "Apply now";

    // Create the Details button element
    let detailsButton = document.createElement("button");
    detailsButton.className = "details-btn btn-plain";
    detailsButton.innerHTML = "Details";
    detailsButton.addEventListener('click', () => {
        jobInfo();
    })

    // Append all elements to the main engagement card div
    engagementCardDiv.appendChild(headerDiv);
    engagementCardDiv.appendChild(bodyDiv);
    engagementCardDiv.appendChild(applyNowButton);
    engagementCardDiv.appendChild(detailsButton);

    wrapper.appendChild(engagementCardDiv);
}

const createTrainingPost = () => {

    const wrapper = document.querySelector(".cards-container");

    // Create the main div element
    let engagementCardDiv = document.createElement("div");
    engagementCardDiv.className = "engagement-card";

    // Create the header div element and its children
    let headerDiv = document.createElement("div");
    headerDiv.className = "header";
    headerDiv.style.width = "100%";
    headerDiv.style.display = "flex";
    headerDiv.style.flexDirection = "row";
    headerDiv.style.justifyContent = "space-between";

    let userProfileDiv = document.createElement("div");
    userProfileDiv.className = "user_profile";

    let userImg = document.createElement("img");
    userImg.src = "assets/images/user-pic.png";
    userProfileDiv.appendChild(userImg);

    let postHeaderDiv = document.createElement("div");
    postHeaderDiv.className = "post-header";

    let postHeaderH3 = document.createElement("h3");
    postHeaderH3.innerHTML = "Julies Sarmiento";
    postHeaderDiv.appendChild(postHeaderH3);

    let postHeaderP = document.createElement("p");
    postHeaderP.innerHTML = "Posted 15 minutes ago";
    postHeaderDiv.appendChild(postHeaderP);

    let dotsButton = document.createElement("button");
    dotsButton.className = "dots";

    let dotsIcon = document.createElement("i");
    dotsIcon.className = "fa-solid fa-ellipsis";
    dotsButton.appendChild(dotsIcon);

    headerDiv.appendChild(userProfileDiv);
    headerDiv.appendChild(postHeaderDiv);
    headerDiv.appendChild(dotsButton);

    // Create the body div element and its child
    let bodyDiv = document.createElement("div");
    bodyDiv.className = "body";

    let bodyImg = document.createElement("img");
    bodyImg.src = "assets/images/training program Images/cyber security.png";
    bodyImg.style.width = "100%";
    bodyImg.style.marginTop = "20px";
    bodyDiv.appendChild(bodyImg);

    // Create the Enroll now button element
    let enrollNowButton = document.createElement("button");
    enrollNowButton.className = "enroll-now-btn btn-primary";
    enrollNowButton.innerHTML = "Enroll now";

    // Create the Save Post button element
    let savePostButton = document.createElement("button");
    savePostButton.className = "save-post-btn btn-plain";
    savePostButton.innerHTML = "Save Post";

    // Append all elements to the main engagement card div
    engagementCardDiv.appendChild(headerDiv);
    engagementCardDiv.appendChild(bodyDiv);
    engagementCardDiv.appendChild(enrollNowButton);
    engagementCardDiv.appendChild(savePostButton);

    wrapper.appendChild(engagementCardDiv);
}

const createInterview = async (src, title, allow, allowF) => {

    const wrapper = document.querySelector(".cards-container");

    // create the engagement card div element
    const engagementCard = document.createElement('div');
    engagementCard.classList.add('engagement-card');

    // create the header div element
    const header = document.createElement('div');
    header.classList.add('header');
    header.style.width = '100%';
    header.style.display = 'flex';
    header.style.flexDirection = 'row';
    header.style.justifyContent = 'space-between';

    // create the user profile div element and add the logo image
    const userProfile = document.createElement('div');
    userProfile.classList.add('user_profile');
    const logoImg = document.createElement('img');
    logoImg.src = 'assets/images/logo.png';
    userProfile.appendChild(logoImg);

    // create the post header div element and add the title and date
    const postHeader = document.createElement('div');
    postHeader.classList.add('post-header');
    const title = document.createElement('h3');
    title.textContent = 'Interview Tips and Tricks';
    const date = document.createElement('p');
    date.textContent = 'Posted 15 minutes ago';
    postHeader.appendChild(title);
    postHeader.appendChild(date);

    // create the dots button
    const dotsBtn = document.createElement('button');
    dotsBtn.classList.add('dots');
    const dotsIcon = document.createElement('i');
    dotsIcon.classList.add('fa-solid', 'fa-ellipsis');
    dotsBtn.appendChild(dotsIcon);

    // append the user profile, post header, and dots button to the header div
    header.appendChild(userProfile);
    header.appendChild(postHeader);
    header.appendChild(dotsBtn);

    // create the body div element and add the youtube iframe
    const body = document.createElement('div');
    body.classList.add('body');
    const youtubeIframe = document.createElement('iframe');
    youtubeIframe.width = '100%';
    youtubeIframe.height = '270px';
    youtubeIframe.src = await src;
    youtubeIframe.title = title;
    youtubeIframe.frameBorder = 0;
    youtubeIframe.allow = allow;
    youtubeIframe.allowFullscreen = true;
    body.appendChild(youtubeIframe);

    // create the watch now and save post buttons
    const watchNowBtn = document.createElement('button');
    watchNowBtn.classList.add('enroll-now-btn', 'btn-primary');
    watchNowBtn.textContent = 'Watch now';
    const savePostBtn = document.createElement('button');
    savePostBtn.classList.add('save-post-btn', 'btn-plain');
    savePostBtn.textContent = 'Save Post';

    // append all the elements to the engagement card div element
    engagementCard.appendChild(header);
    engagementCard.appendChild(body);
    engagementCard.appendChild(watchNowBtn);
    engagementCard.appendChild(savePostBtn);

    // append the engagement card to the document body or another desired parent element
    wrapper.appendChild(engagementCard);
}
