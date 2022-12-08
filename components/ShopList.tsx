import {Container, CssBaseline, Grid} from "@mui/material"
import Product from "./Product";

export default function ShopList({products}) {
    return <Container maxWidth="md">
        <CssBaseline />
        <Grid container>
            {products.map(product => {
                return <Product image={product.image} title={product.title} category={product.category}/>
            })}
        </Grid>
    </Container>
}