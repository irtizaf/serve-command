// // pages/index.tsx

// import { useState } from 'react';
// import { Input, Flex } from '@chakra-ui/react';

// const PhoneNumberFormatter = () => {
//   const [phoneNumber, setPhoneNumber] = useState('');

//   const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     let formattedNumber = e.target.value.replace(/[^0-9]/g, ''); // Remove non-numeric characters

//     if (formattedNumber.length > 0) {
//       formattedNumber = `+${formattedNumber.substring(0,1)}-${formattedNumber.substring(1, 4)}-${formattedNumber.substring(4,11)}`;
//     }

//     setPhoneNumber(formattedNumber);
//   };

//   return (
//     <Flex direction="column" align="center" justify="center" height="100vh">
//       <Input
//         type="tel"
//         placeholder="Enter phone number"
//         value={phoneNumber}
//         onChange={handlePhoneNumberChange}
//         mb={2}
//       />
//     </Flex>
//   );
// };

// export default PhoneNumberFormatter;

// ====================================


// pages/index.tsx



// pages/index.tsx


//============================




// import { useState } from 'react';
// import { Input, Flex, Text } from '@chakra-ui/react';

// const PhoneNumberFormatter = () => {
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [suggestedCountry, setSuggestedCountry] = useState<string | null>(null);

//   const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     let formattedNumber = e.target.value.replace(/[^0-9]/g, ''); // Remove non-numeric characters

//     // Suggest country based on the entered digits
//     const suggestedCountry = suggestCountry(formattedNumber);

//     if (formattedNumber.length > 0) {
//       formattedNumber = `+${formattedNumber.substring(0, 1)}-${formattedNumber.substring(1, 4)}-${formattedNumber.substring(4, 11)}`;
//     }

//     setPhoneNumber(formattedNumber);
//     setSuggestedCountry(suggestedCountry);
//   };

//   const suggestCountry = (input: string): string | null => {
//     // Define a list of predefined countries with their respective country codes
//     const countryList: { code: string; name: string }[] = [
//       { code: '1', name: 'United States' },
//       { code: '44', name: 'United Kingdom' },
//       // Add more countries as needed
//     ];

//     // Find the first matching country code
//     const suggestedCountry = countryList.find((country) => input.startsWith(country.code));

//     return suggestedCountry ? suggestedCountry.name : null;
//   };

//   return (
//     <Flex direction="column" align="center" justify="center" height="100vh">
//       <Input
//         type="tel"
//         placeholder="Enter phone number"
//         value={phoneNumber}
//         onChange={handlePhoneNumberChange}
//         mb={2}
//       />
//       {suggestedCountry && (
//         <Text mt={2} color="gray.500">
//           Suggested Country: {suggestedCountry}
//         </Text>
//       )}
//     </Flex>
//   );
// };

// export default PhoneNumberFormatter;

// ===============================



// pages/index.tsx

// import { useState } from 'react';
// import { Input, Flex } from '@chakra-ui/react';
// import PhoneInput from 'react-phone-number-input';
// import 'react-phone-number-input/style.css';

// const PhoneNumberFormatter = () => {
//   const [phoneNumber, setPhoneNumber] = useState('');

//   const handlePhoneNumberChange = (value: string) => {
//     setPhoneNumber(value);

    
//   };

//   return (
//     <Flex direction="column" align="center" justify="center" height="100vh">
//       <PhoneInput
//         placeholder="Enter phone number"
//         value={phoneNumber}
//         onChange={handlePhoneNumberChange}
//         defaultCountry="US" // Set a default country if needed
//         countries={['US', 'GB', 'CA', 'AU', 'PK']} // Add more countries as needed
//         inputStyle={{ width: '100%' }}
//         inputProps={{
//           autoComplete: 'off',
//         }}
//       />
//     </Flex>
//   );
// };

// export default PhoneNumberFormatter;


//==========================================


// pages/index.tsx

import { useState } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const PhoneNumberFormatter = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneNumberChange = (value: string) => {
    setPhoneNumber(value);

    if (value) {
      const parsedNumber = parsePhoneNumber(value);
      console.log('Parsed Number:', parsedNumber);
      // You can use the parsedNumber object as needed
    }
  };

  const parsePhoneNumber = (phoneNumber: string) => {
    const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();
    let parsedNumber;

    try {
      parsedNumber = phoneUtil.parse(phoneNumber, 'ZZ');
    } catch (e) {
      console.error('Error parsing phone number:', e);
    }

    return parsedNumber;
  };

  return (
    <Flex direction="column" align="center" justify="center" height="100vh">
      <PhoneInput
        placeholder="Enter phone number"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        defaultCountry="US" // Set a default country if needed
        countries={['US', 'GB', 'CA', 'AU', 'PK']} // Add more countries as needed
        inputStyle={{ width: '100%' }}
        inputProps={{
          autoComplete: 'off',
        }}
      />
    </Flex>
  );
};

export default PhoneNumberFormatter;

