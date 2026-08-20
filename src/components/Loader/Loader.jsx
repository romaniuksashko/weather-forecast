import { FallingLines } from "react-loader-spinner";

function Loader() {
  return (
    <FallingLines
      color="#FFB36C"
      width="100"
      visible={true}
      ariaLabel="falling-circles-loading"
    />
  );
}

export default Loader;