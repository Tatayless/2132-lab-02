class LegacyTextProcessor {
    processLegacyText(text: { [keys: string]: string }): string {
        return JSON.stringify(text);
    }
}
    
class NewProcessorAdapter {
    newProcessor: NewProcessor
    legacyProcessor: LegacyTextProcessor

    constructor(legacyProcessor: LegacyTextProcessor, newProcessor: NewProcessor) {
        this.legacyProcessor = legacyProcessor;
        this.newProcessor = newProcessor;
    }

    transfer(msg: { [keys: string]: string }) {
        const adaptedMsg = this.legacyProcessor.processLegacyText(msg);
        this.newProcessor.perform(adaptedMsg);
    }
}

class NewProcessor {
    perform(msg: string) {
        const parsedMessage: { [keys: string]: string } = JSON.parse(msg);
        console.log(`New Text:`, parsedMessage)
    }
}

const jsonPayload: { [keys: string]: string } = { 
    "promo_code": "LOAD", 
    "promo_number": "123", 
    "originating_number": "9181234568", 
    "destination_number": "9189876543", 
    "date": "10012023" 
};

const legacyProcessor = new LegacyTextProcessor();
const newProcessor = new NewProcessor();
const adapter = new NewProcessorAdapter(legacyProcessor, newProcessor);
adapter.transfer(jsonPayload);

