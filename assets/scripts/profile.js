const init = () => {
    const clsBtn = document.querySelector(".profile-cls-btn");
    const profileBox = document.querySelector(".profile-box");
    const overlay = document.querySelector(".modal-overlay");

    clsBtn.addEventListener('click', () => {
        profileBox.classList.remove('active');
        overlay.classList.remove("active");
    });
}

init();

const portField = document.getElementById('portFolio');
const addButton = document.querySelector('.add-btn');
const editButton = document.querySelector('.edit-btn');
const removeButton = document.querySelector('.rem-btn');
const saveButton = document.querySelector('.saved-btn');

const toggleButtons = (addBtn, editBtn, remBtn, savedBtn) => {
  addButton.style.display = addBtn ? 'inline-block' : 'none';
  editButton.style.display = editBtn ? 'inline-block' : 'none';
  removeButton.style.display = remBtn ? 'inline-block' : 'none';
  saveButton.style.display = savedBtn ? 'inline-block' : 'none';
};

const addEditRemoveSave = () => {
  toggleButtons(true, false, false, false); // show only the add button initially

  addButton.addEventListener('click', () => {
    portField.disabled = false;
    portField.focus();
    toggleButtons(false, false, true, true); // hide other buttons and show save button
  });

  saveButton.addEventListener('click', () => {
    const newItem = portField.value.trim();
    if (newItem) {
      // add the new item to a list or database
      toggleButtons(false, true, true, false); // show edit and remove buttons
    } else {
      toggleButtons(false, true, true, false); // show only the add button if input is empty
    }
    portField.disabled = true;
  });

  editButton.addEventListener('click', () => {
    portField.disabled = false;
    portField.focus();
    toggleButtons(false, false, true, true); // hide other buttons and show save button
  });

  removeButton.addEventListener('click', () => {
    // remove the item from the list or database
    portField.value = '';
    toggleButtons(true, false, false, false); // show only the add button
    portField.disabled = true;
  });
};

// Call the function immediately when the page loads
addEditRemoveSave();

const workField = document.getElementById('workExpe');
const addExButton = document.querySelector('.addExBtn');
const editExButton = document.querySelector('.edtExBtn');
const remExButton = document.querySelector('.remExBtn');
const saveExButton = document.querySelector('.savedExBtn');

const toggleExButtons = (addBtn, editBtn, remBtn, saveBtn) => {
  addExButton.style.display = addBtn ? 'inline-block' : 'none';
  editExButton.style.display = editBtn ? 'inline-block' : 'none';
  remExButton.style.display = remBtn ? 'inline-block' : 'none';
  saveExButton.style.display = saveBtn ? 'inline-block' : 'none';
};

const exAddEditRemoveSave = () => {
  toggleExButtons(true, false, false, false); // show only the add button initially

  addExButton.addEventListener('click', () => {
    workField.disabled = false;
    workField.focus();
    toggleExButtons(false, false, true, true); // hide other buttons and show save button
  });

  saveExButton.addEventListener('click', () => {
    const newItem = workField.value.trim();
    if (newItem) {
      // add the new item to a list or database
      toggleExButtons(false, true, true, false); // show edit and remove buttons
    } else {
      toggleExButtons(false, true, true, false); // show only the add button if input is empty
    }
    workField.disabled = true;
  });

  editExButton.addEventListener('click', () => {
    workField.disabled = false;
    workField.focus();
    toggleExButtons(false, false, true, true); // hide other buttons and show save button
  });

  remExButton.addEventListener('click', () => {
    // remove the item from the list or database
    workField.value = '';
    toggleExButtons(true, false, false, false); // show only the add button
    workField.disabled = true;
  });
};

// Call the function immediately when the page loads
exAddEditRemoveSave();

const educField = document.getElementById('educ');
const educAddButton = document.querySelector('.educAddBtn');
const educEditButton = document.querySelector('.educEdBtn');
const educRemButton = document.querySelector('.educRemBtn');
const educSaveButton = document.querySelector('.educSaveBtn');

const toggleEducButtons = (addBtn, editBtn, remBtn, saveBtn) => {
  educAddButton.style.display = addBtn ? 'inline-block' : 'none';
  educEditButton.style.display = editBtn ? 'inline-block' : 'none';
  educRemButton.style.display = remBtn ? 'inline-block' : 'none';
  educSaveButton.style.display = saveBtn ? 'inline-block' : 'none';
};

const educAddEditRemoveSave = () => {
  toggleEducButtons(true, false, false, false); // show only the add button initially

  educAddButton.addEventListener('click', () => {
    educField.disabled = false;
    educField.focus();
    toggleEducButtons(false, false, true, true); // hide other buttons and show save button
  });

  educSaveButton.addEventListener('click', () => {
    const newItem = educField.value.trim();
    if (newItem) {
      // add the new item to a list or database
      // show edit and remove buttons
      toggleEducButtons(false, true, true, false); 
    } else {
         // show only the add button if input is empty
      toggleEducButtons(false, true, true, false);
    }
    educField.disabled = true;
  });

// hide other buttons and show save button
  educEditButton.addEventListener('click', () => {
    educField.disabled = false;
    educField.focus();
    toggleEducButtons(false, false, true, true); 
  });

  educRemButton.addEventListener('click', () => {
    // remove the item from the list or database
    educField.value = '';
     // show only the add button
    toggleEducButtons(true, false, false, false);
    educField.disabled = true;
  });
};

// Call the function immediately when the page loads
educAddEditRemoveSave();