import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
	const promises = [];

	const signUpPromise = signUpUser(firstName, lastName)
	.then((result) => ({ status: 'fulfilled', value: result }))
	.catch((error) => ({ status: 'rejected', value: error }));

	const uploadPhotoPromise = uploadPhoto(fileName)
	.then((result) => ({ status: 'fulfilled', value: result }))
	.catch((error) => ({ status: 'rejected', value: error }));

	promises.push(signUpPromise, uploadPhotoPromise);

	return Promise.allSettled(promises);
}
