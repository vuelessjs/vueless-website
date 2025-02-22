import ULink from "./configs/vueless/ULink.config.js";
import UInput from "./configs/vueless/UInput.config.js";

export default {
  components: /*tw*/ {
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
