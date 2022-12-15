const api = require('./apiusdbrl');
const axios = require('axios');

jest.mock('axios')

test("getCotacaoApi", () => {
    const res = {
        data: {
            USDBRL: {
                ask: '1'
            }
        }
    }
    axios.get.mockResolvedValue(res);
    api.getCotacaoAPI().then(resp => {
        expect(resp).toEqual(res);

    })
})

test("extractCotacao", () => {
    const res = {
        data: {
            USDBRL: {
                ask: '1'
            }
        }
    }
    const resp = api.extractCotacao(res)
    expect(resp).toBe('1')
})