export const componentService = {
  async fetchComponents(filter = 'All') {
    try {
      const response = await fetch('/data/components.json');
      const data = await response.json();
      
      if (filter === 'All') {
        return data.components;
      }
      
      return data.components.filter(component => 
        component.library.name.toLowerCase().includes(filter.toLowerCase())
      );
    } catch (error) {
      console.error('Error fetching components:', error);
      return [];
    }
  },

  async fetchComponentById(id) {
    try {
      const response = await fetch('/data/components.json');
      const data = await response.json();
      return data.components.find(component => component.id === parseInt(id));
    } catch (error) {
      console.error('Error fetching component:', error);
      return null;
    }
  }
}