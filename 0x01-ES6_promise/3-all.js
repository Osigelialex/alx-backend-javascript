import { uploadPhoto } from "./utils";
import { createUser } from "./utils";

export default function handleProfileSignup() {
  const uploadPhotoPromise = uploadPhoto();
  const createUserPromise = createUser();

  Promise.all([uploadPhotoPromise, createUserPromise]).then((values) => {
    const photo = values[0].body;
    const firstName = values[1].firstName;
    const lastName = values[1].lastName;

    console.log(`${photo} ${firstName} ${lastName}`);
  }).catch(() => console.log('Signup system offline'));
}
