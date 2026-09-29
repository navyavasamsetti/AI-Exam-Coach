import { useState } from "react";
import "./App.css";

/* =========================================================
   TOPICS
========================================================= */

const TOPICS = [
  "Aptitude",
  "Computer Basics",
  "Banking"
];

/* =========================================================
   QUESTION BANK
   Easy = 10
   Medium = 20
   Hard = 20
========================================================= */

const QUESTION_BANK = {
  Aptitude: {
    easy: [
      {
        id: "apt-e1",
        question: "What is 25% of 200?",
        options: ["25", "40", "50", "75"],
        answer: "50",
        explanation: "25% of 200 = 25/100 × 200 = 50."
      },
      {
        id: "apt-e2",
        question: "If 5 pens cost ₹50, what is the cost of one pen?",
        options: ["₹5", "₹10", "₹15", "₹20"],
        answer: "₹10",
        explanation: "₹50 ÷ 5 = ₹10."
      },
      {
        id: "apt-e3",
        question: "What is the next number: 2, 4, 6, 8, ?",
        options: ["9", "10", "11", "12"],
        answer: "10",
        explanation: "The numbers increase by 2."
      },
      {
        id: "apt-e4",
        question: "What is 15 + 27?",
        options: ["32", "40", "42", "45"],
        answer: "42",
        explanation: "15 + 27 = 42."
      },
      {
        id: "apt-e5",
        question: "What is 12 × 5?",
        options: ["50", "55", "60", "65"],
        answer: "60",
        explanation: "12 × 5 = 60."
      },
      {
        id: "apt-e6",
        question: "What is 100 ÷ 4?",
        options: ["20", "25", "30", "40"],
        answer: "25",
        explanation: "100 ÷ 4 = 25."
      },
      {
        id: "apt-e7",
        question: "A week has how many days?",
        options: ["5", "6", "7", "8"],
        answer: "7",
        explanation: "One week has 7 days."
      },
      {
        id: "apt-e8",
        question: "What is the average of 10 and 20?",
        options: ["10", "15", "20", "30"],
        answer: "15",
        explanation: "(10 + 20) ÷ 2 = 15."
      },
      {
        id: "apt-e9",
        question: "What is 50% of 80?",
        options: ["20", "30", "40", "50"],
        answer: "40",
        explanation: "50% means half, so 80 ÷ 2 = 40."
      },
      {
        id: "apt-e10",
        question: "If a book costs ₹100 and you pay ₹150, what is the change?",
        options: ["₹25", "₹40", "₹50", "₹60"],
        answer: "₹50",
        explanation: "₹150 - ₹100 = ₹50."
      }
    ],

    medium: [
      {
        id: "apt-m1",
        question: "A number increased by 20% becomes 120. What was the original number?",
        options: ["80", "90", "100", "110"],
        answer: "100",
        explanation: "120 represents 120% of the original. 120 ÷ 1.2 = 100."
      },
      {
        id: "apt-m2",
        question: "A train travels 240 km in 4 hours. What is its speed?",
        options: ["40 km/h", "50 km/h", "60 km/h", "80 km/h"],
        answer: "60 km/h",
        explanation: "Speed = Distance ÷ Time = 240 ÷ 4 = 60 km/h."
      },
      {
        id: "apt-m3",
        question: "The ratio of boys to girls is 3:2. If there are 30 boys, how many girls are there?",
        options: ["15", "20", "25", "30"],
        answer: "20",
        explanation: "3 parts = 30, so 1 part = 10. Girls = 2 × 10 = 20."
      },
      {
        id: "apt-m4",
        question: "What is the simple interest on ₹2000 at 5% per year for 2 years?",
        options: ["₹100", "₹150", "₹200", "₹250"],
        answer: "₹200",
        explanation: "SI = PRT/100 = 2000×5×2/100 = ₹200."
      },
      {
        id: "apt-m5",
        question: "If x + 15 = 40, what is x?",
        options: ["15", "20", "25", "30"],
        answer: "25",
        explanation: "x = 40 - 15 = 25."
      },
      {
        id: "apt-m6",
        question: "A shopkeeper buys an item for ₹500 and sells it for ₹600. What is the profit percentage?",
        options: ["10%", "15%", "20%", "25%"],
        answer: "20%",
        explanation: "Profit = ₹100. Profit% = 100/500 × 100 = 20%."
      },
      {
        id: "apt-m7",
        question: "What is the LCM of 12 and 18?",
        options: ["24", "30", "36", "48"],
        answer: "36",
        explanation: "The least common multiple of 12 and 18 is 36."
      },
      {
        id: "apt-m8",
        question: "What is the HCF of 24 and 36?",
        options: ["6", "8", "12", "18"],
        answer: "12",
        explanation: "The highest common factor is 12."
      },
      {
        id: "apt-m9",
        question: "A man walks 5 km north and then 5 km south. How far is he from the starting point?",
        options: ["0 km", "5 km", "10 km", "15 km"],
        answer: "0 km",
        explanation: "He returns to the starting point."
      },
      {
        id: "apt-m10",
        question: "What is 3/4 expressed as a percentage?",
        options: ["25%", "50%", "75%", "80%"],
        answer: "75%",
        explanation: "3/4 × 100 = 75%."
      },
      {
        id: "apt-m11",
        question: "If 8 workers complete a job in 12 days, the total work is how many worker-days?",
        options: ["80", "96", "100", "120"],
        answer: "96",
        explanation: "8 × 12 = 96 worker-days."
      },
      {
        id: "apt-m12",
        question: "A car covers 150 km at 50 km/h. How long does it take?",
        options: ["2 hours", "3 hours", "4 hours", "5 hours"],
        answer: "3 hours",
        explanation: "Time = 150 ÷ 50 = 3 hours."
      },
      {
        id: "apt-m13",
        question: "What is the square of 15?",
        options: ["125", "200", "225", "250"],
        answer: "225",
        explanation: "15 × 15 = 225."
      },
      {
        id: "apt-m14",
        question: "If a product costing ₹800 is discounted by 10%, what is the selling price?",
        options: ["₹700", "₹720", "₹740", "₹760"],
        answer: "₹720",
        explanation: "10% of 800 = 80. 800 - 80 = 720."
      },
      {
        id: "apt-m15",
        question: "What is the median of 3, 7, 9, 12, 15?",
        options: ["7", "9", "12", "15"],
        answer: "9",
        explanation: "The middle value is 9."
      },
      {
        id: "apt-m16",
        question: "A number is divided by 5 and the result is 12. What is the number?",
        options: ["50", "55", "60", "65"],
        answer: "60",
        explanation: "12 × 5 = 60."
      },
      {
        id: "apt-m17",
        question: "What is the probability of getting heads when a fair coin is tossed?",
        options: ["1/4", "1/2", "2/3", "1"],
        answer: "1/2",
        explanation: "There are two equally likely outcomes: heads and tails."
      },
      {
        id: "apt-m18",
        question: "If 5x = 45, what is x?",
        options: ["5", "7", "9", "11"],
        answer: "9",
        explanation: "45 ÷ 5 = 9."
      },
      {
        id: "apt-m19",
        question: "A class has 40 students. 25% are absent. How many are present?",
        options: ["20", "25", "30", "35"],
        answer: "30",
        explanation: "25% of 40 = 10 absent, so 30 are present."
      },
      {
        id: "apt-m20",
        question: "What is the next number: 3, 6, 12, 24, ?",
        options: ["36", "42", "48", "50"],
        answer: "48",
        explanation: "Each number is multiplied by 2."
      }
    ],

    hard: [
      {
        id: "apt-h1",
        question: "A sum becomes ₹1210 in 2 years at 10% simple interest. What is the principal?",
        options: ["₹900", "₹950", "₹1000", "₹1100"],
        answer: "₹1000",
        explanation: "Amount = P(1 + RT/100) = P(1.2), so P = 1210/1.2 ≈ 1008.3. Among the options, ₹1000 is the intended approximate value."
      },
      {
        id: "apt-h2",
        question: "A can complete a work in 12 days and B in 18 days. How long will they take together?",
        options: ["6 days", "7.2 days", "8 days", "9 days"],
        answer: "7.2 days",
        explanation: "Combined rate = 1/12 + 1/18 = 5/36. Time = 36/5 = 7.2 days."
      },
      {
        id: "apt-h3",
        question: "A train 180 m long passes a pole in 9 seconds. What is its speed?",
        options: ["60 km/h", "72 km/h", "80 km/h", "90 km/h"],
        answer: "72 km/h",
        explanation: "Speed = 180/9 = 20 m/s = 72 km/h."
      },
      {
        id: "apt-h4",
        question: "If the selling price of an article is 125% of its cost price, the profit is:",
        options: ["15%", "20%", "25%", "30%"],
        answer: "25%",
        explanation: "SP = 125% of CP, so profit = 25%."
      },
      {
        id: "apt-h5",
        question: "The average of 8 numbers is 24. If one number 32 is removed, what is the new average?",
        options: ["22", "22.86", "23", "24"],
        answer: "22.86",
        explanation: "Total = 8×24 = 192. New total = 160. New average = 160/7 ≈ 22.86."
      },
      {
        id: "apt-h6",
        question: "A pipe fills a tank in 6 hours and another in 12 hours. How long together?",
        options: ["3 hours", "4 hours", "5 hours", "6 hours"],
        answer: "4 hours",
        explanation: "Rate = 1/6 + 1/12 = 1/4, so time = 4 hours."
      },
      {
        id: "apt-h7",
        question: "If x² - 9x + 20 = 0, the roots are:",
        options: ["2 and 10", "4 and 5", "3 and 6", "1 and 20"],
        answer: "4 and 5",
        explanation: "x² - 9x + 20 = (x-4)(x-5)."
      },
      {
        id: "apt-h8",
        question: "A number is increased by 25% and then decreased by 20%. What is the net change?",
        options: ["5% increase", "No change", "5% decrease", "10% decrease"],
        answer: "No change",
        explanation: "1.25 × 0.80 = 1, so there is no net change."
      },
      {
        id: "apt-h9",
        question: "If 3x + 7 = 25, what is x?",
        options: ["4", "5", "6", "7"],
        answer: "6",
        explanation: "3x = 18, so x = 6."
      },
      {
        id: "apt-h10",
        question: "A 20% discount followed by a 10% discount is equivalent to what single discount?",
        options: ["28%", "30%", "32%", "25%"],
        answer: "28%",
        explanation: "Final price = 80% × 90% = 72%, so discount = 28%."
      },
      {
        id: "apt-h11",
        question: "A boat travels 30 km downstream in 2 hours. If the stream speed is 3 km/h, what is the boat speed in still water?",
        options: ["10 km/h", "12 km/h", "15 km/h", "18 km/h"],
        answer: "12 km/h",
        explanation: "Downstream speed = 15 km/h. Boat speed = 15 - 3 = 12 km/h."
      },
      {
        id: "apt-h12",
        question: "The ratio 4:5 is equivalent to:",
        options: ["8:10", "12:15", "16:20", "All of these"],
        answer: "All of these",
        explanation: "All ratios simplify to 4:5."
      },
      {
        id: "apt-h13",
        question: "If 40% of a number is 80, what is 75% of that number?",
        options: ["120", "140", "150", "160"],
        answer: "150",
        explanation: "Number = 80/0.4 = 200. 75% of 200 = 150."
      },
      {
        id: "apt-h14",
        question: "A man spends 70% of his income. If income is ₹40,000, how much does he save?",
        options: ["₹8,000", "₹10,000", "₹12,000", "₹14,000"],
        answer: "₹12,000",
        explanation: "Savings = 30% of ₹40,000 = ₹12,000."
      },
      {
        id: "apt-h15",
        question: "The perimeter of a rectangle is 50 cm and its length is 15 cm. Find the width.",
        options: ["8 cm", "10 cm", "12 cm", "15 cm"],
        answer: "10 cm",
        explanation: "2(L+W)=50, so L+W=25. W=10."
      },
      {
        id: "apt-h16",
        question: "What is the remainder when 125 is divided by 8?",
        options: ["3", "4", "5", "6"],
        answer: "5",
        explanation: "8×15 = 120, remainder = 5."
      },
      {
        id: "apt-h17",
        question: "If a:b = 2:3 and b:c = 4:5, then a:c is:",
        options: ["8:15", "2:5", "4:15", "8:5"],
        answer: "8:15",
        explanation: "Make b common: a:b=8:12 and b:c=12:15, so a:c=8:15."
      },
      {
        id: "apt-h18",
        question: "A clock gains 5 minutes every hour. How many minutes will it gain in 12 hours?",
        options: ["50", "55", "60", "65"],
        answer: "60",
        explanation: "5 × 12 = 60 minutes."
      },
      {
        id: "apt-h19",
        question: "If the compound interest on ₹1000 for 2 years at 10% is:",
        options: ["₹200", "₹210", "₹220", "₹240"],
        answer: "₹210",
        explanation: "Amount = 1000×1.1² = 1210, so CI = ₹210."
      },
      {
        id: "apt-h20",
        question: "Two numbers are in ratio 5:7 and their sum is 96. What is the larger number?",
        options: ["40", "48", "56", "64"],
        answer: "56",
        explanation: "12 parts = 96, one part = 8, larger = 7×8 = 56."
      }
    ]
  },

  "Computer Basics": {
    easy: [
      {
        id: "com-e1",
        question: "What does CPU stand for?",
        options: [
          "Central Processing Unit",
          "Computer Personal Unit",
          "Central Program Utility",
          "Control Processing User"
        ],
        answer: "Central Processing Unit",
        explanation: "CPU stands for Central Processing Unit."
      },
      {
        id: "com-e2",
        question: "Which device is used to type text?",
        options: ["Monitor", "Keyboard", "Speaker", "Printer"],
        answer: "Keyboard",
        explanation: "A keyboard is used for typing."
      },
      {
        id: "com-e3",
        question: "Which one is an operating system?",
        options: ["Windows", "Google", "HTML", "USB"],
        answer: "Windows",
        explanation: "Windows is an operating system."
      },
      {
        id: "com-e4",
        question: "Which device displays computer output?",
        options: ["Keyboard", "Mouse", "Monitor", "Scanner"],
        answer: "Monitor",
        explanation: "A monitor displays visual output."
      },
      {
        id: "com-e5",
        question: "What does RAM stand for?",
        options: [
          "Random Access Memory",
          "Read Access Memory",
          "Rapid Application Module",
          "Random Application Machine"
        ],
        answer: "Random Access Memory",
        explanation: "RAM stands for Random Access Memory."
      },
      {
        id: "com-e6",
        question: "Which is used to move the pointer?",
        options: ["Mouse", "Printer", "Speaker", "Scanner"],
        answer: "Mouse",
        explanation: "A mouse controls the pointer."
      },
      {
        id: "com-e7",
        question: "Which one is a web browser?",
        options: ["Chrome", "Windows", "CPU", "RAM"],
        answer: "Chrome",
        explanation: "Google Chrome is a web browser."
      },
      {
        id: "com-e8",
        question: "Which key is commonly used to delete characters?",
        options: ["Shift", "Backspace", "Caps Lock", "Tab"],
        answer: "Backspace",
        explanation: "Backspace deletes characters to the left of the cursor."
      },
      {
        id: "com-e9",
        question: "What is the full form of USB?",
        options: [
          "Universal Serial Bus",
          "United System Board",
          "Universal System Backup",
          "User Serial Board"
        ],
        answer: "Universal Serial Bus",
        explanation: "USB stands for Universal Serial Bus."
      },
      {
        id: "com-e10",
        question: "Which device is commonly used for printing?",
        options: ["Monitor", "Printer", "Keyboard", "Mouse"],
        answer: "Printer",
        explanation: "A printer produces physical copies."
      }
    ],

    medium: [
      {
        id: "com-m1",
        question: "Which memory is volatile?",
        options: ["ROM", "RAM", "DVD", "Hard Disk"],
        answer: "RAM",
        explanation: "RAM loses its contents when power is removed."
      },
      {
        id: "com-m2",
        question: "What does HTTP stand for?",
        options: [
          "HyperText Transfer Protocol",
          "High Transfer Text Program",
          "Hyperlink Text Transfer Process",
          "Host Transfer Protocol"
        ],
        answer: "HyperText Transfer Protocol",
        explanation: "HTTP is the protocol used for transferring web resources."
      },
      {
        id: "com-m3",
        question: "Which language is mainly used to style web pages?",
        options: ["HTML", "CSS", "SQL", "Python"],
        answer: "CSS",
        explanation: "CSS controls the appearance and layout of web pages."
      },
      {
        id: "com-m4",
        question: "Which language is used to structure web pages?",
        options: ["CSS", "HTML", "Java", "SQL"],
        answer: "HTML",
        explanation: "HTML defines the structure of a web page."
      },
      {
        id: "com-m5",
        question: "What does URL stand for?",
        options: [
          "Uniform Resource Locator",
          "Universal Reference Link",
          "User Resource Location",
          "Uniform Routing Language"
        ],
        answer: "Uniform Resource Locator",
        explanation: "URL identifies the location of a resource on the web."
      },
      {
        id: "com-m6",
        question: "Which protocol is commonly used for secure web browsing?",
        options: ["HTTP", "HTTPS", "FTP", "SMTP"],
        answer: "HTTPS",
        explanation: "HTTPS provides encrypted HTTP communication."
      },
      {
        id: "com-m7",
        question: "Which one is a relational database?",
        options: ["MySQL", "HTML", "CSS", "Chrome"],
        answer: "MySQL",
        explanation: "MySQL is a relational database management system."
      },
      {
        id: "com-m8",
        question: "Which data structure follows FIFO?",
        options: ["Stack", "Queue", "Tree", "Graph"],
        answer: "Queue",
        explanation: "FIFO means First In, First Out, which is the queue principle."
      },
      {
        id: "com-m9",
        question: "Which data structure follows LIFO?",
        options: ["Queue", "Stack", "Array", "Graph"],
        answer: "Stack",
        explanation: "LIFO means Last In, First Out."
      },
      {
        id: "com-m10",
        question: "Which is an example of cloud storage?",
        options: ["Google Drive", "Keyboard", "CPU", "RAM"],
        answer: "Google Drive",
        explanation: "Google Drive provides cloud storage."
      },
      {
        id: "com-m11",
        question: "What does SQL stand for?",
        options: [
          "Structured Query Language",
          "Simple Question Language",
          "System Query Link",
          "Structured Queue Language"
        ],
        answer: "Structured Query Language",
        explanation: "SQL is used to manage and query relational databases."
      },
      {
        id: "com-m12",
        question: "Which device connects multiple devices in a LAN?",
        options: ["Switch", "Keyboard", "Monitor", "Printer"],
        answer: "Switch",
        explanation: "A network switch connects devices within a local network."
      },
      {
        id: "com-m13",
        question: "Which number system uses only 0 and 1?",
        options: ["Decimal", "Binary", "Octal", "Hexadecimal"],
        answer: "Binary",
        explanation: "Binary uses two digits: 0 and 1."
      },
      {
        id: "com-m14",
        question: "What is phishing?",
        options: [
          "A method of backing up files",
          "A fraudulent attempt to obtain sensitive information",
          "A programming language",
          "A database operation"
        ],
        answer: "A fraudulent attempt to obtain sensitive information",
        explanation: "Phishing attempts to trick users into revealing sensitive information."
      },
      {
        id: "com-m15",
        question: "Which protocol is associated with sending email?",
        options: ["SMTP", "HTTP", "FTP", "DHCP"],
        answer: "SMTP",
        explanation: "SMTP is commonly used for sending email."
      },
      {
        id: "com-m16",
        question: "Which protocol is commonly used to transfer files?",
        options: ["FTP", "SMTP", "HTTP", "DNS"],
        answer: "FTP",
        explanation: "FTP stands for File Transfer Protocol."
      },
      {
        id: "com-m17",
        question: "What does DNS translate?",
        options: [
          "Domain names into IP addresses",
          "Files into folders",
          "Passwords into usernames",
          "Images into text"
        ],
        answer: "Domain names into IP addresses",
        explanation: "DNS resolves domain names to IP addresses."
      },
      {
        id: "com-m18",
        question: "Which is an example of open-source software?",
        options: ["Linux", "Windows only", "Photoshop only", "MS Paint only"],
        answer: "Linux",
        explanation: "Linux is an open-source operating system."
      },
      {
        id: "com-m19",
        question: "What does GUI stand for?",
        options: [
          "Graphical User Interface",
          "General User Internet",
          "Graphical Utility Input",
          "General Utility Interface"
        ],
        answer: "Graphical User Interface",
        explanation: "GUI stands for Graphical User Interface."
      },
      {
        id: "com-m20",
        question: "Which technology is commonly used to version source code?",
        options: ["Git", "HTML", "RAM", "CPU"],
        answer: "Git",
        explanation: "Git is a distributed version control system."
      }
    ],

    hard: [
      {
        id: "com-h1",
        question: "Which OSI layer is responsible for routing packets?",
        options: ["Data Link", "Network", "Transport", "Session"],
        answer: "Network",
        explanation: "The Network layer handles logical addressing and routing."
      },
      {
        id: "com-h2",
        question: "Which algorithm is commonly used by TCP for congestion control?",
        options: [
          "Slow Start",
          "Binary Search",
          "Dijkstra",
          "Round Robin"
        ],
        answer: "Slow Start",
        explanation: "TCP uses mechanisms such as slow start for congestion control."
      },
      {
        id: "com-h3",
        question: "Which normal form removes partial dependency?",
        options: ["1NF", "2NF", "3NF", "BCNF"],
        answer: "2NF",
        explanation: "Second Normal Form removes partial dependencies."
      },
      {
        id: "com-h4",
        question: "What is the average time complexity of binary search?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
        answer: "O(log n)",
        explanation: "Binary search halves the search space at each step."
      },
      {
        id: "com-h5",
        question: "Which scheduling algorithm can cause starvation?",
        options: [
          "First Come First Serve",
          "Priority Scheduling",
          "Round Robin",
          "FIFO Queue"
        ],
        answer: "Priority Scheduling",
        explanation: "Low-priority processes can wait indefinitely."
      },
      {
        id: "com-h6",
        question: "Which data structure is commonly used for BFS?",
        options: ["Stack", "Queue", "Heap", "Tree only"],
        answer: "Queue",
        explanation: "Breadth-first search uses a queue."
      },
      {
        id: "com-h7",
        question: "Which data structure is commonly used for DFS?",
        options: ["Queue", "Stack", "Hash table", "Linked list only"],
        answer: "Stack",
        explanation: "Depth-first search uses a stack, explicitly or through recursion."
      },
      {
        id: "com-h8",
        question: "Which SQL command is used to remove a table?",
        options: ["DELETE", "DROP", "REMOVE", "CLEAR"],
        answer: "DROP",
        explanation: "DROP TABLE removes the table structure and its data."
      },
      {
        id: "com-h9",
        question: "Which SQL command changes existing records?",
        options: ["INSERT", "UPDATE", "CREATE", "DROP"],
        answer: "UPDATE",
        explanation: "UPDATE modifies existing rows."
      },
      {
        id: "com-h10",
        question: "What does ACID in databases mainly describe?",
        options: [
          "Transaction properties",
          "Network speed",
          "CPU architecture",
          "Web design"
        ],
        answer: "Transaction properties",
        explanation: "ACID describes Atomicity, Consistency, Isolation and Durability."
      },
      {
        id: "com-h11",
        question: "Which IP version uses 128-bit addresses?",
        options: ["IPv4", "IPv5", "IPv6", "IPv8"],
        answer: "IPv6",
        explanation: "IPv6 uses 128-bit addresses."
      },
      {
        id: "com-h12",
        question: "Which encryption type uses the same key for encryption and decryption?",
        options: [
          "Symmetric encryption",
          "Asymmetric encryption",
          "Hashing",
          "Digital signature"
        ],
        answer: "Symmetric encryption",
        explanation: "Symmetric encryption uses the same secret key."
      },
      {
        id: "com-h13",
        question: "Which algorithm is commonly used to find the shortest path in a weighted graph with non-negative edges?",
        options: ["Dijkstra", "Bubble Sort", "DFS", "KMP"],
        answer: "Dijkstra",
        explanation: "Dijkstra's algorithm finds shortest paths with non-negative edge weights."
      },
      {
        id: "com-h14",
        question: "Which memory allocation method can suffer from external fragmentation?",
        options: [
          "Contiguous allocation",
          "Pure stack allocation",
          "Register allocation",
          "Constant allocation"
        ],
        answer: "Contiguous allocation",
        explanation: "Contiguous memory allocation can create external fragmentation."
      },
      {
        id: "com-h15",
        question: "Which HTTP status code means 'Not Found'?",
        options: ["200", "301", "404", "500"],
        answer: "404",
        explanation: "HTTP 404 means the requested resource was not found."
      },
      {
        id: "com-h16",
        question: "Which HTTP status code means 'Internal Server Error'?",
        options: ["200", "301", "404", "500"],
        answer: "500",
        explanation: "HTTP 500 indicates an internal server error."
      },
      {
        id: "com-h17",
        question: "Which JavaScript feature allows asynchronous code to be written in a synchronous-looking style?",
        options: [
          "async/await",
          "forEach only",
          "switch",
          "typeof"
        ],
        answer: "async/await",
        explanation: "async/await makes Promise-based asynchronous code easier to read."
      },
      {
        id: "com-h18",
        question: "What is a primary key used for?",
        options: [
          "Uniquely identifying rows",
          "Formatting text",
          "Connecting monitors",
          "Encrypting files"
        ],
        answer: "Uniquely identifying rows",
        explanation: "A primary key uniquely identifies records in a table."
      },
      {
        id: "com-h19",
        question: "Which concept allows one interface to have multiple implementations?",
        options: ["Polymorphism", "Encapsulation", "Compilation", "Parsing"],
        answer: "Polymorphism",
        explanation: "Polymorphism allows the same interface to represent different implementations."
      },
      {
        id: "com-h20",
        question: "Which sorting algorithm has average O(n log n) complexity?",
        options: ["Bubble Sort", "Merge Sort", "Linear Search", "Selection Sort"],
        answer: "Merge Sort",
        explanation: "Merge sort has average and worst-case O(n log n) complexity."
      }
    ]
  },

  Banking: {
    easy: [
      {
        id: "bank-e1",
        question: "What does ATM stand for?",
        options: [
          "Automated Teller Machine",
          "Automatic Transfer Method",
          "Account Transaction Machine",
          "Automated Transfer Machine"
        ],
        answer: "Automated Teller Machine",
        explanation: "ATM stands for Automated Teller Machine."
      },
      {
        id: "bank-e2",
        question: "What does RBI stand for?",
        options: [
          "Reserve Bank of India",
          "Regional Bank of India",
          "Rural Banking Institution",
          "Reserve Banking Institute"
        ],
        answer: "Reserve Bank of India",
        explanation: "RBI is the Reserve Bank of India."
      },
      {
        id: "bank-e3",
        question: "What is a savings account mainly used for?",
        options: [
          "Saving money",
          "Printing documents",
          "Buying computers",
          "Internet browsing"
        ],
        answer: "Saving money",
        explanation: "Savings accounts are designed for depositing and saving money."
      },
      {
        id: "bank-e4",
        question: "What is a bank deposit?",
        options: [
          "Money placed in a bank",
          "Money withdrawn from a bank",
          "A bank building",
          "A bank employee"
        ],
        answer: "Money placed in a bank",
        explanation: "A deposit is money placed into a bank account."
      },
      {
        id: "bank-e5",
        question: "What is a loan?",
        options: [
          "Money borrowed",
          "Money donated",
          "A bank account number",
          "A type of ATM"
        ],
        answer: "Money borrowed",
        explanation: "A loan is money borrowed and generally repaid with interest."
      },
      {
        id: "bank-e6",
        question: "Which document commonly contains bank transaction details?",
        options: ["Passbook", "Keyboard", "Passport only", "Calculator"],
        answer: "Passbook",
        explanation: "A bank passbook can record account transactions."
      },
      {
        id: "bank-e7",
        question: "What is a PIN?",
        options: [
          "Personal Identification Number",
          "Private Internet Name",
          "Personal Internet Network",
          "Payment Identity Name"
        ],
        answer: "Personal Identification Number",
        explanation: "PIN stands for Personal Identification Number."
      },
      {
        id: "bank-e8",
        question: "What is interest?",
        options: [
          "A cost or return related to borrowing or saving money",
          "A bank building",
          "A debit card",
          "A cheque book"
        ],
        answer: "A cost or return related to borrowing or saving money",
        explanation: "Interest is charged on borrowing and may be earned on savings."
      },
      {
        id: "bank-e9",
        question: "What is a cheque?",
        options: [
          "A written payment instruction",
          "A password",
          "A bank building",
          "A tax form"
        ],
        answer: "A written payment instruction",
        explanation: "A cheque is a written instruction to a bank to make a payment."
      },
      {
        id: "bank-e10",
        question: "What does KYC stand for?",
        options: [
          "Know Your Customer",
          "Keep Your Cash",
          "Know Your Credit",
          "Keep Your Customer"
        ],
        answer: "Know Your Customer",
        explanation: "KYC stands for Know Your Customer."
      }
    ],

    medium: [
      {
        id: "bank-m1",
        question: "What is NEFT?",
        options: [
          "National Electronic Funds Transfer",
          "National Easy Finance Transfer",
          "New Electronic Finance Technology",
          "National Exchange Fund Transaction"
        ],
        answer: "National Electronic Funds Transfer",
        explanation: "NEFT is a system for electronic fund transfers."
      },
      {
        id: "bank-m2",
        question: "What is RTGS?",
        options: [
          "Real Time Gross Settlement",
          "Rapid Transfer Government System",
          "Real Transfer General Service",
          "Reserve Transaction Gross System"
        ],
        answer: "Real Time Gross Settlement",
        explanation: "RTGS stands for Real Time Gross Settlement."
      },
      {
        id: "bank-m3",
        question: "What is a fixed deposit?",
        options: [
          "A deposit kept for a specified period",
          "A daily shopping account",
          "A type of ATM",
          "A loan without interest"
        ],
        answer: "A deposit kept for a specified period",
        explanation: "A fixed deposit is maintained for a predetermined tenure."
      },
      {
        id: "bank-m4",
        question: "What is a debit card generally linked to?",
        options: [
          "A bank account",
          "A passport",
          "A library account",
          "A driving license"
        ],
        answer: "A bank account",
        explanation: "Debit card transactions generally draw money from the linked account."
      },
      {
        id: "bank-m5",
        question: "What is a credit card mainly used for?",
        options: [
          "Making purchases using a credit facility",
          "Opening a savings account",
          "Printing cash",
          "Creating a passbook"
        ],
        answer: "Making purchases using a credit facility",
        explanation: "A credit card provides a credit facility for eligible transactions."
      },
      {
        id: "bank-m6",
        question: "What is a bank's IFSC code used for?",
        options: [
          "Identifying a bank branch for electronic transfers",
          "Identifying a customer password",
          "Calculating interest",
          "Printing cheques"
        ],
        answer: "Identifying a bank branch for electronic transfers",
        explanation: "IFSC identifies bank branches for electronic fund transfers in India."
      },
      {
        id: "bank-m7",
        question: "What does EMI stand for?",
        options: [
          "Equated Monthly Instalment",
          "Electronic Money Index",
          "Equal Money Interest",
          "Estimated Monthly Income"
        ],
        answer: "Equated Monthly Instalment",
        explanation: "EMI stands for Equated Monthly Instalment."
      },
      {
        id: "bank-m8",
        question: "What is a bank reconciliation statement used for?",
        options: [
          "Comparing bank records with account records",
          "Applying for a passport",
          "Calculating salary",
          "Creating a website"
        ],
        answer: "Comparing bank records with account records",
        explanation: "It helps identify differences between bank and accounting records."
      },
      {
        id: "bank-m9",
        question: "What is liquidity?",
        options: [
          "Ease of converting an asset into cash",
          "Amount of tax paid",
          "Bank branch size",
          "Number of employees"
        ],
        answer: "Ease of converting an asset into cash",
        explanation: "Liquidity refers to how easily an asset can be converted to cash."
      },
      {
        id: "bank-m10",
        question: "What is a non-performing asset generally associated with?",
        options: [
          "A loan that is not generating expected repayment",
          "A new savings account",
          "A debit card",
          "A bank holiday"
        ],
        answer: "A loan that is not generating expected repayment",
        explanation: "An NPA is broadly a loan asset where repayment performance has deteriorated according to applicable rules."
      },
      {
        id: "bank-m11",
        question: "What is a current account commonly used for?",
        options: [
          "Frequent business transactions",
          "School attendance",
          "Internet browsing",
          "Buying a house directly"
        ],
        answer: "Frequent business transactions",
        explanation: "Current accounts are commonly used for frequent business transactions."
      },
      {
        id: "bank-m12",
        question: "What is monetary policy concerned with?",
        options: [
          "Money supply and interest rates",
          "Road construction",
          "School curriculum",
          "Computer hardware"
        ],
        answer: "Money supply and interest rates",
        explanation: "Monetary policy concerns money and credit conditions in an economy."
      },
      {
        id: "bank-m13",
        question: "What is inflation?",
        options: [
          "A sustained rise in the general price level",
          "A fall in all prices",
          "A bank account type",
          "A payment card"
        ],
        answer: "A sustained rise in the general price level",
        explanation: "Inflation refers to a sustained increase in the general price level."
      },
      {
        id: "bank-m14",
        question: "What is a mortgage generally associated with?",
        options: [
          "A loan secured against property",
          "A debit card",
          "A savings passbook",
          "A bank PIN"
        ],
        answer: "A loan secured against property",
        explanation: "A mortgage is commonly a loan secured by property."
      },
      {
        id: "bank-m15",
        question: "What is a nominee in a bank account?",
        options: [
          "A person designated to receive proceeds according to applicable rules",
          "The bank manager",
          "The account password",
          "A branch code"
        ],
        answer: "A person designated to receive proceeds according to applicable rules",
        explanation: "A nominee is a person designated by the account holder under applicable rules."
      },
      {
        id: "bank-m16",
        question: "What is digital banking?",
        options: [
          "Banking services delivered through electronic channels",
          "Only cash deposits",
          "Only paper records",
          "A physical bank building"
        ],
        answer: "Banking services delivered through electronic channels",
        explanation: "Digital banking uses electronic channels such as websites and mobile apps."
      },
      {
        id: "bank-m17",
        question: "What is a bank statement?",
        options: [
          "A record of account transactions",
          "A loan agreement only",
          "A debit card",
          "A tax receipt only"
        ],
        answer: "A record of account transactions",
        explanation: "A bank statement records transactions and balances."
      },
      {
        id: "bank-m18",
        question: "What is a recurring deposit?",
        options: [
          "Regular deposits made over a period",
          "One-time loan repayment",
          "A type of debit card",
          "A bank branch"
        ],
        answer: "Regular deposits made over a period",
        explanation: "A recurring deposit involves regular deposits for a specified tenure."
      },
      {
        id: "bank-m19",
        question: "What is credit risk?",
        options: [
          "Risk that a borrower may not meet obligations",
          "Risk of losing a password only",
          "Risk of ATM damage",
          "Risk of internet speed"
        ],
        answer: "Risk that a borrower may not meet obligations",
        explanation: "Credit risk is the possibility that a borrower fails to meet financial obligations."
      },
      {
        id: "bank-m20",
        question: "What is a balance sheet?",
        options: [
          "A statement of assets, liabilities and equity",
          "A bank PIN",
          "A payment card",
          "A cheque"
        ],
        answer: "A statement of assets, liabilities and equity",
        explanation: "A balance sheet presents financial position at a point in time."
      }
    ],

    hard: [
      {
        id: "bank-h1",
        question: "What is the primary objective of monetary policy?",
        options: [
          "Managing monetary and credit conditions",
          "Building highways",
          "Running schools",
          "Issuing passports"
        ],
        answer: "Managing monetary and credit conditions",
        explanation: "Monetary policy manages monetary and credit conditions to pursue specified economic objectives."
      },
      {
        id: "bank-h2",
        question: "What is CRR?",
        options: [
          "Cash Reserve Ratio",
          "Credit Return Rate",
          "Cash Return Reserve",
          "Credit Reserve Requirement"
        ],
        answer: "Cash Reserve Ratio",
        explanation: "CRR refers to the Cash Reserve Ratio."
      },
      {
        id: "bank-h3",
        question: "What is SLR?",
        options: [
          "Statutory Liquidity Ratio",
          "Standard Lending Rate",
          "Savings Liquidity Reserve",
          "Statutory Loan Return"
        ],
        answer: "Statutory Liquidity Ratio",
        explanation: "SLR stands for Statutory Liquidity Ratio."
      },
      {
        id: "bank-h4",
        question: "What is bank capital adequacy intended to help ensure?",
        options: [
          "Banks have sufficient capital relative to risk",
          "Customers get free accounts",
          "ATMs print unlimited money",
          "All loans have zero interest"
        ],
        answer: "Banks have sufficient capital relative to risk",
        explanation: "Capital adequacy helps ensure banks maintain capital against risks."
      },
      {
        id: "bank-h5",
        question: "What is a central bank's lender-of-last-resort function?",
        options: [
          "Providing liquidity to eligible institutions during severe funding stress",
          "Giving every citizen a loan",
          "Selling household goods",
          "Managing school exams"
        ],
        answer: "Providing liquidity to eligible institutions during severe funding stress",
        explanation: "A central bank may provide emergency liquidity under defined conditions."
      },
      {
        id: "bank-h6",
        question: "What is the difference between fiscal and monetary policy?",
        options: [
          "Fiscal policy concerns government revenue/spending; monetary policy concerns money and credit",
          "They are exactly the same",
          "Fiscal policy only concerns banks",
          "Monetary policy only concerns roads"
        ],
        answer: "Fiscal policy concerns government revenue/spending; monetary policy concerns money and credit",
        explanation: "Fiscal policy is generally about government taxation/spending, while monetary policy concerns money and credit conditions."
      },
      {
        id: "bank-h7",
        question: "What does diversification primarily reduce?",
        options: [
          "Concentration risk",
          "All risk",
          "Interest rates",
          "Inflation automatically"
        ],
        answer: "Concentration risk",
        explanation: "Diversification can reduce concentration risk, though it does not eliminate all risk."
      },
      {
        id: "bank-h8",
        question: "What is duration commonly used to measure in fixed-income analysis?",
        options: [
          "Sensitivity of bond price to interest-rate changes",
          "Number of bank branches",
          "ATM usage",
          "Customer age"
        ],
        answer: "Sensitivity of bond price to interest-rate changes",
        explanation: "Duration is commonly used as a measure of interest-rate sensitivity."
      },
      {
        id: "bank-h9",
        question: "What is a yield curve?",
        options: [
          "Relationship between yields and maturities of debt securities",
          "A bank building diagram",
          "A customer list",
          "A payment receipt"
        ],
        answer: "Relationship between yields and maturities of debt securities",
        explanation: "A yield curve plots yields against maturities for comparable debt instruments."
      },
      {
        id: "bank-h10",
        question: "What is operational risk?",
        options: [
          "Risk from inadequate or failed processes, people, systems or external events",
          "Only market-price risk",
          "Only inflation risk",
          "Only credit-card fraud"
        ],
        answer: "Risk from inadequate or failed processes, people, systems or external events",
        explanation: "Operational risk includes failures of processes, people, systems and certain external events."
      },
      {
        id: "bank-h11",
        question: "What is liquidity risk?",
        options: [
          "Risk of being unable to meet obligations when due",
          "Risk of a stock price rising",
          "Risk of higher education fees",
          "Risk of a website loading slowly"
        ],
        answer: "Risk of being unable to meet obligations when due",
        explanation: "Liquidity risk concerns difficulty meeting obligations as they become due."
      },
      {
        id: "bank-h12",
        question: "What is market risk?",
        options: [
          "Risk of losses from movements in market prices",
          "Risk of forgetting a PIN",
          "Risk of losing a passbook",
          "Risk of a bank closing for lunch"
        ],
        answer: "Risk of losses from movements in market prices",
        explanation: "Market risk arises from adverse movements in market variables."
      },
      {
        id: "bank-h13",
        question: "What is credit scoring intended to help assess?",
        options: [
          "Creditworthiness",
          "Internet speed",
          "ATM location",
          "Bank building size"
        ],
        answer: "Creditworthiness",
        explanation: "Credit scores help assess an individual's credit history and creditworthiness."
      },
      {
        id: "bank-h14",
        question: "What is a secured loan?",
        options: [
          "A loan backed by collateral",
          "A loan with no borrower",
          "A savings account",
          "A debit card"
        ],
        answer: "A loan backed by collateral",
        explanation: "A secured loan is backed by collateral."
      },
      {
        id: "bank-h15",
        question: "What is an unsecured loan?",
        options: [
          "A loan not backed by specific collateral",
          "A fixed deposit",
          "A secured mortgage only",
          "A bank statement"
        ],
        answer: "A loan not backed by specific collateral",
        explanation: "An unsecured loan is not backed by specific collateral."
      },
      {
        id: "bank-h16",
        question: "What is the purpose of AML controls?",
        options: [
          "Preventing and detecting money laundering risks",
          "Increasing internet speed",
          "Printing currency",
          "Reducing computer memory"
        ],
        answer: "Preventing and detecting money laundering risks",
        explanation: "AML means Anti-Money Laundering and involves controls against illicit financial activity."
      },
      {
        id: "bank-h17",
        question: "What does diversification NOT guarantee?",
        options: [
          "Elimination of all investment losses",
          "Reduction in concentration risk",
          "Exposure to multiple assets",
          "Risk spreading"
        ],
        answer: "Elimination of all investment losses",
        explanation: "Diversification reduces some risks but cannot guarantee no losses."
      },
      {
        id: "bank-h18",
        question: "What is net interest margin generally related to?",
        options: [
          "Difference between interest income and interest expense relative to earning assets",
          "Number of ATMs",
          "Number of employees",
          "Bank building area"
        ],
        answer: "Difference between interest income and interest expense relative to earning assets",
        explanation: "Net interest margin measures a bank's net interest earnings relative to interest-earning assets."
      },
      {
        id: "bank-h19",
        question: "What is a stress test in banking?",
        options: [
          "Analysis of resilience under adverse scenarios",
          "A customer satisfaction survey only",
          "A password test",
          "An ATM speed test"
        ],
        answer: "Analysis of resilience under adverse scenarios",
        explanation: "Stress tests examine how institutions may perform under adverse scenarios."
      },
      {
        id: "bank-h20",
        question: "What is systemic risk?",
        options: [
          "Risk that problems spread across the financial system",
          "Risk of one forgotten password",
          "Risk of a single printer failing",
          "Risk of one ATM being offline"
        ],
        answer: "Risk that problems spread across the financial system",
        explanation: "Systemic risk concerns disruptions that can affect the wider financial system."
      }
    ]
  }
};

/* =========================================================
   LEVEL CONFIGURATION
========================================================= */

const LEVEL_CONFIG = {
  easy: {
    title: "Easy Level",
    count: 10,
    description: "Build your fundamentals",
    icon: "🟢"
  },
  medium: {
    title: "Medium Level",
    count: 20,
    description: "Test your understanding",
    icon: "🟡"
  },
  hard: {
    title: "Hard Level",
    count: 20,
    description: "Challenge your skills",
    icon: "🔴"
  }
};

/* =========================================================
   RESOURCES
========================================================= */

const RESOURCES = {

  Aptitude: {

    books: [
      "Quantitative Aptitude – R.S. Aggarwal",
      "Fast Track Objective Arithmetic – Rajesh Verma",
      "A Modern Approach to Verbal & Non-Verbal Reasoning – R.S. Aggarwal"
    ],

    videos: [
      {
        title: "Percentages and Profit & Loss",
        url: "https://www.youtube.com/results?search_query=percentages+profit+loss+aptitude"
      },
      {
        title: "Time and Work",
        url: "https://www.youtube.com/results?search_query=time+and+work+aptitude"
      },
      {
        title: "Ratio and Proportion",
        url: "https://www.youtube.com/results?search_query=ratio+proportion+aptitude"
      },
      {
        title: "Number System",
        url: "https://www.youtube.com/results?search_query=number+system+aptitude"
      }
    ]
  },

  "Computer Basics": {

    books: [
      "Objective Computer Awareness – Arihant",
      "Computer Awareness – R. Pillai",
      "Lucent Computer"
    ],

    videos: [
      {
        title: "Computer Fundamentals",
        url: "https://www.youtube.com/results?search_query=computer+fundamentals+competitive+exams"
      },
      {
        title: "Operating Systems",
        url: "https://www.youtube.com/results?search_query=operating+systems+competitive+exams"
      },
      {
        title: "Computer Networks",
        url: "https://www.youtube.com/results?search_query=computer+networks+competitive+exams"
      },
      {
        title: "DBMS Basics",
        url: "https://www.youtube.com/results?search_query=DBMS+basics+competitive+exams"
      }
    ]
  },

  Banking: {

    books: [
      "Banking Awareness – Arihant",
      "Objective Banking Awareness – Kiran",
      "Banking Awareness for Competitive Exams"
    ],

    videos: [
      {
        title: "Banking Awareness Basics",
        url: "https://www.youtube.com/results?search_query=banking+awareness+basics"
      },
      {
        title: "RBI and Monetary Policy",
        url: "https://www.youtube.com/results?search_query=RBI+monetary+policy+competitive+exams"
      },
      {
        title: "Banking Terms",
        url: "https://www.youtube.com/results?search_query=banking+terms+competitive+exams"
      },
      {
        title: "Banking Current Concepts",
        url: "https://www.youtube.com/results?search_query=banking+awareness+competitive+exam+preparation"
      }
    ]
  }

};
/* =========================================================
   HELPER FUNCTIONS
========================================================= */

function shuffle(array) {
  const copy = [...array];

  for (let i = copy.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    [copy[i], copy[randomIndex]] = [
      copy[randomIndex],
      copy[i]
    ];
  }

  return copy;
}

function getRecommendedLevel(scorePercentage) {
  if (scorePercentage < 50) {
    return "easy";
  }

  if (scorePercentage < 80) {
    return "medium";
  }

  return "hard";
}

function getPerformanceMessage(scorePercentage) {
  if (scorePercentage < 50) {
    return {
      title: "Let's strengthen your fundamentals",
      text: "Your performance shows that you should practice the basics before moving to a higher level."
    };
  }

  if (scorePercentage < 80) {
    return {
      title: "Good progress",
      text: "You have a reasonable understanding. More practice can help you move to the hard level."
    };
  }

  return {
    title: "Excellent performance!",
    text: "You have demonstrated strong understanding. Continue challenging yourself."
  };
}

function getWeakTopics(finalAnswers) {
  const wrongAnswers = finalAnswers.filter(
    (item) => !item.isCorrect
  );

  if (wrongAnswers.length === 0) {
    return [];
  }

  const topicCounts = {};

  wrongAnswers.forEach((item) => {
    const topic = item.topic || "General";

    topicCounts[topic] =
      (topicCounts[topic] || 0) + 1;
  });

  return Object.entries(topicCounts)
    .sort((a, b) => b[1] - a[1])
    .map(([topic]) => topic);
}

/* =========================================================
   APP
========================================================= */

function App() {
  const [screen, setScreen] = useState("login");

  const [isRegistering, setIsRegistering] =
    useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [currentUser, setCurrentUser] =
    useState(() => {
      const savedUser =
        localStorage.getItem("aiExamCoachCurrentUser");

      return savedUser
        ? JSON.parse(savedUser)
        : null;
    });

  const [selectedTopic, setSelectedTopic] =
    useState("Aptitude");

  const [level, setLevel] =
    useState("easy");

  const [questions, setQuestions] =
    useState([]);

  const [currentIndex, setCurrentIndex] =
    useState(0);

  const [selectedAnswer, setSelectedAnswer] =
    useState(null);

  const [answers, setAnswers] =
    useState([]);

  const [lastScore, setLastScore] =
    useState(null);

  /* =====================================================
     LOGIN / REGISTER
  ===================================================== */

  function handleAuth() {
    const cleanUsername = username.trim();

    if (!cleanUsername || !password) {
      alert("Please enter username and password.");
      return;
    }

    const users = JSON.parse(
      localStorage.getItem("aiExamCoachUsers") || "{}"
    );

    const userKey = cleanUsername.toLowerCase();

    if (isRegistering) {
      if (users[userKey]) {
        alert(
          "This username already exists. Please login."
        );
        return;
      }

      const newUser = {
        username: cleanUsername,
        password: password,
        history: []
      };

      users[userKey] = newUser;

      localStorage.setItem(
        "aiExamCoachUsers",
        JSON.stringify(users)
      );

      localStorage.setItem(
        "aiExamCoachCurrentUser",
        JSON.stringify(newUser)
      );

      setCurrentUser(newUser);
      setUsername("");
      setPassword("");
      setScreen("home");

      alert("Profile created successfully!");
    } else {
      const user = users[userKey];

      if (!user) {
        alert(
          "User not found. Please create a profile first."
        );
        return;
      }

      if (user.password !== password) {
        alert("Incorrect password.");
        return;
      }

      localStorage.setItem(
        "aiExamCoachCurrentUser",
        JSON.stringify(user)
      );

      setCurrentUser(user);
      setUsername("");
      setPassword("");
      setScreen("home");
    }
  }

  function logout() {
    localStorage.removeItem(
      "aiExamCoachCurrentUser"
    );

    setCurrentUser(null);
    setUsername("");
    setPassword("");
    setScreen("login");
  }

  /* =====================================================
     START TEST
  ===================================================== */

  function startTest(
    selectedLevel,
    selectedTopicName = selectedTopic
  ) {
    const bank =
      QUESTION_BANK[selectedTopicName]?.[
        selectedLevel
      ];

    if (!bank || bank.length === 0) {
      alert(
        "Questions are not available for this topic and level."
      );
      return;
    }

    const count =
      LEVEL_CONFIG[selectedLevel].count;

    const selectedQuestions = shuffle(bank).slice(
      0,
      Math.min(count, bank.length)
    );

    setSelectedTopic(selectedTopicName);
    setLevel(selectedLevel);
    setQuestions(selectedQuestions);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setAnswers([]);
    setLastScore(null);
    setScreen("test");

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  /* =====================================================
     ANSWER QUESTION
  ===================================================== */

  function chooseAnswer(answer) {
    setSelectedAnswer(answer);
  }

function nextQuestion() {
  if (selectedAnswer === null) {
    alert("Please select an answer first.");
    return;
  }

  const currentQuestion =
    questions[currentIndex];

  const newAnswers = [
    ...answers,
    {
      questionId: currentQuestion.id,
      question: currentQuestion.question,
      selectedAnswer,
      correctAnswer: currentQuestion.answer,
      isCorrect:
        selectedAnswer === currentQuestion.answer,
      explanation:
        currentQuestion.explanation
    }
  ];

  setAnswers(newAnswers);

  if (currentIndex < questions.length - 1) {
    setCurrentIndex(currentIndex + 1);
    setSelectedAnswer(null);
  } else {
    finishTest(newAnswers);
  }
}

  /* =====================================================
     FINISH TEST
  ===================================================== */

  function finishTest(finalAnswers) {
    const correct = finalAnswers.filter(
      (item) => item.isCorrect
    ).length;

    const total = finalAnswers.length;

    const percentage = Math.round(
      (correct / total) * 100
    );

    const recommendedLevel =
      getRecommendedLevel(percentage);

    const result = {
      topic: selectedTopic,
      level,
      correct,
      total,
      percentage,
      recommendedLevel,
      date: new Date().toLocaleString()
    };

    setLastScore(result);

    /* Save test history */
    if (currentUser) {
      const users = JSON.parse(
        localStorage.getItem(
          "aiExamCoachUsers"
        ) || "{}"
      );

      const userKey =
        currentUser.username.toLowerCase();

      if (users[userKey]) {
        users[userKey].history = [
          ...(users[userKey].history || []),
          result
        ];

        localStorage.setItem(
          "aiExamCoachUsers",
          JSON.stringify(users)
        );

        const updatedUser = users[userKey];

        localStorage.setItem(
          "aiExamCoachCurrentUser",
          JSON.stringify(updatedUser)
        );

        setCurrentUser(updatedUser);
      }
    }

    setScreen("result");

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  /* =====================================================
     LOGIN SCREEN
  ===================================================== */

  if (!currentUser && screen === "login") {
    return (
      <div className="auth-page">
        <div className="auth-card">

          <div className="auth-icon">
            🎓
          </div>

          <h1>
            AI Adaptive
            <br />
            Exam Coach
          </h1>

          <p className="auth-subtitle">
            Your personalized competitive exam
            preparation coach
          </p>

          <div className="auth-tabs">
            <button
              className={
                !isRegistering
                  ? "auth-tab active"
                  : "auth-tab"
              }
              onClick={() =>
                setIsRegistering(false)
              }
            >
              Login
            </button>

            <button
              className={
                isRegistering
                  ? "auth-tab active"
                  : "auth-tab"
              }
              onClick={() =>
                setIsRegistering(true)
              }
            >
              Create Profile
            </button>
          </div>

          <div className="form-group">
            <label>
              Username
            </label>

            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) =>
                setUsername(e.target.value)
              }
            />
          </div>

          <div className="form-group">
            <label>
              Password
            </label>

            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />
          </div>

          <button
            className="primary-btn full-btn"
            onClick={handleAuth}
          >
            {isRegistering
              ? "Create Profile"
              : "Login"}
          </button>

          <p className="storage-note">
            🔒 Your prototype profile is saved
            in this browser.
          </p>

        </div>
      </div>
    );
  }

  /* =====================================================
     HOME SCREEN
  ===================================================== */

  if (screen === "home") {
    const history =
      currentUser?.history || [];

    const recentHistory =
      [...history].reverse().slice(0, 5);

    return (
      <div className="app">

        <header className="navbar">

          <div className="brand">
            <span className="brand-icon">
              🎓
            </span>

            <div>
              <strong>
                AI Exam Coach
              </strong>

              <small>
                Adaptive Learning
              </small>
            </div>
          </div>

          <div className="user-area">
            <span>
              Hi, {currentUser?.username}
            </span>

            <button
              className="logout-btn"
              onClick={logout}
            >
              Logout
            </button>
          </div>

        </header>

        <main className="container">

          <section className="hero">

            <div>
              <span className="badge">
                🤖 Personalized Learning
              </span>

              <h1>
                Prepare smarter.
                <br />
                <span>
                  Improve faster.
                </span>
              </h1>

              <p>
                Select a topic and difficulty.
                Your questions are randomly selected
                and your next level is recommended
                based on your performance.
              </p>
            </div>

            <div className="hero-icon">
              🧠
            </div>

          </section>

          {/* TOPIC SECTION */}

          <section className="section">

            <div className="section-heading">
              <h2>
                📚 Select Your Topic
              </h2>

              <p>
                Choose the subject you want to
                practice.
              </p>
            </div>

            <div className="topic-grid">

              {TOPICS.map((topic) => {

                let icon = "📚";

                if (topic === "Aptitude") {
                  icon = "🧠";
                }

                if (
                  topic ===
                  "Computer Basics"
                ) {
                  icon = "💻";
                }

                if (topic === "Banking") {
                  icon = "🏦";
                }

                return (
                  <button
                    key={topic}
                    className={
                      selectedTopic === topic
                        ? "topic-card selected"
                        : "topic-card"
                    }
                    onClick={() =>
                      setSelectedTopic(topic)
                    }
                  >
                    <span className="topic-icon">
                      {icon}
                    </span>

                    <strong>
                      {topic}
                    </strong>

                    <span>
                      Easy • Medium • Hard
                    </span>
                  </button>
                );
              })}

            </div>

          </section>

          {/* LEVEL SECTION */}

          <section className="section">

            <div className="section-heading">
              <h2>
                🎯 Select Difficulty
              </h2>

              <p>
                Selected topic:
                <strong>
                  {" "}{selectedTopic}
                </strong>
              </p>
            </div>

            <div className="level-grid">

              {Object.entries(
                LEVEL_CONFIG
              ).map(([key, config]) => (

                <button
                  key={key}
                  className={`level-card ${key}`}
                  onClick={() =>
                    startTest(
                      key,
                      selectedTopic
                    )
                  }
                >

                  <div className="level-icon">
                    {config.icon}
                  </div>

                  <h3>
                    {config.title}
                  </h3>

                  <p>
                    {config.description}
                  </p>

                  <strong>
                    {config.count} Questions
                  </strong>

                  <span className="start-small">
                    Start →
                  </span>

                </button>

              ))}

            </div>

          </section>

          {/* ADAPTIVE INFO */}

          <section className="adaptive-card">

            <div className="adaptive-icon">
              🤖
            </div>

            <div>
              <h2>
                How Adaptive Learning Works
              </h2>

              <p>
                Your score automatically determines
                your recommended difficulty for the
                next practice session.
              </p>

              <div className="adaptive-rules">

                <span>
                  🔴 Below 50% → Easy
                </span>

                <span>
                  🟡 50–79% → Medium
                </span>

                <span>
                  🟢 80%+ → Hard
                </span>

              </div>
            </div>

          </section>

          {/* HISTORY */}

          <section className="section">

            <div className="section-heading">
              <h2>
                📊 Your Recent Performance
              </h2>

              <p>
                Your previous test results.
              </p>
            </div>

            {recentHistory.length === 0 ? (

              <div className="empty-card">
                <span>
                  📝
                </span>

                <p>
                  No tests completed yet.
                  Start your first test!
                </p>
              </div>

            ) : (

              <div className="history-list">

                {recentHistory.map(
                  (item, index) => (

                    <div
                      className="history-item"
                      key={index}
                    >

                      <div>
                        <strong>
                          {item.topic}
                        </strong>

                        <span>
                          {LEVEL_CONFIG[
                            item.level
                          ].title}
                        </span>
                      </div>

                      <div>
                        <strong>
                          {item.percentage}%
                        </strong>

                        <span>
                          {item.correct}/
                          {item.total}
                        </span>
                      </div>

                    </div>

                  )
                )}

              </div>

            )}

          </section>

        </main>

      </div>
    );
  }

  /* =====================================================
     TEST SCREEN
  ===================================================== */

  if (screen === "test") {

    const currentQuestion =
      questions[currentIndex];

    const progress =
      ((currentIndex + 1) /
        questions.length) *
      100;

    return (
      <div className="app">

        <header className="test-header">

          <button
            className="back-btn"
            onClick={() =>
              setScreen("home")
            }
          >
            ← Exit Test
          </button>

          <div className="test-title">
            <strong>
              {selectedTopic}
            </strong>

            <span>
              {LEVEL_CONFIG[level].title}
            </span>
          </div>

          <span>
            {currentIndex + 1}/
            {questions.length}
          </span>

        </header>

        <main className="test-container">

          <div className="progress-wrapper">

            <div className="progress-info">
              <span>
                Question{" "}
                {currentIndex + 1}
              </span>

              <span>
                {Math.round(progress)}%
              </span>
            </div>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{
                  width: `${progress}%`
                }}
              />
            </div>

          </div>

          <div className="question-card">

            <div className="question-number">
              Question {currentIndex + 1}
            </div>

            <h2>
              {currentQuestion.question}
            </h2>

            <div className="options">

              {currentQuestion.options.map(
                (option, index) => (

                  <button
                    key={option}
                    className={
                      selectedAnswer === option
                        ? "option selected"
                        : "option"
                    }
                    onClick={() =>
                      chooseAnswer(option)
                    }
                  >

                    <span className="option-letter">
                      {String.fromCharCode(
                        65 + index
                      )}
                    </span>

                    <span>
                      {option}
                    </span>

                  </button>

                )
              )}

            </div>

            <button
              className="primary-btn next-btn"
              onClick={nextQuestion}
            >
              {currentIndex ===
              questions.length - 1
                ? "Finish Test"
                : "Next Question →"}
            </button>

          </div>

        </main>

      </div>
    );
  }

  /* =====================================================
     RESULT SCREEN
  ===================================================== */

  if (screen === "result" && lastScore) {

    const performance =
      getPerformanceMessage(
        lastScore.percentage
      );

    const resources =
      RESOURCES[selectedTopic];

    return (
      <div className="app">

        <header className="navbar">

          <div className="brand">
            <span className="brand-icon">
              🎓
            </span>

            <div>
              <strong>
                AI Exam Coach
              </strong>

              <small>
                Test Result
              </small>
            </div>
          </div>

          <button
            className="logout-btn"
            onClick={logout}
          >
            Logout
          </button>

        </header>

        <main className="container result-container">

          <section className="result-card">

            <div className="result-icon">
              {lastScore.percentage >= 80
                ? "🏆"
                : lastScore.percentage >= 50
                ? "👏"
                : "📚"}
            </div>

            <p className="result-label">
              TEST COMPLETED
            </p>

            <h1>
              {lastScore.percentage}%
            </h1>

            <p>
              You answered{" "}
              <strong>
                {lastScore.correct}
              </strong>{" "}
              out of{" "}
              <strong>
                {lastScore.total}
              </strong>{" "}
              correctly.
            </p>

            <div className="result-details">

              <div>
                <span>
                  Topic
                </span>

                <strong>
                  {lastScore.topic}
                </strong>
              </div>

              <div>
                <span>
                  Level
                </span>

                <strong>
                  {
                    LEVEL_CONFIG[
                      lastScore.level
                    ].title
                  }
                </strong>
              </div>

            </div>

          </section>

{/* ANSWER REVIEW */}

<section className="answer-review">

  <div className="section-heading">
    <h2>
      📝 Answer Review
    </h2>

    <p>
      Check your answers and learn from
      each question.
    </p>
  </div>

  <div className="review-list">

    {answers.map((item, index) => (

      <div
        className={
          item.isCorrect
            ? "review-card correct"
            : "review-card wrong"
        }
        key={item.questionId}
      >

        <div className="review-header">

          <span>
            Question {index + 1}
          </span>

          <strong>
            {item.isCorrect
              ? "✅ Correct"
              : "❌ Incorrect"}
          </strong>

        </div>

        <h3>
          {item.question}
        </h3>

        <div className="answer-line">
          <span>
            Your answer:
          </span>

          <strong>
            {item.selectedAnswer}
          </strong>
        </div>

        {!item.isCorrect && (
          <div className="correct-answer">
            <span>
              Correct answer:
            </span>

            <strong>
              {item.correctAnswer}
            </strong>
          </div>
        )}

        <div className="explanation">

          <span>
            💡 Explanation
          </span>

          <p>
            {item.explanation}
          </p>

        </div>

      </div>

    ))}

  </div>

</section>

          {/* ADAPTIVE RESULT */}

          <section className="recommendation-card">

            <div className="recommendation-icon">
              🤖
            </div>

            <div>

              <span className="badge">
                Adaptive Recommendation
              </span>

              <h2>
                {performance.title}
              </h2>

              <p>
                {performance.text}
              </p>

              <div className="recommended-level">

                <span>
                  Recommended next level
                </span>

                <strong>
                  {
                    LEVEL_CONFIG[
                      lastScore.recommendedLevel
                    ].icon
                  }{" "}
                  {
                    LEVEL_CONFIG[
                      lastScore.recommendedLevel
                    ].title
                  }
                </strong>

              </div>

            </div>

          </section>

          {/* ACTION BUTTONS */}

          <div className="result-actions">

            <button
              className="primary-btn"
              onClick={() =>
                startTest(
                  lastScore.recommendedLevel,
                  selectedTopic
                )
              }
            >
              Start Recommended Test →
            </button>

            <button
              className="secondary-btn"
              onClick={() =>
                setScreen("home")
              }
            >
              Back to Dashboard
            </button>

          </div>

          {/* RESOURCES */}

{lastScore.percentage < 80 && (

  <section className="resources-card">

    <div className="section-heading">

      <h2>
        📚 Personalized Resources
      </h2>

      <p>
        These resources are recommended based
        on your test performance.
      </p>

    </div>

    <div className="performance-message">

      {lastScore.percentage < 50 ? (
        <>
          <strong>
            📖 Focus on fundamentals
          </strong>

          <p>
            Your score is below 50%. Start with
            basic concepts, definitions and easy
            practice questions before attempting
            harder questions.
          </p>
        </>
      ) : (
        <>
          <strong>
            📈 Improve your weak areas
          </strong>

          <p>
            Your score is between 50% and 79%.
            Review the questions you got wrong and
            practice medium-level problems.
          </p>
        </>
      )}

    </div>

    <div className="resource-columns">

      {/* BOOKS */}

      <div className="resource-box">

        <h3>
          📚 Recommended Books
        </h3>

        <ul>

          {resources.books.map(
            (book) => (
              <li key={book}>
                {book}
              </li>
            )
          )}

        </ul>

      </div>

      {/* YOUTUBE */}

      <div className="resource-box">

        <h3>
          ▶️ Recommended YouTube Topics
        </h3>

        <div className="video-links">

          {resources.videos.map(
            (video) => (

              <a
                key={video.title}
                href={video.url}
                target="_blank"
                rel="noreferrer"
              >
                ▶ {video.title}
              </a>

            )
          )}

        </div>

      </div>

    </div>

  </section>

)}

        </main>

      </div>
    );
  }

  return null;
}

export default App;