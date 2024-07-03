export class ReducerError extends Error {
  constructor(message: string) {
    super('Unknown action: ' + message);
    this.name = 'ReducerError';
  }
}
