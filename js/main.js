document.getElementById('drinkSearch').addEventListener('submit', getCockTailList);

function getCockTailList(e) {
  e.preventDefault();

  var name = document.getElementById('name').value;

  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + name, true);

  xhr.onload = function() {

    if(this.status == 200){
    var search = JSON.parse(this.responseText);
    var output = '';

    for (var i in search.drinks) {
        output +=
        '<div class="column">'+
        '<ul>' +
        '<li> '+search.drinks[i].strDrink+'  </li>' +
        '</ul>'+
        '<img src=" '+search.drinks[i].strDrinkThumb+' "></img>' +
        '</div>';
    }
    document.getElementById('recipes').innerHTML = output;

}
document.getElementById('recipes').innerHTML = output;

}
xhr.send();
}
