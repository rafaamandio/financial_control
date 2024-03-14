const httpClient = new FetchHttpClient();
const baseUrl = 'http://localhost/3000'
const LancamentoService = new LancamentoService(httpClient, baseUrl);
new Tela(LancamentoService);