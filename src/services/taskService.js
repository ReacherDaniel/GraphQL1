const { tasksCollection } = require('../../firebaseConfig.js');

const getAllTasks = async () => {
  const snapshot = await tasksCollection.get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

const getTaskById = async (id) => {
  const doc = await tasksCollection.doc(id).get();
  if (!doc.exists) return null;
  return { id: doc.id, ...doc.data() };
};

const createTask = async ({ title, completed }) => {
  const newTask = { title, completed };
  const docRef = await tasksCollection.add(newTask);
  return { id: docRef.id, ...newTask };
};

const updateTask = async (id, { title, completed }) => {
  const updates = {};
  if (title !== undefined) updates.title = title;
  if (completed !== undefined) updates.completed = completed;

  await tasksCollection.doc(id).update(updates);
  const updated = await tasksCollection.doc(id).get();
  return { id: updated.id, ...updated.data() };
};

const deleteTask = async (id) => {
  await tasksCollection.doc(id).delete();
  return true;
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
