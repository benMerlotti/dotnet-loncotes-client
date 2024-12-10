import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MaterialList from "./components/tickets/MaterialList";
import MaterialDetails from "./components/tickets/MaterialDetails";
import CreateMaterial from "./components/tickets/CreateMaterial";
import PatronsList from "./components/tickets/PatronsList";
import PatronDetails from "./components/tickets/PatronDetails";
import { CheckoutList } from "./components/tickets/CheckoutList";
import { Browse } from "./components/tickets/Browse";
import { CheckoutItem } from "./components/tickets/CheckoutItem";
import CheckoutOverdue from "./components/tickets/CheckoutOverdue";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="materials">
          <Route index element={<MaterialList />} />
          <Route path=":id" element={<MaterialDetails />} />
          <Route path="create" element={<CreateMaterial />} />
        </Route>
        <Route path="patrons">
          <Route index element={<PatronsList />} />
          <Route path=":id" element={<PatronDetails />} />
          <Route path="create" element={<CreateMaterial />} />
        </Route>
        <Route path="checkouts">
          <Route index element={<CheckoutList />} />
        </Route>
        <Route path="browse">
          <Route index element={<Browse />} />
        </Route>
        <Route path="checkout-item/:id">
          <Route index element={<CheckoutItem />} />
        </Route>
        <Route path="overdue-checkouts">
          <Route index element={<CheckoutOverdue />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
