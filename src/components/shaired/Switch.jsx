import { Switch } from "@mui/material";

function SSwitch(props) {
  const { checked, onChange } = props;
  return (
    <>
      <Switch checked={checked} onChange={onChange} />
    </>
  );
}

export default SSwitch;
