import axios from "axios";

const BASE_API_URL = "http://localhost:5000";

class SnackOrBoozeApi {
  static async getSnacks() {
    const result = await axios.get(`${BASE_API_URL}/snacks`);
    return result.data;
  }

  static async getDrinks() {
    const result = await axios.get(`${BASE_API_URL}/drinks`);
    return result.data;
  }

  static async addSnack(newSnack) {
    const result = await axios.post(`${BASE_API_URL}/snacks`, newSnack);
    return result.data;
  }

  static async addDrink(newDrink) {
    const result = await axios.post(`${BASE_API_URL}/drinks`, newDrink);
    return result.data;
  }

  static async getSnackById(id) {
    const result = await axios.get(`${BASE_API_URL}/snacks/${id}`);
    return result.data;
  }

  static async getDrinkById(id) {
    const result = await axios.get(`${BASE_API_URL}/drinks/${id}`);
    return result.data;
  }

  static async updateSnack(id, updatedSnack) {
    const result = await axios.put(`${BASE_API_URL}/snacks/${id}`, updatedSnack);
    return result.data;
  }

  static async updateDrink(id, updatedDrink) {
    const result = await axios.put(`${BASE_API_URL}/drinks/${id}`, updatedDrink);
    return result.data;
  }

  static async deleteSnack(id) {
    const result = await axios.delete(`${BASE_API_URL}/snacks/${id}`);
    return result.data;
  }

  static async deleteDrink(id) {
    const result = await axios.delete(`${BASE_API_URL}/drinks/${id}`);
    return result.data;
  }
}

export default SnackOrBoozeApi;
