import AppRoutes from "./AppRoutes";
import { UserProvider } from "./contexts/UserProvider";

function App() {
  return (
    <UserProvider>
      <AppRoutes />
    </UserProvider>
  );
}

export default App;
