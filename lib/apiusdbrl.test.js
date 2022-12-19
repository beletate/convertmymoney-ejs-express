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

describe('getToday', () => {
    const RealDate = Date;

    function mockDate(date){
        global.Date = class extends RealDate {
            constructor(){
                return new RealDate(date);
            }
        }
    }

    afterEach(() => {
        global.Date = RealDate;
    })

    test("getToday", () => {
        mockDate('2022-12-19T12:21:06.298Z')
        const today = new Date().toISOString();
        expect(today).toBe('2022-12-19T12:21:06.298Z');
    })
})
