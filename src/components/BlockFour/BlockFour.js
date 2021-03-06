import React from 'react';
import classes from './BlockFour.module.css'
import {H1} from "../H1/H1";
import {Board} from "../Board/Board";

export const BlockFour = ({image}) => {
    return (
        <Board img={'../../assets/backgroundThree.png'}>
            <div className={classes.blockName}>
                <p>SPECIALTIES</p>
            </div>
            <div className={classes.main}>
                <div>
                    <img className={classes.image} src={image} alt="imageOne"/>
                </div>

                <div className={classes.text}>
                    <H1>
                        CHOCOLATE PANCAKES
                    </H1>
                    <p className={classes.postTitle}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a,
                        tempor magna.
                    </p>
                    <p>
                        Integer ullamcorper neque eu purus euismod, ac faucibus mauris posuere. Morbi non ultrices
                        ligula. Sed dictum, enim sed ullamcorper feugiat, dui odio vehicula eros, a sollicitudin lorem
                        quam nec sem. Mauris tincidunt feugiat diam convallis pharetra. Nulla facilisis semper
                        laoreet.
                    </p>
                </div>

            </div>
        </Board>
    )
}