import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    padding: 40px;
    background-color: #f4f7fb;
    justify-items: center;
`;

export const CategoryItem = styled.div`
    background-color: #fff;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: column; /* Ensures vertical stacking */
    height: 100%; /* Ensures full height usage */
    width: 270px;
    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
    }
`;

export const CategoryImage = styled.img`
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-bottom: 3px solid #ff6f61; /* Color can match the button */
`;

export const CategoryDetails = styled.div`
    padding: 20px;
    text-align: center;
    flex-grow: 1; /* Allows the details section to take available space */
`;

export const CategoryName = styled.h3`
    font-size: 20px;
    font-weight: 700;
    color: #2c3e50;
    margin: 15px 0 5px;
    text-transform: capitalize;
    letter-spacing: 1px;
    line-height: 1.4;
`;

export const CategoryPrice = styled.span`
    font-size: 20px;
    font-weight: 500;
    color: #e74c3c;
    background-color: #f9ebea;
    padding: 5px 15px;
    border-radius: 30px;
    display: inline-block;
    margin-top: 10px;
`;

export const AddToCartButton = styled.button`
    width: 100%; /* Full width */
    padding: 15px; /* Increased padding */
    font-size: 18px; /* Larger font size */
    font-weight: bold; /* Bold text */
    color: #fff; /* White text */
    background-color: #ff6f61; /* Color matching the category image border */
    border: none;
    border-radius: 5px; /* Slightly rounded corners */
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;

    &:hover {
        background-color: #e55a50; /* Darker shade for hover effect */
        transform: translateY(-2px);
    }

    &:active {
        transform: translateY(0);
    }

    &:focus {
        outline: none;
    }
`;
