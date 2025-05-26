const alphabet = "abcdefghijklmnopqrstuvwxyz";

function encrypt (message, shiftValue)
{
    let encryptedMessage = "";
    for (let i = 0; i < message.length; i++)
    {
      encryptedMessage += encryptLetter(message[i], shiftValue);
    }
  // Your encryption code here
  return encryptedMessage;
}

function decrypt (encryptedMessage, shiftValue)
{
    let decryptedMessage = "";
  for (let i = 0; i < encryptedMessage.length; i++)
  {
    decryptedMessage += decryptLetter(encryptedMessage[i], shiftValue);
  }
  return decryptedMessage;
  // Your decryption code here
  return decryptedMessage;
}
//step 1 Take a plaintext message and a shift value and return an encrypted string. 
//If the message includes a character out of the alphabet, pass it as is to the encrypted string.
let shiftValue = 42
let encryptedText = ""
if (currentLetterIndex !== -1) {
    // Encrypt only if the character is in the alphabet
    //a nice fix from Rita on slack 
        } else {
    encryptesResponse += currentLetter;
        }


       // const alphabet = 'abcdefghijklmnopqrstuvwxyz'
function encryptText(rawText,shiftValue){
    
    //my mentor showed me this as an example that i worked from
    let encryptesResponse=''
    let totalNumberOfLetters = rawText.length;
    for(let i=0; i<totalNumberOfLetters;i++){
        //const updatedIndex = (currentLetterIndex + shiftValue) % alphabet.length;
        let currentLetter = rawText[i];
        let currentLetterIndex = alphabet.indexOf(currentLetter.toLowerCase());
        //let currentLetterIndex = alphabet.indexOf(currentLetter);
        let updatedIndex = (currentLetterIndex + (shiftValue % alphabet.length)) % alphabet.length;//help in slack from Rita
        //let updatedIndex = (currentLetterIndex + shiftValue) % alphabet.length;
        encryptesResponse +=alphabet[updatedIndex];
        if (currentLetterIndex !== -1) {
    // Encrypt only if the character is in the alphabet
    //a nice fix from Rita on slack 
        } else {
    encryptesResponse += currentLetter;
        }
    }
    return encryptesResponse
  console.log(encryptesResponse);
}
encryptText('Iueuan jrxuq cjythdykwxaj mixkqtaeml ebv wHenckvbkei rqdmt fHukckvi.r Jbxuihus, tmxayiwfuxh sjxau amenhtv "zQkhhuubyjkit" yjew jhxux mxydatij. zJxmu hvymhihj ajel kldlsuyjb dyju yid uekdh qIbkqsxa xsxqqdvduzb wuqzhdoi qjxwu waueo xjem jfxuy dpuntj dgkvuiwj.', 42)
function decrypt(encryptesResponse, shiftValue){
let decryptResponse=''
for(let i=0; i<3; i++){
   // console.log(i);
   // console.log(name[i]);
   let currentLetter = encryptText[i]
   let currentIndex = alphabet.indexOf(currentLetter)
   let updatedIndex = currentIndex-shiftValue
   let updatedLetter = alphabet[updatedIndex]
   decryptText += updatedLetter

    console.log(decryptResponse);

}
}