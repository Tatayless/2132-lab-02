import { LegacyTextProcessor } from "./LegacyTextProcessor";
import { NewTextProcessor } from "./NewTextProcessor";

export class TextProcessorAdapter {
  legacyTextProcessor: LegacyTextProcessor;
  newTextProcessor: NewTextProcessor;

  constructor(
    legacyTextProcessor: LegacyTextProcessor,
    newTextProcessor: NewTextProcessor
  ) {
    this.legacyTextProcessor = legacyTextProcessor;
    this.newTextProcessor = newTextProcessor;
  }

  transfer(text: string) {
    const legacyTextOrNull = this.legacyTextProcessor.processLegacyText(text);
    let legacyText: string[];

    if (legacyTextOrNull === null) {
      legacyText = [];
    } else {
      legacyText = legacyTextOrNull;
    }

    let formattedData: { [keys: string]: string } = {
      promo_code: "",
      promo_number: "",
      originating_number: "",
      destination_number: "",
      date: "",
    };

    for (let value = 0; value < legacyText.length; value++) {
      const keys: string[] = Object.keys(formattedData);
      formattedData[keys[value]] = legacyText[value];
    }
    this.newTextProcessor.processNewText(formattedData);
  }
}
