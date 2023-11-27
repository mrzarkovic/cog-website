import { variable } from "@mzrk/cog";
import "@fontsource/outfit/600.css";

const counter = variable("counter", 42);

variable("increment", () => {
    counter.set(counter.value + 1);
});
