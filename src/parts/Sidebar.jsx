import {
  Card,
  CardContent,
  MenuItem,
  MenuList,
  Typography,
} from "@mui/material";

function Sidebar() {
  return (
    <>
      <Card raised className="sbCard">
        <CardContent>
          <Typography variant="h6" component="h3">
            About
          </Typography>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, maxime.
          </Typography>
        </CardContent>
      </Card>
      <Card raised className="sbCard">
        <CardContent>
          <Typography variant="h6" component="h3">
            Categorys
          </Typography>
          <MenuList>
            <MenuItem>CSS</MenuItem>
            <MenuItem>HTML</MenuItem>
            <MenuItem>React</MenuItem>
            <MenuItem>Node</MenuItem>
          </MenuList>
        </CardContent>
      </Card>
    </>
  );
}

export default Sidebar;
