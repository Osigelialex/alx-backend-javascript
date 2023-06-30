import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const firstObj = new ClassRoom(19);
  const secondObj = new ClassRoom(20);
  const thirdObj = new ClassRoom(34);

  return [firstObj, secondObj, thirdObj];
}
