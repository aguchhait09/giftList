import { customCardProps } from "@/interface/customCard.interface";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography
} from "@mui/material";

const CustomCard = ({
  title,
  subtitle,
  cardImage,
  price,
  offerPrice
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
      <Card sx={{ maxWidth: 345 }}>
        {/* <CardMedia
          sx={{
            height: 120,
          }}
          loading="lazy"
          image={cardImage}
        /> */}
        <img src={cardImage} alt="" height={100} style={{ padding: "15px" }} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="h5" color="text.secondary">
            {subtitle}
          </Typography>
        </CardContent>
        <CardActions>
          <CustomButtonPrimary>{price as string}</CustomButtonPrimary>
          <CustomButtonPrimary>{offerPrice as string}</CustomButtonPrimary>
        </CardActions>
      </Card>
    </>
  );
};

export default CustomCard;
