import styled from "styled-components";

export const Loading = styled.p`
    color:white;
`;

export const LoadingFailure = styled.p`
    color:crimson;
`;

export const FormHeader = styled.header`
    border: solid orange 2px;
    border-radius: 30% 30% 10px 10px;
    max-width: 500px;
    background-color: rgb(30, 30, 30);
    text-align: center;
    margin: auto;
    box-shadow: 0px 0px 5px orange; 
    text-shadow: 2px 2px orange, 0px 0px 10px orange;
    color: rgb(10, 10, 10);
    font-size: 40px;
    padding: 10px;
`;

export const Main = styled.main`
    max-width: 900px;
    min-height: 450px;
    font-size:30px;
    color:orange;
    text-shadow: 2px 2px rgb(10, 10, 10), 0px 0px 10px orange;
    text-align: center;
    border: solid orange 2px;
    border-radius: 10px 10px 30% 30%;
    box-shadow: 0px 0px 5px orange;
    background-color: rgb(30, 30, 30);
    padding: 30px;
    margin: 5px;
`;

export const FormLabel = styled.label`
    display: flex;
    align-items: center;
    justify-content: center;

    @media(max-width:767px){
        flex-direction: column;
    }  
`;

export const FormField = styled.fieldset`
    margin-bottom: 10px;
    margin-left: 5px;
    background-color: rgb(10, 10, 10);
    color:orange;
    text-shadow: 2px 2px rgb(10, 10, 10), 0px 0px 10px orange;
    border: solid black 1px;
    box-shadow: 0px 0px 10px orange;

    &:hover{
    background-color: rgb(10, 10, 10);
    color:orange;
    box-shadow: 0px 0px 20px orange;
    }

    &:active{
    background-color: rgb(30, 30, 30);
    box-shadow: 0px 0px 10px orange;
    }
`;

export const FormButton = styled.button`
    background-color: rgb(10, 10, 10);
    color:orange;
    text-shadow: 2px 2px rgb(10, 10, 10), 0px 0px 10px orange;
    border: solid orange 1px;
    box-shadow: 0px 0px 10px orange;

    &:hover{
    color:orange;
    box-shadow: 0px 0px 20px orange;
    cursor: pointer;
    }

    &:active{
    background-color: rgb(30, 30, 30);
    box-shadow: 0px 0px 10px orange;
    cursor: progress;
    }
`;

export const Info = styled.div`
    color: white;
    text-align: center;
`;