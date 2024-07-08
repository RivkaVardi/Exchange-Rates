using BusinessLogic;
using Microsoft.AspNetCore.Mvc;


namespace CurrenciesServer.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class CurrencyController : ControllerBase
    {
        ICurrencyService _currencyService;
        public CurrencyController(ICurrencyService currencyService)
        {
            _currencyService = currencyService;
        }

        [HttpGet]
        public string[] GetAllCurrencies()
        {
            return _currencyService.GetAllCurrencies();
        }

        [HttpGet]
        [Route("{currency}")]
        public async Task<KeyValuePair<string, double>[]> GetExchangeRates(string currency)
        {
            return await _currencyService.GetExchangeRates(currency);
        }
    }
}
