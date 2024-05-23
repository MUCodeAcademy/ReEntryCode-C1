import { render, screen, fireEvent } from '@testing-library/react';
import ProductsPage from '../Pages/ProductsPage';
import { useProduct } from '../Context/ProductContext';
import { useCart } from '../Context/CartContext';
import { useUser } from '../Context/UserContext';

// Specifies we want to mock the ProductContext
jest.mock("../Context/ProductContext", () => ({
    // jest.fn() creates a mocked function for our context so that we can use it in the test
    useProduct: jest.fn()
}));

jest.mock("../Context/CartContext", () => ({
    useCart: jest.fn()
}));

jest.mock("../Context/UserContext", () => ({
    useUser: jest.fn()
}));

describe("Products Page", () => {
    // Before each test, run this code
    beforeEach(() => {
        // Set default return values for our context
        useProduct.mockReturnValue({
            currentProduct: [{
                product_id: 1,
                name: "something",
                description: "test",
                quantity: 5,
                sales: 3,
                price: 10.99,
            }],
            setProduct: jest.fn(),
        });
        useCart.mockReturnValue({
            currentCart: [],
            clearCart: jest.fn(),
            setCart: jest.fn()
        });
        useUser.mockReturnValue({
            currentUser: null,
        });
    });

    it("should display the h1 element", () => {
        // Displays the page for the test
        render(<ProductsPage />);
        // Gets the element with the text "Products" from the page
        const headerText = screen.getByText("Products");
        // The test is making sure the headerText is on the page
        expect(headerText).toBeInTheDocument();
    });

    it("should click the add to cart button", () => {
        render(<ProductsPage />);
        const addButton = screen.getByText("Add to cart");

        expect(addButton).toBeInTheDocument();

        // Makes the test click on the button.
        fireEvent.click(addButton);

        // Expects the function on the button to have been called

        // If your add to cart button runs setCart...
        expect(useCart().setCart).toHaveBeenCalled();

        // If your button runs addToCart...
        // expect(addToCart).toHaveBeenCalled();
    });
});