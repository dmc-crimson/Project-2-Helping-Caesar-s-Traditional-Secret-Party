const alphabet = "abcdefghijklmnopqrstuvwxyz";

function decrypt (encryptedMessage, shiftValue)
{
  let decryptedMessage = '';

  for (i = 0; i < encryptedMessage.length; i++){
    if ( (i+1) % 3 != 0) { // ignore random insertions
      const char = encryptedMessage[i].toLowerCase();
      const idx = alphabet.indexOf(char);
      if (idx >= 0) {
          let newIdx = idx - shiftValue;
          while (newIdx < 0) newIdx += alphabet.length; // here is how you avoid negative indexes
          decryptedMessage += alphabet[newIdx % alphabet.length];
      } else {
        decryptedMessage += char;
      } 
    }
  }
  // Your decryption code here
  return decryptedMessage;
}

console.log(decrypt('Iueuan jrxuq cjythdykwxaj mixkqtaeml ebv wHenckvbkei rqdmt fHukckvi.r Jbxuihus, tmxayiwfuxh sjxau amenhtv "zQkhhuubyjkit" yjew jhxux mxydatij. zJxmu hvymhihj ajel kldlsuyjb dyju yid uekdh qIbkqsxa xsxqqdvduzb wuqzhdoi qjxwu waueo xjem jfxuy dpuntj dgkvuiwj.', 42));
