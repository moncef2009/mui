import { Button, Grid, Typography } from "@mui/material";

function Featured() {
  return (
    <>
      <Grid container className="fpGrid" gutterBottom>
        <Grid item xs={12} md={4}>
          <Typography variant="h5" component="h3">
            Post Title gose hear
          </Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography variant="body1" component="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
            consequatur quae quis? Dolores quos quaerat ex eveniet ipsam! Et
            rerum doloribus commodi similique recusandae ipsam quasi culpa
            delectus consectetur, tempore sequi, mollitia animi ea? Eos officiis
            autem debitis beatae ratione repellendus, quasi vel quis tenetur
            quod repellat unde tempore dolor!
          </Typography>

          <Button variant="contained">Read More</Button>
        </Grid>
      </Grid>
    </>
  );
}

export default Featured;
