import { customCardProps } from "@/interface/customCard.interface";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Typography
} from "@mui/material";
import Link from "next/link";

const CustomCard = ({
  title,
  subtitle,
  cardImage,
  price,
  offerPrice,
  subtitleLink
}: customCardProps) => {
  return (
    <>
      {/* <Card sx={{ maxWidth: 345 }}>
        <CardHeader title={title} subheader={subtitle} />
        <CardMedia
          component="img"
          image={cardImage}
          alt="Paella dish"
          sx={{
            maxHeight: 300
          }}
          loading="lazy"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {offerPrice}
          </Typography>
        </CardContent>
      </Card> */}
      <Card sx={{ maxWidth: 345, height: 400 }}>
        {/* <CardMedia
          sx={{
            height: 120,
          }}
          loading="lazy"
          image={cardImage}
        /> */}
        <img
          src={cardImage}
          alt=""
          style={{
            padding: "15px",
            height: "200px",
            display: "flex",
            justifyContent: "center"
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="h5" color="text.secondary">
            <Link href={`${subtitleLink}`}>{subtitle}</Link>
          </Typography>
        </CardContent>
        <CardActions>
          {offerPrice ? (
            <>
              <Button size="small" variant="contained" color="info" disabled >
                $ {price as string}
              </Button>
              <Button size="small" variant="contained" color="info">
                ${offerPrice as string}
              </Button>
            </>
          ) : (
            <Button size="small" variant="contained" color="info">
              $ {price as string}
            </Button>
          )}
        </CardActions>
        <CardActions sx={{ display: "flex", justifyContent: "center" }}>
          <Button variant="contained">
            {" "}
            <AddShoppingCartIcon fontSize="small" />
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default CustomCard;
