// import { UPDATE_CURRENT_BENCH } from '../constants/action-types';
const item = {
  title: 'YEEZY BOOST 350 V2',
  price: 220,
  soldPrice: 500,
  image: 'https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/8/0/802390_01.jpg',
}
const item2 = {
  title: 'Air Jordan 3',
  price: 220,
  soldPrice: 500,
  image: 'https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/8/0/803111_01.jpg',
}

const item3 = {
  title: 'Air Jordan 1 Satin',
  price: 180,
  soldPrice: 1040,
  image: 'https://www.flightclub.com/media/catalog/product/cache/1/image/1600x1140/9df78eab33525d08d6e5fb8d27136e95/0/1/012567_1.jpg',
}

const item4 = {
  title: 'Supreme Baseball Jersey',
  price: 180,
  soldPrice: 400,
  image: 'http://d17ol771963kd3.cloudfront.net/147685/ma/aAIhUWxLnpI.jpg',
}

const items = [ item, item2, item3, item4 ];
const initialState = {
  items,
 };
// The Store listens for action cases
// This is where all state changing must be done.
export default function (state = initialState, action) {
  switch (action.type) {
    // case UPDATE_CURRENT_BENCH: {
    //   return {
    //     ...state,
    //     ...action.payload,
    //   };
    // }
    default: {
      return state;
    }
  }
}
