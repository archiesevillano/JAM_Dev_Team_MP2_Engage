import { populateCities, populateDays, populateMonths, populateProvince, populateYears, togglePassword } from "./form.js";

const load = () => {
  const cancelBtn = document.querySelector(".sign-up-cancel-btn");
  cancelBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.history.back();
  });

  const togglePs = document.querySelector(".new-password-toggle-btn");
  const toggleConfirmPs = document.querySelector(".confirm-password-toggle-btn");
  const passwordField = document.querySelector(".password");
  const confirmPasswordField = document.querySelector(".confirm-password");

  togglePassword(passwordField, togglePs);
  togglePassword(confirmPasswordField, toggleConfirmPs);

    populateCities();
    populateProvince();
    populateMonths();
    populateYears();
    populateDays();
    // End of show toggle password
    // Sign up 
    const signIn = document.querySelector(".sign-up-btn");
    signIn.addEventListener('click', e => {
        e.preventDefault();

  const signUp = document.querySelector(".sign-up-btn");
  signUp.addEventListener('click', () => {
    const firstname = document.querySelector(".firstname");
    const middlename = document.querySelector(".middlename");
    const lastname = document.querySelector(".lastname");
    const bMonth = document.querySelector(".birth-month");
    const bDay = document.querySelector(".birth-day");
    const bYear = document.querySelector(".birth-year");
    const sex = document.querySelector(".sex-selection");
    const emailInput = document.querySelector(".email");
    const passwordInput = document.querySelector(".password");
    const passwordInputCopy = document.querySelector(".confirm-password");
    const street = document.querySelector(".street");
    const unit = document.querySelector(".unitNo");
    const city = document.querySelector(".city-selection");
    const province = document.querySelector(".province-selection");
    const zip = document.querySelector(".zipcode");
    const cb = document.querySelector(".sign-up-agreement");

    // fname, mname, lname, b_month, b_day, b_year, email, street, unit, sex, city, province, zip, ps, ps_copy, cbox
    verifyInput(firstname, middlename, lastname, bMonth, bDay, bYear, emailInput, street, unit, sex, city, province, zip, passwordInput, passwordInputCopy, cb);
  });
})};

load();


const generateRandomId = () => {
  const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const idLength = 8; // You can adjust the length of the ID here

  let randomId = '';
  for (let i = 0; i < idLength; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    randomId += chars[randomIndex];
  }

  return randomId;
}



const verifyInput = (fname, mname, lname, b_month, b_day, b_year, email, street, unit, sex, city, province, zip, ps, ps_copy, cbox) => {

  const user = {
    userID: "",
    fullname: {
      first: "",
      middle: "",
      last: "",
    },
    sex: "",
    birthdate: {
      month: "",
      day: "",
      year: "",
    },
    account: {
      email: "",
      password: "",
    },
    address: {
      street: "",
      unit: "",
      city: "",
      province: "",
      zip: "",
    }
  }

  const errorMessage = document.querySelector(".error-message");

  try {
    //check if one or more fields are empty
    if (!(fname.value && lastname.value && email.value && street.value && unit.value && zip.value && ps.value && ps_copy.value && city.value)) {
      throw "Please fill out all necessary fields";
    }
    else {
      //checked if the user agreed to terms and conditions
      if (!cbox.checked) {
        throw "You must agree first to our Privacy Policy and T&Cs";
      }
      else {
        //check if the user already set his bday
        if (b_month.value == "Month" || b_day.value == "Day" || b_year.value == "Year" || sex.value == "Sex" || province.value == "Province") {
          throw "Please choose a value in the dropdown";
        }
        else {

          //check if the user's email is valid
          const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/i;

          if (!regex.test(email.value)) {
            throw "Invalid email format";
          }
          else {

            //checks if the password has at least 8 chars long, 1 special char, lower and uppercase letter
            if (password.value.length <= 7) {
              throw "Password must be at least 8 characters long";
            }
            else {
              //checks if the password has at least 1 special char

              const regex = /^(?=.*[!@#$%^&*(),.?":{}|<>])[a-zA-Z\d!@#$%^&*(),.?":{}|<>]{8,}$/;

              if (!regex.test(ps.value)) {
                throw "Password must have at least 1 special character";
              }
              else {
                // checks if the password has at least 1 lower and 1 uppercase letter
                const regex = /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d!@#$%^&*(),.?":{}|<>]{8,}$/;
                if (!regex.test(ps.value)) {
                  throw "Password must have at least 1 lowercase and uppercase";
                }
                else {
                  const regex = /^(?=.*\d)[\w!@#$%^&*()\-+={}\[\]|\\:;"'<>,.?\/]{8,}$/;
                  //Check if the password has a digit
                  if (!regex.test(ps.value)) {
                    throw "Password must have at least 0-9 digit";
                  }
                  else {

                    //check if password and confirm password has the same value

                    if (ps.value !== ps_copy.value) {
                      throw "Password does not match";
                    }
                    else {

                      user.userID = generateRandomId();
                      user.fullname.first = fname.value;
                      user.fullname.middle = mname.value;
                      user.fullname.last = lname.value;
                      user.account.email = email.value;
                      user.account.password = ps.value;
                      user.birthdate.month = b_month.value;
                      user.birthdate.day = b_day.value;
                      user.birthdate.year = b_year.value;
                      user.sex = sex.value;
                      user.address.street = street.value;
                      user.address.province = province.value;
                      user.address.zip = zip.value;
                      user.address.city = city.value;

                      errorMessage.style.display = "none";
                      localStorage.setItem("userAccount", JSON.stringify(user));
                      alert("Successfully Registered!");

                    }

                  }

                }

              }

            }

          }

        }
      }
    }

  } catch (error) {
    errorMessage.textContent = error;
    errorMessage.style.display = "block";
  }

}

