import ULink from "./configs/vueless/ULink.config.js";
import UInput from "./configs/vueless/UInput.config.js";
import UCard from "./configs/vueless/UCard.config.js";

export default {
  components: /*tw*/ {
    UIcon: {
      defaults: {
        library: "@material-symbols",
        weight: 500,
      }
    },
    ULink,
    UInput,
    UCard,
  },
};
