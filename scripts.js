let request = new XMLHttpRequest();

request.open(
  "GET",
  "https://rest-countries-api-techieegy.herokuapp.com/v1/all",
  true
);
request.send();

request.onload = () => {
  let data = JSON.parse(request.response);
  const div = document.createElement("div");
  div.className = "div1";
  data.forEach((item) => {
    const container = document.createElement("div");
    container.className = "container";
    const countryName = document.createElement("h5");
    countryName.className = "countryName";
    countryName.innerHTML = item.name;
    const flag = document.createElement("img");
    flag.className = "flag";
    flag.setAttribute("src", item.flags[1]);
    const capitalcap = document.createElement("small");
    capitalcap.className = "capitalcap";
    capitalcap.innerText = "Capital : ";
    const capital = document.createElement("p");
    capital.className = "capital";
    capital.innerText = item.capital;
    const language = document.createElement("p");
    language.className = "language";
    language.innerHTML = `Native Language : (${item.languages[0].name})`;
    // const currencycode = document.createElement("p");
    // currencycode.className = "currencycode";
    // currencycode.innerHTML = `Currency Code : (${item.currencies[0]?.code})`;
    const countrycode = document.createElement("p");
    countrycode.className = "countrycode";
    countrycode.innerHTML = `Country Code :  ${item.alpha2Code}, ${item.alpha3Code}`;
    const region = document.createElement("p");
    region.className = "region";
    region.innerHTML = `Region : ${item.region}`;
    const latlng = document.createElement("p");
    latlng.className = "latlng";
    latlng.innerHTML = `Lat,Long : ${item.latlng}`;
    div.appendChild(container);
    container.appendChild(countryName);
    container.appendChild(flag);
    container.appendChild(capitalcap);
    container.appendChild(capital);
    container.appendChild(language);
    // container.appendChild(currencycode);
    container.appendChild(countrycode);
    container.appendChild(region);
    container.appendChild(latlng);
    document.querySelector("body").appendChild(div);
  });
};
