import { writable } from "svelte/store";

const PersonStore = writable([{ name: "Rakib", age: 25, gender: "Male", id: 1 }]);


export default PersonStore;