/* LIENS AMAZON - modifiez uniquement ces deux blocs */

// 1. Votre identifiant Amazon Partenaires
var TAG = "VOTRE-TAG-21";

// 2. Le code ASIN de chaque produit (10 caractères, visible dans l'adresse
//    de la page Amazon : amazon.fr/dp/XXXXXXXXXX). Laissez "" si inconnu :
//    le bouton mènera alors vers une recherche Amazon.
var ASIN = {
  "mx-master-3s": "",
  "mx-anywhere-3s": "",
  "mx-vertical": "B07FNHV4MW",
  "samsung-9100-pro-1to": "B0DWFMD52T"
};

(function () {
  var links = document.querySelectorAll("a[data-p]");
  for (var i = 0; i < links.length; i++) {
    var a = links[i];
    var id = ASIN[a.getAttribute("data-p")];
    a.href = id
      ? "https://www.amazon.fr/dp/" + id + "?tag=" + TAG
      : "https://www.amazon.fr/s?k=" + encodeURIComponent(a.getAttribute("data-q")) + "&tag=" + TAG;
  }
})();
