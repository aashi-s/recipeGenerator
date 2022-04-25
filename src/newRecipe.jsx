import React from "react";
import Button from '@mui/material/Button';
import { recipeLinks } from "./recipeLinks";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './newRecipe.scss'

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
            <div className="doodle drink"></div>
            <div className="doodle bowl"></div>
            <div className="doodle cake"></div>
            <div className="doodle pudding"></div>
            <div className="doodle lemonade"></div>

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
            {clicked && <div className="recipeCard">
                <img src={`../recipeImages/${recipe.id}.jpg`}/>
                <div className="rightColumn">
                    <h1>{recipe.title}</h1>
                    <ThemeProvider theme={theme}>
                        <Button href={recipe.link} target="_blank" variant="contained" color="secondary" sx={{fontWeight:"600"}}>Go to recipe</Button>
                    </ThemeProvider>
                </div> 
            </div>}
        </div>
    )
}