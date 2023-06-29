import React from "react"

class Listrender extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            clothsList: [
                {
                    id: 1,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt',                   
                    price: 4000,
                    originalprice: 2999,
                    rating: '2.1',
                    offer: 20,
                    cart: '',
                    image: 'https://images.bewakoof.com/t640/men-s-red-ethnic-motif-printed-shirt-591296-1683036574-1.jpg'
                },
                {
                    id: 2,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 6000,
                    originalprice: 1999,
                    rating: '4.8',
                    offer: 20,
                    image: 'https://images.bewakoof.com/t640/men-s-grey-shirt-597368-1687273443-1.jpg'
                },
                {
                    id: 3,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 4000,
                    originalprice: 2999,
                    rating: '1.8',
                    offer: 20,
                    image: 'https://images.bewakoof.com/t640/men-s-white-abstract-printed-shirt-602293-1687866861-1.jpg'
                },
                {
                    id: 4,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 6000,
                    originalprice: 2999,
                    rating: '2.8',
                    offer: 20,
                    image: 'https://images.bewakoof.com/t640/men-s-multicolor-printed-shirt-602294-1687866791-1.jpg'
                },
                {
                    id: 5,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 8000,
                    originalprice: 2999,
                    rating: '3.8',
                    offer: 20,
                    image: 'https://images.bewakoof.com/t640/men-s-black-striped-shirt-602295-1687867012-1.jpg'
                },
                {
                    id: 6,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 3000,
                    originalprice: 1999,
                    rating: '1.8',
                    offer: 20,
                    image: 'https://images.bewakoof.com/t640/men-s-multicolor-color-block-shirt-602289-1687866899-1.jpg'
                },
                {
                    id: 7,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 4000,
                    originalprice: 2999,
                    rating: '2.9',
                    offer: 20,
                    image: 'https://images.bewakoof.com/t640/men-s-blue-floral-print-shirt-602290-1687866823-1.jpg'
                },
                {
                    id: 8,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 9000,
                    originalprice: 2999,
                    rating: '3.3',
                    offer: 20,
                    image: 'https://images.bewakoof.com/t640/men-s-orange-tie-dye-printed-shirt-602292-1687866974-1.jpg'
                },
                {
                    id: 9,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 4000,
                    originalprice: 2999,
                    rating: '1.9',
                    offer: 20,
                    image: 'https://images.bewakoof.com/t640/men-s-multicolor-marble-print-shirt-602286-1687866753-1.jpg'
                },
                {
                    id: 10,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 3000,
                    originalprice: 999,
                    rating: '2.6',
                    offer: 20,
                    image: 'https://images.bewakoof.com/t640/men-s-rhino-grey-shirt-601272-1687532129-1.JPG'
                },
                {
                    id: 11,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 4000,
                    originalprice: 1099,
                    rating: '1.2',
                    offer: 20,
                    image: 'https://images.bewakoof.com/t640/men-s-grey-checked-slim-fit-shirt-595287-1685452862-1.jpg'
                },
                {
                    id: 12,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 3000,
                    originalprice: 1009,
                    rating: '2.9',
                    offer: 20,
                    image: 'https://images.bewakoof.com/t640/men-s-iron-grey-shirt-601275-1687532438-1.JPG'
                },
                {
                    id: 13,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '3.0',
                    offer: 20,
                    image: 'https://images.bewakoof.com/t640/men-s-white-shirt-601276-1687532167-1.JPG'
                },
                {
                    id: 14,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '3.2',
                    offer: 20,
                    image: 'https://images.bewakoof.com/t640/men-s-dark-green-shirt-601267-1687532395-1.JPG'
                },
                {
                    id: 15,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '2.8',
                    offer: 20,
                    image: 'https://images.bewakoof.com/t640/men-s-white-striped-shirt-597393-1687272418-1.jpg'
                },
                {
                    id: 16,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '4.8',
                    offer: 20,
                    image: 'https://images.bewakoof.com/t640/men-s-red-checked-slim-fit-shirt-595275-1685454259-1.jpg'
                },
                {
                    id: 17,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '1.8',
                    offer: 20,
                    image: 'https://images.bewakoof.com/t640/men-s-blue-floral-printed-shirt-597362-1687272602-1.jpg'
                },
                {
                    id: 18,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt',                   
                    price: 5000,
                    originalprice: 2999,
                    rating: '2.1',
                    offer: 20,
                    cart: '',
                    image: 'https://images.bewakoof.com/t640/men-s-grey-checked-slim-fit-shirt-595287-1685452862-1.jpg'
                },
                {
                    id: 19,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 1999,
                    rating: '4.8',
                    offer: 20,
                    image: 'https://images.bewakoof.com/t640/men-s-pink-striped-shirt-591699-1683295086-1.jpg'
                },
                {
                    id: 20,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '1.8',
                    offer: 20,
                    image: 'https://images.bewakoof.com/t640/men-s-orange-slim-fit-shirt-595844-1686060652-1.jpg'
                },
                {
                    id: 21,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '2.8',
                    offer: 20,
                    image: 'https://images.bewakoof.com/t640/men-s-blue-checked-slim-fit-shirt-595801-1686057140-1.jpg'
                },
                {
                    id: 22,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '3.8',
                    offer: 20,
                    image: 'https://images.bewakoof.com/t640/men-s-caramel-shirt-597391-1687273182-1.jpg'
                },
                {
                    id: 23,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '1.8',
                    offer: 20,
                    image: 'https://images.bewakoof.com/t640/men-s-white-striped-shirt-597369-1687273142-1.jpg'
                },
                {
                    id: 24,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '2.9',
                    offer: 20,
                    image: 'https://images.bewakoof.com/t640/men-s-multicolour-printed-shirt-597379-1687272712-1.jpg'
                },
                {
                    id: 25,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '3.3',
                    offer: 20,
                    image: 'https://images.bewakoof.com/t640/men-s-blue-checked-shirt-597377-1687273629-1.jpg'
                },
                {
                    id: 26,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '1.9',
                    offer: 20,
                    image: 'https://images.bewakoof.com/t640/men-s-black-printed-shirt-597371-1687272487-1.jpg'
                },
                {
                    id: 27,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '2.6',
                    offer: 20,
                    image: 'https://images.bewakoof.com/t640/men-s-pink-leaf-printed-shirt-597348-1687273553-1.jpg'
                },
                {
                    id: 28,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '1.2',
                    offer: 20,
                    image: 'https://images.bewakoof.com/t640/men-s-white-checked-shirt-597931-1687272526-1.jpg'
                },
                {
                    id: 29,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '2.9',
                    offer: 20,
                    image: 'https://images.bewakoof.com/t640/men-s-white-shirt-597364-1687272380-1.jpg'
                },
                {
                    id: 30,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '3.0',
                    offer: 20,
                    image: 'https://images.bewakoof.com/t640/men-s-blue-striped-shirt-597366-1687272450-1.jpg'
                },
                {
                    id: 31,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '3.2',
                    offer: 20,
                    image: 'https://images.bewakoof.com/t640/men-s-blue-printed-shirt-597358-1687273367-1.jpg'
                },
                {
                    id: 32,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '2.8',
                    offer: 20,
                    image: 'https://images.bewakoof.com/t640/men-s-blue-shirt-597357-1687273667-1.jpg'
                },
                {
                    id: 33,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '4.8',
                    offer: 20,
                    image: 'https://images.bewakoof.com/t640/men-s-black-striped-shirt-597353-1687273515-1.jpg'
                },
                {
                    id: 34,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '1.8',
                    offer: 20,
                    image: 'https://images.bewakoof.com/t640/men-s-blue-coco-tree-printed-shirt-597351-1687273214-1.jpg'
                },
                {
                    id: 35,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt',                   
                    price: 5000,
                    originalprice: 2999,
                    rating: '2.1',
                    offer: 20,
                    cart: '',
                    image: 'https://images.bewakoof.com/t640/men-s-grey-slim-fit-shirt-595777-1686058728-1.jpg'
                },
                {
                    id: 36,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 1999,
                    rating: '4.8',
                    offer: 20,
                    image: 'https://images.bewakoof.com/t640/men-s-brown-paisley-printed-slim-fit-shirt-595875-1686061651-1.jpg'
                },
                {
                    id: 37,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '1.8',
                    offer: 20,
                    image: 'https://images.bewakoof.com/t640/men-s-purple-slim-fit-shirt-595776-1686056897-1.jpg'
                },
                {
                    id: 38,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '2.8',
                    offer: 20,
                    image: 'https://images.bewakoof.com/t640/men-s-green-paisley-printed-slim-fit-shirt-595874-1686059551-1.jpg'
                },
                {
                    id: 39,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '3.8',
                    offer: 20,
                    image: 'https://images.bewakoof.com/t640/men-s-green-slim-fit-shirt-595775-1686059090-1.jpg'
                },
                {
                    id: 40,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '1.8',
                    offer: 20,
                    image: 'https://images.bewakoof.com/t640/men-s-blue-slim-fit-shirt-595779-1686060109-1.jpg'
                },
                {
                    id: 41,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '2.9',
                    offer: 20,
                    image: 'https://images.bewakoof.com/t640/men-s-grey-paisley-printed-slim-fit-shirt-595878-1686059472-1.jpg'
                },
                {
                    id: 42,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '3.3',
                    offer: 20,
                    image: 'https://images.bewakoof.com/t640/men-s-blue-paisley-printed-slim-fit-shirt-595877-1686057059-1.jpg'
                },
                {
                    id: 43,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '1.9',
                    offer: 20,
                    image: 'https://images.bewakoof.com/t640/men-s-green-slim-fit-shirt-595774-1686059402-1.jpg'
                },
                {
                    id: 44,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '2.6',
                    offer: 20,
                    image: 'https://images.bewakoof.com/t640/men-s-white-striped-slim-fit-shirt-595871-1686055781-1.jpg'
                },
                {
                    id: 45,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '1.2',
                    offer: 20,
                    image: 'https://images.bewakoof.com/t640/men-s-blue-slim-fit-shirt-595773-1686057335-1.jpg'
                },
                {
                    id: 46,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '2.9',
                    offer: 20,
                    image: 'https://images.bewakoof.com/t640/men-s-blue-striped-slim-fit-shirt-595870-1686059943-1.jpg'
                },
                {
                    id: 47,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '3.0',
                    offer: 20,
                    image: 'https://images.bewakoof.com/t640/men-s-blue-slim-fit-shirt-595869-1686057411-1.jpg'
                },
                {
                    id: 48,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '3.2',
                    offer: 20,
                    image: 'https://images.bewakoof.com/t640/men-s-olive-green-shirt-597359-1687273744-1.jpg'
                },
                {
                    id: 49,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '2.8',
                    offer: 20,
                    image: 'https://images.bewakoof.com/t640/men-s-blue-checked-slim-fit-shirt-595808-1686059434-1.jpg'
                },
                {
                    id: 50,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '4.8',
                    offer: 20,
                    image: 'https://images.bewakoof.com/t640/men-s-brown-checked-shirt-597354-1687274118-1.jpg'
                },
                {
                    id: 51,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '1.8',
                    offer: 20,
                    image: 'https://images.bewakoof.com/t640/men-s-black-slim-fit-shirt-595915-1686056062-1.jpg'
                },
                {
                    id: 52,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt',                   
                    price: 5000,
                    originalprice: 2999,
                    rating: '2.1',
                    offer: 20,
                    cart: '',
                    image: 'https://images.bewakoof.com/t640/men-s-white-all-over-paisley-printed-shirt-594692-1685344457-1.jpg'
                },
                {
                    id: 53,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 1999,
                    rating: '4.8',
                    offer: 20,
                    image: 'https://images.bewakoof.com/t640/men-s-blue-all-over-floral-printed-shirt-594691-1685344611-1.jpg'
                },
                {
                    id: 54,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '1.8',
                    offer: 20,
                    image: 'https://images.bewakoof.com/t640/men-s-black-slim-fit-shirt-595295-1685457011-1.jpg'
                },
                {
                    id: 55,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '2.8',
                    offer: 20,
                    image: 'https://images.bewakoof.com/t640/men-s-maroon-striped-shirt-596698-1686843758-1.jpg'
                },
                {
                    id: 56,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '3.8',
                    offer: 20,
                    image: 'https://images.bewakoof.com/t640/men-s-blue-checked-shirt-596679-1686843857-1.jpg'
                },
                {
                    id: 57,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '1.8',
                    offer: 20,
                    image: 'https://images.bewakoof.com/t640/men-s-olive-green-shirt-596672-1686843022-1.jpg'
                },
                {
                    id: 58,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '2.9',
                    offer: 20,
                    image: 'https://images.bewakoof.com/t640/men-s-blue-floral-print-shirt-602290-1687866823-1.jpg'
                },
                {
                    id: 59,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '3.3',
                    offer: 20,
                    image: 'https://images.bewakoof.com/t640/men-s-pink-striped-shirt-597374-1687274253-1.jpg'
                },
                {
                    id: 5,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '1.9',
                    offer: 20,
                    image: 'https://images.bewakoof.com/t640/men-s-multicolor-marble-print-shirt-602286-1687866753-1.jpg'
                },
            ]
        }
    }


    render() {
        return(
            <>
                <div className="varients">
                    {this.state.clothsList.map((list) => (
                        <div className="tshirt-list" key={list.id}>
                                <img src={list.image} className="product-img" alt="profile"></img>
                            <div className="info">
                                <div className="brand-name">{list.name}</div>
                                <div className="offer-token">{list.offer}% off</div>
                                <div className="cart">{list.cart}<i class="fa fa-heart-o" aria-hidden="true"></i></div>
                                <p className="description">{list.discription}</p>
                                <p className="description">{list.subdiscription}</p>
                                <p className="price"><span className="rupee-color">₹</span>{list.price}<span className="del-price"><del>₹{list.originalprice}</del></span></p>
                                <p className="product-rating">{list.rating}<i class="fa fa-star" aria-hidden="true"></i></p>
                             </div>
                        </div>
                    ))}
                </div>
            </>
        )
    }
}

export default Listrender