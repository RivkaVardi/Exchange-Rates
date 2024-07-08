using DataAccess;
using System.Text.Json;

namespace BusinessLogic
{
    public class CurrencyService : ICurrencyService
    {
        ICurrencyRepository _currencyRepository;
        public CurrencyService(ICurrencyRepository currencyRepository)
        {
            _currencyRepository = currencyRepository;
        }

        public string[] GetAllCurrencies()
        {
            return _currencyRepository.GetAllCurrencies();
        }

        public async Task<KeyValuePair<string, double>[]> GetExchangeRates(string currency)
        {
            string responseBody = await _currencyRepository.GetExchangeRates(currency);
            using JsonDocument doc = JsonDocument.Parse(responseBody);
            JsonElement root = doc.RootElement.Clone();
            JsonElement ratesAsJson = root.GetProperty("rates");

            var rates = ratesAsJson.EnumerateObject()
                            .Select(property => new KeyValuePair<string, double>(
                                                property.Name,
                                                property.Value.GetDouble())
                            ).ToArray();
            return rates;
        }
    }
}
