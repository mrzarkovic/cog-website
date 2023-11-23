import { variable } from "@mzrk/cog";

const counter = variable("counter", 42);

variable("increment", () => {
    counter.set(counter.value + 1);
});
