import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const classrooms = [];
  const classroom1 = new ClassRoom(19);
  const classroom2 = new ClassRoom(20);
  const classroom3 = new ClassRoom(34);
  classrooms.push(classroom1, classroom2, classroom3);
  return classrooms;
}
