import "../css/profile.css";

function Profile() {

    const storedUser=localStorage.getItem("user")
  const user =storedUser?
    JSON.parse(storedUser):null;

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h1>My Profile 👤</h1>

        <p>
          <b>Username:</b>{""} {user ?user.username:"NO USER"}
        </p>

        <p>
          <b>Email:</b>{""} {user ?user.email:"NO EMAIL"}
        </p>

        <button>Edit Profile</button>
      </div>
    </div>
  );
}

export default Profile;