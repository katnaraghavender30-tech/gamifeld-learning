// Enhanced gamified learning platform with comprehensive question bank
const view = document.getElementById('view');
const backBtn = document.getElementById('backBtn');

// Subjects per class
const CLASS_SUBJECTS = {
  6: ['Maths', 'English', 'Science', 'Social', 'EVS'],
  7: ['Maths', 'English', 'Science', 'Social', 'EVS'],
  8: ['Maths', 'English', 'Science', 'Social', 'EVS'],
  9: ['Maths', 'English', 'Science', 'Social', 'EVS'],
  10: ['Maths', 'English', 'Science', 'Social', 'EVS'],
  11: ['Maths 1A', 'Maths 1B', 'Physics', 'Chemistry', 'English', 'Sanskrit'],
  12: ['Maths 2A', 'Maths 2B', 'Physics', 'Chemistry', 'English', 'Sanskrit']
};

// Comprehensive Question Bank
const QUESTION_BANK = {
  6: {
    'Maths': [
      {
        question: 'What is the place value of 5 in the number 3,578?',
        options: ['5', '50', '500', '5000'],
        correct: 1,
        hint: 'Look at which position the digit 5 is in from the right'
      },
      {
        question: 'Which fraction is equivalent to 1/2?',
        options: ['2/3', '3/6', '4/6', '5/8'],
        correct: 2,
        hint: 'Multiply both numerator and denominator by the same number'
      },
      {
        question: 'A triangle has how many sides?',
        options: ['2', '3', '4', '5'],
        correct: 1,
        hint: 'Think of the shape with three corners'
      },
      {
        question: 'What is 25 + 47?',
        options: ['62', '72', '82', '92'],
        correct: 1,
        hint: 'Add the ones place first: 5 + 7 = 12'
      },
      {
        question: 'How many millimeters are in 1 centimeter?',
        options: ['5', '10', '100', '1000'],
        correct: 1,
        hint: 'Milli means one-thousandth, centi means one-hundredth'
      },
      {
        question: 'What is the next number in the pattern: 5, 10, 15, __?',
        options: ['18', '20', '25', '30'],
        correct: 1,
        hint: 'Each number increases by 5'
      },
      {
        question: 'A rectangle has how many pairs of parallel sides?',
        options: ['1', '2', '3', '4'],
        correct: 1,
        hint: 'Parallel sides never meet, like railway tracks'
      },
      {
        question: 'What is 3 × 4?',
        options: ['7', '12', '15', '16'],
        correct: 1,
        hint: 'Think of 3 groups of 4 objects'
      },
      {
        question: 'Which number is the largest?',
        options: ['789', '798', '879', '897'],
        correct: 3,
        hint: 'Compare the hundreds place first, then tens, then ones'
      },
      {
        question: 'What is half of 24?',
        options: ['6', '8', '12', '16'],
        correct: 2,
        hint: 'Divide 24 by 2'
      }
    ],
    'Science': [
      {
        question: 'Which of these is a living thing?',
        options: ['Rock', 'Tree', 'Book', 'Chair'],
        correct: 1,
        hint: 'Living things grow and need food'
      },
      {
        question: 'What do plants need to make food?',
        options: ['Only water', 'Sunlight and water', 'Only soil', 'Only air'],
        correct: 1,
        hint: 'Plants use sunlight to make their own food'
      },
      {
        question: 'Which part of the body helps us breathe?',
        options: ['Heart', 'Stomach', 'Lungs', 'Liver'],
        correct: 2,
        hint: 'This organ is in your chest and takes in air'
      },
      {
        question: 'What happens when you mix oil and water?',
        options: ['They mix completely', 'Oil floats on water', 'Water disappears', 'They become hot'],
        correct: 1,
        hint: 'Think about what you see when oil spills in water'
      },
      {
        question: 'Which material can be attracted by a magnet?',
        options: ['Wood', 'Iron', 'Plastic', 'Glass'],
        correct: 1,
        hint: 'Think of metal objects that stick to magnets'
      },
      {
        question: 'What causes day and night?',
        options: ['Moon moving', 'Earth spinning', 'Sun moving', 'Clouds moving'],
        correct: 1,
        hint: 'Our planet rotates on its axis'
      },
      {
        question: 'Which food group gives us energy?',
        options: ['Vitamins', 'Carbohydrates', 'Water', 'Air'],
        correct: 1,
        hint: 'Think of foods like rice and bread'
      },
      {
        question: 'What do we call animals that eat only plants?',
        options: ['Carnivores', 'Herbivores', 'Omnivores', 'Scavengers'],
        correct: 1,
        hint: 'Think of cows and rabbits'
      },
      {
        question: 'Which sense organ helps us see?',
        options: ['Nose', 'Ears', 'Eyes', 'Tongue'],
        correct: 2,
        hint: 'This organ detects light and colors'
      },
      {
        question: 'What is the main source of light and heat for Earth?',
        options: ['Moon', 'Stars', 'Sun', 'Fire'],
        correct: 2,
        hint: 'This bright object is in the sky during the day'
      }
    ],
    'English': [
      {
        question: 'What is the plural of "child"?',
        options: ['Childs', 'Children', 'Childes', 'Child'],
        correct: 1,
        hint: 'This is an irregular plural form'
      },
      {
        question: 'Which word is a noun?',
        options: ['Run', 'Beautiful', 'Book', 'Quickly'],
        correct: 2,
        hint: 'A noun is a person, place, or thing'
      },
      {
        question: 'Choose the correct sentence:',
        options: ['I are happy', 'I is happy', 'I am happy', 'I be happy'],
        correct: 2,
        hint: 'Use "am" with "I"'
      },
      {
        question: 'What type of word is "slowly"?',
        options: ['Noun', 'Verb', 'Adjective', 'Adverb'],
        correct: 3,
        hint: 'This word describes how something is done'
      },
      {
        question: 'Which punctuation mark goes at the end of a question?',
        options: ['.', '!', '?', ','],
        correct: 2,
        hint: 'Think about what mark shows you are asking something'
      },
      {
        question: 'Choose the correct spelling:',
        options: ['Frend', 'Friend', 'Freind', 'Frieand'],
        correct: 1,
        hint: 'Remember: "I before E except after C"'
      },
      {
        question: 'What is the opposite of "hot"?',
        options: ['Warm', 'Cool', 'Cold', 'Mild'],
        correct: 2,
        hint: 'Think of the complete opposite temperature'
      },
      {
        question: 'Which word rhymes with "cat"?',
        options: ['Dog', 'Hat', 'Car', 'Cup'],
        correct: 1,
        hint: 'Look for words that end with the same sound'
      },
      {
        question: 'Choose the correct verb form: "She __ to school daily"',
        options: ['go', 'going', 'goes', 'gone'],
        correct: 2,
        hint: 'Use "goes" with he, she, it'
      },
      {
        question: 'What is a synonym for "big"?',
        options: ['Small', 'Tiny', 'Large', 'Little'],
        correct: 2,
        hint: 'A synonym means the same thing'
      }
    ],
    'Social': [
      {
        question: 'What is the capital of India?',
        options: ['Mumbai', 'Chennai', 'New Delhi', 'Kolkata'],
        correct: 2,
        hint: 'This city is also called Delhi'
      },
      {
        question: 'Which direction does the sun rise from?',
        options: ['North', 'South', 'East', 'West'],
        correct: 2,
        hint: 'Think about where you see the sun in the morning'
      },
      {
        question: 'What do we call a person who rules a kingdom?',
        options: ['President', 'King', 'Mayor', 'Governor'],
        correct: 1,
        hint: 'This person wears a crown'
      },
      {
        question: 'Which is the largest continent?',
        options: ['Africa', 'Asia', 'Europe', 'Australia'],
        correct: 1,
        hint: 'India is part of this continent'
      },
      {
        question: 'What is the national bird of India?',
        options: ['Eagle', 'Peacock', 'Parrot', 'Swan'],
        correct: 1,
        hint: 'This colorful bird has beautiful feathers'
      },
      {
        question: 'How many states are there in India?',
        options: ['26', '28', '30', '32'],
        correct: 1,
        hint: 'Think of the number close to 30'
      },
      {
        question: 'Which festival is called the festival of lights?',
        options: ['Holi', 'Diwali', 'Eid', 'Christmas'],
        correct: 1,
        hint: 'People light diyas and candles during this festival'
      },
      {
        question: 'What do we call the place where rivers meet the sea?',
        options: ['Delta', 'Mountain', 'Desert', 'Forest'],
        correct: 0,
        hint: 'This triangular area is very fertile'
      },
      {
        question: 'Who is the head of a village panchayat?',
        options: ['Mayor', 'Sarpanch', 'Governor', 'Minister'],
        correct: 1,
        hint: 'This person is elected by villagers'
      },
      {
        question: 'Which is the national game of India?',
        options: ['Cricket', 'Football', 'Hockey', 'Badminton'],
        correct: 2,
        hint: 'This game is played with sticks and a ball'
      }
    ],
    'EVS': [
      {
        question: 'What should we do to save water?',
        options: ['Keep taps running', 'Turn off taps when not needed', 'Use more water', 'Waste water'],
        correct: 1,
        hint: 'Think about not wasting water'
      },
      {
        question: 'Which of these helps reduce pollution?',
        options: ['Burning plastic', 'Planting trees', 'Using more cars', 'Throwing garbage'],
        correct: 1,
        hint: 'Trees clean the air we breathe'
      },
      {
        question: 'What is the 3 Rs of waste management?',
        options: ['Read, Write, Run', 'Reduce, Reuse, Recycle', 'Rest, Relax, Repeat', 'Red, Green, Blue'],
        correct: 1,
        hint: 'These help us manage waste properly'
      },
      {
        question: 'Which animal is endangered in India?',
        options: ['Cow', 'Tiger', 'Dog', 'Cat'],
        correct: 1,
        hint: 'This striped animal is our national animal'
      },
      {
        question: 'What causes acid rain?',
        options: ['Clean air', 'Pollution', 'Fresh water', 'Sunlight'],
        correct: 1,
        hint: 'Dirty air mixes with rain clouds'
      },
      {
        question: 'Which is a renewable source of energy?',
        options: ['Coal', 'Oil', 'Solar', 'Gas'],
        correct: 2,
        hint: 'This energy comes from the sun'
      },
      {
        question: 'What is the main cause of global warming?',
        options: ['Too many trees', 'Greenhouse gases', 'Clean water', 'Fresh air'],
        correct: 1,
        hint: 'These gases trap heat in the atmosphere'
      },
      {
        question: 'Which habitat has the most biodiversity?',
        options: ['Desert', 'Arctic', 'Rainforest', 'City'],
        correct: 2,
        hint: 'This green habitat has many different plants and animals'
      },
      {
        question: 'What is composting?',
        options: ['Burning waste', 'Making soil from organic waste', 'Throwing garbage', 'Using plastic'],
        correct: 1,
        hint: 'Kitchen scraps can become fertile soil'
      },
      {
        question: 'Which gas do plants release during photosynthesis?',
        options: ['Carbon dioxide', 'Oxygen', 'Nitrogen', 'Hydrogen'],
        correct: 1,
        hint: 'This gas helps us breathe'
      }
    ]
  },
  // Similar structure continues for classes 7-12...
  7: {
    'Maths': [
      {
        question: 'What is (-15) + (-25)?',
        options: ['-40', '-10', '40', '10'],
        correct: 0,
        hint: 'When adding two negative integers, add their absolute values and keep the negative sign'
      },
      {
        question: 'Solve: 3x + 7 = 22',
        options: ['x = 3', 'x = 5', 'x = 7', 'x = 9'],
        correct: 1,
        hint: 'Subtract 7 from both sides, then divide by 3'
      },
      {
        question: 'What is 2/3 ÷ 4/5?',
        options: ['5/6', '8/15', '10/12', '6/20'],
        correct: 0,
        hint: 'To divide fractions, multiply by the reciprocal: 2/3 × 5/4'
      },
      {
        question: 'If two parallel lines are cut by a transversal, what are corresponding angles?',
        options: ['Always different', 'Always equal', 'Sometimes equal', 'Always supplementary'],
        correct: 1,
        hint: 'Corresponding angles are in the same relative position at each intersection'
      },
      {
        question: 'What is the perimeter of a rectangle with length 8 cm and width 5 cm?',
        options: ['13 cm', '26 cm', '40 cm', '18 cm'],
        correct: 1,
        hint: 'Perimeter = 2(length + width)'
      },
      {
        question: 'Express 3/4 as a decimal:',
        options: ['0.25', '0.50', '0.75', '0.80'],
        correct: 2,
        hint: 'Divide the numerator by the denominator: 3 ÷ 4'
      },
      {
        question: 'In triangle ABC, if angle A = 60° and angle B = 70°, what is angle C?',
        options: ['40°', '50°', '60°', '70°'],
        correct: 1,
        hint: 'Sum of angles in a triangle is 180°'
      },
      {
        question: 'What is 2³ × 2²?',
        options: ['2⁵', '2⁶', '4⁵', '4⁶'],
        correct: 0,
        hint: 'When multiplying powers with same base, add the exponents'
      },
      {
        question: 'Which rational number lies between 1/3 and 1/2?',
        options: ['2/5', '3/8', '5/12', 'All of these'],
        correct: 3,
        hint: 'Convert to decimals: 1/3 ≈ 0.33 and 1/2 = 0.50'
      },
      {
        question: 'The area of a triangle with base 6 cm and height 4 cm is:',
        options: ['10 sq cm', '12 sq cm', '24 sq cm', '6 sq cm'],
        correct: 1,
        hint: 'Area of triangle = (1/2) × base × height'
      }
    ],
    'Science': [
      {
        question: 'What is the process by which plants make their own food?',
        options: ['Respiration', 'Photosynthesis', 'Digestion', 'Transpiration'],
        correct: 1,
        hint: 'Plants use sunlight, carbon dioxide and water to make food'
      },
      {
        question: 'Which part of the digestive system absorbs most nutrients?',
        options: ['Stomach', 'Large intestine', 'Small intestine', 'Liver'],
        correct: 2,
        hint: 'This is the longest part of the digestive tract'
      },
      {
        question: 'Heat transfer through direct contact is called:',
        options: ['Conduction', 'Convection', 'Radiation', 'Evaporation'],
        correct: 0,
        hint: 'Think of touching a hot metal spoon'
      },
      {
        question: 'Which substance turns red litmus blue?',
        options: ['Acid', 'Base', 'Salt', 'Water'],
        correct: 1,
        hint: 'Bases are opposite to acids in nature'
      },
      {
        question: 'Rusting of iron is an example of:',
        options: ['Physical change', 'Chemical change', 'No change', 'Reversible change'],
        correct: 1,
        hint: 'A new substance (rust) is formed which cannot be easily reversed'
      },
      {
        question: 'Animals that breathe through gills live in:',
        options: ['Land', 'Water', 'Air', 'Underground'],
        correct: 1,
        hint: 'Gills extract oxygen dissolved in water'
      },
      {
        question: 'The speed of an object is the:',
        options: ['Distance covered', 'Time taken', 'Distance per unit time', 'Force applied'],
        correct: 2,
        hint: 'Speed = Distance ÷ Time'
      },
      {
        question: 'Which part of the plant conducts water upward?',
        options: ['Phloem', 'Xylem', 'Leaves', 'Roots'],
        correct: 1,
        hint: 'This tissue acts like water pipes in plants'
      },
      {
        question: 'White light can be separated into different colors using a:',
        options: ['Mirror', 'Lens', 'Prism', 'Glass plate'],
        correct: 2,
        hint: 'This triangular piece of glass disperses light'
      },
      {
        question: 'Which gas is released during photosynthesis?',
        options: ['Carbon dioxide', 'Oxygen', 'Nitrogen', 'Hydrogen'],
        correct: 1,
        hint: 'This gas is essential for our breathing'
      }
    ],
    'English': [
      {
        question: 'Choose the correct past tense of "run":',
        options: ['Runned', 'Ran', 'Running', 'Runs'],
        correct: 1,
        hint: 'This is an irregular verb form'
      },
      {
        question: 'What type of noun is "team"?',
        options: ['Proper noun', 'Abstract noun', 'Collective noun', 'Material noun'],
        correct: 2,
        hint: 'This noun represents a group of people'
      },
      {
        question: 'Choose the correct sentence:',
        options: ['She don\'t like ice cream', 'She doesn\'t likes ice cream', 'She doesn\'t like ice cream', 'She don\'t likes ice cream'],
        correct: 2,
        hint: 'Use "doesn\'t" with singular subjects and base form of verb'
      },
      {
        question: 'What is the superlative form of "good"?',
        options: ['Gooder', 'Goodest', 'Better', 'Best'],
        correct: 3,
        hint: 'This is an irregular comparative form'
      },
      {
        question: 'Which punctuation mark shows strong emotion?',
        options: ['.', '?', '!', ','],
        correct: 2,
        hint: 'This mark is used for exclamations'
      },
      {
        question: 'What is the plural of "mouse" (the animal)?',
        options: ['Mouses', 'Mice', 'Mouse', 'Meese'],
        correct: 1,
        hint: 'This is an irregular plural form'
      },
      {
        question: 'Choose the correct preposition: "The book is ___ the table"',
        options: ['in', 'on', 'at', 'by'],
        correct: 1,
        hint: 'Use this preposition for surfaces'
      },
      {
        question: 'What is a synonym for "happy"?',
        options: ['Sad', 'Angry', 'Joyful', 'Tired'],
        correct: 2,
        hint: 'A synonym has the same meaning'
      },
      {
        question: 'Which word is an adverb in: "She sings beautifully"?',
        options: ['She', 'sings', 'beautifully', 'None'],
        correct: 2,
        hint: 'Adverbs often end in -ly and describe verbs'
      },
      {
        question: 'What is the correct spelling?',
        options: ['Recieve', 'Receive', 'Receve', 'Receeve'],
        correct: 1,
        hint: 'Remember: I before E except after C, but this is an exception'
      }
    ],
    'Social': [
      {
        question: 'Who founded the Mughal Empire in India?',
        options: ['Akbar', 'Babur', 'Humayun', 'Shah Jahan'],
        correct: 1,
        hint: 'This ruler won the First Battle of Panipat in 1526'
      },
      {
        question: 'Which layer of the Earth is the hottest?',
        options: ['Crust', 'Mantle', 'Outer core', 'Inner core'],
        correct: 3,
        hint: 'This is the center-most layer of Earth'
      },
      {
        question: 'What causes day and night on Earth?',
        options: ['Earth\'s revolution', 'Earth\'s rotation', 'Moon\'s movement', 'Sun\'s movement'],
        correct: 1,
        hint: 'Earth spins on its axis once every 24 hours'
      },
      {
        question: 'Which gas makes up most of our atmosphere?',
        options: ['Oxygen', 'Carbon dioxide', 'Nitrogen', 'Hydrogen'],
        correct: 2,
        hint: 'This gas makes up about 78% of the atmosphere'
      },
      {
        question: 'What is the main source of river Ganga?',
        options: ['Yamunotri', 'Gomukh', 'Gangotri', 'Kedarnath'],
        correct: 2,
        hint: 'This glacier is located in Uttarakhand'
      },
      {
        question: 'Which medieval ruler was known as "Akbar the Great"?',
        options: ['First Mughal emperor', 'Third Mughal emperor', 'Last Mughal emperor', 'Maratha ruler'],
        correct: 1,
        hint: 'He ruled from 1556 to 1605 and promoted religious tolerance'
      },
      {
        question: 'What is the water cycle also called?',
        options: ['Rain cycle', 'Hydrological cycle', 'Weather cycle', 'Climate cycle'],
        correct: 1,
        hint: 'Hydro means water in Greek'
      },
      {
        question: 'Who can make laws for the state in India?',
        options: ['President', 'Prime Minister', 'State Legislature', 'Supreme Court'],
        correct: 2,
        hint: 'This body consists of elected representatives of the state'
      },
      {
        question: 'Which direction do trade winds blow in the Northern Hemisphere?',
        options: ['North to South', 'South to North', 'Northeast to Southwest', 'Northwest to Southeast'],
        correct: 2,
        hint: 'These winds blow toward the equator'
      },
      {
        question: 'What is the role of media in a democracy?',
        options: ['Only entertainment', 'Only advertising', 'Information and awareness', 'Making laws'],
        correct: 2,
        hint: 'Media helps people stay informed about government actions'
      }
    ],
    'EVS': [
      {
        question: 'Which of these is a renewable resource?',
        options: ['Coal', 'Petroleum', 'Wind energy', 'Natural gas'],
        correct: 2,
        hint: 'This resource can be replenished naturally'
      },
      {
        question: 'What is the main cause of water pollution?',
        options: ['Industrial waste', 'Sewage', 'Chemicals', 'All of these'],
        correct: 3,
        hint: 'Multiple human activities pollute water bodies'
      },
      {
        question: 'Which forest type is known as the "lungs of the Earth"?',
        options: ['Deciduous forest', 'Coniferous forest', 'Tropical rainforest', 'Mangrove forest'],
        correct: 2,
        hint: 'These forests produce large amounts of oxygen'
      },
      {
        question: 'What is the process of soil formation called?',
        options: ['Erosion', 'Weathering', 'Sedimentation', 'Decomposition'],
        correct: 1,
        hint: 'Rocks break down over time to form soil'
      },
      {
        question: 'Which animals are indicators of a healthy ecosystem?',
        options: ['Rats', 'Cockroaches', 'Frogs', 'Flies'],
        correct: 2,
        hint: 'These amphibians are sensitive to environmental changes'
      },
      {
        question: 'What is the greenhouse effect?',
        options: ['Cooling of Earth', 'Warming of Earth', 'Freezing of water', 'Melting of ice'],
        correct: 1,
        hint: 'Certain gases trap heat in Earth\'s atmosphere'
      },
      {
        question: 'Which is the most effective way to conserve water?',
        options: ['Rain water harvesting', 'Building more dams', 'Digging more wells', 'Cloud seeding'],
        correct: 0,
        hint: 'This method collects and stores natural precipitation'
      },
      {
        question: 'What is biodiversity?',
        options: ['One type of plant', 'Variety of life forms', 'Only animal species', 'Only plant species'],
        correct: 1,
        hint: 'This includes all living things - plants, animals, and microorganisms'
      },
      {
        question: 'Which layer of atmosphere contains ozone?',
        options: ['Troposphere', 'Stratosphere', 'Mesosphere', 'Thermosphere'],
        correct: 1,
        hint: 'This layer is above the troposphere where we live'
      },
      {
        question: 'What is the main cause of desertification?',
        options: ['Too much rain', 'Deforestation', 'Cold weather', 'Ocean currents'],
        correct: 1,
        hint: 'Removing trees leads to soil erosion and land degradation'
      }
    ]
  },
  
8: {
  'Maths': [
    {
      question: 'What is the additive inverse of -5/7?',
      options: ['5/7', '-7/5', '7/5', '-5/7'],
      correct: 0,
      hint: 'The additive inverse of a number gives zero when added to it'
    },
    {
      question: 'Solve: 5x - 3 = 3x + 7',
      options: ['x = 5', 'x = 4', 'x = 3', 'x = 2'],
      correct: 0,
      hint: 'Move all x terms to one side and constants to the other'
    },
    {
      question: 'How many sides does a hexagon have?',
      options: ['5', '6', '7', '8'],
      correct: 1,
      hint: 'Hex means six in Greek'
    },
    {
      question: 'What is the square root of 144?',
      options: ['11', '12', '13', '14'],
      correct: 1,
      hint: 'Which number multiplied by itself gives 144?'
    },
    {
      question: 'If the cost price is ₹80 and selling price is ₹100, what is the profit percentage?',
      options: ['20%', '25%', '30%', '35%'],
      correct: 1,
      hint: 'Profit % = (Profit/Cost Price) × 100'
    },
    {
      question: 'What is (x + 3)(x + 2) when expanded?',
      options: ['x² + 5x + 6', 'x² + 6x + 5', 'x² + 4x + 6', 'x² + 5x + 5'],
      correct: 0,
      hint: 'Use FOIL method: First, Outer, Inner, Last'
    },
    {
      question: 'The cube of 4 is:',
      options: ['12', '16', '64', '48'],
      correct: 2,
      hint: 'Cube means multiply the number by itself three times'
    },
    {
      question: 'What is the area of a parallelogram with base 8 cm and height 5 cm?',
      options: ['13 sq cm', '40 sq cm', '26 sq cm', '80 sq cm'],
      correct: 1,
      hint: 'Area of parallelogram = base × height'
    },
    {
      question: 'Factorize: x² - 9',
      options: ['(x-3)(x-3)', '(x+3)(x+3)', '(x+3)(x-3)', '(x+9)(x-1)'],
      correct: 2,
      hint: 'This is a difference of squares: a² - b² = (a+b)(a-b)'
    },
    {
      question: 'If simple interest on ₹1000 for 2 years at 5% per annum is:',
      options: ['₹50', '₹100', '₹150', '₹200'],
      correct: 1,
      hint: 'Simple Interest = (Principal × Rate × Time) / 100'
    }
  ],
  'Science': [
    {
      question: 'Which process helps in nitrogen fixation in soil?',
      options: ['Photosynthesis', 'Respiration', 'Bacterial action', 'Transpiration'],
      correct: 2,
      hint: 'Certain bacteria convert atmospheric nitrogen into usable compounds'
    },
    {
      question: 'What are microorganisms that cause diseases called?',
      options: ['Pathogens', 'Antibiotics', 'Vaccines', 'Antioxidants'],
      correct: 0,
      hint: 'These harmful microorganisms make us sick'
    },
    {
      question: 'Which synthetic fiber is also called artificial silk?',
      options: ['Nylon', 'Polyester', 'Rayon', 'Acrylic'],
      correct: 2,
      hint: 'This fiber looks and feels like natural silk'
    },
    {
      question: 'Rusting of iron requires the presence of:',
      options: ['Only oxygen', 'Only water', 'Both oxygen and water', 'Only heat'],
      correct: 2,
      hint: 'Iron needs both these substances from the environment to rust'
    },
    {
      question: 'Which fossil fuel is formed from the remains of ancient plants?',
      options: ['Petroleum', 'Natural gas', 'Coal', 'All of these'],
      correct: 2,
      hint: 'This black solid fuel was formed from ancient forests'
    },
    {
      question: 'What are the three requirements for combustion?',
      options: ['Fuel, oxygen, heat', 'Fuel, water, heat', 'Oxygen, water, light', 'Fuel, light, air'],
      correct: 0,
      hint: 'Think of the fire triangle - three things needed for fire'
    },
    {
      question: 'Which part of the cell controls all activities?',
      options: ['Cell wall', 'Nucleus', 'Cytoplasm', 'Cell membrane'],
      correct: 1,
      hint: 'This part is like the brain of the cell'
    },
    {
      question: 'Sound travels fastest through:',
      options: ['Air', 'Water', 'Steel', 'Vacuum'],
      correct: 2,
      hint: 'Sound travels fastest through solids, especially metals'
    },
    {
      question: 'What type of force is friction?',
      options: ['Magnetic force', 'Contact force', 'Gravitational force', 'Electrical force'],
      correct: 1,
      hint: 'This force acts when two surfaces touch each other'
    },
    {
      question: 'Which gas contributes most to global warming?',
      options: ['Oxygen', 'Nitrogen', 'Carbon dioxide', 'Hydrogen'],
      correct: 2,
      hint: 'This gas is produced by burning fossil fuels'
    }
  ],
  'English': [
    {
      question: 'Choose the correct form: "Neither of the boys ___ present"',
      options: ['are', 'is', 'were', 'have'],
      correct: 1,
      hint: 'Neither is singular, so use singular verb'
    },
    {
      question: 'What is the past participle of "write"?',
      options: ['Wrote', 'Writing', 'Written', 'Writes'],
      correct: 2,
      hint: 'Past participle is used with has/have/had'
    },
    {
      question: 'Choose the correct sentence:',
      options: ['I have went there', 'I have gone there', 'I have go there', 'I have going there'],
      correct: 1,
      hint: 'Use past participle with "have"'
    },
    {
      question: 'What type of sentence is: "How beautiful the sunset is!"?',
      options: ['Interrogative', 'Exclamatory', 'Imperative', 'Declarative'],
      correct: 1,
      hint: 'This sentence expresses strong emotion or surprise'
    },
    {
      question: 'Choose the correct passive voice: "The teacher teaches us grammar"',
      options: ['Grammar is taught to us by the teacher', 'Grammar taught us by the teacher', 'We are taught grammar by the teacher', 'Both A and C'],
      correct: 3,
      hint: 'In passive voice, the object becomes the subject'
    },
    {
      question: 'What is the comparative form of "far"?',
      options: ['Farer', 'Further', 'More far', 'Farthest'],
      correct: 1,
      hint: 'This is an irregular comparative form'
    },
    {
      question: 'Choose the correct article: "___ honest man is respected"',
      options: ['A', 'An', 'The', 'No article'],
      correct: 1,
      hint: 'Use "an" before words that start with vowel sound'
    },
    {
      question: 'What is the abstract noun form of "brave"?',
      options: ['Braveness', 'Bravery', 'Braving', 'Braved'],
      correct: 1,
      hint: 'Abstract nouns often end in -y, -tion, -ness'
    },
    {
      question: 'Choose the correct conjunction: "Work hard ___ you will fail"',
      options: ['and', 'but', 'or', 'so'],
      correct: 2,
      hint: 'This conjunction shows an alternative or consequence'
    },
    {
      question: 'What figure of speech is: "The stars danced in the sky"?',
      options: ['Simile', 'Metaphor', 'Personification', 'Alliteration'],
      correct: 2,
      hint: 'This gives human qualities to non-human things'
    }
  ],
  'Social': [
    {
      question: 'Who started the policy of "Subsidiary Alliance"?',
      options: ['Warren Hastings', 'Lord Wellesley', 'Lord Dalhousie', 'Robert Clive'],
      correct: 1,
      hint: 'This British policy made Indian rulers dependent on British protection'
    },
    {
      question: 'Which movement of the Earth causes seasons?',
      options: ['Rotation', 'Revolution', 'Both', 'Neither'],
      correct: 1,
      hint: 'This is the Earth\'s journey around the Sun'
    },
    {
      question: 'What is the tenure of Lok Sabha members?',
      options: ['4 years', '5 years', '6 years', '7 years'],
      correct: 1,
      hint: 'This is the same as the term of most democratic governments'
    },
    {
      question: 'Which soil is best for cotton cultivation?',
      options: ['Alluvial soil', 'Red soil', 'Black soil', 'Laterite soil'],
      correct: 2,
      hint: 'This soil is also called regur and is found in Deccan plateau'
    },
    {
      question: 'The Indian National Congress was founded in which year?',
      options: ['1883', '1885', '1887', '1889'],
      correct: 1,
      hint: 'This was during the British colonial period in the 1880s'
    },
    {
      question: 'Which fundamental right allows us to practice any religion?',
      options: ['Right to Equality', 'Right to Freedom of Religion', 'Right to Freedom', 'Cultural Rights'],
      correct: 1,
      hint: 'This right ensures religious tolerance in India'
    },
    {
      question: 'What is the imaginary line that divides the Earth into Eastern and Western hemispheres?',
      options: ['Equator', 'Prime Meridian', 'Tropic of Cancer', 'Tropic of Capricorn'],
      correct: 1,
      hint: 'This line passes through Greenwich, England'
    },
    {
      question: 'Which was the first newspaper published in India?',
      options: ['The Hindu', 'The Times of India', 'Bengal Gazette', 'Hindustan Times'],
      correct: 2,
      hint: 'This newspaper was started by James Augustus Hicky in 1780'
    },
    {
      question: 'What type of government does India have?',
      options: ['Federal', 'Unitary', 'Confederate', 'Autocratic'],
      correct: 0,
      hint: 'This system divides power between central and state governments'
    },
    {
      question: 'Which plateau is called the "Roof of the World"?',
      options: ['Deccan Plateau', 'Chota Nagpur Plateau', 'Tibetan Plateau', 'Malwa Plateau'],
      correct: 2,
      hint: 'This is the highest plateau in the world'
    }
  ],
  'EVS': [
    {
      question: 'Which technique helps conserve soil and water in agriculture?',
      options: ['Deforestation', 'Terracing', 'Overgrazing', 'Mining'],
      correct: 1,
      hint: 'This involves making steps on slopes to prevent erosion'
    },
    {
      question: 'What is the main cause of depletion of ozone layer?',
      options: ['Carbon dioxide', 'CFCs', 'Oxygen', 'Nitrogen'],
      correct: 1,
      hint: 'These chemicals were commonly used in refrigerators and aerosols'
    },
    {
      question: 'Which type of waste takes the longest time to decompose?',
      options: ['Paper', 'Plastic', 'Food waste', 'Leaves'],
      correct: 1,
      hint: 'This synthetic material can take hundreds of years to break down'
    },
    {
      question: 'What is the process of growing fish for food called?',
      options: ['Pisciculture', 'Apiculture', 'Sericulture', 'Horticulture'],
      correct: 0,
      hint: 'This involves raising fish in ponds or tanks'
    },
    {
      question: 'Which gas is most abundant in clean air?',
      options: ['Oxygen', 'Carbon dioxide', 'Nitrogen', 'Argon'],
      correct: 2,
      hint: 'This gas makes up about 78% of our atmosphere'
    },
    {
      question: 'What is the main source of energy in an ecosystem?',
      options: ['Moon', 'Sun', 'Wind', 'Water'],
      correct: 1,
      hint: 'All food chains start with this energy source'
    },
    {
      question: 'Which method of irrigation saves the most water?',
      options: ['Flood irrigation', 'Sprinkler system', 'Drip irrigation', 'Canal irrigation'],
      correct: 2,
      hint: 'This method delivers water directly to plant roots'
    },
    {
      question: 'What is biomagnification?',
      options: ['Increase in organism size', 'Concentration of toxins in food chain', 'Population growth', 'Habitat expansion'],
      correct: 1,
      hint: 'Harmful substances become more concentrated at higher trophic levels'
    },
    {
      question: 'Which natural resource is used to generate hydroelectric power?',
      options: ['Wind', 'Sun', 'Water', 'Coal'],
      correct: 2,
      hint: 'Dams are built to harness this resource for electricity'
    },
    {
      question: 'What is the greenhouse gas produced by livestock?',
      options: ['Carbon dioxide', 'Methane', 'Nitrous oxide', 'Ozone'],
      correct: 1,
      hint: 'Cows and other ruminants produce this gas during digestion'
    }
  ]
},
// Add this to your QUESTION_BANK object after Class 8:

9: {
  'Maths': [
    {
      question: 'Which of the following is an irrational number?',
      options: ['√4', '√9', '√2', '√16'],
      correct: 2,
      hint: 'Irrational numbers cannot be expressed as fractions and have non-terminating, non-repeating decimals'
    },
    {
      question: 'What is the degree of the polynomial 3x³ + 2x² - 5x + 1?',
      options: ['1', '2', '3', '4'],
      correct: 2,
      hint: 'The degree is the highest power of the variable'
    },
    {
      question: 'In which quadrant does the point (-3, 4) lie?',
      options: ['I', 'II', 'III', 'IV'],
      correct: 1,
      hint: 'Check the signs: negative x-coordinate and positive y-coordinate'
    },
    {
      question: 'If 2x + 3y = 12 and x = 3, what is the value of y?',
      options: ['1', '2', '3', '4'],
      correct: 1,
      hint: 'Substitute x = 3 into the equation and solve for y'
    },
    {
      question: 'According to Euclid\'s first axiom, things which are equal to the same thing are:',
      options: ['Different from each other', 'Equal to one another', 'Greater than each other', 'None of these'],
      correct: 1,
      hint: 'This is a fundamental axiom about equality'
    },
    {
      question: 'If two parallel lines are cut by a transversal, then alternate interior angles are:',
      options: ['Supplementary', 'Complementary', 'Equal', 'Unequal'],
      correct: 2,
      hint: 'This is a key property of parallel lines and transversals'
    },
    {
      question: 'In a triangle, the sum of any two sides must be:',
      options: ['Equal to the third side', 'Less than the third side', 'Greater than the third side', 'Half of the third side'],
      correct: 2,
      hint: 'This is the triangle inequality theorem'
    },
    {
      question: 'The area of a parallelogram is 48 sq cm and its height is 6 cm. What is its base?',
      options: ['6 cm', '8 cm', '12 cm', '24 cm'],
      correct: 1,
      hint: 'Area of parallelogram = base × height'
    },
    {
      question: 'Using Heron\'s formula, what is the area of a triangle with sides 3, 4, and 5 cm?',
      options: ['6 sq cm', '7.5 sq cm', '10 sq cm', '12 sq cm'],
      correct: 0,
      hint: 'First find the semi-perimeter, then use Heron\'s formula'
    },
    {
      question: 'What is the median of the data: 2, 4, 6, 8, 10?',
      options: ['4', '6', '8', '5'],
      correct: 1,
      hint: 'The median is the middle value when data is arranged in order'
    }
  ],
  'Science': [
    {
      question: 'Which of the following is NOT a characteristic of particles of matter?',
      options: ['They are in constant motion', 'They have spaces between them', 'They are visible to naked eye', 'They attract each other'],
      correct: 2,
      hint: 'Matter particles are too small to be seen without magnification'
    },
    {
      question: 'What is the atomicity of ozone (O₃)?',
      options: ['1', '2', '3', '4'],
      correct: 2,
      hint: 'Atomicity is the number of atoms in one molecule'
    },
    {
      question: 'Which subatomic particle determines the chemical properties of an element?',
      options: ['Protons', 'Neutrons', 'Electrons', 'All of these'],
      correct: 2,
      hint: 'These particles are involved in chemical bonding'
    },
    {
      question: 'The powerhouse of the cell is:',
      options: ['Nucleus', 'Mitochondria', 'Ribosome', 'Golgi apparatus'],
      correct: 1,
      hint: 'This organelle produces energy (ATP) for the cell'
    },
    {
      question: 'Which tissue is responsible for photosynthesis in plants?',
      options: ['Xylem', 'Phloem', 'Parenchyma', 'Sclerenchyma'],
      correct: 2,
      hint: 'This tissue contains chloroplasts and is found in leaves'
    },
    {
      question: 'What is the SI unit of velocity?',
      options: ['m/s²', 'm/s', 'km/h', 'm²/s'],
      correct: 1,
      hint: 'Velocity is distance divided by time'
    },
    {
      question: 'According to Newton\'s first law, an object at rest will:',
      options: ['Start moving', 'Remain at rest unless acted upon by force', 'Accelerate', 'Change direction'],
      correct: 1,
      hint: 'This is also called the law of inertia'
    },
    {
      question: 'The value of acceleration due to gravity on Earth is approximately:',
      options: ['9.8 m/s²', '10 m/s', '9.8 m/s', '10 m/s²'],
      correct: 0,
      hint: 'This is the acceleration of objects falling freely on Earth'
    },
    {
      question: 'Sound cannot travel through:',
      options: ['Air', 'Water', 'Steel', 'Vacuum'],
      correct: 3,
      hint: 'Sound needs a medium to travel; this space has no matter'
    },
    {
      question: 'Which of the following practices will help improve soil fertility?',
      options: ['Overuse of fertilizers', 'Crop rotation', 'Excessive irrigation', 'Monoculture'],
      correct: 1,
      hint: 'This practice prevents depletion of specific nutrients from soil'
    }
  ],
  'English': [
    {
      question: 'In "The Road Not Taken" by Robert Frost, the roads symbolize:',
      options: ['Actual paths in forest', 'Life choices', 'Journey destinations', 'Walking trails'],
      correct: 1,
      hint: 'The poem is a metaphor about decisions we make in life'
    },
    {
      question: 'What is the main theme of the story "The Lost Child"?',
      options: ['Adventure', 'Parent-child bond', 'Festival celebration', 'Shopping'],
      correct: 1,
      hint: 'The story shows how a child realizes the importance of parents'
    },
    {
      question: 'Choose the correct indirect speech: He said, "I am going home."',
      options: ['He said that he was going home', 'He said that he is going home', 'He said that I am going home', 'He said that he will go home'],
      correct: 0,
      hint: 'In indirect speech, present tense changes to past tense'
    },
    {
      question: 'What type of sentence is: "What a beautiful day it is!"?',
      options: ['Interrogative', 'Imperative', 'Exclamatory', 'Declarative'],
      correct: 2,
      hint: 'This sentence expresses strong emotion and ends with exclamation mark'
    },
    {
      question: 'Which literary device is used in: "The wind whispered through the trees"?',
      options: ['Simile', 'Metaphor', 'Personification', 'Alliteration'],
      correct: 2,
      hint: 'This gives human qualities (whispering) to non-human things (wind)'
    },
    {
      question: 'In the story "Iswaran the Storyteller," what was Iswaran\'s special talent?',
      options: ['Cooking', 'Cleaning', 'Storytelling', 'Singing'],
      correct: 2,
      hint: 'The title of the story gives us the answer'
    },
    {
      question: 'Choose the correct form of verb: "Neither of the boys _____ present."',
      options: ['are', 'is', 'were', 'have been'],
      correct: 1,
      hint: 'Neither is singular, so use singular verb'
    },
    {
      question: 'What is the rhyme scheme of the poem "Wind"?',
      options: ['ABAB', 'AABB', 'ABCB', 'Free verse'],
      correct: 3,
      hint: 'This poem doesn\'t follow a regular rhyming pattern'
    },
    {
      question: 'In "The Happy Prince," what did the prince sacrifice for others?',
      options: ['His crown', 'His golden covering and jewels', 'His palace', 'His throne'],
      correct: 1,
      hint: 'The prince gave away his precious decorations to help the poor'
    },
    {
      question: 'Choose the correct passive voice: "The teacher teaches the students."',
      options: ['The students are taught by the teacher', 'The students were taught by the teacher', 'The students teach the teacher', 'The teacher is taught by students'],
      correct: 0,
      hint: 'In passive voice, the object becomes the subject'
    }
  ],
  'Social': [
    {
      question: 'The French Revolution began in which year?',
      options: ['1787', '1789', '1791', '1793'],
      correct: 1,
      hint: 'This revolution started in the late 18th century'
    },
    {
      question: 'Who led the Bolshevik Revolution in Russia?',
      options: ['Stalin', 'Lenin', 'Trotsky', 'Marx'],
      correct: 1,
      hint: 'This leader wrote "What is to be Done?" and led the October Revolution'
    },
    {
      question: 'Which mountain range forms the northern boundary of India?',
      options: ['Western Ghats', 'Eastern Ghats', 'Himalayas', 'Aravalli'],
      correct: 2,
      hint: 'This is the world\'s highest mountain range'
    },
    {
      question: 'The Ganga river originates from:',
      options: ['Yamunotri', 'Gangotri', 'Kedarnath', 'Badrinath'],
      correct: 1,
      hint: 'This glacier is located in Uttarakhand'
    },
    {
      question: 'What type of climate does most of India experience?',
      options: ['Tropical', 'Temperate', 'Tropical monsoon', 'Continental'],
      correct: 2,
      hint: 'This climate is characterized by seasonal winds and distinct wet and dry seasons'
    },
    {
      question: 'Who is known as the Father of the Indian Constitution?',
      options: ['Mahatma Gandhi', 'Jawaharlal Nehru', 'Dr. B.R. Ambedkar', 'Sardar Patel'],
      correct: 2,
      hint: 'This leader was the chairman of the drafting committee'
    },
    {
      question: 'In a democracy, the final decision-making power rests with:',
      options: ['The government', 'The people', 'The army', 'The king'],
      correct: 1,
      hint: 'Democracy means rule by the people'
    },
    {
      question: 'What is the main economic activity in the village Palampur?',
      options: ['Manufacturing', 'Farming', 'Trading', 'Mining'],
      correct: 1,
      hint: 'Palampur is an example of rural economy'
    },
    {
      question: 'Which factor is most important for human resource development?',
      options: ['Education', 'Health', 'Both education and health', 'Neither'],
      correct: 2,
      hint: 'Both these factors are essential for developing human capabilities'
    },
    {
      question: 'The Green Revolution in India was primarily related to:',
      options: ['Increase in forest cover', 'Agricultural productivity', 'Environmental protection', 'Industrial growth'],
      correct: 1,
      hint: 'This revolution involved improved seeds, fertilizers, and irrigation'
    }
  ],
  'EVS': [
    {
      question: 'Which of the following is a major cause of deforestation?',
      options: ['Agriculture expansion', 'Urban development', 'Logging', 'All of these'],
      correct: 3,
      hint: 'Multiple human activities contribute to forest loss'
    },
    {
      question: 'The ozone layer protects us from:',
      options: ['Infrared rays', 'Ultraviolet rays', 'Visible light', 'Radio waves'],
      correct: 1,
      hint: 'These harmful rays from the sun can cause skin cancer'
    },
    {
      question: 'Which is the most abundant greenhouse gas?',
      options: ['Carbon dioxide', 'Methane', 'Water vapor', 'Nitrous oxide'],
      correct: 2,
      hint: 'This gas occurs naturally and is present in clouds'
    },
    {
      question: 'Biodiversity hotspots are characterized by:',
      options: ['High species diversity and low endemism', 'Low species diversity and high endemism', 'High species diversity and high endemism', 'Low species diversity and low endemism'],
      correct: 2,
      hint: 'These areas have many species, including many found nowhere else'
    },
    {
      question: 'Which farming method helps in soil conservation?',
      options: ['Slash and burn', 'Contour plowing', 'Overgrazing', 'Excessive irrigation'],
      correct: 1,
      hint: 'This method follows the natural contours of the land'
    },
    {
      question: 'The process of converting waste materials into new products is called:',
      options: ['Reducing', 'Reusing', 'Recycling', 'Refusing'],
      correct: 2,
      hint: 'This is the third R in waste management'
    },
    {
      question: 'Which type of energy source does not contribute to air pollution?',
      options: ['Coal', 'Solar', 'Petroleum', 'Natural gas'],
      correct: 1,
      hint: 'This renewable energy source comes from the sun'
    },
    {
      question: 'The main cause of eutrophication in water bodies is:',
      options: ['Oil spills', 'Plastic waste', 'Nutrient runoff', 'Industrial chemicals'],
      correct: 2,
      hint: 'Excess nutrients from fertilizers cause excessive plant growth'
    },
    {
      question: 'Which gas is primarily responsible for acid rain?',
      options: ['Carbon dioxide', 'Oxygen', 'Sulfur dioxide', 'Nitrogen'],
      correct: 2,
      hint: 'This gas is released from burning fossil fuels and combines with water'
    },
    {
      question: 'The concept of sustainable development emphasizes:',
      options: ['Economic growth only', 'Environmental protection only', 'Meeting present needs without compromising future generations', 'Industrial development only'],
      correct: 2,
      hint: 'This concept balances present needs with future requirements'
    }
  ]
},
// Add this to your QUESTION_BANK object after Class 9:

10: {
  'Maths': [
    {
      question: 'The decimal expansion of the rational number 14587/1250 will terminate after:',
      options: ['2 decimal places', '3 decimal places', '4 decimal places', '5 decimal places'],
      correct: 2,
      hint: 'Check the prime factorization of the denominator after simplification'
    },
    {
      question: 'If α and β are the zeros of polynomial 2x² - 4x + 5, then α + β equals:',
      options: ['2', '5/2', '-2', '4/2'],
      correct: 0,
      hint: 'Sum of zeros = -b/a for quadratic ax² + bx + c'
    },
    {
      question: 'The pair of equations x + 2y = 5 and 3x + 6y = 15 has:',
      options: ['Unique solution', 'No solution', 'Infinitely many solutions', 'Two solutions'],
      correct: 2,
      hint: 'Compare the ratios a₁/a₂, b₁/b₂, c₁/c₂'
    },
    {
      question: 'The discriminant of the quadratic equation 2x² - 4x + 3 = 0 is:',
      options: ['4', '-8', '40', '28'],
      correct: 1,
      hint: 'Discriminant = b² - 4ac'
    },
    {
      question: 'The 10th term of the AP: 2, 7, 12, 17, ... is:',
      options: ['47', '42', '52', '57'],
      correct: 0,
      hint: 'Use the formula: aₙ = a + (n-1)d'
    },
    {
      question: 'If the distance between points (4, p) and (1, 0) is 5, then p equals:',
      options: ['±4', '±3', '±5', '±2'],
      correct: 0,
      hint: 'Use distance formula: √[(x₂-x₁)² + (y₂-y₁)²] = 5'
    },
    {
      question: 'In triangle ABC, if AB = 6 cm, BC = 8 cm, AC = 10 cm, then the triangle is:',
      options: ['Acute angled', 'Right angled', 'Obtuse angled', 'Equilateral'],
      correct: 1,
      hint: 'Check if a² + b² = c² where c is the longest side'
    },
    {
      question: 'The area of a sector of angle θ (in degrees) of a circle with radius r is:',
      options: ['θ/360 × πr²', 'θ/180 × πr²', 'θ/360 × 2πr', 'θ/180 × 2πr'],
      correct: 0,
      hint: 'Sector area = (angle/360°) × area of circle'
    },
    {
      question: 'A cone, hemisphere and cylinder have equal radius and height. Their volumes are in ratio:',
      options: ['1:2:3', '1:3:2', '2:1:3', '3:2:1'],
      correct: 0,
      hint: 'Volume of cone = (1/3)πr²h, hemisphere = (2/3)πr³, cylinder = πr²h'
    },
    {
      question: 'The median of data: 3, 1, 5, 6, 3, 4, 5 is:',
      options: ['3', '4', '5', '6'],
      correct: 1,
      hint: 'Arrange in ascending order and find the middle value'
    }
  ],
  'Science': [
    {
      question: 'In the reaction CaO + H₂O → Ca(OH)₂, what type of reaction is this?',
      options: ['Combination reaction', 'Decomposition reaction', 'Displacement reaction', 'Double displacement reaction'],
      correct: 0,
      hint: 'Two substances combine to form one product'
    },
    {
      question: 'Which of the following turns red litmus blue?',
      options: ['HCl', 'H₂SO₄', 'NaOH', 'CH₃COOH'],
      correct: 2,
      hint: 'Bases turn red litmus to blue'
    },
    {
      question: 'The electronic configuration of sodium (Na, atomic number 11) is:',
      options: ['2, 8, 1', '2, 8, 2', '2, 7, 2', '2, 9'],
      correct: 0,
      hint: 'Electrons are filled in K, L, M shells with maximum capacity 2, 8, 8'
    },
    {
      question: 'The functional group present in ethanol is:',
      options: ['-CHO', '-COOH', '-OH', '-CO-'],
      correct: 2,
      hint: 'Ethanol is an alcohol with hydroxyl group'
    },
    {
      question: 'Which of the following is the correct path of urine in our body?',
      options: ['Kidney → Ureter → Bladder → Urethra', 'Kidney → Urethra → Bladder → Ureter', 'Bladder → Kidney → Ureter → Urethra', 'Urethra → Bladder → Kidney → Ureter'],
      correct: 0,
      hint: 'Urine is formed in kidneys and flows outward'
    },
    {
      question: 'The hormone responsible for regulating blood sugar level is:',
      options: ['Thyroxine', 'Insulin', 'Adrenaline', 'Growth hormone'],
      correct: 1,
      hint: 'This hormone is produced by pancreas'
    },
    {
      question: 'Binary fission occurs in:',
      options: ['Amoeba', 'Yeast', 'Hydra', 'Spirogyra'],
      correct: 0,
      hint: 'This is the simplest form of asexual reproduction'
    },
    {
      question: 'An object is placed at a distance of 10 cm from a convex mirror of focal length 15 cm. The image distance is:',
      options: ['-6 cm', '+6 cm', '-30 cm', '+30 cm'],
      correct: 0,
      hint: 'Use mirror formula: 1/f = 1/u + 1/v, remember sign conventions'
    },
    {
      question: 'The resistance of a conductor depends on:',
      options: ['Length only', 'Area only', 'Material only', 'Length, area and material'],
      correct: 3,
      hint: 'R = ρl/A where ρ depends on material'
    },
    {
      question: 'Ozone layer depletion is caused by:',
      options: ['CO₂', 'CFCs', 'SO₂', 'NO₂'],
      correct: 1,
      hint: 'These chemicals were used in refrigerators and aerosol sprays'
    }
  ],
  'English': [
    {
      question: 'In "A Letter to God," what does Lencho call the post office employees?',
      options: ['Angels', 'Crooks', 'Saints', 'Helpers'],
      correct: 1,
      hint: 'He believes they stole some of his money'
    },
    {
      question: 'Who wrote "Nelson Mandela: Long Walk to Freedom"?',
      options: ['Nelson Mandela', 'Maya Angelou', 'Aung San Suu Kyi', 'Frederick Douglass'],
      correct: 0,
      hint: 'This is an autobiographical account'
    },
    {
      question: 'In the poem "Dust of Snow," what changed the poet\'s mood?',
      options: ['Rain', 'Sunshine', 'Snow falling from a hemlock tree', 'Wind'],
      correct: 2,
      hint: 'A crow shook down the dust of snow'
    },
    {
      question: 'Choose the correct reported speech: She said, "I am reading a book."',
      options: ['She said that she was reading a book', 'She said that I am reading a book', 'She said that she is reading a book', 'She said that she reads a book'],
      correct: 0,
      hint: 'Present tense changes to past in indirect speech'
    },
    {
      question: 'What is the theme of "The Thief\'s Story"?',
      options: ['Adventure', 'Friendship', 'Redemption and trust', 'Mystery'],
      correct: 2,
      hint: 'Hari Singh learns the value of trust through Anil\'s kindness'
    },
    {
      question: 'Choose the correct passive voice: "The teacher praised the student."',
      options: ['The student was praised by the teacher', 'The student is praised by the teacher', 'The student praised the teacher', 'The teacher was praised by the student'],
      correct: 0,
      hint: 'Object becomes subject in passive voice'
    },
    {
      question: 'In "The Midnight Visitor," what was Ausable\'s clever plan?',
      options: ['Call the police', 'Fight Max', 'Create a fake balcony story', 'Hide in the bathroom'],
      correct: 2,
      hint: 'He made Max believe there was a balcony outside the window'
    },
    {
      question: 'What figure of speech is used in "Life is a journey"?',
      options: ['Simile', 'Metaphor', 'Personification', 'Hyperbole'],
      correct: 1,
      hint: 'Direct comparison without using "like" or "as"'
    },
    {
      question: 'Choose the correct form: "Either Ram or his friends _____ coming."',
      options: ['is', 'are', 'was', 'were'],
      correct: 1,
      hint: 'When subjects are joined by "or," verb agrees with the nearest subject'
    },
    {
      question: 'What does the fire symbolize in the poem "Fire and Ice"?',
      options: ['Hatred', 'Desire', 'Anger', 'All of these'],
      correct: 3,
      hint: 'Fire represents all destructive human emotions'
    }
  ],
  'Social': [
    {
      question: 'The French Revolution began in which year?',
      options: ['1787', '1789', '1791', '1793'],
      correct: 1,
      hint: 'This marked the end of absolute monarchy in France'
    },
    {
      question: 'Who founded the Indian National Congress?',
      options: ['A.O. Hume', 'Dadabhai Naoroji', 'W.C. Bonnerjee', 'Surendranath Banerjee'],
      correct: 0,
      hint: 'This British civil servant helped establish the Congress in 1885'
    },
    {
      question: 'Which type of soil is best for cotton cultivation?',
      options: ['Alluvial soil', 'Red soil', 'Black soil', 'Laterite soil'],
      correct: 2,
      hint: 'This soil is also known as regur and is found in the Deccan plateau'
    },
    {
      question: 'What is the main source of irrigation in Punjab?',
      options: ['Rivers', 'Wells', 'Tanks', 'Canals'],
      correct: 3,
      hint: 'This state has an extensive network of artificial waterways'
    },
    {
      question: 'Which level of government can make laws on the subjects in the Union List?',
      options: ['Central government only', 'State government only', 'Both central and state', 'Local government'],
      correct: 0,
      hint: 'These are subjects of national importance'
    },
    {
      question: 'What is the main function of political parties?',
      options: ['Make money', 'Contest elections', 'Build buildings', 'Start businesses'],
      correct: 1,
      hint: 'Parties exist primarily to compete for political power'
    },
    {
      question: 'GDP stands for:',
      options: ['Gross Domestic Product', 'Great Domestic Product', 'General Domestic Product', 'Good Domestic Product'],
      correct: 0,
      hint: 'This measures the total value of goods and services produced'
    },
    {
      question: 'Which sector is the largest employer in India?',
      options: ['Primary sector', 'Secondary sector', 'Tertiary sector', 'Quaternary sector'],
      correct: 0,
      hint: 'This includes agriculture, forestry, and fishing'
    },
    {
      question: 'What is the main aim of Self Help Groups (SHGs)?',
      options: ['Provide entertainment', 'Organize savings and credit', 'Build roads', 'Run schools'],
      correct: 1,
      hint: 'These groups help rural people, especially women, with financial services'
    },
    {
      question: 'Globalization has led to greater integration of:',
      options: ['Production only', 'Markets only', 'Both production and markets', 'Neither production nor markets'],
      correct: 2,
      hint: 'Countries are now more connected economically'
    }
  ],
  'EVS': [
    {
      question: 'Which of the following is a renewable resource?',
      options: ['Coal', 'Petroleum', 'Solar energy', 'Natural gas'],
      correct: 2,
      hint: 'This resource can be replenished naturally in a short time'
    },
    {
      question: 'The main cause of soil erosion is:',
      options: ['Afforestation', 'Deforestation', 'Crop rotation', 'Organic farming'],
      correct: 1,
      hint: 'Removing trees exposes soil to wind and water'
    },
    {
      question: 'Which gas is primarily responsible for global warming?',
      options: ['Oxygen', 'Nitrogen', 'Carbon dioxide', 'Hydrogen'],
      correct: 2,
      hint: 'This gas is released by burning fossil fuels'
    },
    {
      question: 'Biodegradable wastes include:',
      options: ['Plastic bags', 'Kitchen scraps', 'Glass bottles', 'Metal cans'],
      correct: 1,
      hint: 'These wastes can be broken down by natural processes'
    },
    {
      question: 'The three R\'s in waste management are:',
      options: ['Read, Write, Run', 'Reduce, Reuse, Recycle', 'Rest, Relax, Repeat', 'Remove, Replace, Repair'],
      correct: 1,
      hint: 'These principles help minimize waste generation'
    },
    {
      question: 'Which is the most polluted river in India?',
      options: ['Yamuna', 'Ganga', 'Narmada', 'Godavari'],
      correct: 1,
      hint: 'This sacred river faces severe pollution from industrial and domestic waste'
    },
    {
      question: 'Chipko movement was related to:',
      options: ['Water conservation', 'Forest conservation', 'Soil conservation', 'Air pollution control'],
      correct: 1,
      hint: 'People hugged trees to prevent cutting'
    },
    {
      question: 'Which type of farming uses no chemical fertilizers?',
      options: ['Intensive farming', 'Extensive farming', 'Organic farming', 'Commercial farming'],
      correct: 2,
      hint: 'This method relies on natural fertilizers and pest control'
    },
    {
      question: 'The main source of energy for ecosystems is:',
      options: ['Moon', 'Sun', 'Wind', 'Water'],
      correct: 1,
      hint: 'All food chains ultimately depend on this energy source'
    },
    {
      question: 'Which wildlife sanctuary is famous for one-horned rhinoceros?',
      options: ['Jim Corbett', 'Kaziranga', 'Sundarbans', 'Gir'],
      correct: 1,
      hint: 'This sanctuary is located in Assam'
    }
  ]
},

11: {
  'Maths 1A': [
    {
      question: 'If A = {1, 2, 3} and B = {3, 4, 5}, then A ∩ B is:',
      options: ['{1, 2}', '{4, 5}', '{3}', '{1, 2, 3, 4, 5}'],
      correct: 2,
      hint: 'Intersection contains elements common to both sets'
    },
    {
      question: 'The value of sin² 30° + cos² 30° is:',
      options: ['0', '1', '1/2', '√3/2'],
      correct: 1,
      hint: 'This is a fundamental trigonometric identity'
    },
    {
      question: 'If f(x) = 2x + 3, then f(5) equals:',
      options: ['10', '13', '8', '15'],
      correct: 1,
      hint: 'Substitute x = 5 in the function'
    },
    {
      question: 'The number of ways to arrange 5 different books is:',
      options: ['25', '120', '20', '10'],
      correct: 1,
      hint: 'This is 5! (5 factorial)'
    },
    {
      question: 'In the expansion of (x + y)⁴, the coefficient of x²y² is:',
      options: ['4', '6', '8', '12'],
      correct: 1,
      hint: 'Use binomial theorem: ⁴C₂ = 6'
    },
    {
      question: 'The sum of first n natural numbers is:',
      options: ['n(n-1)/2', 'n(n+1)/2', 'n²', 'n³'],
      correct: 1,
      hint: 'This is a well-known arithmetic series formula'
    },
    {
      question: 'If z = 3 + 4i, then |z| equals:',
      options: ['3', '4', '5', '7'],
      correct: 2,
      hint: '|z| = √(real² + imaginary²)'
    },
    {
      question: 'The solution to the inequality 2x + 3 > 7 is:',
      options: ['x > 2', 'x < 2', 'x > 5', 'x < 5'],
      correct: 0,
      hint: 'Solve like a regular equation, keeping inequality sign'
    },
    {
      question: 'The range of sin x is:',
      options: ['[0, 1]', '[-1, 1]', '[0, π]', '(-∞, ∞)'],
      correct: 1,
      hint: 'Sine function oscillates between -1 and 1'
    },
    {
      question: 'If P(A) = 0.7 and P(B) = 0.5, and A and B are independent, then P(A ∩ B) is:',
      options: ['0.2', '0.35', '1.2', '0.85'],
      correct: 1,
      hint: 'For independent events: P(A ∩ B) = P(A) × P(B)'
    }
  ],
  'Maths 1B': [
    {
      question: 'The equation of a line passing through (0, 2) with slope 3 is:',
      options: ['y = 3x + 2', 'y = 2x + 3', 'y = 3x - 2', 'x = 3y + 2'],
      correct: 0,
      hint: 'Use point-slope form: y - y₁ = m(x - x₁)'
    },
    {
      question: 'The center of the circle x² + y² - 4x + 6y - 12 = 0 is:',
      options: ['(2, -3)', '(-2, 3)', '(4, -6)', '(-4, 6)'],
      correct: 0,
      hint: 'Complete the square for both x and y terms'
    },
    {
      question: 'The distance between parallel lines 3x + 4y + 5 = 0 and 3x + 4y - 10 = 0 is:',
      options: ['3', '4', '5', '15/5 = 3'],
      correct: 0,
      hint: 'Distance = |c₁ - c₂|/√(a² + b²)'
    },
    {
      question: 'lim(x→0) (sin x)/x equals:',
      options: ['0', '1', '∞', 'undefined'],
      correct: 1,
      hint: 'This is a standard limit in calculus'
    },
    {
      question: 'The derivative of x³ is:',
      options: ['x²', '3x²', '3x³', 'x⁴/4'],
      correct: 1,
      hint: 'Use power rule: d/dx(xⁿ) = nxⁿ⁻¹'
    },
    {
      question: 'If the statement "All birds can fly" is given, then its contrapositive is:',
      options: ['No birds can fly', 'Some birds cannot fly', 'If something cannot fly, then it is not a bird', 'If something can fly, then it is a bird'],
      correct: 2,
      hint: 'Contrapositive of p→q is ¬q→¬p'
    },
    {
      question: 'The mean of 5, 7, 9, 11, 13 is:',
      options: ['8', '9', '10', '11'],
      correct: 1,
      hint: 'Mean = sum of all values / number of values'
    },
    {
      question: 'In how many ways can 3 balls be selected from 10 balls?',
      options: ['30', '120', '720', '1000'],
      correct: 1,
      hint: 'Use combination formula: ¹⁰C₃'
    },
    {
      question: 'The equation of the parabola with vertex at origin and focus at (2, 0) is:',
      options: ['y² = 8x', 'x² = 8y', 'y² = 4x', 'x² = 4y'],
      correct: 0,
      hint: 'For parabola y² = 4px, focus is at (p, 0)'
    },
    {
      question: 'If two coins are tossed, the probability of getting at least one head is:',
      options: ['1/4', '1/2', '3/4', '1'],
      correct: 2,
      hint: 'P(at least one head) = 1 - P(no heads)'
    }
  ],
  'Physics': [
    {
      question: 'The SI unit of force is:',
      options: ['Dyne', 'Newton', 'Joule', 'Watt'],
      correct: 1,
      hint: 'This unit is named after the scientist who formulated laws of motion'
    },
    {
      question: 'A body moving with constant velocity has:',
      options: ['Zero acceleration', 'Constant acceleration', 'Variable acceleration', 'Infinite acceleration'],
      correct: 0,
      hint: 'If velocity is constant, there is no change in velocity'
    },
    {
      question: 'The acceleration due to gravity on Earth is approximately:',
      options: ['9.8 m/s', '9.8 m/s²', '10 m/s', '10 m/s²'],
      correct: 1,
      hint: 'This is the acceleration of freely falling objects'
    },
    {
      question: 'Newton\'s first law is also known as:',
      options: ['Law of inertia', 'Law of acceleration', 'Law of action-reaction', 'Law of gravitation'],
      correct: 0,
      hint: 'This law explains why objects resist changes in motion'
    },
    {
      question: 'The work done by a force is maximum when the angle between force and displacement is:',
      options: ['0°', '45°', '90°', '180°'],
      correct: 0,
      hint: 'Work = F·s·cosθ is maximum when cosθ = 1'
    },
    {
      question: 'The center of mass of a uniform rod lies at:',
      options: ['One end', 'One-fourth length', 'Middle', 'Three-fourth length'],
      correct: 2,
      hint: 'For uniform objects, center of mass is at the geometric center'
    },
    {
      question: 'Escape velocity from Earth is approximately:',
      options: ['7.9 km/s', '11.2 km/s', '15.6 km/s', '20.1 km/s'],
      correct: 1,
      hint: 'This is the minimum velocity needed to escape Earth\'s gravitational field'
    },
    {
      question: 'Young\'s modulus is a measure of:',
      options: ['Strength', 'Hardness', 'Elasticity', 'Plasticity'],
      correct: 2,
      hint: 'This property describes how much a material stretches under stress'
    },
    {
      question: 'In the first law of thermodynamics, ΔU represents:',
      options: ['Work done', 'Heat supplied', 'Change in internal energy', 'Change in temperature'],
      correct: 2,
      hint: 'This is the change in thermal energy of the system'
    },
    {
      question: 'Simple harmonic motion is characterized by:',
      options: ['Constant velocity', 'Constant acceleration', 'Acceleration proportional to displacement', 'Constant force'],
      correct: 2,
      hint: 'The restoring force is proportional to displacement from mean position'
    }
  ],
  'Chemistry': [
    {
      question: 'The atomic number of carbon is:',
      options: ['4', '6', '8', '12'],
      correct: 1,
      hint: 'This equals the number of protons in the nucleus'
    },
    {
      question: 'The electronic configuration of chlorine (Cl, atomic number 17) is:',
      options: ['2, 8, 7', '2, 8, 8, 1', '2, 7, 8', '2, 8, 6, 1'],
      correct: 0,
      hint: 'Fill electrons in K, L, M shells with maximum 2, 8, 8'
    },
    {
      question: 'Which element has the highest electronegativity?',
      options: ['Oxygen', 'Fluorine', 'Nitrogen', 'Chlorine'],
      correct: 1,
      hint: 'This is the most electronegative element in the periodic table'
    },
    {
      question: 'The shape of water molecule is:',
      options: ['Linear', 'Bent', 'Triangular', 'Tetrahedral'],
      correct: 1,
      hint: 'Consider the lone pairs on oxygen atom'
    },
    {
      question: 'An endothermic reaction:',
      options: ['Releases heat', 'Absorbs heat', 'Has no heat change', 'Releases light'],
      correct: 1,
      hint: 'In this type of reaction, ΔH is positive'
    },
    {
      question: 'The pH of pure water at 25°C is:',
      options: ['0', '7', '14', '1'],
      correct: 1,
      hint: 'Pure water is neutral'
    },
    {
      question: 'In the reaction Zn + CuSO₄ → ZnSO₄ + Cu, zinc is:',
      options: ['Oxidized', 'Reduced', 'Neither', 'Both'],
      correct: 0,
      hint: 'Zinc loses electrons and its oxidation state increases'
    },
    {
      question: 'The IUPAC name of CH₃CH₂OH is:',
      options: ['Methanol', 'Ethanol', 'Propanol', 'Butanol'],
      correct: 1,
      hint: 'This alcohol has two carbon atoms'
    },
    {
      question: 'Benzene has the molecular formula:',
      options: ['C₆H₁₂', 'C₆H₁₄', 'C₆H₆', 'C₆H₁₀'],
      correct: 2,
      hint: 'This aromatic compound has 6 carbon atoms in a ring'
    },
    {
      question: 'The catalyst used in Haber\'s process is:',
      options: ['Nickel', 'Iron', 'Platinum', 'Copper'],
      correct: 1,
      hint: 'This process is used to manufacture ammonia'
    }
  ],
  'English': [
    {
      question: 'In "The Portrait of a Lady," the grandmother is portrayed as:',
      options: ['Modern and fashionable', 'Traditional and religious', 'Educated and progressive', 'Wealthy and arrogant'],
      correct: 1,
      hint: 'She represents old Indian values and customs'
    },
    {
      question: 'The poem "A Photograph" is written by:',
      options: ['Shirley Toulson', 'Ted Hughes', 'Leslie Norris', 'A.K. Ramanujan'],
      correct: 0,
      hint: 'This poet reflects on memory and loss through a family photograph'
    },
    {
      question: 'In "We\'re Not Afraid to Die," the narrator shows:',
      options: ['Fear and panic', 'Courage and determination', 'Anger and frustration', 'Sadness and despair'],
      correct: 1,
      hint: 'The family faces a life-threatening storm at sea with bravery'
    },
    {
      question: 'Choose the correct sentence:',
      options: ['Each of the boys are present', 'Each of the boys is present', 'Each of the boys were present', 'Each of the boys have been present'],
      correct: 1,
      hint: '"Each" is always singular'
    },
    {
      question: 'The literary device used in "The wind whispered secrets" is:',
      options: ['Metaphor', 'Simile', 'Personification', 'Hyperbole'],
      correct: 2,
      hint: 'Wind is given human quality of whispering'
    },
    {
      question: 'In "The Address," the narrator visits:',
      options: ['Her old school', 'Her mother\'s friend', 'Her childhood home', 'A museum'],
      correct: 1,
      hint: 'She goes to retrieve her family\'s belongings after the war'
    },
    {
      question: 'Choose the correct passive voice: "Someone has stolen my bike."',
      options: ['My bike has been stolen', 'My bike was stolen', 'My bike is stolen', 'Someone was stolen my bike'],
      correct: 0,
      hint: 'Present perfect tense becomes "has/have been + past participle"'
    },
    {
      question: 'The theme of "Mother\'s Day" is:',
      options: ['Love and sacrifice', 'Taking family for granted', 'Generation gap', 'Women\'s empowerment'],
      correct: 1,
      hint: 'The play shows how family members don\'t appreciate mother\'s work'
    },
    {
      question: 'What figure of speech is "Time is money"?',
      options: ['Simile', 'Metaphor', 'Alliteration', 'Oxymoron'],
      correct: 1,
      hint: 'Direct comparison between time and money'
    },
    {
      question: 'In reported speech, "I will go tomorrow" becomes:',
      options: ['He said he will go tomorrow', 'He said he would go the next day', 'He said I will go tomorrow', 'He said he goes the next day'],
      correct: 1,
      hint: 'Future tense changes to conditional, "tomorrow" becomes "the next day"'
    }
  ],
  'Sanskrit': [
    {
      question: 'The Sanskrit word for "knowledge" is:',
      options: ['Vidya', 'Dharma', 'Karma', 'Moksha'],
      correct: 0,
      hint: 'This word is the root of many educational terms'
    },
    {
      question: 'The number "five" in Sanskrit is:',
      options: ['Pancha', 'Shat', 'Sapta', 'Ashta'],
      correct: 0,
      hint: 'This word is seen in "panchayat" (five-member council)'
    },
    {
      question: 'गुरु का अर्थ है:',
      options: ['शिक्षक', 'छात्र', 'पुस्तक', 'विद्यालय'],
      correct: 0,
      hint: 'गुरु वह है जो अंधकार से प्रकाश की ओर ले जाता है'
    },
    {
      question: 'In Sanskrit, "Namaste" means:',
      options: ['Hello', 'Goodbye', 'I bow to you', 'Thank you'],
      correct: 2,
      hint: 'This greeting shows respect by acknowledging the divine in others'
    },
    {
      question: '"सत्यमेव जयते" means:',
      options: ['Knowledge is power', 'Truth alone triumphs', 'Work is worship', 'Unity is strength'],
      correct: 1,
      hint: 'This is India\'s national motto'
    },
    {
      question: 'The Sanskrit word "Ahimsa" means:',
      options: ['Violence', 'Non-violence', 'Peace', 'War'],
      correct: 1,
      hint: 'This principle was championed by Mahatma Gandhi'
    },
    {
      question: 'मातृभाषा का अर्थ है:',
      options: ['देश की भाषा', 'मां की भाषा', 'स्कूल की भाषा', 'संस्कृत भाषा'],
      correct: 1,
      hint: 'यह वह भाषा है जो हम पहले सीखते हैं'
    },
    {
      question: 'The plural of "बालक" (boy) is:',
      options: ['बालकः', 'बालकाः', 'बालका', 'बालकान्'],
      correct: 1,
      hint: 'In Sanskrit, plural masculine nouns often end in आः'
    },
    {
      question: '"वसुधैव कुटुम्बकम्" means:',
      options: ['The world is one family', 'Knowledge is power', 'Time is precious', 'Health is wealth'],
      correct: 0,
      hint: 'This Sanskrit phrase promotes universal brotherhood'
    },
    {
      question: 'The Sanskrit word "Yoga" comes from the root:',
      options: ['युज् (to unite)', 'गम् (to go)', 'कृ (to do)', 'भू (to be)'],
      correct: 0,
      hint: 'Yoga means union of body, mind and spirit'
    }
  ]
},

// Continue for classes 8, 9, 10, 11, 12...
};

// Game state
let currentQuestionIndex = 0;
let gameQuestions = [];
let gameScore = 0;

// Content generation
const CLASS_CONTENT = {};
for (let cls = 6; cls <= 12; cls++) {
  const subjects = CLASS_SUBJECTS[cls];
  CLASS_CONTENT[cls] = subjects.map((subject) => ({
    subject,
    chapters: generateChapters(cls, subject)
  }));
}

function generateChapters(cls, subject) {
  // Chapters for 6–10 (simplified for demo)
  const junior = {
    Maths: ['Numbers and Place Value', 'Fractions and Decimals', 'Geometry Basics'],
    English: ['Grammar Basics', 'Reading Comprehension', 'Creative Writing'],
    Science: ['Living and Non-Living', 'Force and Energy', 'Air, Water, Soil'],
    Social: ['Our Community', 'History Basics', 'Geography of India'],
    EVS: ['Environment Around Us', 'Weather and Climate', 'Natural Resources']
  };

  // Chapters for 11
  if (cls === 11) {
    switch (subject) {
      case 'Maths 1A': return ['Functions', 'Limits & Continuity', 'Derivatives'];
      case 'Maths 1B': return ['Probability', 'Vectors', 'Complex Numbers'];
      case 'Physics': return ['Mechanics', 'Waves & Oscillations', 'Optics'];
      case 'Chemistry': return ['Atomic Structure', 'Chemical Bonding', 'Organic Chemistry'];
      case 'English': return ['Prose', 'Poetry', 'Grammar'];
      case 'Sanskrit': return ['Shlokas', 'Stories', 'Grammar'];
    }
  }

  // Chapters for 12
  if (cls === 12) {
    switch (subject) {
      case 'Maths 2A': return ['Integration', 'Differential Equations', 'Applications of Derivatives'];
      case 'Maths 2B': return ['Probability Distributions', 'Linear Programming', 'Statistics'];
      case 'Physics': return ['Electrostatics', 'Magnetism', 'Modern Physics'];
      case 'Chemistry': return ['Solid State', 'Solutions', 'Polymers'];
      case 'English': return ['Prose', 'Poetry', 'Grammar'];
      case 'Sanskrit': return ['Shlokas', 'Stories', 'Grammar'];
    }
  }

  return junior[subject] || ['Coming Soon'];
}

// Helper function to get questions for a specific class and subject
function getQuestions(cls, subject) {
  const questions = QUESTION_BANK[cls]?.[subject];
  if (!questions || questions.length === 0) {
    // Fallback questions if specific ones aren't available
    return [
      {
        question: `Sample ${subject} question for Class ${cls}`,
        options: ['Option A', 'Option B', 'Option C', 'Option D'],
        correct: 1,
        hint: 'This is a sample question'
      }
    ];
  }
  return questions;
}

// Router (keeping existing routing logic)
const routes = {
  '#/home': renderHome,
  '#/class': renderClass,
  '#/chapters': renderChapters,
  '#/chapter': renderChapter,
  '#/game': renderGame,
  '#/rewards': renderRewards,
  '#/help': renderHelp
};

function navigate(hash) {
  location.hash = hash;
}

function parseHash() {
  const [path, query = ''] = location.hash.split('?');
  const params = new URLSearchParams(query);
  return { path, params };
}

function setBackVisibility() {
  const { path } = parseHash();
  backBtn.disabled = path === '#/home' || path === '';
}

backBtn.addEventListener('click', () => history.back());

document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => navigate(btn.dataset.link));
});

window.addEventListener('hashchange', handleRoute);
window.addEventListener('load', () => {
  if (!location.hash) navigate('#/home');
  handleRoute();
});

function handleRoute() {
  const { path, params } = parseHash();
  const renderer = routes[path] || renderHome;
  renderer(params);
  setBackVisibility();
}

// Existing renderer functions (keeping them unchanged)
function renderHome() {
  view.innerHTML = `
    <section class="hero pop-in">
      <div class="badge" aria-hidden="true">🎒 Welcome</div>
      <h2 class="hero-title">Learn with Fun</h2>
      <p class="hero-sub">Tap your class and start playing to learn!</p>
    </section>
    <section class="grid pop-in" aria-label="Choose your class">
      ${Array.from({ length: 7 }, (_, i) => i + 6).map(cls => `
        <button class="card" onclick="goClass(${cls})" aria-label="Class ${cls}">
          <span class="emoji">${classEmoji(cls)}</span>
          <span class="label">Class ${cls}</span>
        </button>
      `).join('')}
    </section>
  `;
}

function classEmoji(cls) {
  const emojis = ['🧮','📘','🔬','🌍','🌿','⚛️','🎓'];
  return emojis[(cls - 6) % emojis.length];
}

window.goClass = function goClass(cls) {
  navigate(`#/class?cls=${cls}`);
}

function renderClass(params) {
  const cls = Number(params.get('cls')) || 6;
  const subjects = CLASS_CONTENT[cls];
  view.innerHTML = `
    <section class="hero pop-in">
      <div class="chips">
        <span class="chip">🎯 Class ${cls}</span>
        <span class="chip">📖 Subjects</span>
      </div>
      <h3 class="section-title">Choose a subject</h3>
    </section>
    <section class="grid pop-in" aria-label="Choose subject">
      ${subjects.map(s => `
        <button class="card" onclick="goChapters(${cls}, '${s.subject}')" aria-label="${s.subject}">
          <span class="emoji">${subjectEmoji(s.subject)}</span>
          <span class="label">${s.subject}</span>
        </button>
      `).join('')}
    </section>
  `;
}

function subjectEmoji(subj) {
  switch (subj) {
    case 'Maths': case 'Maths 1A': case 'Maths 1B':
    case 'Maths 2A': case 'Maths 2B': return '🧮';
    case 'Science': return '🔬';
    case 'Physics': return '⚛️';
    case 'Chemistry': return '⚗️';
    case 'English': return '📘';
    case 'EVS': return '🌿';
    case 'Social': return '🌍';
    case 'Sanskrit': return '📜';
    default: return '📚';
  }
}

window.goChapters = function goChapters(cls, subject) {
  navigate(`#/chapters?cls=${cls}&subject=${encodeURIComponent(subject)}`);
}

function renderChapters(params) {
  const cls = Number(params.get('cls')) || 6;
  const subject = params.get('subject') || 'Maths';
  const entry = CLASS_CONTENT[cls].find(s => s.subject === subject);
  const chapters = entry?.chapters || [];
  view.innerHTML = `
    <section class="hero pop-in">
      <div class="chips">
        <span class="chip">🎯 Class ${cls}</span>
        <span class="chip">${subjectEmoji(subject)} ${subject}</span>
      </div>
      <h3 class="section-title">Pick a chapter</h3>
    </section>
    <section class="grid pop-in" aria-label="Choose chapter">
      ${chapters.map((name, i) => `
        <button class="card" onclick="goChapter(${cls}, '${subject}', ${i+1})" aria-label="Chapter ${i+1}: ${name}">
          <span class="emoji">${['⭐','🌈','🚀'][i % 3]}</span>
          <span class="label">Chapter ${i+1}</span>
          <div class="muted">${name}</div>
        </button>
      `).join('')}
    </section>
  `;
}

window.goChapter = function goChapter(cls, subject, ch) {
  navigate(`#/chapter?cls=${cls}&subject=${encodeURIComponent(subject)}&ch=${ch}`);
}

function renderChapter(params) {
  const cls = Number(params.get('cls')) || 6;
  const subject = params.get('subject') || 'Maths';
  const ch = Number(params.get('ch')) || 1;
  const title = `Class ${cls} · ${subject} · Chapter ${ch}`;
  const tip = 'Play and learn. Tap the green button to try!';
  view.innerHTML = `
    <section class="game-area pop-in">
      <div class="badge">${subjectEmoji(subject)} ${title}</div>
      <div class="progress-wrap">
        <div class="progress-bar"><div id="progressFill" class="progress-fill" style="width: 0%"></div></div>
        <div class="stars" id="stars" aria-live="polite">☆☆☆</div>
      </div>
      <div class="game-card">
        <h3 style="margin:0 0 8px">Let's Learn</h3>
        <p class="muted">${tip}</p>
        <div style="display:flex; gap:8px; flex-wrap:wrap; margin-top:8px;">
          <button class="primary-btn" onclick="startExercise(${cls}, '${subject}', ${ch})">▶️ Try Exercise</button>
          <button class="primary-btn" onclick="startQuiz(${cls}, '${subject}', ${ch})">🎮 Start Quiz</button>
        </div>
        <div style="height:8px"></div>
        <div class="muted">Learn with pictures and small games.</div>
      </div>
    </section>
  `;
}

window.startExercise = function startExercise(cls, subject, ch) {
  navigate(`#/game?mode=exercise&cls=${cls}&subject=${encodeURIComponent(subject)}&ch=${ch}`);
}

window.startQuiz = function startQuiz(cls, subject, ch) {
  navigate(`#/game?mode=quiz&cls=${cls}&subject=${encodeURIComponent(subject)}&ch=${ch}`);
}

// Enhanced game rendering with proper question selection
function renderGame(params) {
  const mode = params.get('mode') || 'exercise';
  const cls = Number(params.get('cls')) || 6;
  const subject = params.get('subject') || 'Maths';
  const ch = Number(params.get('ch')) || 1;
  const header = mode === 'quiz' ? 'Quick Quiz' : 'Fun Exercise';

  // Initialize game state
  currentQuestionIndex = 0;
  gameScore = 0;
  gameQuestions = getQuestions(cls, subject);

  view.innerHTML = `
    <section class="game-area pop-in">
      <div class="chips">
        <span class="chip">🎯 Class ${cls}</span>
        <span class="chip">${subjectEmoji(subject)} ${subject}</span>
        <span class="chip">📖 Ch ${ch}</span>
      </div>
      <h3 class="section-title">${header}</h3>
      <div class="game-card" id="gameRoot">
        <div class="game-progress">
          Question ${currentQuestionIndex + 1} of ${gameQuestions.length}
          <div class="score">Score: ${gameScore}</div>
        </div>
      </div>
    </section>
  `;

  renderCurrentQuestion();
}

function renderCurrentQuestion() {
  const question = gameQuestions[currentQuestionIndex];
  if (!question) {
    renderGameComplete();
    return;
  }

  const gameRoot = document.getElementById('gameRoot');
  gameRoot.innerHTML = `
    <div class="game-progress">
      Question ${currentQuestionIndex + 1} of ${gameQuestions.length}
      <div class="score">Score: ${gameScore}</div>
    </div>
    <div class="question-container">
      <div style="display:flex; align-items:center; gap:8px; margin-bottom:16px;">
        <span class="emoji" aria-hidden="true">❓</span>
        <div style="font-size:18px; font-weight:600;">${question.question}</div>
      </div>
      <div class="options">
        ${question.options.map((opt, i) => `
          <button class="option-btn" data-index="${i}">${opt}</button>
        `).join('')}
      </div>
      <div class="hint-section" style="margin-top:16px;">
        <button class="hint-btn" onclick="showHint()">💡 Show Hint</button>
        <div id="hintText" class="hint-text" style="display:none;">${question.hint}</div>
      </div>
      <div style="margin-top:16px; display:flex; align-items:center; gap:8px;">
        <div id="feedback" class="badge" aria-live="polite">Choose your answer</div>
        <button class="primary-btn" id="nextBtn" style="display:none" onclick="nextQuestion()">Next ▶️</button>
      </div>
    </div>
  `;

  const buttons = gameRoot.querySelectorAll('.option-btn');
  const feedback = gameRoot.querySelector('#feedback');
  const nextBtn = gameRoot.querySelector('#nextBtn');

  buttons.forEach(btn => btn.addEventListener('click', () => {
    const idx = Number(btn.dataset.index);
    buttons.forEach(b => b.disabled = true);
    
    if (idx === question.correct) {
      btn.classList.add('correct');
      feedback.textContent = 'Excellent! ⭐';
      feedback.style.background = '#4caf50';
      gameScore += 10;
      playDing();
    } else {
      btn.classList.add('incorrect');
      buttons[question.correct].classList.add('correct');
      feedback.textContent = 'Try again next time';
      feedback.style.background = '#f44336';
    }
    
    nextBtn.style.display = 'inline-flex';
  }));
}

window.showHint = function() {
  const hintText = document.getElementById('hintText');
  if (hintText) {
    hintText.style.display = hintText.style.display === 'none' ? 'block' : 'none';
  }
}

window.nextQuestion = function() {
  currentQuestionIndex++;
  renderCurrentQuestion();
}

function renderGameComplete() {
  const gameRoot = document.getElementById('gameRoot');
  const percentage = Math.round((gameScore / (gameQuestions.length * 10)) * 100);
  let message = 'Keep practicing!';
  let emoji = '👍';
  
  if (percentage >= 90) {
    message = 'Outstanding performance!';
    emoji = '🏆';
  } else if (percentage >= 70) {
    message = 'Great job!';
    emoji = '⭐';
  } else if (percentage >= 50) {
    message = 'Good effort!';
    emoji = '👏';
  }

  gameRoot.innerHTML = `
    <div style="text-align:center; padding:20px;">
      <div style="font-size:48px; margin-bottom:16px;">${emoji}</div>
      <h3>Quiz Complete!</h3>
      <div style="font-size:24px; margin:16px 0; color:#4caf50;">
        Score: ${gameScore}/${gameQuestions.length * 10} (${percentage}%)
      </div>
      <div style="margin:16px 0;">${message}</div>
      <div style="display:flex; gap:8px; justify-content:center; flex-wrap:wrap; margin-top:20px;">
        <button class="primary-btn" onclick="renderCurrentQuestion(); currentQuestionIndex=0; gameScore=0;">🔄 Try Again</button>
        <button class="primary-btn" onclick="history.back()">🏠 Go Back</button>
      </div>
    </div>
  `;
}

function renderRewards() {
  view.innerHTML = `
    <section class="hero pop-in" style="text-align:center">
      <h3 class="section-title">Your Rewards</h3>
      <p class="muted">Play games to win stars and badges!</p>
      <div class="grid" aria-label="Badges">
        ${['⭐ Star Starter','🏅 Quick Thinker','🌟 Super Learner','🎯 Goal Getter','🧠 Brainy'].map(b => `
          <div class="card" role="img" aria-label="${b}">
            <span class="emoji">${b.split(' ')[0]}</span>
            <span class="label">${b.split(' ').slice(1).join(' ')}</span>
          </div>
        `).join('')}
      </div>
    </section>
  `;
}

function renderHelp() {
  view.innerHTML = `
    <section class="hero pop-in">
      <h3 class="section-title">Help</h3>
      <ul>
        <li>Tap big buttons to open.</li>
        <li>Use back arrow to go back.</li>
        <li>Finish games to earn stars.</li>
        <li>Use hints if you're stuck.</li>
        <li>Try to score 100% in each quiz!</li>
      </ul>
    </section>
  `;
}

// Simple sound feedback
let audioCtx;
function playDing() {
  try {
    audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
    const o = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    o.type = 'triangle';
    o.frequency.value = 880;
    g.gain.value = 0.001;
    o.connect(g); g.connect(audioCtx.destination);
    o.start();
    const now = audioCtx.currentTime;
    g.gain.exponentialRampToValueAtTime(0.2, now + 0.01);
    g.gain.exponentialRampToValueAtTime(0.00001, now + 0.25);
    o.stop(now + 0.26);
  } catch (e) { /* ignore */ }
}
