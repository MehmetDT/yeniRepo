import Client from './Client'
import store from '../config/store'
import { Platform } from 'react-native';
import global from '../configs/global';

function userLogin() {
	return Client.post(`/connect`, {
		device_id: global.deviceID,
		platform: Platform.OS,
		country: global.country
	})
		.then((response) => {
			return response.data
		})
		.catch((error) => {
			return {
				error: true,
				message: error.message
			}
		})
}


export default {
	userLogin,
}
