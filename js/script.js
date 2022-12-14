{
  console.log(
    "Witam w pełni zautomatyzowanym kalkulatorze azjatychkich walut. Miłego użytkowania"
  );

  const calculateResult = (amount, currency) => {
    const CNY = 0.661;
    const PHP = 0.0818;
    const INR = 5.8179 / 100;
    const JPY = 3.2461 / 100;
    const KRW = 0.3382 / 100;
    const SGD = 3.3886;
    const MYR = 1.0104;
    const THB = 0.1277;

    switch (currency) {
      case "CNY":
        return amount / CNY;
      case "PHP":
        return amount / PHP;
      case "INR":
        return amount / INR;
      case "JPY":
        return amount / JPY;
      case "KRW":
        return amount / KRW;
      case "SGD":
        return amount / SGD;
      case "MYR":
        return amount / MYR;
      case "THB":
        return amount / THB;
    }
  };

  const updateResultText = (amount, exchange, currency) => {
    const exchangeElement = document.querySelector(".js-exchange");
    exchangeElement.value = `${exchange.toFixed(2)} ${currency}`;
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const currencyElement = document.querySelector(".js-currency");
    const amountElement = document.querySelector(".js-amount");

    const amount = +amountElement.value;
    const currency = currencyElement.value;

    const exchange = calculateResult(amount, currency);

    updateResultText(amount, exchange, currency);
  };

  const init = () => {
    const formElement = document.querySelector(".js-form");

    formElement = addEventListener("submit", onFormSubmit);
  };

  init();
}