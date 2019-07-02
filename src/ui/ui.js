import styled from "styled-components";

export const Input = styled.input`
    margin-top: 1rem;
    width: 60rem;
    height: 2rem;
    padding-left: 1rem;
    font-size: 1.4rem;
    color: #000;
`;

export const AppWrap = styled.div`
    background-color: #e4e4e4;
`;

export const Poster = styled.img`
    width: 15rem;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2rem;
    background-color: #fff;
    
    > div {
        border-bottom: 0.01rem solid rgba(0, 0, 0, 0.75);
    }
    
    p {
        text-align: left;
        margin-bottom: 2rem
    }
`;

export const Wrap = styled.div`
    display: flex;
    width: 60rem;
    margin: 1rem 0;
    border: 0.01rem solid #80808033;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
            
    a {
        display: flex;
        align-items: center;
        text-decoration: none;
        padding-top: 2rem;
        margin: 0 auto;
        color: #000;
    }
`;

export const WrapImg = styled.div`
    display: flex;
    img {
        width: 15rem;
    };
`;

export const MovieWrapper = styled.div`
  margin-top: 10rem;  
  background: url(${props => props.backdrop}) no-repeat;
`;

export const MovieInfo = styled.div`
  background: white;
  text-align: left;
  padding: 2rem 10%;
  display: flex;
  > div {
    margin-left: 20px;
  }
  img {
    position: relative;
    top: -5rem;
  }
  
  h1 {
    margin: 0;
  }
`;

export const MovieGrid = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Error = styled.div`
    display: flex;
    text-align: center;
    height: 5rem;
    background-color: #61dafb;
`;


export const Loading = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    
    background-color: (${props => props.isPending});
`;


