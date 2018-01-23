import { compose, map, prop } from "ramda";
import partitions from "./partitions";

export default map(
  compose(buildReducer => buildReducer(), prop("reducer")),
  partitions
);
