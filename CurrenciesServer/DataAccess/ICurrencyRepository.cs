namespace DataAccess
{
    public interface ICurrencyRepository
    {
        public string[] GetAllCurrencies();
        public Task<string> GetExchangeRates(string currency);
    }
}
