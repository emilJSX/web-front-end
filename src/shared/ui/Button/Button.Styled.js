// example Button with variants
import styled from 'styled-components'

export const ButtonStyled = styled.button`
    display:flex;
    align-items:center;
    justify-content: center;
    gap: ${({ size }) => size !== 'm' ? '8px' : '12px'};
    height: ${({ size }) => size == 'm' ? '40px' : '40px'};
    /* padding: ${({ size }) => size == 'm' ? '12px 24px' : '12px 16px'}; */
    padding: ${({ size, variant }) => {
        if (variant !== 'white') return size == 'm' ? '5px 12px' : '12px 16px';
        else 0;
    }};
    border-radius: 8px;
    transition: 0.2s all;
    cursor: pointer;
    font-feature-settings: 'liga' off;
    font-weight: 600;
    letter-spacing: 0.01em;
    background-color:${({ variant, theme }) => {
        if (variant == 'default') return theme.colors.primary5;
        else if (variant == 'outlined') return 'inherit';
        else if (variant == 'white') return 'inherit';
        else return theme.primary5;
    }};
    border: ${({ variant }) => variant !== 'white' ? '1px' : '0px'} solid ${({ variant, theme }) => {
        if (variant == 'default') return theme.colors.primary5;
        else if (variant == 'outlined') return theme.colors.primary2;
        else return theme.primary5;
    }};
    color: ${({ theme, variant }) => variant == 'default' ? '#fff' : theme.colors.primary5};
    font-size: ${({ size }) => {
        if (size == 'm') return '14px';
        if (size == 's') return '13px';
        if (size == 'xs') return '12px';
        else return '14px';
    }};

    :hover {
        box-shadow:${({ variant }) => variant == 'default' ? '0px 8px 16px rgba(34, 0, 106, 0.24)' : 'none'};
        filter:${({ variant }) => variant == 'outlined' ? ' drop-shadow(0px 4px 8px rgba(56, 0, 176, 0.32))' : 'none'};
        border:${({ variant, theme }) => {
        if (variant == 'outlined') return `1px solid ${theme.colors.primary3}`;
        else if (variant == 'default') return `1px solid ${theme.colors.primary6}`;
        else '0px solid';
    }};
        background-color:${({ variant, theme }) => variant !== 'default' ? 'inherit' : theme.colors.primary6};
        color:${({ variant, theme }) => {
        if (variant == 'default') return '#fff';
        else if (variant == 'outlined') return theme.colors.primary5;
        else if (variant == 'white') return theme.colors.primary3;
        else return '#fff';
    }};
        
        svg{
        fill:${({ variant, theme }) => {
        if (variant == 'default') return '#fff';
        else if (variant == 'outlined') return theme.colors.primary5;
        else if (variant == 'white') return theme.colors.primary3;
        else return '#fff'
    }}}

    a{
        color:${({ variant, theme }) => {
        if (variant == 'default') return '#fff';
        else if (variant == 'outlined') return theme.colors.primary5;
        else if (variant == 'white') return theme.colors.primary3;
        else return '#fff';
    }}};

     };

     :active {
        box-shadow:none;
        filter:none;
        background-color:${({ variant, theme }) => {
        if (variant == 'default') return theme.colors.primary7;
        else if (variant == 'outlined') return 'inherit';
        else if (variant == 'white') return 'inherit';
        else return theme.primary7;
    }};
        
        border:${({ variant, theme }) => {
        if (variant == 'outlined') return `1px solid ${theme.colors.primary3}`;
        else if (variant == 'default') return `1px solid ${theme.colors.primary6}`;
        else '0px solid';
    }};

        color:${({ variant, theme }) => {
        if (variant == 'default') return '#fff';
        else if (variant == 'outlined') return theme.colors.primary5;
        else if (variant == 'white') return theme.colors.primary6;
        else return '#fff';
    }};

    svg{
        color:${({ variant, theme }) => {
        if (variant == 'default') return '#fff';
        else if (variant == 'outlined') return theme.colors.primary5;
        else if (variant == 'white') return theme.colors.primary6;
        else return '#fff';
    }};
    }
     }


     svg{
        width:${({ size }) => {
        if (size == 'm') return '24px';
        else if (size == 's') return '20px';
        else if (size == 'xs') return '14px';
    }};
        height:${({ size }) => {
        if (size == 'm') return '24px';
        else if (size == 's') return '20px';
        else if (size == 'xs') return '14px';
    }}
     }

    a, a:active{
        color:inherit;
    }
`