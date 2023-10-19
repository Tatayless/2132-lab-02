import {
  TextProcessor,
  LegacyTextProcessor,
  NewTextProcessor,
} from "./TextProcessor";
import { CaesarCipher } from "./DecoratorCipher";

export class TextProcessorEncryptor implements TextProcessor {
  private processor: TextProcessor;

  constructor(processor: TextProcessor) {
    this.processor = processor;
  }

  processText(text: { [key: string]: string }) {
    this.processor.processText(text);

    if (text === undefined) {
      text = {};
      return text;
    } else {
      Object.entries(text).forEach(([key, value]) => {
        text[key] = CaesarCipher.encrypt(value);
      });
      return text;
    }
  }
}

export class TextProcessorDecryptor implements TextProcessor {
  private processor: TextProcessor;

  constructor(processor: TextProcessor) {
    this.processor = processor;
  }

  processText(text: { [key: string]: string }): { [key: string]: string } {
    this.processor.processText(text);

    if (text === undefined) {
      text = {};
      return text;
    } else {
      Object.entries(text).forEach(([key, value]) => {
        text[key] = CaesarCipher.decrypt(value);
      });
      return text;
    }
  }
}



