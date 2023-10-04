const form = document.querySelector(`form`);
form.addEventListener(`submit`, function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector(`#height`).value);
  const weight = parseInt(document.querySelector(`#weight`).value);
  const result = document.querySelector(`#results`);

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span>${BMI}<span>`;
  }
});

// ***************************************************************************************************************//
// NOTE : =>>>                                                                                                    //
// 1. Took the form because we have to submit the form in line no.1.                                              //
// 2. The addEventListener() method of the EventTarget interface sets up a function that will be called whenever  //
//    the specified event is delivered to the target in line no.2.                                                             //
// 3. This (.preventDefault) event apply for stop the submit action in line no.3.                                 //
// 4. The .querySelector() only returns the first element that matches the specified selectors in like line no.1  //
// 5. The .innerHTML property sets or returns the HTML content (inner HTML) of an element.                        //
// 6. The parseInt() function parses a string argument and returns an integer of the specified in line no.5 & 6.  //
// ***************************************************************************************************************//