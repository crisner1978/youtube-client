import GoogleAuth from "./GoogleAuth";

const SidebarAuth = () => {
  return (
    <div className="py-3 px-5">
      <p>Sign in to like videos, comment, and subscribe.</p>
      <br />
      <GoogleAuth elementId="sidebarSignIn" buttonSize="medium" />
    </div>
  );
};

export default SidebarAuth;
