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

// parent element
var formNode = document.querySelector('.signup');
var fieldsNode = document.querySelector('.fields');

// Attempting to add in font awesome icons
  for (var i = 0; i < formData.length; i++) {
    var input = formData[i];
    if (formData[i].icon) {
      var divNode = document.createElement('div');
      divNode.setAttribute('class', 'label-div');
      fieldsNode.appendChild(divNode);
      var spanNode = document.createElement('span');
      divNode.appendChild(spanNode);
    }

// And creating inputs and setting attributes
    if (input.type === 'text' || input.type === 'email' || input.type === 'tel') {
      var myElement = document.createElement('input');
      divNode.appendChild(myElement);
    } else if (input.type === 'select') {
      var myElement = document.createElement('select');
      fieldsNode.appendChild(myElement);
    } else if (input.type === 'textarea') {
      var myElement = document.createElement('textarea');
      divNode.appendChild(myElement);
    }
    myElement.setAttribute('type', input.type);
    myElement.setAttribute('placeholder', input.label);
    myElement.setAttribute('id', input.id);
    myElement.setAttribute('class', 'form-control');
  }

  // options array
  for (var i = 0; i < formData[4].options.length; i++) {
    var inputOptions = formData[4].options[i];
    var selectOptions = document.createElement('option');
    selectOptions.setAttribute('value', inputOptions.value);
    selectOptions.textContent = inputOptions.label;
    document.getElementById('user-language').appendChild(selectOptions);
  }
