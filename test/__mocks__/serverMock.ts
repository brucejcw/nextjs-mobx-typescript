const mockReq = () => ({
    session: {
        passport: {
            user: {},
        },
    },
    body: {
        accountId: 'xx000',
    },
    files: {
        file: {
            path: '',
        },
    },
})
const mockRes = () => {
    const res = {} as any
    res.status = jest.fn().mockReturnValue(res)
    res.json = jest.fn().mockReturnValue(res)
    return res
}
const mockNext = jest.fn()

export default {
    mockReq,
    mockRes,
    mockNext,
}
