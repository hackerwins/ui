import { Button, GrayButton } from "@yorkie-team/ui";
import "@yorkie-team/ui/style.css";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <Button>Admin</Button>
    <GrayButton>Areaa</GrayButton>
  </div>
);
