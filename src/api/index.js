import { get } from './helpers'

const NODE_ENV = process.env.NODE_ENV

const getSeller =
  NODE_ENV !== 'production' ? get('api/seller') : get('data/seller.json')
const getGoods =
  NODE_ENV !== 'production' ? get('api/goods') : get('data/goods.json')
const getRatings =
  NODE_ENV !== 'production' ? get('api/ratings') : get('data/ratings.json')

export { getSeller, getGoods, getRatings }
