export class NewTextProcessor {
  processNewText(text: { [key: string]: string }) {
    const formattedData: { [key: string]: string } = {
      promo_code: "",
      promo_number: "",
      originating_number: "",
      destination_number: "",
      date: "",
    };

    for (const key of Object.keys(text)) {
      formattedData[key] = text[key];
    }

    Object.entries(text).forEach(([key, value]) => {
      console.log(`${key}: ${value}`);
    });
  }
}
