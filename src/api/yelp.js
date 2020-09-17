import axios from "axios";

export default axios.create({
	baseUrl: 'https://api.yelp.com/v3/businesses',
	headers: {
		Authorization: 'Bearer LZbac3IaPDxP-VaeyOuJ6ho2hPGsS0TQB9J55lBjBLdFO-DH32MYMOeCYWB3InVkdumV1NL3EPvIzxxbvfB-YcGq2Fjxa2_pejRXS_zKlVZ_uSffvHUv4UX_0rZjX3Yx'
	}

});