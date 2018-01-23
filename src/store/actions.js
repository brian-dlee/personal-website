import { compose, map, prop } from "ramda";

import partitions from "./partitions";
import services from "../services";

export default map(
  compose(buildActions => buildActions(services), prop("actions")),
  partitions
);
