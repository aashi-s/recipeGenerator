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
            <div className="randomButton">
                <ThemeProvider theme={theme}>
                    <Button
                        variant="contained" 
                        color="primary" 
                        onClick={() => {
                            setClicked(true);
                            getRecipe();
                        }}>
                        {clicked ? "Get another one" : "Find me a recipe"}
                    </Button>
                </ThemeProvider>
            </div>
            {clicked && <div className="recipeCard">
                <img src={`../recipeImages/${recipe.id}.jpg`}/>
                <div className="rightColumn">
                    <h1>{recipe.title}</h1>
                    <ThemeProvider theme={theme}>
                        <Button href={recipe.link} target="_blank" variant="contained" color="primary">Go to recipe</Button>
                    </ThemeProvider>
                </div> 
            </div>}
        </div>
    )
}