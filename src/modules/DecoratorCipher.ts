export class CaesarCipher {
  private static readonly ALPHABET =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  private static readonly SHIFT = 3;

  public static encrypt(text: string): string {
    let result = "";
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      const index = CaesarCipher.ALPHABET.indexOf(char);
      if (index !== -1) {
        const newIndex =
          (index + CaesarCipher.SHIFT) % CaesarCipher.ALPHABET.length;
        result += CaesarCipher.ALPHABET[newIndex];
      } else {
        result += char;
      }
    }
    return result;
  }

  public static decrypt(encryptedText: string): string {
    let result = "";
    for (let i = 0; i < encryptedText.length; i++) {
      const char = encryptedText[i];
      const index = CaesarCipher.ALPHABET.indexOf(char);
      if (index !== -1) {
        const newIndex =
          (index - CaesarCipher.SHIFT + CaesarCipher.ALPHABET.length) %
          CaesarCipher.ALPHABET.length;
        result += CaesarCipher.ALPHABET[newIndex];
      } else {
        result += char;
      }
    }
    return result;
  }
}

// Example usage
const originalText = "Hello, World! 123";
const encryptedText = CaesarCipher.encrypt(originalText);
console.log("Encrypted: ", encryptedText);

const decryptedText = CaesarCipher.decrypt(encryptedText);
console.log("Decrypted: ", decryptedText);
