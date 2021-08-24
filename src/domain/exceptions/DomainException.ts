enum DomainExceptionMessages {
    ERROR_CREATE_DOMAIN = 'Could not create a domain instance!',
}

class DomainException extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'DomainException';
    }
}

export { DomainException, DomainExceptionMessages };
