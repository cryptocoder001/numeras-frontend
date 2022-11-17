
import { ethers } from "ethers";
import {supportChainId, networks} from '../contracts/index';
import {useWeb3React} from '@web3-react/core';


/**
 * set delay for delayTimes
 * @param {Number} delayTimes - timePeriod for delay
 */
function delay(delayTimes) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(2);
        }, delayTimes);
    });
}

/**
 * change data type from Number to BigNum 
 * @param {Number} value - data that need to be change
 * @param {Number} d - decimals
 */
function toBigNum(value, d) {
    return ethers.utils.parseUnits(Number(value).toFixed(d), d);
}

/**
 * change data type from BigNum to Number
 * @param {Number} value - data that need to be change
 * @param {Number} d - decimals
 */
function fromBigNum(value, d) {
    return parseFloat(ethers.utils.formatUnits(value, d));
}

function checkProperties(obj) {
    for (var key in obj) {
        if (obj[key] == null || obj[key] === "")
            return false;
    }
    return true;
}



export { delay, toBigNum, fromBigNum, checkProperties };

export const isEmpty = (value) =>
  value === undefined ||
  value === null ||
  (typeof value === "object" && Object.keys(value).length === 0) ||
  (typeof value === "string" && value.trim().length === 0);

export const numberWithCommas = (x, digits = 3) => {
    if (isEmpty(x)) return '';
    return Number(x).toLocaleString(undefined, { maximumFractionDigits: digits });
}