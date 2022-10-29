import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  type User,
} from "firebase/auth";
import {
  setDoc,
  doc,
  getFirestore,
  deleteDoc,
  query,
  collection,
  where,
  getDocs,
  onSnapshot,
  QuerySnapshot,
  type DocumentData,
} from "firebase/firestore";
import { Todo } from "./lib/Todo";

const firebaseConfig = {
  apiKey: "AIzaSyD_yuX_1A_pILSP2I6C-gsvESsaeIQ3y3g",
  authDomain: "todo-47c75.firebaseapp.com",
  projectId: "todo-47c75",
  storageBucket: "todo-47c75.appspot.com",
  messagingSenderId: "533230517402",
  appId: "1:533230517402:web:d679cf8cd975d3862f7323",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export function signIn(): void {
  signInWithPopup(auth, googleProvider);
}

export function signOut(): void {
  auth.signOut();
}

export function onSignInOrOut(callback: (user: User) => void) {
  onAuthStateChanged(auth, callback);
}
export const db = getFirestore(app);

export async function addTodoToDb(todo: Todo) {
  try {
    await setDoc(doc(db, "todos", todo.creationDate.valueOf().toString()), {
      uid: auth.currentUser.uid,
      title: todo.title,
      created: todo.creationDate,
      completed: todo.isDone,
    });
  } catch (error) {
    console.error(error);
  }
}
export async function removeTodoFromDb(todo: Todo) {
  try {
    await deleteDoc(doc(db, "todos", todo.creationDate.valueOf().toString()));
  } catch (error) {
    console.error(error);
  }
}
export async function updateTodoInDb(todo: Todo) {
  addTodoToDb(todo);
}

export async function readTodosInDb() {
  const querySnapshot = await getDocs(collection(db, "todos"));
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });
}

function dbDataToTodo(data: DocumentData): Todo {
  const todo = new Todo(data.title);
  todo.creationDate = new Date(data.created.toDate());
  todo.isDone = data.completed;
  return todo;
}

export async function onDbchange(user: User, onNext: (todos: Todo[]) => void) {
  try {
    const q = query(collection(db, "todos"), where("uid", "==", user.uid));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const todos: Todo[] = [];
      querySnapshot.forEach((doc) => {
        todos.push(dbDataToTodo(doc.data()));
      });
      onNext(todos);
    });
  } catch (error) {
    console.error("catch", error);
  }
}
