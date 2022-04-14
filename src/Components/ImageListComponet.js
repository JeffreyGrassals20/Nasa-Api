import { Button, ImageList,ImageListItem,ImageListItemBar,Container,Box,Card,CardActions,CardContent,CardMedia,Typography,CardActionArea} from "@material-ui/core";
import { useState } from "react";

export const ImageListComponent = ({data}) => {

    const [numberOfElements, setNumberOfElements] = useState(12)

    const loadMore = () => {
        setNumberOfElements(numberOfElements + numberOfElements)
    }
    const slice = data.slice(0,numberOfElements)

    return(
        <div>
            <Container>
                <ImageList variant="masonry" cols={4} gap={4}>
                    {slice.map((item) => (    
                        <ImageListItem key={item.id} height ="500">
                            <Card  >
                                <CardActionArea >
                                    <CardMedia
                                    component="img"
                                    height="100"
                                    image={item.url}
                                    alt="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="div">
                                            {item.camera + " "}
                                            {item.date}
                                        </Typography>
                                        <Button size="small" color="primary" >
                                        Delete
                                        </Button>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </ImageListItem>
                    ))} 
                </ImageList>
                <hr></hr>
                <center>
                    <Button variant="contained" disableElevation onClick ={() => loadMore()}>
                        Load More...
                    </Button>
                </center>
            </Container>
        </div>
    );
}
