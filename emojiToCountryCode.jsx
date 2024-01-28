const emojiToCountryCode = {
  "🇦🇫": "af", // Afghanistan
  "🇦🇱": "al", // Albania
  "🇩🇿": "dz", // Algeria
  "🇦🇩": "ad", // Andorra
  "🇦🇴": "ao", // Angola
  "🇦🇬": "ag", // Antigua and Barbuda
  "🇦🇷": "ar", // Argentina
  "🇦🇲": "am", // Armenia
  "🇦🇼": "aw", // Aruba
  "🇦🇺": "au", // Australia
  "🇦🇹": "at", // Austria
  "🇦🇿": "az", // Azerbaijan
  "🇧🇸": "bs", // Bahamas
  "🇧🇭": "bh", // Bahrain
  "🇧🇩": "bd", // Bangladesh
  "🇧🇧": "bb", // Barbados
  "🇧🇾": "by", // Belarus
  "🇧🇪": "be", // Belgium
  "🇧🇿": "bz", // Belize
  "🇧🇯": "bj", // Benin
  "🇧🇲": "bm", // Bermuda
  "🇧🇹": "bt", // Bhutan
  "🇧🇴": "bo", // Bolivia
  "🇧🇦": "ba", // Bosnia and Herzegovina
  "🇧🇼": "bw", // Botswana
  "🇧🇷": "br", // Brazil
  "🇧🇳": "bn", // Brunei Darussalam
  "🇧🇬": "bg", // Bulgaria
  "🇧🇫": "bf", // Burkina Faso
  "🇧🇮": "bi", // Burundi
  "🇰🇭": "kh", // Cambodia
  "🇨🇲": "cm", // Cameroon
  "🇨🇦": "ca", // Canada
  "🇨🇻": "cv", // Cape Verde
  "🇰🇾": "ky", // Cayman Islands
  "🇨🇫": "cf", // Central African Republic
  "🇹🇩": "td", // Chad
  "🇨🇱": "cl", // Chile
  "🇨🇳": "cn", // China
  "🇨🇴": "co", // Colombia
  "🇰🇲": "km", // Comoros
  "🇨🇩": "cd", // Congo (Kinshasa)
  "🇨🇬": "cg", // Congo (Brazzaville)
  "🇨🇷": "cr", // Costa Rica
  "🇭🇷": "hr", // Croatia
  "🇨🇺": "cu", // Cuba
  "🇨🇾": "cy", // Cyprus
  "🇨🇿": "cz", // Czech Republic
  "🇩🇰": "dk", // Denmark
  "🇩🇯": "dj", // Djibouti
  "🇩🇲": "dm", // Dominica
  "🇩🇴": "do", // Dominican Republic
  "🇪🇨": "ec", // Ecuador
  "🇪🇬": "eg", // Egypt
  "🇸🇻": "sv", // El Salvador
  "🇬🇶": "gq", // Equatorial Guinea
  "🇪🇷": "er", // Eritrea
  "🇪🇪": "ee", // Estonia
  "🇪🇹": "et", // Ethiopia
  "🇫🇴": "fo", // Faroe Islands
  "🇫🇯": "fj", // Fiji
  "🇫🇮": "fi", // Finland
  "🇫🇷": "fr", // France
  "🇵🇫": "pf", // French Polynesia
  "🇬🇦": "ga", // Gabon
  "🇬🇲": "gm", // Gambia
  "🇬🇪": "ge", // Georgia
  "🇩🇪": "de", // Germany
  "🇬🇭": "gh", // Ghana
  "🇬🇮": "gi", // Gibraltar
  "🇬🇷": "gr", // Greece
  "🇬🇱": "gl", // Greenland
  "🇬🇩": "gd", // Grenada
  "🇬🇺": "gu", // Guam
  "🇬🇹": "gt", // Guatemala
  "🇬🇳": "gn", // Guinea
  "🇬🇼": "gw", // Guinea-Bissau
  "🇬🇾": "gy", // Guyana
  "🇭🇹": "ht", // Haiti
  "🇭🇳": "hn", // Honduras
  "🇭🇰": "hk", // Hong Kong
  "🇭🇺": "hu", // Hungary
  "🇮🇸": "is", // Iceland
  "🇮🇳": "in", // India
  "🇮🇩": "id", // Indonesia
  "🇮🇷": "ir", // Iran
  "🇮🇶": "iq", // Iraq
  "🇮🇪": "ie", // Ireland
  "🇮🇲": "im", // Isle of Man
  "🇮🇱": "il", // Israel
  "🇮🇹": "it", // Italy
  "🇨🇮": "ci", // Ivory Coast
  "🇯🇲": "jm", // Jamaica
  "🇯🇵": "jp", // Japan
  "🇯🇪": "je", // Jersey
  "🇯🇴": "jo", // Jordan
  "🇰🇿": "kz", // Kazakhstan
  "🇰🇪": "ke", // Kenya
  "🇰🇮": "ki", // Kiribati
  "🇽🇰": "xk", // Kosovo
  "🇰🇼": "kw", // Kuwait
  "🇰🇬": "kg", // Kyrgyzstan
  "🇱🇦": "la", // Laos
  "🇱🇻": "lv", // Latvia
  "🇱🇧": "lb", // Lebanon
  "🇱🇸": "ls", // Lesotho
  "🇱🇷": "lr", // Liberia
  "🇱🇾": "ly", // Libya
  "🇱🇮": "li", // Liechtenstein
  "🇱🇹": "lt", // Lithuania
  "🇱🇺": "lu", // Luxembourg
  "🇲🇴": "mo", // Macau
  "🇲🇬": "mg", // Madagascar
  "🇲🇼": "mw", // Malawi
  "🇲🇾": "my", // Malaysia
  "🇲🇻": "mv", // Maldives
  "🇲🇱": "ml", // Mali
  "🇲🇹": "mt", // Malta
  "🇲🇭": "mh", // Marshall Islands
  "🇲🇷": "mr", // Mauritania
  "🇲🇺": "mu", // Mauritius
  "🇾🇹": "yt", // Mayotte
  "🇲🇽": "mx", // Mexico
  "🇫🇲": "fm", // Micronesia
  "🇲🇩": "md", // Moldova
  "🇲🇨": "mc", // Monaco
  "🇲🇳": "mn", // Mongolia
  "🇲🇪": "me", // Montenegro
  "🇲🇸": "ms", // Montserrat
  "🇲🇦": "ma", // Morocco
  "🇲🇿": "mz", // Mozambique
  "🇲🇲": "mm", // Myanmar
  "🇳🇦": "na", // Namibia
  "🇳🇷": "nr", // Nauru
  "🇳🇵": "np", // Nepal
  "🇳🇱": "nl", // Netherlands
  "🇳🇨": "nc", // New Caledonia
  "🇳🇿": "nz", // New Zealand
  "🇳🇮": "ni", // Nicaragua
  "🇳🇪": "ne", // Niger
  "🇳🇬": "ng", // Nigeria
  "🇳🇺": "nu", // Niue
  "🇳🇫": "nf", // Norfolk Island
  "🇰🇵": "kp", // North Korea
  "🇲🇰": "mk", // North Macedonia
  "🇳🇴": "no", // Norway
  "🇴🇲": "om", // Oman
  "🇵🇰": "pk", // Pakistan
  "🇵🇼": "pw", // Palau
  "🇵🇸": "ps", // Palestine
  "🇵🇦": "pa", // Panama
  "🇵🇬": "pg", // Papua New Guinea
  "🇵🇾": "py", // Paraguay
  "🇵🇪": "pe", // Peru
  "🇵🇭": "ph", // Philippines
  "🇵🇳": "pn", // Pitcairn Islands
  "🇵🇱": "pl", // Poland
  "🇵🇹": "pt", // Portugal
  "🇵🇷": "pr", // Puerto Rico
  "🇶🇦": "qa", // Qatar
  "🇷🇪": "re", // Réunion
  "🇷🇴": "ro", // Romania
  "🇷🇺": "ru", // Russia
  "🇷🇼": "rw", // Rwanda
  "🇼🇸": "ws", // Samoa
  "🇸🇲": "sm", // San Marino
  "🇸🇹": "st", // São Tomé and Príncipe
  "🇸🇦": "sa", // Saudi Arabia
  "🇸🇳": "sn", // Senegal
  "🇷🇸": "rs", // Serbia
  "🇸🇨": "sc", // Seychelles
  "🇸🇱": "sl", // Sierra Leone
  "🇸🇬": "sg", // Singapore
  "🇸🇽": "sx", // Sint Maarten
  "🇸🇰": "sk", // Slovakia
  "🇸🇮": "si", // Slovenia
  "🇸🇧": "sb", // Solomon Islands
  "🇸🇴": "so", // Somalia
  "🇿🇦": "za", // South Africa
  "🇬🇸": "gs", // South Georgia & South Sandwich Islands
  "🇰🇷": "kr", // South Korea
  "🇸🇸": "ss", // South Sudan
  "🇪🇸": "es", // Spain
  "🇱🇰": "lk", // Sri Lanka
  "🇸🇩": "sd", // Sudan
  "🇸🇷": "sr", // Suriname
  "🇸🇯": "sj", // Svalbard and Jan Mayen
  "🇸🇿": "sz", // Eswatini
  "🇸🇪": "se", // Sweden
  "🇨🇭": "ch", // Switzerland
  "🇸🇾": "sy", // Syria
  "🇹🇼": "tw", // Taiwan
  "🇹🇯": "tj", // Tajikistan
  "🇹🇿": "tz", // Tanzania
  "🇹🇭": "th", // Thailand
  "🇹🇱": "tl", // Timor-Leste
  "🇹🇬": "tg", // Togo
  "🇹🇰": "tk", // Tokelau
  "🇹🇴": "to", // Tonga
  "🇹🇹": "tt", // Trinidad and Tobago
  "🇹🇳": "tn", // Tunisia
  "🇹🇷": "tr", // Turkey
  "🇹🇲": "tm", // Turkmenistan
  "🇹🇨": "tc", // Turks and Caicos Islands
  "🇹🇻": "tv", // Tuvalu
  "🇺🇬": "ug", // Uganda
  "🇺🇦": "ua", // Ukraine
  "🇦🇪": "ae", // United Arab Emirates
  "🇬🇧": "gb", // United Kingdom
  "🇺🇸": "us", // United States
  "🇺🇾": "uy", // Uruguay
  "🇺🇿": "uz", // Uzbekistan
  "🇻🇺": "vu", // Vanuatu
  "🇻🇦": "va", // Vatican City
  "🇻🇪": "ve", // Venezuela
  "🇻🇳": "vn", // Vietnam
  "🇻🇮": "vi", // U.S. Virgin Islands
  "🇼🇫": "wf", // Wallis & Futuna
  "🇪🇭": "eh", // Western Sahara
  "🇾🇪": "ye", // Yemen
  "🇿🇲": "zm", // Zambia
  "🇿🇼": "zw", // Zimbabwe
};

export default emojiToCountryCode;
