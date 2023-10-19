import {
  TextProcessor,
  LegacyTextProcessor,
  NewTextProcessor,
} from "./TextProcessor";
import { CaesarCipher } from "./DecoratorCipher";

class TextProcessorEncryptor implements TextProcessor {
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

class TextProcessorDecryptor implements TextProcessor {
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

const encryptor = new TextProcessorEncryptor(new NewTextProcessor());
const decryptor = new TextProcessorDecryptor(new NewTextProcessor());
const textData = {
  promo_code: "ABC123",
  promo_number: "9876543210",
  originating_number: "1234567890",
  destination_number: "0987654321",
  date: "20231019",
};
let newEncryptedText: { [key: string]: string } = encryptor.processText(textData);
console.log(newEncryptedText);
console.log(decryptor.processText(newEncryptedText));

