import CandlestickFinder from './CandlestickFinder';
export default class BullishHarami extends CandlestickFinder {
    constructor() {
        super();
        this.requiredCount = 2;
        this.name = "BullishHarami";
    }
    logic(data) {
        let firstdaysOpen = data.open[0];
        let firstdaysClose = data.close[0];
        let firstdaysHigh = data.high[0];
        let firstdaysLow = data.low[0];
        let seconddaysOpen = data.open[1];
        let seconddaysClose = data.close[1];
        let seconddaysHigh = data.high[1];
        let seconddaysLow = data.low[1];
        let isBullishHaramiPattern = ((firstdaysOpen > seconddaysOpen) &&
            (firstdaysClose <= seconddaysOpen) &&
            (firstdaysClose < seconddaysClose) &&
            (firstdaysOpen > seconddaysLow) &&
            (firstdaysHigh > seconddaysHigh));
        return (isBullishHaramiPattern);
    }
}
export function bullishharami(data) {
    return new BullishHarami().hasPattern(data);
}
