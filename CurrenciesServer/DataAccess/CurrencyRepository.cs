using Microsoft.Extensions.Configuration;

namespace DataAccess
{
    public class CurrencyRepository : ICurrencyRepository
    {
        private static readonly string[] Currencies = new[]
        {
            "USD", "EUR", "GBP", "CNY", "ILS"
        };

        HttpClient _httpClient;
        IConfiguration _configuration;

        public CurrencyRepository(HttpClient httpClient, IConfiguration configuration)
        {
            _httpClient = httpClient;
            _configuration = configuration;
        }

        public string[] GetAllCurrencies()
        {
            return Currencies;
        }

        public async Task<string> GetExchangeRates(string currency)
        {
            string? apiKey = _configuration["ApiKey"];
            if (apiKey == null || apiKey == "Insert your API key here." || apiKey == "") {
                throw new Exception("API key not entered!");
            }
            string otherCurrencies = string.Join(",", Currencies.Where(c => c != currency).ToArray());
            string url = $"https://api.currencybeacon.com/v1/latest?api_key={apiKey}&base={currency}&symbols={otherCurrencies}";
            try
            {
                using HttpResponseMessage response = await _httpClient.GetAsync(url);
                response.EnsureSuccessStatusCode();
                string responseBody = await response.Content.ReadAsStringAsync();
                return responseBody;
            }
            catch (HttpRequestException e)
            {
                Console.WriteLine("\nException Message :{0} ", e.Message);
                throw;
            }
        }
    }
}
