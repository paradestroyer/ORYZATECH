export class APIError extends Error {
  constructor(
    message: string,
    public readonly status?: number,
    public readonly code?: string
  ) {
    super(message);
    this.name = 'APIError';
  }

  static fromResponse(response: Response, message?: string): APIError {
    return new APIError(
      message || `API request failed with status ${response.status}`,
      response.status
    );
  }
}