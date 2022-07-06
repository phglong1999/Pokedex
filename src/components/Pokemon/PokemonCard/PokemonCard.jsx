import { React } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import { parseColor, capitalizeFirstLetter } from "../../../Utils/utils";
import { useNavigate } from "react-router-dom";

export default function PokemonCard({ pokemon }) {
  let navigate = useNavigate();
  const handleChipClick = () => {
    let path = `/detail/`;
    navigate(path);
  };
  const handleButtonClick = (id) => {
    let path = `/detail/${id}`;
    navigate(path);
  };
  return (
    <Card
      className="card-pokemon"
      sx={{
        border: `1px solid ${parseColor(pokemon?.types[0].type.name)}`,
        borderRadius: "20px",
        margin: "5px",
      }}
    >
      <Typography
        paragraph
        sx={{
          color: parseColor(pokemon?.types[0].type.name),
          textAlign: "right",
          marginTop: "10px",
          marginRight: "10px",
        }}
      >
        #{pokemon?.id}
      </Typography>
      <CardMedia
        component="img"
        image={pokemon?.sprites.other["official-artwork"].front_default}
        alt=""
      />
      <CardContent sx={{ display: "flex", justifyContent: "center" }}>
        <Stack direction="row" spacing={1}>
          {pokemon?.types.map((item, index) => (
            <Chip
              label={capitalizeFirstLetter(item.type.name)}
              key={index}
              sx={{
                border: `1px solid ${parseColor(item.type.name)}`,
                color: parseColor(item.type.name),
              }}
              variant="outlined"
              onClick={handleChipClick}
            />
          ))}
        </Stack>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button
          sx={{
            color: parseColor(pokemon?.types[0].type.name),
            textTransform: "capitalize",
          }}
          size="small"
          onClick={() => handleButtonClick(pokemon?.id)}
        >
          {pokemon.name}
        </Button>
      </CardActions>
    </Card>
  );
}
