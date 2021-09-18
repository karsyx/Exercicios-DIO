import Skeleton from '@components/Skeleton/index';
import React, { useEffect, useEffect } from 'react';
import styled from 'styled-components';
import Skeleton from '../Skeleton';

const Card = styled.div`
    display: flex;
    justify-content: center;
    width: 90px;
    height: 90px;
    border-radius: 6px;
    background-image: url(${(props) => props.photo});
    background-size: cover;
`;

const Title = styled.p`
    font-family: ${(props) => props.theme.fonts.regular};
    color: #ffffff;
    font-size: 16px;
    margin-top 5px;
`;

const ImageCard = ( {photo, title} ) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const imageLoader = new Image();
        imageLoader.src = photo;
        imageLoader.onload = () => setImageLoadedd(true);
    }, [photo]);

    return(
        <div>
            {imageLoaded ? (
            <Card photo={photo}>
                <Title>{title}</Title>
            </Card>
            ) : (<Skeleton width='90px' height='90px' />
            )}
        </div>
    );
};

export default ImageCard;