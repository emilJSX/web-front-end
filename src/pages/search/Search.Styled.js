import styled from "styled-components";


export const Mainly = styled.div`


.tabs-choose{
    border: 1px solid  #EBE5F7;
    margin: -56px 0 0 10%; 
    width: 245px; 
    border-radius: 8px;

}

li .nav-link{
    border-radius: 8px;
    height: 56px;
    width: 121px;
    font-weight: 600;
    color: #160046;
    font-size: 14px;
}
li .nav-link.active{
    width: 121px;
    border-radius: 8px;
    height: 56px;
    border: 2px solid #3800B0;
    font-family: 'Steppe';
    font-weight: 600;
    background: #EBE5F7;
    font-size: 14px;
    color: #3800B0;
}
@media (max-width: 420px){
    width: 100%;

    li .nav-link{
        width: 171.5px;
        height: 56px;
        
    }
    li .nav-link.active{
        width: 169.5px;
        height: 56px;
        
    }
    .tabs-choose{
        width: 343px;
        margin: 0 auto 0 auto; 
        height: 56px;
    }
}
`
export const Title = styled.p`

    font-family: sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 56px;
    color: #0B0023;
    margin: 94px 0 0 10%;
    @media (max-width: 420px){
        width: 343px;
        margin: 0 auto 0 auto; 
        font-size: 40px;

    }
`

export const Personal = styled.div`

    width: 206px;
    height: 196px;
    float: left;
    cursor: pointer;
    margin-right: 12px;
    margin-top: 63px;
    display: block; 
    @media (max-width: 420px){
        width: 163px;
        height: 130px;
        margin: 0 auto;
        margin-top: 40px;
    }
`;


export const Photo = styled.img`

    width: 80px;
    height: 80px;
    margin: 24px 63px 0 63px;
    display: block; 
    border-radius: 50%;
    @media (max-width: 420px){
        width: 56px;
        height: 56px;
        margin: 12px 53px 0 53px;
    }
`;

export const Name = styled.p`

    width: 155px;
    height: 28px;
    text-align: center;
    display: block; 
    margin: 10px auto;
    font-weight: 600;
    color: #0C0E19;
    font-size: 20px;
    @media (max-width: 420px){
        width:121px;
        font-size: 16px
    }
`;
export const Tag = styled.p`

    width: 90px;
    height: 20px;
    text-align:center;
    margin: 5px auto;
    display: block; 
    font-weight: 500;
    color: #0C0E19;
    font-size: 14px;
    @media (max-width: 420px){
        width: 83px;
        font-size: 13px;

    }
`;

export const Searchdiv = styled.div`

    margin: 34px 0 0 27%;
    height: 56px; 
    width: 62.2%; 
    border-radius: 8px;

    .lupa{
        font-size: 56px;
        padding: 10px;
        border-radius: 0 8px 8px 0;
        color: black;
        background: #F7F8FA;
        float:right;
        cursor: pointer;
        width: 10%;
        height: 55px;
    }
    .filter{
        display:none;
    }
    @media (max-width: 420px){
        width: 343px;
        margin: 34px auto 40px auto;
        .lupa{
            width:20%;
            color:#3800B0;
            display:block;
            float: left;
        }
        .filter{
            display:block;
            float: left;
            font-size:30px;
            color:#3800B0;
            width: 15%;
            margin: 12px 0;
            
        }
    }
`
export const Searchbar = styled.input`

    height: 56px;
    width: 90%; 
    border-radius: 8px 0 0 8px;
    background: #F7F8FA;
    font-weight: 500;
    font-size: 19px;
    color: #0C0E19;
    padding-left:16px;
    font-family: sans-serif;
    @media (max-width: 420px){
    
        width:65%;
        float: left;
    }
`

export const Mainlonlysearch = styled.div`
    display: none;
    @media (max-width: 420px){

        display: block
    }

`

export const Searchstartdiv = styled.div`
@media (max-width: 420px){
    width:343px;
    height: 208px;
    margin: 40px auto 230px auto;

    .startsearch{
        width:295px;
        height: 38px;
        margin: 24px auto 0 auto;
        font-size: 32px;
        color:#8E93AF;
        font-weight: 600;
        font-family: 'Steppe';
        text-align:center;
    }
    .result{
        width:295px;
        height: 38px;
        margin: 8px auto 16px auto;
        font-size: 16px;
        color:#8E93AF;
        font-weight: 400;
        font-family: Inter;
        text-align:center;
    }
    .imgleaf{
        width: 77px;
        height: 80px;
        margin: 16px auto 0 auto; 
    }
}
`