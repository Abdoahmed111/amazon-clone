import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html{
        margin: 0;
    }
    body{
        background-color:rgb(234,237,237);
        margin: 0;
        font-family: -applesystem, BlinkMacSystemFont,"segoe UI","Roboto", "Oxygen","Ubuntu","Cantarell","Fira Sans", "Droid Sans","Helvetica Neue", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    a{
        text-decoration:none;
    }
    code {
        font-family:source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
    }
`;
