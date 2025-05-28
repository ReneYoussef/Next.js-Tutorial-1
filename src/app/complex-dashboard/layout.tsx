export default function ComplexDashboardLayout({
  children,
  users,
  revenue,
  notifications,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLoggedIn = true; // Simulating login state
  return isLoggedIn ?(
    <div>
      <div>{children}</div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            border: "1px solid red",
            gap: "30px", // Increased gap for more separation
            padding: "10px", // Adds internal space
          }}
        >
          <div style={{ border: "1px solid green", background: "green" }}>
            {revenue}
          </div>
            <div
    style={{
      border: "1px solid blue",
      background: "blue",
      color: "white",
      marginBottom: "20px", // Extra separation
    }}
  >
    {users}
  </div>
        </div>

        <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
      </div>
    </div>
  ): (login);
}
