import React, { useEffect } from "react";
import { recipeLinks } from "./recipeLinks";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './newRecipe.css'
import blob1 from './backgroundImages/blob1.svg'
import blob2 from './backgroundImages/blob2.svg'
import blob3 from './backgroundImages/blob3.svg'
import blob4 from './backgroundImages/blob4.svg'
import blob5 from './backgroundImages/blob5.svg'
import blob6 from './backgroundImages/blob6.svg'
import blob7 from './backgroundImages/blob7.svg'
import blob8 from './backgroundImages/blob8.svg'
import blob9 from './backgroundImages/blob9.svg'
import blob10 from './backgroundImages/blob10.svg'
import blob11 from './backgroundImages/blob11.svg'
import _0 from './recipeImages/0.jpg'
import _1 from './recipeImages/1.jpg'
import _2 from './recipeImages/2.jpg'
import _3 from './recipeImages/3.jpg'
import _4 from './recipeImages/4.jpg'
import _5 from './recipeImages/5.jpg'
import _6 from './recipeImages/6.jpg'
import _7 from './recipeImages/7.jpg'
import _8 from './recipeImages/8.jpg'
import _9 from './recipeImages/9.jpg'
import _10 from './recipeImages/10.jpg'
import _11 from './recipeImages/11.jpg'
import _12 from './recipeImages/12.jpg'
import _13 from './recipeImages/13.jpg'
import _14 from './recipeImages/14.jpg'
import _15 from './recipeImages/15.jpg'
import _16 from './recipeImages/16.jpg'
import _17 from './recipeImages/17.jpg'
import _18 from './recipeImages/18.jpg'
import _19 from './recipeImages/19.jpg'
import _20 from './recipeImages/20.jpg'
import _21 from './recipeImages/21.jpg'
import _22 from './recipeImages/22.jpg'
import _23 from './recipeImages/23.jpg'
import _24 from './recipeImages/24.jpg'
import _25 from './recipeImages/25.jpg'
import _26 from './recipeImages/26.jpg'
import _27 from './recipeImages/27.jpg'
import _28 from './recipeImages/28.jpg'
import _29 from './recipeImages/29.jpg'
import _30 from './recipeImages/30.jpg'
import _31 from './recipeImages/31.jpg'
import _32 from './recipeImages/32.jpg'

export default function NewRecipe() {

    const theme = createTheme({
        palette: {
            primary:
            {
                main: '#e07a5f',
                contrastText: '#fff',
            },
            secondary:
            {
                main: '#f2cc8f',
                contrastText: '#3d405b',
            },
        },
        typography: {
            fontFamily: [
                "Barlow",
                "sans-serif"
            ].join(",")
        },
    });

    const [clicked, setClicked] = React.useState(false)
    const [recipe, setRecipe] = React.useState({})
    const [image, setImage] = React.useState("")

    function getRecipe() {
        const randomLinkNum = Math.floor(Math.random() * recipeLinks.length)
        const currentRecipe = recipeLinks[randomLinkNum]
        setRecipe(currentRecipe)
    }

    function getImage() {
        let image = ""
        switch (recipe.id) {
            case 0:
                image = _0
                break;
            case 1:
                image = _1
                break;
            case 2:
                image = _2
                break;
            case 3:
                image = _3
                break;
            case 4:
                image = _4
                break;
            case 5:
                image = _5
                break;
            case 6:
                image = _6
                break;
            case 7:
                image = _7
                break;
            case 8:
                image = _8
                break;
            case 9:
                image = _9
                break;
            case 10:
                image = _10
                break;
            case 11:
                image = _11
                break;
            case 12:
                image = _12
                break;
            case 13:
                image = _13
                break;
            case 14:
                image = _14
                break;
            case 15:
                image = _15
                break;
            case 16:
                image = _16
                break;
            case 17:
                image = _17
                break;
            case 18:
                image = _18
                break;
            case 19:
                image = _19
                break;
            case 20:
                image = _20
                break;
            case 21:
                image = _21
                break;
            case 22:
                image = _22
                break;
            case 23:
                image = _23
                break;
            case 24:
                image = _24
                break;
            case 25:
                image = _25
                break;
            case 26:
                image = _26
                break;
            case 27:
                image = _27
                break;
            case 28:
                image = _28
                break;
            case 29:
                image = _29
                break;
            case 30:
                image = _30
                break;
            case 31:
                image = _31
                break;
            case 32:
                image = _32
                break;
            default:
                break;
        }
        setImage(image)
    }

    useEffect(() => {
        getImage()
    }, [recipe])

    return (
        <div>
            <div className="content">
                <img src={blob1} className="blob blobOne" alt="" />
                <img src={blob2} className="blob blobTwo" alt="" />
                <img src={blob3} className="blob blobThree" alt="" />
                <img src={blob4} className="blob blobFour" alt="" />
                <img src={blob5} className="blob blobFive" alt="" />
                <img src={blob6} className="blob blobSix" alt="" />
                <img src={blob7} className="blob blobSeven" alt="" />
                <img src={blob8} className="blob blobEight" alt="" />
                <img src={blob9} className="blob blobNine" alt="" />
                <img src={blob10} className="blob blobTen" alt="" />
                <img src={blob11} className="blob blobEleven" alt="" />
                <div className="center">
                    <div className="headingCard">
                        <h1 className="description">Find your next favourite recipe</h1>
                        <p className="description">Pick one of these tried and true baked goods, and see for yourself why we love them!</p>
                        <div className="randomButton"><a onClick={() => { setClicked(true); getRecipe() }}>{clicked ? "Get another one" : "Find me a recipe"}</a></div>
                        {/* <div className="randomButton">
                        <ThemeProvider theme={theme}>
                            <Button
                                variant="contained" 
                                color="primary" 
                                onClick={() => {
                                    setClicked(true);
                                    getRecipe();
                                }}
                                sx={{fontSize:"25px"}}>
                                {clicked ? "Get another one" : "Find me a recipe"}
                            </Button>
                        </ThemeProvider>
                    </div> */}
                    </div>
                    {clicked && <div className="recipeCard">
                        <img src={image} />
                        <div className="rightColumn">
                            <h2 className="recipeTitle">{recipe.title}</h2>
                            <div className="toRecipeButton"><a href={recipe.link} target="_blank">Go to recipe</a></div>
                            {/* <ThemeProvider theme={theme}>
                                <Button className="toRecipeButton" href={recipe.link} target="_blank" variant="contained" color="secondary" size="large" sx={{fontWeight: "600", fontSize:"25px"}}>Go to recipe</Button>
                            </ThemeProvider> */}
                        </div>
                    </div>
                    }
                </div>
            </div>
            <div className="footer">Designed and developed by Aashi Shah</div>
        </div>
    )
}