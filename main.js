var formData = [
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current website url",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [
      {
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

console.log(formData[1].type);
for (var i = 0; i < formData.length; i++) {
  // if ()
  var input = formData[i];
  // console.log(formData[0].type);
}

// parent element
var formNode = document.querySelector('.signup');
  formNode.style.width = 90 + '%';
  // formNode.style.marginLeft = 'auto';
  // formNode.style.marginRight = 'auto';

// header

var signUpHeader = document.createElement('h1');
  signUpHeader.textContent = 'Sign Up For My Web App';
  // signUpHeader.style.background = '#428BCA';
  formNode.appendChild(signUpHeader);

// first name icon
// var inputFirstNameBefore = document.createElement('input::before');
//   inputFirstNameBefore.textContent = '\&#xf007';
//   inputFirstNameBefore.style.fontFamily = 'FontAwesome';
//   formNode.appendChild(inputFirstNameBefore);


// first name
var inputFirstName = document.createElement('input');
  inputFirstName.setAttribute('type', formData[0].type);
  inputFirstName.setAttribute('placeholder', formData[0].label);
  inputFirstName.setAttribute('class', '<i class="' + formData[0].icon + '"></i>');
  // icon goes here
  inputFirstName.setAttribute('id', formData[0].id);
  inputFirstName.style.display = 'block';
  formNode.appendChild(inputFirstName);
  console.log(inputFirstName);


// last name
var inputLastName = document.createElement('input');
  inputLastName.setAttribute('type', formData[1].type);
  inputLastName.setAttribute('placeholder', formData[1].label);
  // icon goes here
  inputLastName.setAttribute('id', formData[1].id);
  inputLastName.style.display = 'block';
  formNode.appendChild(inputLastName);

// email address
var inputEmailAddress = document.createElement('input');
  inputEmailAddress.setAttribute('type', formData[2].type);
  inputEmailAddress.setAttribute('placeholder', formData[2].label);
  // icon goes here
  inputEmailAddress.setAttribute('id', formData[2].id);
  inputEmailAddress.style.display = 'block';
  formNode.appendChild(inputEmailAddress);

// website
var inputWebsite = document.createElement('input');
  inputWebsite.setAttribute('type', formData[3].type);
  inputWebsite.setAttribute('placeholder', formData[3].label);
  // icon goes here
  inputWebsite.setAttribute('id', formData[3].id);
  inputWebsite.style.display = 'block';
  formNode.appendChild(inputWebsite);

// language select
var selectLanguage = document.createElement('select');
  selectLanguage.setAttribute('type', formData[4].type);
  selectLanguage.setAttribute('placeholder', formData[4].label);
  selectLanguage.setAttribute('id', formData[4].id);
  selectLanguage.style.display = 'block';
  selectLanguage.style.width = 150 + 'px';
  formNode.appendChild(selectLanguage);

// options loop
for (var j = 0; j < formData[4].options.length; j++) {
  var inputOptions = formData[4].options[i];
  // console.log(formData[4].options.length);
}

  // language options
  var optionEnglish = document.createElement('option');
    optionEnglish.setAttribute('value', formData[4].options[0].value);
    optionEnglish.textContent = formData[4].options[0].label;
    selectLanguage.appendChild(optionEnglish);

  var optionFrench = document.createElement('option');
    optionFrench.setAttribute('value', formData[4].options[1].value);
    optionFrench.textContent = formData[4].options[1].label;
    selectLanguage.appendChild(optionFrench);

  var optionSpanish = document.createElement('option');
    optionSpanish.setAttribute('value', formData[4].options[2].value);
    optionSpanish.textContent = formData[4].options[2].label;
    selectLanguage.appendChild(optionSpanish);

  var optionChinese = document.createElement('option');
    optionChinese.setAttribute('value', formData[4].options[3].value);
    optionChinese.textContent = formData[4].options[3].label;
    selectLanguage.appendChild(optionChinese);

  var optionJapanese = document.createElement('option');
    optionJapanese.setAttribute('value', formData[4].options[4].value);
    optionJapanese.textContent = formData[4].options[4].label;
    selectLanguage.appendChild(optionJapanese);

// comment textarea
var textareaComment = document.createElement('textarea');
  textareaComment.setAttribute('type', formData[5].type);
  textareaComment.setAttribute('placeholder', formData[5].label);
  textareaComment.setAttribute('id', formData[5].id);
  textareaComment.style.display = 'block';
  // textareaComment.style.width = 90 + '%';
  formNode.appendChild(textareaComment);

// mobile number
var inputMobile = document.createElement('input');
  inputMobile.setAttribute('type', formData[6].type);
  inputMobile.setAttribute('placeholder', formData[6].label);
  // icon goes here
  inputMobile.setAttribute('id', formData[6].id);
  inputMobile.style.display = 'block';
  formNode.appendChild(inputMobile);

// home number
var inputHome = document.createElement('input');
inputHome.setAttribute('type', formData[7].type);
inputHome.setAttribute('placeholder', formData[7].label);
// icon goes here
inputHome.setAttribute('id', formData[7].id);
inputHome.style.display = 'block';
formNode.appendChild(inputHome);



// element.setAttribute('attribute name', attribute value)

// var parentElement = document.querySelector('.favorite-sodas');
// var listItem = document.createElement('li');
// listItem.textContent = 'Sprite';
// parentElement.appendChild(listItem);



// do another loop later for the options value that is also an array to loop through and get the values--this is for input[4]

// console.log(formData.length);
