import Sidebar from "../components/Sidebar/Sidebar";
import UserHeader from "../components/UserHeader";
import "./AppLayout.css";

function AppLayout({ children, user }) {
  return (
    <div className="d-flex">
      <Sidebar />

      <div className="content">
        <UserHeader user={user} />
        <div className="p-4">
          {children}
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
