import styled from 'styled-components';

export const ButtonContainer = styled.button `
font-size:1.2rem;
background:transparent;
border:0.05rem solid var(--mainDark);
color: var(--mainYellow);
border-radius:0.5rem;
padding: 0.2rem 0.5rem;
cursor:pointer;
transition: all 0.3s ease-in-out;
&:hover{
    background:var(--mainDark);
}
&:focus{
    outline:none;
}
&:disabled{
    background-color:var(--mainDark);
}
`;