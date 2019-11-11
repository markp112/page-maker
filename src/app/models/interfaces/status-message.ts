export enum messageTypes{
    information,
    error,
    warning
}

export interface IStatusMessage {
    messageType: messageTypes,
    message: string
}