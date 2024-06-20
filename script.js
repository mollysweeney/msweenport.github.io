function myFunction() {
  var x = document.getElementById("aboutME");
  if (x.innerHTML === "") {
    x.innerHTML = '<p style="text-align: center;">Get to know me!</p>\
      <ul>\
          <li>I got into education because I have been working with children for over 6 years and cannot see myself doing anything else. I love forming relationships and watching kids grow.</li>\
          <li>I love reading - I just bought a Kindle! My favorite book I read recently is \'Everything I Know About Love\' by Dolly Parton. My goal is to read 20 books by the end of the year.</li>\
          <li>I am a huge Taylor Swift fan - I\'m going to see her in London this summer!</li>\
          <li>If I could describe myself in 3 words, I would say patient, passionate, and proactive!</li>\
      </ul>';
    x.style.fontFamily = "Quicksand";
    x.style.fontSize = "22px";
    x.style.textAlign = "left";
  } else {
    x.innerHTML = "";
  }
}

function myFunction2() {
  var x = document.getElementById("VIP");
  if (x.innerHTML === "") {
    x.innerHTML = 'From the best in the industry... <br> \
      <img src="IMG_3113.jpeg" style="display: inline; margin: 0 auto; width: 300px; height: 300px;" alt="Image Description"> \
      <img src="IMG_3114.jpeg" style="display: inline; margin: 0 auto; width: 300px; height: 300px;" alt="Image Description"> \
      <img src="IMG_3115.jpeg" style="display: inline; margin: 0 auto; width: 300px; height: 300px;" alt="Image Description"> \
      <img src="IMG_3116.jpeg" style="display: inline; margin: 0 auto; width: 300px; height: 300px;" alt="Image Description"> \
      <img src="IMG_3117.jpeg" style="display: inline; margin: 0 auto; width: 300px; height: 300px;" alt="Image Description"> \
      <img src="IMG_3118.jpeg" style="display: inline; margin: 0 auto; width: 300px; height: 300px;" alt="Image Description">';
    x.style.fontFamily = "Quicksand";
    x.style.fontSize = "30px";
    x.style.textAlign = "center";
  } else {
    x.innerHTML = "";
  }
}


function myFunction3() {
  var x = document.getElementById("progress");
  if (x.innerHTML === "") {
    x.innerHTML = 'Here are two key examples of how I monitored student progress: <br>' +
      '<div style="display: inline-block; margin: 10px;">' +
      '<img src="oliviasw.png" style="width: 430px; height: 305px;" alt="Image Description">' +
      '</div>' +
      '<div style="display: inline-block; margin: 10px;">' +
      '<img src="mathfacts.png" style="width: 425px; height: 300px;" alt="Image Description">' +
      '</div>';

    x.style.fontFamily = "Quicksand";
    x.style.fontSize = "22px";
    x.style.textAlign = "center";
  } else {
    x.innerHTML = "";
  }
}


function myFunction4() {
  var x = document.getElementById("LP");
  if (x.innerHTML === "") {
    x.innerHTML = '<a href="https://docs.google.com/document/d/14KmrMLxKovYTzHDi6a6FMvEg8ca1aVF5/edit?usp=sharing%26ouid=115937880449884812445%26rtpof=true%26sd=true">Click here to access my favorite lesson plans!</a>'

    x.style.fontFamily = "Quicksand";
    x.style.fontSize = "22px";
    x.style.textAlign = "center";
  } else {
    x.innerHTML = "";
  }
}

function myFunction5() {
  var x = document.getElementById("SW");
  if (x.innerHTML === "") {
    x.innerHTML = "Examples of Student Work/Classroom Involvement/Feedback: <br>" +
      '<div style="display: inline-block; margin: 10px;">' +
      '<img src="abhay.png" style="width: 300px; height: 300px;" alt="Image Description">' +
      '</div>' +
      '<div style="display: inline-block; margin: 10px;">' +
      '<img src="arctic.png" style="width: 300px; height: 300px;" alt="Image Description">' +
      '</div>' +
      '<div style="display: inline-block; margin: 10px;">' +
      '<img src="arctic2.png" style="width: 300px; height: 300px;" alt="Image Description">' +
      '</div>' +
      '<div style="display: inline-block; margin: 10px;">' +
      '<img src="redbox1.png" style="width: 300px; height: 300px;" alt="Image Description">' +
      '</div>' +
      '<div style="display: inline-block; margin: 10px;">' +
      '<img src="redbox2.png" style="width: 300px; height: 300px;" alt="Image Description">' +
      '</div>' +
      '<div style="display: inline-block; margin: 10px;">' +
      '<img src="board.png" style="width: 300px; height: 300px;" alt="Image Description">' +
      '</div> **Math/science/social studies was very hands-on, therefore pictures I captured included student faces which I wanted to keep confidential.';

    x.style.fontFamily = "Quicksand";
    x.style.fontSize = "22px";
    x.style.textAlign = "center";
  } else {
    x.innerHTML = '';
  }
}
