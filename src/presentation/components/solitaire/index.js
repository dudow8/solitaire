import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { newGame } from '../../../application/index';

import Tableau from '../tableau';
import Foundation from '../foundation';
import Stock from '../stock';

const GlobalStyle = createGlobalStyle`
    html, body {
        margin: 0px;
        padding: 0px;
    }

    #root {
        margin: 0px;
        padding: 0px;
        position: fixed;
        width: 100vw;
        height: 100vh;
        background-color: #1A4314;
        display: flex;
        justify-content: center;

        > div {
            /* transform: scale(65%);
            transform-origin: top left; */
        }
    }
`;

const GameLayout = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
`;

const GameLayoutHead = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
`;

newGame();

const Solitaire = () => {
    return (
        <GameLayout>
            <GlobalStyle />
            <GameLayoutHead>
                <Foundation />
                <Stock />
            </GameLayoutHead>
            <Tableau />
        </GameLayout>
    );
}

export default Solitaire;
