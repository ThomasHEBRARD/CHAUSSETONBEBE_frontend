import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const StyledSelection = styled.div`
    position: relative;
    width: 30%;
    height: 350px;
    background-color: white;
    border: solid 1px grey;
    border-radius: 4px;
`;

const StyledSelectionSection = styled.div`
    margin: 100px 5%;
    display: flex;
    justify-content: space-between;
`;

const StyledSelectionButton = styled(Link)`
    background-color: white;
    border: solid 1px;
    border-color: #e0e0e0;
    border-radius: 3px;
    text-transform: uppercase;
    font-family: Source Sans Pro, arial, sans-serif;
    font-weight: 700;
    font-size: 1rem;
    letter-spacing: 0.12rem;
    cursor: pointer;
    color: #3f3f3f;
`;

const StyledSelectionInfo = styled.div`
    position: absolute;
    top: 65%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
`;

const SelectionModule = (props: { label: string; to: string }) => {
    const { label, to } = props;
    return (
        <StyledSelection>
            <StyledSelectionInfo>
                <div>Sélection</div>
                <div style={{ fontWeight: 'bold' }}>{label}</div>
                <StyledSelectionButton style={{ textDecoration: 'none' }} to={to}>
                    Découvrir
                </StyledSelectionButton>
            </StyledSelectionInfo>
        </StyledSelection>
    );
};

const HomePage = () => {
    return (
        <StyledSelectionSection>
            <SelectionModule label={'Nos chaussons'} to={'/shop'} />
            <SelectionModule label={'Nos gilets'} to={'/shop'} />
            <SelectionModule label={'Nos ...'} to={'/shop'} />
        </StyledSelectionSection>
    );
};

export default HomePage;
