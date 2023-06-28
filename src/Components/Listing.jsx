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
                    price: 5000,
                    originalprice: 2999,
                    rating: '2.1',
                    offer: 20,
                    cart: '',
                    image: 'https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/d/6/b/-original-imaggcq8d2a4ryk7.jpeg?q=70'
                },
                {
                    id: 2,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 1999,
                    rating: '4.8',
                    offer: 20,
                    image: 'https://rukminim1.flixcart.com/image/612/612/l4vnbm80/t-shirt/c/e/q/m-askporgfp82490-new-allen-solly-original-imagfzk7h3zccp4k.jpeg?q=70'
                },
                {
                    id: 3,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '1.8',
                    offer: 20,
                    image: 'https://rukminim1.flixcart.com/image/612/612/l3j2cnk0/t-shirt/2/w/p/l-723-2-5-7-8-ftx-original-imagemgrpafdug8v.jpeg?q=70'
                },
                {
                    id: 4,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '2.8',
                    offer: 20,
                    image: 'https://rukminim1.flixcart.com/image/612/612/kkh6zrk0/t-shirt/w/j/n/m-t344hs-whsb-new-eyebogler-original-imafztgjdpkvr8ab.jpeg?q=70'
                },
                {
                    id: 5,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '3.8',
                    offer: 20,
                    image: 'https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/t/e/0/l-st-theboys-black-smartees-original-imagnqszzzzyuzru.jpeg?q=70'
                },
                {
                    id: 5,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '1.8',
                    offer: 20,
                    image: 'https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/i/5/h/s-bg23tsssbk4085-bglore-original-imagn9xczghahg6y.jpeg?q=70'
                },
                {
                    id: 5,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '2.9',
                    offer: 20,
                    image: 'https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/l/h/x/s-ts12-vebnor-original-imagm6zvj4wrmyng.jpeg?q=70'
                },
                {
                    id: 5,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '3.3',
                    offer: 20,
                    image: 'https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/b/r/g/s-cmb-po2-dab-wynk-smartees-original-imagm5vhumtz8epz.jpeg?q=70'
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
                    image: 'https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/o/w/p/s-dddl-blkk-jam-veirdo-original-imaghenyxmsghs4u.jpeg?q=70'
                },
                {
                    id: 5,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '2.6',
                    offer: 20,
                    image: 'https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/1/v/a/-original-imagmf6weawvkkrg.jpeg?q=70'
                },
                {
                    id: 5,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '1.2',
                    offer: 20,
                    image: 'https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/9/w/d/s-ts9-vebnor-original-imagztfphtggssry.jpeg?q=70'
                },
                {
                    id: 5,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '2.9',
                    offer: 20,
                    image: 'https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/m/e/2/m-558399-bewakoof-original-imagz4r5gwnjxgxg.jpeg?q=70'
                },
                {
                    id: 5,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '3.0',
                    offer: 20,
                    image: 'https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/i/b/g/s-half-triangel-black-one-nb-nicky-boy-original-imagmhzyv6b64vfb.jpeg?q=70'
                },
                {
                    id: 5,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '3.2',
                    offer: 20,
                    image: 'https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/b/0/v/l-tbgrrn-d45-tripr-original-imagza9znc7nhfhj.jpeg?q=70'
                },
                {
                    id: 5,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '2.8',
                    offer: 20,
                    image: 'https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/h/l/h/xl-atkpcurgfx68063-allen-solly-original-imagnfuygt29mhdh.jpeg?q=70'
                },
                {
                    id: 5,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '4.8',
                    offer: 20,
                    image: 'https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/y/0/5/s-bmrhenful-z14-blive-original-imaghau6cw8g3gjy.jpeg?q=70'
                },
                {
                    id: 5,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '1.8',
                    offer: 20,
                    image: 'https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/s/c/s/s-gt-4-dyrectdeals-original-imagmg9x3wackb7a.jpeg?q=70'
                },
                {
                    id: 5,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '2.8',
                    offer: 20,
                    image: 'https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/y/t/k/xxs-t653-cgblwh-eyebogler-original-imaghyjv7kppbqxb.jpeg?q=70'
                },
                {
                    id: 5,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '4.8',
                    offer: 20,
                    image: 'https://rukminim1.flixcart.com/image/612/612/kxaq7ww0/t-shirt/m/b/v/m-dbmst-try-this-original-imag9rk6mztquknz.jpeg?q=70'
                },
                {
                    id: 5,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '3.8',
                    offer: 20,
                    image: 'https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/s/k/x/xl-ts12-vebnor-original-imagppbxjkdhyghw.jpeg?q=70'
                },
                {
                    id: 5,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '1.8',
                    offer: 20,
                    image: 'https://rukminim1.flixcart.com/image/612/612/l31x2fk0/t-shirt/w/x/h/m-hmd-1057black-helmont-original-image92fpxqsncuu.jpeg?q=70'
                },
                {
                    id: 5,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '4.8',
                    offer: 20,
                    image: 'https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/x/2/q/s-or17-technosport-original-imagkx8wrb7k3puc.jpeg?q=70'
                },
                {
                    id: 5,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '2.8',
                    offer: 20,
                    image: 'https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/s/c/p/m-db1024-15-3bros-original-imagz8zjfxthf7kn.jpeg?q=70'
                },
                {
                    id: 5,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '3.2',
                    offer: 20,
                    image: 'https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/b/0/v/l-tbgrrn-d45-tripr-original-imagza9znc7nhfhj.jpeg?q=70'
                },
                {
                    id: 5,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '2.8',
                    offer: 20,
                    image: 'https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/h/l/h/xl-atkpcurgfx68063-allen-solly-original-imagnfuygt29mhdh.jpeg?q=70'
                },
                {
                    id: 5,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '4.8',
                    offer: 20,
                    image: 'https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/y/0/5/s-bmrhenful-z14-blive-original-imaghau6cw8g3gjy.jpeg?q=70'
                },
                {
                    id: 5,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '1.8',
                    offer: 20,
                    image: 'https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/s/c/s/s-gt-4-dyrectdeals-original-imagmg9x3wackb7a.jpeg?q=70'
                },
                {
                    id: 5,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '2.8',
                    offer: 20,
                    image: 'https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/y/t/k/xxs-t653-cgblwh-eyebogler-original-imaghyjv7kppbqxb.jpeg?q=70'
                },
                {
                    id: 5,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '4.8',
                    offer: 20,
                    image: 'https://rukminim1.flixcart.com/image/612/612/kxaq7ww0/t-shirt/m/b/v/m-dbmst-try-this-original-imag9rk6mztquknz.jpeg?q=70'
                },
                {
                    id: 5,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '2.9',
                    offer: 20,
                    image: 'https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/l/h/x/s-ts12-vebnor-original-imagm6zvj4wrmyng.jpeg?q=70'
                },
                {
                    id: 5,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '3.3',
                    offer: 20,
                    image: 'https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/b/r/g/s-cmb-po2-dab-wynk-smartees-original-imagm5vhumtz8epz.jpeg?q=70'
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
                    image: 'https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/o/w/p/s-dddl-blkk-jam-veirdo-original-imaghenyxmsghs4u.jpeg?q=70'
                },
                {
                    id: 5,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '2.6',
                    offer: 20,
                    image: 'https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/1/v/a/-original-imagmf6weawvkkrg.jpeg?q=70'
                },
                {
                    id: 5,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '1.2',
                    offer: 20,
                    image: 'https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/9/w/d/s-ts9-vebnor-original-imagztfphtggssry.jpeg?q=70'
                },
                {
                    id: 5,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '2.9',
                    offer: 20,
                    image: 'https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/m/e/2/m-558399-bewakoof-original-imagz4r5gwnjxgxg.jpeg?q=70'
                },
                {
                    id: 5,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '3.0',
                    offer: 20,
                    image: 'https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/i/b/g/s-half-triangel-black-one-nb-nicky-boy-original-imagmhzyv6b64vfb.jpeg?q=70'
                },
                {
                    id: 5,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '3.2',
                    offer: 20,
                    image: 'https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/b/0/v/l-tbgrrn-d45-tripr-original-imagza9znc7nhfhj.jpeg?q=70'
                },
                {
                    id: 5,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '2.8',
                    offer: 20,
                    image: 'https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/s/c/p/m-db1024-15-3bros-original-imagz8zjfxthf7kn.jpeg?q=70'
                },
                {
                    id: 5,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '3.2',
                    offer: 20,
                    image: 'https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/b/0/v/l-tbgrrn-d45-tripr-original-imagza9znc7nhfhj.jpeg?q=70'
                },
                {
                    id: 5,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '2.8',
                    offer: 20,
                    image: 'https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/h/l/h/xl-atkpcurgfx68063-allen-solly-original-imagnfuygt29mhdh.jpeg?q=70'
                },
                {
                    id: 5,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '4.8',
                    offer: 20,
                    image: 'https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/y/0/5/s-bmrhenful-z14-blive-original-imaghau6cw8g3gjy.jpeg?q=70'
                },
                {
                    id: 5,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '1.8',
                    offer: 20,
                    image: 'https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/s/c/s/s-gt-4-dyrectdeals-original-imagmg9x3wackb7a.jpeg?q=70'
                },
                {
                    id: 5,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '2.8',
                    offer: 20,
                    image: 'https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/y/t/k/xxs-t653-cgblwh-eyebogler-original-imaghyjv7kppbqxb.jpeg?q=70'
                },
                {
                    id: 5,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '4.8',
                    offer: 20,
                    image: 'https://rukminim1.flixcart.com/image/612/612/kxaq7ww0/t-shirt/m/b/v/m-dbmst-try-this-original-imag9rk6mztquknz.jpeg?q=70'
                },
                {
                    id: 5,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '2.9',
                    offer: 20,
                    image: 'https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/l/h/x/s-ts12-vebnor-original-imagm6zvj4wrmyng.jpeg?q=70'
                },
                {
                    id: 5,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '3.3',
                    offer: 20,
                    image: 'https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/b/r/g/s-cmb-po2-dab-wynk-smartees-original-imagm5vhumtz8epz.jpeg?q=70'
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
                    image: 'https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/o/w/p/s-dddl-blkk-jam-veirdo-original-imaghenyxmsghs4u.jpeg?q=70'
                },
                {
                    id: 5,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '2.6',
                    offer: 20,
                    image: 'https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/1/v/a/-original-imagmf6weawvkkrg.jpeg?q=70'
                },
                {
                    id: 5,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '1.2',
                    offer: 20,
                    image: 'https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/9/w/d/s-ts9-vebnor-original-imagztfphtggssry.jpeg?q=70'
                },
                {
                    id: 5,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '2.9',
                    offer: 20,
                    image: 'https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/m/e/2/m-558399-bewakoof-original-imagz4r5gwnjxgxg.jpeg?q=70'
                },
                {
                    id: 5,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '3.0',
                    offer: 20,
                    image: 'https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/i/b/g/s-half-triangel-black-one-nb-nicky-boy-original-imagmhzyv6b64vfb.jpeg?q=70'
                },
                {
                    id: 5,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '3.2',
                    offer: 20,
                    image: 'https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/b/0/v/l-tbgrrn-d45-tripr-original-imagza9znc7nhfhj.jpeg?q=70'
                },
                {
                    id: 3,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '1.8',
                    offer: 20,
                    image: 'https://rukminim1.flixcart.com/image/612/612/l3j2cnk0/t-shirt/2/w/p/l-723-2-5-7-8-ftx-original-imagemgrpafdug8v.jpeg?q=70'
                },
                {
                    id: 4,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '2.8',
                    offer: 20,
                    image: 'https://rukminim1.flixcart.com/image/612/612/kkh6zrk0/t-shirt/w/j/n/m-t344hs-whsb-new-eyebogler-original-imafztgjdpkvr8ab.jpeg?q=70'
                },
                {
                    id: 5,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '3.8',
                    offer: 20,
                    image: 'https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/t/e/0/l-st-theboys-black-smartees-original-imagnqszzzzyuzru.jpeg?q=70'
                },
                {
                    id: 5,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '1.8',
                    offer: 20,
                    image: 'https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/i/5/h/s-bg23tsssbk4085-bglore-original-imagn9xczghahg6y.jpeg?q=70'
                },
                {
                    id: 5,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '2.9',
                    offer: 20,
                    image: 'https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/l/h/x/s-ts12-vebnor-original-imagm6zvj4wrmyng.jpeg?q=70'
                },
                {
                    id: 5,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '3.3',
                    offer: 20,
                    image: 'https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/b/r/g/s-cmb-po2-dab-wynk-smartees-original-imagm5vhumtz8epz.jpeg?q=70'
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
                    image: 'https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/o/w/p/s-dddl-blkk-jam-veirdo-original-imaghenyxmsghs4u.jpeg?q=70'
                },
                {
                    id: 5,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '2.6',
                    offer: 20,
                    image: 'https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/1/v/a/-original-imagmf6weawvkkrg.jpeg?q=70'
                },
                {
                    id: 5,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '1.2',
                    offer: 20,
                    image: 'https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/9/w/d/s-ts9-vebnor-original-imagztfphtggssry.jpeg?q=70'
                },
                {
                    id: 5,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '2.9',
                    offer: 20,
                    image: 'https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/m/e/2/m-558399-bewakoof-original-imagz4r5gwnjxgxg.jpeg?q=70'
                },
                {
                    id: 5,
                    name: 'U.S Polo Assn.',
                    discription: 'U.S Polo Assn. Dark Green',
                    subdiscription: 'Regular Fit Cotton Shirt', 
                    price: 5000,
                    originalprice: 2999,
                    rating: '3.0',
                    offer: 20,
                    image: 'https://rukminim1.flixcart.com/image/612/612/xif0q/t-shirt/i/b/g/s-half-triangel-black-one-nb-nicky-boy-original-imagmhzyv6b64vfb.jpeg?q=70'
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
                            {/* <div className="product-img"> */}
                                <img src={list.image} className="product-img" alt="profile"></img>
                            {/* </div> */}
                            <div className="info">
                                <div className="brand-name">{list.name}</div>
                                <div className="offer-token">{list.offer}% off</div>
                                <div className="cart">{list.cart}<i class="fa fa-heart-o" aria-hidden="true"></i></div>
                                <p className="description">{list.discription}</p>
                                <p className="description">{list.subdiscription}</p>
                                <p className="price">₹{list.price}<span><del>₹{list.originalprice}</del></span></p>
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