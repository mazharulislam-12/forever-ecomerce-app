// Import signOut from Firebase
import { auth, signInWithEmailAndPassword, signOut } from "../firebase";

import { signOut } from "firebase/auth";

// Use in Navbar or wherever needed:
const handleLogout = async () => {
  await signOut(auth);
  alert("Logged out successfully");
};

export default signOut;