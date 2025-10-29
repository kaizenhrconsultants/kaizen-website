// Storage interface for future database needs
// Currently, the contact form submissions are logged server-side
// In production, you would store contact submissions in a database

export interface IStorage {
  // Add storage methods as needed
}

export class MemStorage implements IStorage {
  constructor() {}
}

export const storage = new MemStorage();
