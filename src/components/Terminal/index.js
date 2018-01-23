import { connect } from "react-redux";

import actions from "../../store/actions";
import Terminal from "./Terminal";

export default connect(({ terminal }) => ({ ...terminal }), actions.terminal)(
  Terminal
);
