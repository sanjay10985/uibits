// Service for handling card data operations
export class CardService {
  constructor() {
    this.cards = [];
  }

  async fetchCards(filter = "All") {
    // Simulating API call with mock data
    // In a real application, this would be an actual API call
    return Array.from({ length: 8 }).map((_, index) => ({
      id: index + 1,
      designNumber: index + 1,
      stats: this.generateMockStats(),
      designer: {
        name: "Designer Name",
        isPro: true,
      },
    }));
  }

  generateMockStats() {
    return {
      likes: Math.floor(Math.random() * 200) + 10,
      views: Math.floor(Math.random() * 10) + 1,
    };
  }

  async filterCards(filter) {
    const cards = await this.fetchCards();
    if (filter === "All") return cards;

    // Implement actual filtering logic here
    return cards;
  }
}

// Singleton instance for the service
export const cardService = new CardService();
