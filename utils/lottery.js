import { LotteryAddress, lotteryAbi } from './constants'
//Creating loteery contract

const createLotteryContract = web3 => {
  return new web3.eth.Contract(lotteryAbi, LotteryAddress)
}

export default createLotteryContract
