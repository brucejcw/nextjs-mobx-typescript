class BffException extends Error {
    constructor(log, error = {}, params = {}) {
        super()
        if (!(error instanceof Error)) {
            params = error
        }
        this.status = error.status || params.status
        this.module = error.module || params.module
        this.errorCode = error.code || params.code
        this.errorMessage = error.message || log || 'Unknown Bff Error'
        this.stack = error.stack
        this.log = error.message ? log : ''
    }
}

export default BffException
