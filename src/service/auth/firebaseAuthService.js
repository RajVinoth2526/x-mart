import { signOut } from 'firebase/auth';
const auth = getAuth(); // Assuming you have already initialized Firebase


// async function handleLogout() {
//     try {
//       await signOut(auth);
//       console.log('User logged out successfully!');
  
//       // Optionally, clear any user data or redirect to login page
//     } catch (error) {
//       console.error('Error logging out:', error);
//     }
//   };
  