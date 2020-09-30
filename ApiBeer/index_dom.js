/*d.addEventListener("ContentLoaded", (e) => {});
contactFormValidations();*/

/***/
const form = document.getElementById("beerSearch");
const results = document.getElementById("results");

form.addEventListener("submit", (e) => {
  let name = form.elements["name"].value;
  const url = new URL("https://api.punkapi.com/v2/beers");

  url.searchParams.append("beer_name", name);

  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      for (var i = 0; i < json.length; i++) {
        console.log(json[i]);
        // Create an empty <tr> element and add it to the 1st position of the table:
        var row = results.insertRow(i);

        // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);

        // Add some text to the new cells:
        cell1.innerHTML = i;
        cell2.innerHTML = json[i].name;
        cell3.innerHTML = `<img class="thumbnail" src="${json[i].image_url}">`;
      }
    });

  e.preventDefault();
});
