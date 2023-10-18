export class LegacyTextProcessor {
  processLegacyText(text: string) {
    const pattern =
      /^([A-Za-z]{4})(\d{3})\|(\d{10})\|(\d{10})\|(\d{2}\d{2}\d{4})$/;

    const matches = pattern.exec(text);

    if (matches) {
      const [
        ,
        promo_code,
        promo_number,
        originating_number,
        destination_number,
        date,
      ] = matches;

      return [
        promo_code,
        promo_number,
        originating_number,
        destination_number,
        date,
      ];
    } else {
      return null;
    }
  }
}
