import {Grid, Card, CardMedia, CardContent, Typography, Box} from "@mui/material";

export default  function Product({title, description, image, price, category}) {
    return <Grid item>
        <Card sx={{maxWidth: "350px"}}>
            <CardMedia component="img" image={image} height={200} width={200} sx={{objectFit: "contain"}}/>
            <CardContent>
                <Typography variant="h4" noWrap={true}>
                    {title}
                </Typography>
                <Box sx={{border: "1px solid red", padding: "5px"}}>
                    <Typography variant="subtitle1">
                        {category}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    </Grid>
}