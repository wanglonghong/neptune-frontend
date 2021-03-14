import {
  getNeptuneProfileAddress,
  getNeptuneRabbitsAddress,
  getBunnyFactoryAddress,
  getBunnySpecialAddress,
} from 'utils/addressHelpers'
import { getContract } from 'utils/web3'
import profileABI from 'config/abi/tuneProfile.json'
import tuneRabbitsAbi from 'config/abi/tuneRabbits.json'
import bunnyFactoryAbi from 'config/abi/bunnyFactory.json'
import bunnySpecialAbi from 'config/abi/bunnySpecial.json'

export const getProfileContract = () => {
  return getContract(profileABI, getNeptuneProfileAddress())
}

export const getPancakeRabbitContract = () => {
  return getContract(tuneRabbitsAbi, getNeptuneRabbitsAddress())
}

export const getBunnyFactoryContract = () => {
  return getContract(bunnyFactoryAbi, getBunnyFactoryAddress())
}

export const getBunnySpecialContract = () => {
  return getContract(bunnySpecialAbi, getBunnySpecialAddress())
}

export default null
