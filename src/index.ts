import { LegacyTextProcessor } from "./modules/TextProcessor";
import { NewTextProcessor } from "./modules/TextProcessor";
import { TextProcessorAdapter } from "./modules/TextProcessor";
import { TextProcessorEncryptor, TextProcessorDecryptor } from "./modules/TextProcessorDecorator";

const legacyText = `LOAD123|9181234568|9189876543|10012023`;
const newText = {
  promo_code: "LOAD",
  promo_number: "123",
  originating_number: "9181234568",
  destination_number: "9189876543",
  date: "10012023",
};

 // Usage
 const legacyProcessor = new LegacyTextProcessor();
 const newProcessor = new NewTextProcessor();
 const adapter = new TextProcessorAdapter();
 
 adapter.addProcessor(legacyProcessor);
 adapter.addProcessor(newProcessor);
 
adapter.processText(legacyText);
adapter.processText(newText);
 
const encryptor = new TextProcessorEncryptor(new NewTextProcessor());
const decryptor = new TextProcessorDecryptor(new NewTextProcessor());
let newEncryptedText: { [key: string]: string } = encryptor.processText(newText);
console.log(newEncryptedText);
console.log(decryptor.processText(newEncryptedText));