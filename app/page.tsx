import SignInPage from "@/components/pages/auth/SignInPage";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <main>
      <SignInPage />
      <ToastContainer /> 
    </main>
  )
}
