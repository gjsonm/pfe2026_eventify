import { Router, Route, A } from "@solidjs/router";
import Dashboard from "../pages/Dashboard.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import MyEvent from "../pages/MyEvent.jsx";
import EventForm from "../pages/EventForm.jsx";
import EventDetail from "../pages/EventDetail.jsx";
import NotFound from "../pages/NotFound.jsx";
import Layout from "./Layout.jsx";

const App = () => {
  return (
    <>
      {/* layout nanti isinya ada navbar dan footer */}
      <Router root={Layout}>
        <Route path="/" component={Dashboard} />

        <Route path="/myevent" component={MyEvent}>
          <Route path="/" component={EventForm} />
          <Route path="/new" component={EventForm} />
        </Route>

        <Route path="/myevent/:id" component={EventDetail} />

        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />

        <Route path="*" component={NotFound} />
      </Router>
    </>
  );
};

export default App;
