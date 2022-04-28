import React from "react";
import Button from '@mui/material/Button';
import { recipeLinks } from "./recipeLinks";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './newRecipe.scss'
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

export default function NewRecipe(){

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

    function getRecipe() {
        const randomLinkNum = Math.floor(Math.random() * recipeLinks.length)
        const currentRecipe = recipeLinks[randomLinkNum]
        setRecipe(currentRecipe)
    }

    return (
        <div>
            {/* <div className="blobs"> */}
                <img src={blob1} className="blob blobOne" alt=""/>
                <img src={blob2} className="blob blobTwo" alt=""/>
                <img src={blob3} className="blob blobThree" alt=""/>
                <img src={blob4} className="blob blobFour" alt=""/>
                <img src={blob5} className="blob blobFive" alt=""/>
                <img src={blob6} className="blob blobSix" alt=""/>
                <img src={blob7} className="blob blobSeven" alt=""/>
                <img src={blob8} className="blob blobEight" alt=""/>
                <img src={blob9} className="blob blobNine" alt=""/>
                <img src={blob10} className="blob blobTen" alt=""/>
                <img src={blob11} className="blob blobEleven" alt=""/>
            {/* </div>  */}
            {/* <div className="doodle drink"></div>
            <div className="doodle bowl"></div>
            <div className="doodle cake"></div>
            <div className="doodle pudding"></div>
            <div className="doodle lemonade"></div> */}
            <div className="headingCard">
                <h1 className="description">Find your next favourite recipe</h1>
                <p className="description">Pick one of these tried and true baked goods, and see for yourself why we love them!</p>
                <div className="randomButton">
                    <ThemeProvider theme={theme}>
                        <Button
                            variant="contained" 
                            color="primary" 
                            onClick={() => {
                                setClicked(true);
                                getRecipe();
                            }}
                            sx={{fontSize:"16px"}}>
                            {clicked ? "Get another one" : "Find me a recipe"}
                        </Button>
                    </ThemeProvider>
                </div>
            </div>
            {clicked && <div className="recipeCard">
                <img src={`../recipeImages/${recipe.id}.jpg`}/>
                <div className="rightColumn">
                    <h1>{recipe.title}</h1>
                    <ThemeProvider theme={theme}>
                        <Button href={recipe.link} target="_blank" variant="contained" color="secondary" size="large" sx={{fontWeight:"600"}}>Go to recipe</Button>
                    </ThemeProvider>
                </div> 
            </div>}
        </div>
    )
}