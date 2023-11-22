//import React from "react";
//import * as React from 'react';
/*import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";*/

//import { jsx as _jsx } from "react/jsx-runtime";
//import { jsxs as _jsxs } from "react/jsx-runtime";
//import { Fragment as _Fragment } from "react/jsx-runtime";

import React from "react";
import { Color } from "@mui/material";
//import GoogleFont from "react-google-font-loader";
import { makeStyles } from "@material-ui/styles";
//import NoSsr from "@material-ui/core/NoSsr";
import Grid from "@mui/material/Unstable_Grid2";

import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { useFourThreeCardMediaStyles } from "@mui-treasury/styles/cardMedia/fourThree";

const useGridStyles = makeStyles(({ breakpoints }) => ({
  root: {
    [breakpoints.up("md")]: {
      justifyContent: "center",
    },
  },
}));

const useStyles = makeStyles(() => ({
  actionArea: {
    borderRadius: 16,
    transition: "0.2s",
    "&:hover": {
      transform: "scale(1.1)",
    },
  },
  card: ({ color }) => ({
    minWidth: 256,
    borderRadius: 16,
    boxShadow: "none",
    "&:hover": {
      boxShadow: `0 6px 12px 0 ${Color(color)
        .rotate(-12)
        .darken(0.2)
        .fade(0.5)}`,
    },
  }),
  content: ({ color }) => {
    return {
      backgroundColor: color,
      padding: "1rem 1.5rem 1.5rem",
    };
  },
  title: {
    fontFamily: "Keania One",
    fontSize: "2rem",
    color: "#fff",
    textTransform: "uppercase",
  },
  subtitle: {
    fontFamily: "Montserrat",
    color: "#fff",
    opacity: 0.87,
    marginTop: "2rem",
    fontWeight: 500,
    fontSize: 14,
  },
}));

const CustomCard = ({ classes, image, title, subtitle }) => {
  const mediaStyles = useFourThreeCardMediaStyles();
  return (
    <CardActionArea className={classes.actionArea}>
      <Card className={classes.card}>
        <CardMedia classes={mediaStyles} image={image} />
        <CardContent className={classes.content}>
          <Typography className={classes.title} variant={"h2"}>
            {title}
          </Typography>
          <Typography className={classes.subtitle}>{subtitle}</Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
};

const SolidGameCardDemo = React.memo(function SolidGameCard() {
  const gridStyles = useGridStyles();
  const styles = useStyles({ color: "#203f52" });
  const styles2 = useStyles({ color: "#4d137f" });
  const styles3 = useStyles({ color: "#ff9900" });
  const styles4 = useStyles({ color: "#34241e" });
  return (
    <>
      <Grid classes={gridStyles} container spacing={4} wrap={"nowrap"}>
        <Grid item>
          <CustomCard
            classes={styles}
            title={"Dota 2"}
            subtitle={"Be a Legend!"}
            image={
              "https://steamcdn-a.akamaihd.net/apps/dota2/images/blog/play/dota_heroes.png"
            }
          />
        </Grid>
        <Grid item>
          <CustomCard
            classes={styles2}
            title={"Fortnite"}
            subtitle={"Time to choose side!"}
            image={
              "https://progameguides.com/wp-content/uploads/2019/10/fortnite-outfit-scratch.jpg"
            }
          />
        </Grid>
        <Grid item>
          <CustomCard
            classes={styles3}
            title={"Overwatch"}
            subtitle={"What are you waiting?"}
            image={"https://images5.alphacoders.com/690/thumb-1920-690653.png"}
          />
        </Grid>
        <Grid item>
          <CustomCard
            classes={styles4}
            title={"PUBG"}
            subtitle={"Are you ready?"}
            image={
              "https://www.itp.net/public/styles/full_img_sml/public/images/2019/05/27/44485-pubg_base1.jpg?itok=EF911Xan"
            }
          />
        </Grid>
      </Grid>
    </>
  );
});

export default SolidGameCardDemo;
//const MultiActionAreaCard ()=>{
// const MediaControlCard ()=> {
/*const theme = useTheme();
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
            <IconButton aria-label="previous">
              {theme.direction === "rtl" ? (
                <SkipNextIcon />
              ) : (
                <SkipPreviousIcon />
              )}
            </IconButton>
            <IconButton aria-label="play/pause">
              <PlayArrowIcon sx={{ height: 38, width: 38 }} />
            </IconButton>
            <IconButton aria-label="next">
              {theme.direction === "rtl" ? (
                <SkipPreviousIcon />
              ) : (
                <SkipNextIcon />
              )}
            </IconButton>
          </Box>

          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
*/
