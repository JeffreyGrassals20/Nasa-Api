import { useEffect, useState } from "react";

export const GetImages = () => {

    const [photos, setPhotos] = useState([]); 
    
    const getPhotos = () => {

        fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY')
        .then(resp => resp.json())
        .then(data => {
            
            if (data && Array.isArray(data.photos))
            {
                const images = data.photos.map(img => {
                    return{
                        camera: img?.camera?.name, 
                        date: img?.earth_date,
                        rover:img?.rover?.name,
                        url: img?.img_src
                        }
                    }) 
                setPhotos(images)
                console.log(images); 
            }else{
                setPhotos([]);
            }
        });
    } 
    
    useEffect(getPhotos,[]); 

    return (
        <div>
            <ol>
                {
                    photos.map((photo) => <img src={photo.url} key={photo.url}/>)
                }
            </ol>
        </div>
    )
}