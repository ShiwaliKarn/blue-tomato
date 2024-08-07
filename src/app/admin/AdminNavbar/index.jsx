import './AdminNavbar.css'
import Image from 'next/image'

const AdminNavbar = () => {
  return (
    <div className='admin-nav'>
      <Image src='/Images/admin_logo.png' className='logo' width={200} height={50} alt='blue tomato logo' />
      <Image className='profile' src='/Images/profile_image.png' width={80} height={100} alt="profile image" />
    </div>
  )
}

export default AdminNavbar