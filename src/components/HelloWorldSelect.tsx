"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Comprehensive data arrays
const countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",
  "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
  "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada",
  "Cape Verde", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia",
  "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt",
  "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia",
  "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti",
  "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy",
  "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "North Korea", "South Korea", "Kuwait", "Kyrgyzstan",
  "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia",
  "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico",
  "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru",
  "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palau",
  "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia",
  "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Saudi Arabia", "Senegal", "Serbia", "Seychelles",
  "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka",
  "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand",
  "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates",
  "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

const programmingLanguages = [
  "JavaScript", "Python", "TypeScript", "Java", "C#", "C++", "C", "PHP", "Ruby", "Go",
  "Rust", "Swift", "Kotlin", "Scala", "R", "MATLAB", "Perl", "Haskell", "Clojure", "Erlang",
  "Elixir", "F#", "OCaml", "Lua", "Dart", "Julia", "Groovy", "Objective-C", "Visual Basic", "COBOL",
  "Fortran", "Assembly", "Shell Script", "PowerShell", "SQL", "HTML", "CSS", "Sass", "Less", "Stylus",
  "CoffeeScript", "Elm", "PureScript", "ReasonML", "Crystal", "Nim", "Zig", "D", "Ada", "Pascal"
];

const colors = [
  "Red", "Blue", "Green", "Yellow", "Orange", "Purple", "Pink", "Brown", "Black", "White",
  "Gray", "Silver", "Gold", "Maroon", "Navy", "Teal", "Lime", "Olive", "Aqua", "Fuchsia",
  "Crimson", "Indigo", "Violet", "Turquoise", "Coral", "Salmon", "Khaki", "Plum", "Orchid", "Lavender",
  "Beige", "Tan", "Ivory", "Azure", "Mint", "Rose", "Ruby", "Emerald", "Sapphire", "Amber"
];

const cities = [
  "New York", "London", "Tokyo", "Paris", "Sydney", "Dubai", "Singapore", "Hong Kong", "Los Angeles", "Chicago",
  "Toronto", "Berlin", "Madrid", "Rome", "Amsterdam", "Stockholm", "Copenhagen", "Vienna", "Zurich", "Geneva",
  "Barcelona", "Milan", "Munich", "Prague", "Budapest", "Warsaw", "Moscow", "Istanbul", "Athens", "Lisbon",
  "Dublin", "Edinburgh", "Brussels", "Antwerp", "Oslo", "Helsinki", "Reykjavik", "Luxembourg", "Monaco", "Andorra",
  "San Francisco", "Seattle", "Boston", "Miami", "Las Vegas", "Denver", "Phoenix", "Austin", "Portland", "Nashville",
  "Vancouver", "Montreal", "Calgary", "Ottawa", "Quebec City", "Mexico City", "Buenos Aires", "São Paulo", "Rio de Janeiro", "Lima"
];

const fruits = [
  "Apple", "Banana", "Orange", "Grape", "Strawberry", "Pineapple", "Mango", "Kiwi", "Peach", "Pear",
  "Cherry", "Plum", "Apricot", "Blueberry", "Raspberry", "Blackberry", "Watermelon", "Cantaloupe", "Honeydew", "Papaya",
  "Coconut", "Avocado", "Lemon", "Lime", "Grapefruit", "Pomegranate", "Fig", "Date", "Raisin", "Cranberry"
];

export default function HelloWorldSelect() {
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedLanguage, setSelectedLanguage] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [selectedFruit, setSelectedFruit] = useState<string>("");

  const resetSelections = () => {
    setSelectedCountry("");
    setSelectedLanguage("");
    setSelectedColor("");
    setSelectedCity("");
    setSelectedFruit("");
  };

  const generateGreeting = () => {
    const parts = [];
    if (selectedCountry) parts.push(`from ${selectedCountry}`);
    if (selectedLanguage) parts.push(`coding in ${selectedLanguage}`);
    if (selectedColor) parts.push(`loving ${selectedColor.toLowerCase()} colors`);
    if (selectedCity) parts.push(`dreaming of ${selectedCity}`);
    if (selectedFruit) parts.push(`enjoying ${selectedFruit.toLowerCase()}`);
    
    if (parts.length === 0) {
      return "Hello, World! Make some selections to customize your greeting.";
    }
    
    return `Hello, World ${parts.join(", ")}!`;
  };

  return (
    <div className="space-y-8">
      {/* Dynamic Greeting */}
      <div className="text-center p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-xl border-2 border-dashed border-blue-200 dark:border-gray-500">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-2">
          Your Personalized Greeting
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          {generateGreeting()}
        </p>
      </div>

      {/* Select Dropdowns Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Country Select */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Choose your country ({countries.length} options)
          </label>
          <Select value={selectedCountry} onValueChange={setSelectedCountry}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a country..." />
            </SelectTrigger>
            <SelectContent>
              {countries.map((country) => (
                <SelectItem key={country} value={country}>
                  {country}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Programming Language Select */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Pick a programming language ({programmingLanguages.length} options)
          </label>
          <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a language..." />
            </SelectTrigger>
            <SelectContent>
              {programmingLanguages.map((language) => (
                <SelectItem key={language} value={language}>
                  {language}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Color Select */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Select your favorite color ({colors.length} options)
          </label>
          <Select value={selectedColor} onValueChange={setSelectedColor}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a color..." />
            </SelectTrigger>
            <SelectContent>
              {colors.map((color) => (
                <SelectItem key={color} value={color}>
                  {color}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* City Select */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Choose a dream city ({cities.length} options)
          </label>
          <Select value={selectedCity} onValueChange={setSelectedCity}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a city..." />
            </SelectTrigger>
            <SelectContent>
              {cities.map((city) => (
                <SelectItem key={city} value={city}>
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Fruit Select */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Pick a favorite fruit ({fruits.length} options)
          </label>
          <Select value={selectedFruit} onValueChange={setSelectedFruit}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a fruit..." />
            </SelectTrigger>
            <SelectContent>
              {fruits.map((fruit) => (
                <SelectItem key={fruit} value={fruit}>
                  {fruit}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Statistics Card */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Total Available Options
          </label>
          <div className="p-4 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900 dark:to-blue-900 rounded-lg border-2 border-green-200 dark:border-green-700">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-700 dark:text-green-300">
                {countries.length + programmingLanguages.length + colors.length + cities.length + fruits.length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Total Select Items
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center gap-4 pt-4">
        <button
          onClick={resetSelections}
          className="px-6 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200 font-medium"
        >
          Reset All Selections
        </button>
        <div className="px-6 py-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-lg font-medium">
          {Object.values({selectedCountry, selectedLanguage, selectedColor, selectedCity, selectedFruit}).filter(Boolean).length} / 5 Selected
        </div>
      </div>

      {/* Selection Summary */}
      {Object.values({selectedCountry, selectedLanguage, selectedColor, selectedCity, selectedFruit}).some(Boolean) && (
        <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
          <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">Your Current Selections:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-yellow-700 dark:text-yellow-400">
            {selectedCountry && <div>🌍 Country: <strong>{selectedCountry}</strong></div>}
            {selectedLanguage && <div>💻 Language: <strong>{selectedLanguage}</strong></div>}
            {selectedColor && <div>🎨 Color: <strong>{selectedColor}</strong></div>}
            {selectedCity && <div>🏙️ City: <strong>{selectedCity}</strong></div>}
            {selectedFruit && <div>🍎 Fruit: <strong>{selectedFruit}</strong></div>}
          </div>
        </div>
      )}
    </div>
  );
}