import styled from 'styled-components';
import Slider from "react-slick";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Container = styled.div`
    background-color: ${(props) => props.theme.colors.background};
    width: 360px;
    height: 100vh;
    overflow-y: scroll;
    background-color: #ffffff;
`;

export const Search = styled.section`
    display: flex;
    flex-direction: columm;
    justify-content: center;
    background-color: #ffffff;
    padding: 10px;
`;

export const Pesquisar = styled.section`
    display: flex;
    flex-direction: columm;
    justify-content: center;
    background-color: #ffffff;
    padding: 5px;
`;

export const Map = styled.div`
    background-color: red;
    width: 1000px;
`;

export const Carrousel = styled(Slider)`
    .slick-slide {
        margin-right: 80px;
    }
`;

export const CarrouselTittle = styled.h1`
    display: flex;
    flex-direction: columm;
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.text}
    font-size: 24px;
    font-weight: bold;
    line-height: 29px;
    background-color: #ffffff;
    justify-content: center;
`;

export const ModalTittle = styled.p`
    margin-bottom: 10px;
    letter-spacing: 0.11px;
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.text}
    font-size: 24px;
    font-weight: bold;
    line-height: 29px;
`;

export const ModalContent = styled.p`
    margin-bottom: 10px;
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.text}
    font-size: 16px;
    line-height: 19px;
    font-weight: normal; 
`;