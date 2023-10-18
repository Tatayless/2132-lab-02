import { LegacyTextProcessor } from "./modules/LegacyTextProcessor";
import { NewTextProcessor } from "./modules/NewTextProcessor";
import { TextProcessorAdapter } from "./modules/TextAdapterProcessor";

const LOAD = `LOAD123|9181234568|9189876543|10012023`;
const jsonPayload = { 
    "promo_code": "LOAD", 
    "promo_number": "123", 
    "originating_number": "9181234568", 
    "destination_number": "9189876543", 
    "date": "10012023" 
}
    
const newProcessor = new NewTextProcessor();
const legacyProcessor = new LegacyTextProcessor();
const textAdapater = new TextProcessorAdapter(legacyProcessor, newProcessor);
console.log(textAdapater.transfer(LOAD));
console.log(newProcessor.processNewText(jsonPayload));

