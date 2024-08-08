import AdminNavbar from './AdminNavbar';
import Sidebar from './Sidebar';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Layout({ children }) {
  return (
    <>
    <ToastContainer />
      <AdminNavbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        {children}
      </div>
    </>
  )
}