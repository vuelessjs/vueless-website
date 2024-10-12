import ULink from "./configs/vueless/ULink.config.js";
import UInput from "./configs/vueless/UInput.config.js";

export default {
  component: /*tw*/ {
    ULink,
    UInput,
    UIcon: {
      defaults: {
        library: "@material-symbols",
        weight: 500,
      }
    }
  },
};
