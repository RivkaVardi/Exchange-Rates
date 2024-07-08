namespace BusinessLogic
{
    public interface ICurrencyService
    {
        public string[] GetAllCurrencies();
        public Task<KeyValuePair<string, double>[]> GetExchangeRates(string currency);
    }
}
