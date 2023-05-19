import axios from "axios";

class Table {
	url = 'http://127.0.0.1:8000/api/table'
 	async getTable(page, column, sort, query) {
		return axios.get(`${this.url}/?page=${page}&column=${column}&sort=${sort}&query=${query}`);
	}
}

export default Table