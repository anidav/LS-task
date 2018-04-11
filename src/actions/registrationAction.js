export const REGISTRATION = 'REGISTRATION';

const registrationAction = (data) => {
	console.log(data)	
	return {
		type: REGISTRATION,
		payload: data
	}
}
export default registrationAction;