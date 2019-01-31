document.getElementById('drinkSearch').addEventListener('submit', getCockTailList);

function getCockTailList(e) {
  e.preventDefault();

  var name = document.getElementById('name').value;

  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + name, true);

  xhr.onload = function() {

    if (this.status == 200) {
      var search = JSON.parse(this.responseText);
      var output = '';

      for (var i in search.drinks) {
        output +=
          '<div class="column">' +
          '<div class="img-container" style="background-image: url(' + search.drinks[i].strDrinkThumb + ');">' +
          // '<img src=" '+search.drinks[i].strDrinkThumb+' "></img>' +
          '<div id="drinkname">' + search.drinks[i].strDrink + '</div>' +
          '</div>' +
          '</div>';
      }
      document.getElementById('recipes').innerHTML = output;

    }
  }
  xhr.send();
}
