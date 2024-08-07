import AdminNavbar from './AdminNavbar';
import Sidebar from './Sidebar';

export default function Layout({ children }) {
  return (
    <>
      <AdminNavbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        {children}
      </div>
    </>
  )
}