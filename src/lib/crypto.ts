// Encode and decode API keys for use in the API
export const encodeKey = (key: string) => btoa(key);
export const decodeKey = (encoded: string) => atob(encoded);
