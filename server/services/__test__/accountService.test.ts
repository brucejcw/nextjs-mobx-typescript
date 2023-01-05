import * as accountService from '../accountService'

describe('test accountService', () => {
    it('should return value', () => {
        const result = accountService.getAccount()
        expect(result.test).toBe('ok')
    })
})
