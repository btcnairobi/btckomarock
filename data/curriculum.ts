import { StudyTier, StudySegment } from '../types';

export const CURRICULUM: StudyTier[] = [
  {
    id: 't1',
    title: 'Foundation',
    description: 'The Bedrock. Understanding Money in Komarock.',
    level: 'Beginner',
    modules: [
      {
        id: 'm1',
        title: 'Money Origins',
        description: 'From Barter to Shillings.',
        segments: [
          {
            id: 's1-1',
            title: 'Why We Need Money',
            description: 'The problem with trading chickens.',
            socialCaption: "I just learned why barter doesn't work at K-Mall! #BitcoinKomarock #StudyB",
            certificateText: "Understands the necessity of a medium of exchange.",
            subtopics: [
              {
                title: "The K-Mall Problem",
                content: "Imagine walking into Naivas at K-Mall hoping to buy a fresh loaf of bread for your family's breakfast. You reach into your bag and pull out a heavy sack of potatoes harvested from your shamba, offering them to the cashier as payment. The cashier looks at you confused because she cannot use potatoes to pay for her matatu fare home later that evening. She needs something that the matatu driver will accept, and the driver needs something to buy fuel at the petrol station. This dilemma is what economists call the 'Coincidence of Wants' problem, where trade fails because both parties do not want what the other has. Direct exchange or barter is extremely difficult in a complex economy like Komarock where we have thousands of different needs and products. We need a neutral medium of exchange to solve this friction.",
                questions: [
                  {
                    text: "Why is it hard to use potatoes to buy bread at Naivas?",
                    options: ["Potatoes are too heavy", "The cashier might not want potatoes", "Naivas only accepts goats"],
                    correctIndex: 1
                  },
                  {
                    text: "What is this problem called?",
                    options: ["The Potato Problem", "Coincidence of Wants", "Inflation"],
                    correctIndex: 1
                  }
                ],
                tools: []
              },
              {
                title: "Indirect Exchange",
                content: "To solve this problem, society agrees on one specific item that everyone is willing to accept, not to consume, but to trade again later. In the past, our ancestors might have used rare sea shells or glass beads because they were hard to find and easy to carry. Today in Komarock, we use the Kenya Shilling because the government demands we pay taxes in it, giving it value. Money is essentially a tool that allows you to store your hard work (potatoes) in a liquid form and transport it into the future to buy what you actually need (bread). It acts as a battery for your economic energy, holding the value of your labor until you are ready to spend it. Without this indirect exchange mechanism, civilization would collapse because we would spend all our time just trying to find someone to trade with.",
                questions: [
                  {
                    text: "What is the main purpose of money in this example?",
                    options: ["To look rich", "To act as a tool for exchange", "To eat"],
                    correctIndex: 1
                  },
                  {
                    text: "Is money the same as wealth?",
                    options: ["Yes, money is everything", "No, money is just a tool to move value", "Only if it is US Dollars"],
                    correctIndex: 1
                  }
                ],
                tools: []
              }
            ]
          },
          {
            id: 's1-2',
            title: 'The Broken Shilling',
            description: 'Why prices always go up.',
            socialCaption: "Inflation is theft! Learning the truth at Bitcoin Komarock.",
            certificateText: "Understands inflation and currency devaluation.",
            subtopics: [
              {
                title: "The Chapati Index",
                content: "Do you remember ten years ago when a chapati at the local vibanda in Sector 1 was only 10 bob? Today, if you go to the same place, that same chapati might cost you 20, 30, or even 40 shillings. The chapati has not become bigger, tastier, or made of gold; in fact, it might even be smaller than before. This phenomenon happens because the Kenya Shilling is losing its purchasing power every single year due to inflation. You now need more units of currency to buy the exact same amount of food that you bought yesterday. This is not because the food is more valuable, but because the money is becoming worthless like melting ice.",
                questions: [
                  { text: "Why does a chapati cost more today?", options: ["Chapatis are bigger", "The Shilling lost value", "Wheat shortage"], correctIndex: 1 },
                  { text: "What happened to the Shilling?", options: ["It got stronger", "It got weaker", "Nothing"], correctIndex: 1 }
                ],
                tools: []
              },
              {
                title: "Who Prints Money?",
                content: "The Central Bank has the exclusive power to create new Kenya Shillings whenever the government needs to pay debts or fund projects. When they print more money without producing more goods and services, the existing money in circulation loses value. It is exactly like adding a bucket of water to a pot of soup; you have more liquid, but the soup is now weak and tasteless. Your savings in the bank are being watered down every time the printer goes brrr at the Central Bank. This is a hidden tax on everyone in Komarock who tries to save in cash. Inflation benefits those who get the new money first, while the common mwananchi pays the price.",
                questions: [
                  { text: "What happens when money is printed?", options: ["We get rich", "Money loses value", "Prices drop"], correctIndex: 1 },
                  { text: "Analogy for inflation?", options: ["Water in soup", "Salt in meat", "Freezing water"], correctIndex: 0 }
                ],
                tools: []
              }
            ]
          },
          {
            id: 's1-3',
            title: 'Digital Walls',
            description: 'M-Pesa and its limits.',
            socialCaption: "Learning about permissionless money. #BitcoinKomarock",
            certificateText: "Recognizes limitations of centralized digital money.",
            subtopics: [
              {
                title: "The Fuliza Trap",
                content: "M-Pesa is an amazing tool for sending money to shags, but it has serious limitations that restrict your financial freedom. It is expensive to use, with transaction fees eating away at your small transfers every time you pay for something. Furthermore, your money is not really yours; it sits in a database controlled by a corporation that can freeze your account instantly. If the system goes down, or if you lack a national ID card, you are completely cut off from the economy and cannot buy food. We rely too much on a single gatekeeper who can decide whether we are allowed to transact or not. True ownership means you don't need permission.",
                questions: [
                  { text: "Does M-Pesa work without ID?", options: ["Yes", "No", "Sometimes"], correctIndex: 1 },
                  { text: "Who controls M-Pesa funds?", options: ["You", "Safaricom/Bank", "President"], correctIndex: 1 }
                ],
                tools: []
              },
              {
                title: "Money Without Borders",
                content: "What if you want to buy specialized equipment for your business from a supplier in Nigeria or China? Sending Kenya Shillings across borders is incredibly difficult, slow, and full of paperwork at the bank. The legacy banking system operates like a series of walled gardens that do not talk to each other easily. We need a form of money that works exactly like the internet, open to everyone in Komarock 24 hours a day, 7 days a week. Bitcoin is that global network, allowing you to send value to anyone on earth without asking a bank manager for permission.",
                questions: [
                  { text: "Is sending KES abroad easy?", options: ["Yes", "No", "Impossible"], correctIndex: 1 },
                  { text: "Does Bitcoin have opening hours?", options: ["Yes", "No, 24/7", "Weekends only"], correctIndex: 1 }
                ],
                tools: []
              }
            ]
          }
        ]
      },
      {
        id: 'm2',
        title: 'Assets & Savings',
        description: 'Protecting your sweat.',
        segments: [
          {
            id: 's2-1',
            title: 'Saving in Shillings',
            description: 'Why your bank account leaks.',
            socialCaption: "Stop saving in melting ice! #BitcoinKomarock",
            certificateText: "Identifies poor savings vehicles.",
            subtopics: [
              {
                title: "The Leaking Bucket",
                content: "Imagine carrying water from the borehole in a bucket that has several small holes at the bottom. By the time you walk all the way back to your house in Komarock, a significant amount of the water has leaked out onto the dust. This is exactly what happens when you store your hard-earned value in a standard bank account using Kenya Shillings. The government constantly prints more money to pay for debts, which causes inflation that acts just like those holes in your bucket. You work long, hard hours to earn that money, but its purchasing power is being stolen from you silently every single day. To build true wealth for your family, you must first stop this leakage by storing your energy in a container that cannot be diluted.",
                questions: [
                    {
                        text: "What represents the 'holes' in your savings bucket?",
                        options: ["Bank Fees", "Inflation", "Thieves"],
                        correctIndex: 1
                    },
                    {
                        text: "Is a Shilling savings account a good place for long term wealth?",
                        options: ["Yes", "No", "Maybe"],
                        correctIndex: 1
                    }
                ],
                tools: []
              }
            ]
          },
          {
            id: 's2-2',
            title: 'Land and Cows',
            description: 'Traditional store of value.',
            socialCaption: "Land is good, but Bitcoin is faster. #BitcoinKomarock",
            certificateText: "Compares physical vs digital assets.",
            subtopics: [
              {
                title: "Bitcoin is Digital Land",
                content: "In Kenya, we have a deep cultural love for buying land because we understand that it holds value better than paper money. However, buying a plot in Kangundo Road requires millions of shillings and takes months of legal processes to transfer the title deed. Furthermore, land is not liquid; you cannot sell just one square foot of your plot to buy groceries or pay for an emergency medical bill. Bitcoin is often called 'Digital Land' because it shares the property of absolute scarcity—there will only ever be 21 million coins. The major difference is that Bitcoin is divisible, allowing you to buy as little as 100 bob worth, and it is portable on your phone. It combines the best store-of-value properties of physical land with the high speed and divisibility of M-Pesa.",
                questions: [
                    {
                        text: "How is Bitcoin like Land?",
                        options: ["It is digital", "It is scarce", "It is green"],
                        correctIndex: 1
                    },
                    {
                        text: "What is the minimum amount of Bitcoin you can buy?",
                        options: ["1 Million bob", "Even 100 bob", "1 Bitcoin"],
                        correctIndex: 1
                    }
                ],
                tools: []
              }
            ]
          },
          {
            id: 's2-3',
            title: 'The Time Machine',
            description: 'Planning for the future.',
            socialCaption: "I am building wealth for my family, not just for Friday night! #LowTimePreference #BitcoinKomarock",
            certificateText: "Understands Time Preference and long-term planning.",
            subtopics: [
              {
                title: "Eating the Seeds",
                content: "If a farmer eats all his maize seeds during the planting season because he is hungry, he will have absolutely nothing to harvest in August. This mindset is called 'High Time Preference,' where one prioritizes immediate consumption over long-term planning and future stability. Bitcoin encourages 'Low Time Preference,' teaching us to sacrifice small luxuries today to build substantial wealth for tomorrow. By saving in a currency that tends to appreciate over time, you are incentivized to delay gratification and plan for your children's future. This shift in thinking turns you from a consumer into a builder who is invested in the long-term success of the Komarock community. When you lower your time preference, you stop surviving day-to-day and start constructing a legacy that lasts for generations.",
                questions: [
                    {
                        text: "What happens if a farmer eats his seeds?",
                        options: ["He gets full forever", "He has no harvest later", "He becomes rich"],
                        correctIndex: 1
                    },
                    {
                        text: "What is High Time Preference?",
                        options: ["Planning for 10 years ahead", "Wanting everything right now", "Saving money"],
                        correctIndex: 1
                    }
                ],
                tools: []
              }
            ]
          }
        ]
      },
      {
        id: 'm3',
        title: 'Access & Security',
        description: 'Be your own bank.',
        segments: [
          {
            id: 's3-1',
            title: 'The Wallet',
            description: 'Not leather, but digital.',
            socialCaption: "I am my own bank now. #BitcoinKomarock",
            certificateText: "Understands self-custody wallets.",
            subtopics: [
              {
                title: "Phone is the Bank",
                content: "In the traditional financial system, the bank is a fortress that guards your money, and you must ask for permission to access it. In the Bitcoin Komarock economy, your smartphone transforms into your own personal bank branch using apps like Phoenix or Muun. The money lives directly on the internet protocol, and your phone holds the cryptographic keys to move it. This means that no bank manager, government official, or corporation can freeze your account or confiscate your funds. You have total sovereignty over your wealth, which comes with the responsibility of securing your own device. 'Not your keys, not your coins' is the golden rule that ensures you are truly free.",
                questions: [
                    {
                        text: "Where does your Bitcoin live?",
                        options: ["In the bank", "On your phone/network", "At Safaricom"],
                        correctIndex: 1
                    },
                    {
                        text: "Can a manager freeze your Bitcoin wallet?",
                        options: ["Yes", "No"],
                        correctIndex: 1
                    }
                ],
                tools: ["Phoenix Wallet", "Muun Wallet"]
              }
            ]
          },
          {
            id: 's3-2',
            title: 'The 12 Words',
            description: 'Your secret key.',
            socialCaption: "12 words safeguard my future. #BitcoinKomarock",
            certificateText: "Understands private key security.",
            subtopics: [
              {
                title: "The Magic Spell",
                content: "When you set up a non-custodial wallet, the software generates a secret list of 12 English words known as your seed phrase. This list is not just a password reset tool; it is the literal mathematical representation of your money. If you lose your phone in a matatu or it gets damaged, you can simply buy a new phone, type in these 12 words, and your entire balance reappears. However, you must never take a screenshot of these words or save them in Google Drive, as hackers scan the internet for them. You must write them down on physical paper and hide them securely in your home, ensuring that only you or your trusted heirs can find them. These words are the only way to recover your funds.",
                questions: [
                    {
                        text: "What happens if you lose your phone but have your 12 words?",
                        options: ["Money is lost forever", "You can recover your money", "You must call the police"],
                        correctIndex: 1
                    },
                    {
                        text: "What are the 12 words for?",
                        options: ["For fun", "To login to Facebook", "Your master key backup"],
                        correctIndex: 2
                    }
                ],
                tools: []
              }
            ]
          },
          {
            id: 's3-3',
            title: 'Sending & Receiving',
            description: 'Moving value instantly.',
            socialCaption: "Just sent my first Sats! Fast like lightning. #BitcoinKomarock",
            certificateText: "Competent in basic transactions.",
            subtopics: [
              {
                title: "The Invoice",
                content: "Sending Bitcoin is as fast and simple as sending a text message, but it respects your privacy much more than M-Pesa. To receive a payment, you do not need to give out your personal phone number or name; you simply show a QR code invoice on your screen. The sender scans this code, and the value moves instantly across the Lightning Network with fees that are close to zero. This makes it perfect for everyday transactions in Komarock, like buying sukuma wiki or paying for a boda boda ride. It is a peer-to-peer system where you transact directly with your neighbor without a middleman taking a cut. We are building a friction-free economy.",
                questions: [
                    {
                        text: "What do you show to receive Bitcoin?",
                        options: ["Your ID card", "A QR Code / Invoice", "Your home address"],
                        correctIndex: 1
                    },
                    {
                        text: "Do you need to share your phone number to receive Bitcoin?",
                        options: ["Yes", "No", "Only on Sundays"],
                        correctIndex: 1
                    }
                ],
                tools: []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 't2',
    title: 'Growth',
    description: 'Scaling Up. Business & Community.',
    level: 'Intermediate',
    modules: [
        {
            id: 'm4',
            title: 'Merchant Adoption',
            description: 'Accepting Bitcoin in your shop.',
            segments: [
                {
                    id: 's4-1', title: 'Why Accept Bitcoin?', description: 'Lower fees, no chargebacks.', socialCaption: 'Business is better with Bitcoin. #KomarockBiz', certificateText: 'Understands merchant benefits.',
                    subtopics: [
                        { 
                            title: 'Fees & Freedom', 
                            content: "For a small business owner in Komarock, the cost of accepting payments is a silent killer of profitability. Traditional payment methods like credit cards can charge up to 3% per transaction, while mobile money services levy heavy withdrawal fees that eat into your daily earnings. Bitcoin Lightning payments eliminate this friction almost entirely, allowing you to settle transactions for fractions of a shilling. This means that at the end of the month, the money you would have paid to bankers stays in your pocket to reinvest in your stock. In an economy where margins on milk and bread are razor-thin, switching to a zero-fee rail is not just technology; it is survival. By adopting this standard, you essentially give yourself a raise without increasing prices for your customers.\n\nBeyond just the savings on fees, Bitcoin offers a level of finality that protects merchants from the rampant fraud found in the legacy system. When a customer pays you via Lightning, the settlement is instant and irreversible, meaning there are no 'chargebacks' or reversed transactions days later. Credit card companies often side with fraudsters who claim they never received goods, leaving the merchant with a loss and a penalty fee. With Bitcoin, once the green checkmark appears on your screen, that money is mathematically yours and cannot be clawed back by any central authority. This certainty allows you to operate your shop with confidence, knowing that the sales you make today are truly yours to keep. It restores the honest simplicity of cash handing-over, but with digital speed.",
                            questions: [{text: 'What is a major benefit for merchants?', options: ['High transaction fees', 'No chargebacks', 'Slow settlement'], correctIndex: 1}, {text: 'How does Lightning cost compare to Credit Cards?', options: ['Much Cheaper', 'More Expensive', 'The Same'], correctIndex: 0}], 
                            tools: [] 
                        }
                    ]
                },
                {
                    id: 's4-2', title: 'Lightning POS', description: 'Phone as terminal.', socialCaption: 'My phone is my POS. #Komarock', certificateText: 'Sets up POS.',
                    subtopics: [
                        { 
                            title: 'No Hardware Required', 
                            content: "In the past, accepting digital payments required expensive hardware terminals (PDQ machines) that banks would rent out to merchants for a monthly fee. These devices often rely on intermittent phone networks and require you to sign lengthy contracts with the bank. With Bitcoin Lightning, your existing Android smartphone transforms into a powerful Point of Sale (POS) terminal instantly. You simply download a non-custodial app like Breez or Blink, and you are ready to accept payments from anyone in the world. This lowers the barrier to entry for even the smallest vibanda owner in Komarock to participate in the global economy. You do not need to ask for permission or wait weeks for a device to be delivered; you just download, backup your keys, and start trading.\n\nThe user experience for a Lightning POS is designed to be faster than an M-Pesa STK push, ensuring your checkout line moves quickly. To accept a payment, you type the amount in Kenya Shillings, and the app automatically calculates the equivalent amount in Satoshis. It generates a QR code that your customer scans with their wallet, and the payment is confirmed in less than a second. There is no need for the customer to share their phone number or wait for an SMS confirmation code that might be delayed. This speed is crucial for high-volume businesses like matatus or busy supermarkets where every second counts. It is a seamless, contactless experience that feels like magic.",
                            questions: [{text: 'Do you need a bank PDQ machine for Bitcoin?', options: ['Yes', 'No, just a phone', 'Only for large amounts'], correctIndex: 1}, {text: 'How fast is a Lightning payment?', options: ['Instant', '10 Minutes', '1 Day'], correctIndex: 0}], 
                            tools: ['Breez', 'Blink'] 
                        }
                    ]
                },
                {
                    id: 's4-3', title: 'Staff Training', description: 'Teaching the team.', socialCaption: 'My team is Bitcoin ready! #Komarock', certificateText: 'Trains staff on payments.',
                    subtopics: [
                        { 
                            title: 'The Green Checkmark', 
                            content: "Training your staff is the most critical step in adopting Bitcoin, as they are the ones handling customers daily. The most important rule to teach them is to strictly wait for the 'Green Checkmark' on their own merchant device before releasing goods. Scammers may try to show a screenshot of a 'Sent' transaction on their own phone to trick busy cashiers. Your staff must understand that unless the confirmation appears on the shop's tablet or phone, the money has not been received. This visual verification is simple to learn but essential for preventing social engineering theft. Make it a strict policy: No Green Checkmark, No Goods.\n\nFrom a security perspective, you must also configure the wallet to restrict what staff can do with the funds. Most POS apps allow you to set a PIN code that is required to send or withdraw money, while leaving the ability to receive payments open. This means your cashier can accept payments all day long without having the ability to steal funds or accidentally send them to the wrong address. At the end of the shift, the business owner can unlock the wallet with the PIN to sweep the funds to cold storage. This separation of duties ensures that your Bitcoin accumulation is safe from internal theft while maintaining operational efficiency. It brings bank-grade security controls to your small shop.",
                            questions: [{text: 'When should staff release goods?', options: ['When customer says sent', 'When Green Checkmark appears on shop device', 'When customer shows screenshot'], correctIndex: 1}, {text: 'How do you protect funds from staff theft?', options: ['Trust them', 'Set a PIN for sending', 'Don\'t use Bitcoin'], correctIndex: 1}], 
                            tools: [] 
                        }
                    ]
                }
            ]
        },
        {
            id: 'm5',
            title: 'Circular Economy',
            description: 'Building a self-sustaining community.',
            segments: [
                {
                    id: 's5-1', title: 'The Leakage Problem', description: 'Money leaving Komarock.', socialCaption: 'Plug the leaks! #CircularEconomy', certificateText: 'Understands economic leakage.',
                    subtopics: [
                        { 
                            title: 'The Bucket Hole', 
                            content: "The economy of Komarock currently operates like a bucket with a massive hole in the bottom. Residents work hard in the city to earn salaries, but as soon as that money enters the estate, it immediately leaves to pay for goods at foreign-owned supermarkets or utilities. Very little of the value created by the community stays within the community to generate further wealth. This phenomenon is known as 'economic leakage,' and it is the primary reason why neighborhoods struggle to develop despite their residents working tirelessly. To build true prosperity, we must find ways to plug these leaks and force money to circulate locally before it exits. Every time a shilling leaves Komarock, it is an opportunity lost for a local business.\n\nThe goal of a circular economy is to increase the 'velocity of money' within our local borders. If you pay your barber in Bitcoin, and he uses that Bitcoin to buy vegetables from the mama mboga, and she uses it to pay for a boda boda, that same value has satisfied three different needs without leaving the ecosystem. This multiplier effect creates a robust, self-reliant community that is less dependent on external forces. Bitcoin facilitates this circulation perfectly because it removes the friction and fees associated with transferring value between neighbors. By creating a closed loop of value transfer, we essentially build our own internal economy that enriches everyone who participates. We become the masters of our own financial destiny.",
                            questions: [{text: 'What is economic leakage?', options: ['Rain water', 'Money leaving the community instantly', 'Saving too much'], correctIndex: 1}, {text: 'What is the goal of circular economy?', options: ['Spend money abroad', 'Keep money circulating locally', 'Stop spending'], correctIndex: 1}], 
                            tools: [] 
                        }
                    ]
                },
                {
                    id: 's5-2', title: 'Supply Chain', description: 'Paying suppliers.', socialCaption: 'Fixing the chain. #B2B', certificateText: 'Integrates supply chain.',
                    subtopics: [
                        { 
                            title: 'Closing the Loop', 
                            content: "For a merchant, the biggest friction point is having to convert Bitcoin back to cash to pay suppliers who do not yet accept it. This 'cashing out' process incurs fees and exposes you to volatility risk. The solution is to move up the supply chain and convince your suppliers to accept Bitcoin payments directly. For example, if you run a bakery, talk to the farmer who supplies your eggs and show him how he can receive instant payments without transaction fees. When you close this loop, you create a seamless flow of value that never needs to touch the legacy banking system. This strengthens the entire network and reduces costs for every participant in the chain.\n\nTo incentivize suppliers to adopt this new standard, you can offer to split the savings you make on transaction fees. If using mobile money costs you 1% and using a bank costs 2%, offering your supplier a direct Bitcoin payment with a small bonus or early settlement can be very attractive. You can also leverage the growing network of Bitcoin-friendly businesses in Nairobi to find alternative suppliers who are already part of the circular economy. By consciously choosing to do business with those who share your monetary standard, you build a resilient parallel economy. It transforms Bitcoin from a speculative asset into a true medium of exchange for business-to-business commerce.",
                            questions: [{text: 'Why convince suppliers to accept Bitcoin?', options: ['To avoid cash-out fees', 'To look cool', 'It is harder'], correctIndex: 0}, {text: 'How can you incentivize suppliers?', options: ['Pay them less', 'Share fee savings / faster payment', 'Force them'], correctIndex: 1}], 
                            tools: [] 
                        }
                    ]
                }
            ]
        },
        {
            id: 'm6',
            title: 'Lightning Mechanics',
            description: 'How payments work.',
            segments: [
                {
                    id: 's6-1', title: 'Layer 2', description: 'Scaling Bitcoin.', socialCaption: 'Fast as light. #LightningNetwork', certificateText: 'Understands Layer 2.',
                    subtopics: [
                        { 
                            title: 'The Bar Tab Analogy', 
                            content: "To understand why we need the Lightning Network, we first must look at the main Bitcoin blockchain, which is like a high-security bank vault. Moving gold bars in and out of a vault is slow, expensive, and heavy; you wouldn't do it to pay for a cup of coffee. Similarly, the main Bitcoin chain can only process a limited number of transactions every 10 minutes, making it too slow for buying goods at a kiosk in Komarock. The Lightning Network acts like opening a 'bar tab' where you and the merchant exchange promises of payment instantly without moving the gold in the vault every time. You can make thousands of small transactions back and forth, and only settle the final total on the main blockchain when you are done. This allows Bitcoin to scale to billions of transactions per second.\n\nThis Layer 2 solution relies on a network of nodes that route payments between users, similar to how the internet routes data packets. You do not need to have a direct channel open with the specific person you are paying; the network finds a path through mutual friends or public hubs to get the money to its destination. This mesh network design ensures that the system is resilient and has no central point of failure. It combines the rock-solid security of the Bitcoin base layer with the speed and efficiency required for modern commerce. It transforms Bitcoin from a store of value into a high-speed global currency.",
                            questions: [{text: 'What is the Lightning Network analogous to?', options: ['A Bank Vault', 'A Bar Tab', 'A Stock Market'], correctIndex: 1}, {text: 'Why do we need Layer 2?', options: ['To make Bitcoin slower', 'To scale for small instant payments', 'To increase fees'], correctIndex: 1}], 
                            tools: [] 
                        }
                    ]
                },
                {
                    id: 's6-2', title: 'Channels', description: 'Abacus beads.', socialCaption: 'Moving beads on the string. #Liquidity', certificateText: 'Visualizes channels.',
                    subtopics: [
                        { 
                            title: 'Beads on a String', 
                            content: "Technically, a Lightning channel is a 2-of-2 multi-signature wallet shared between two parties, containing a set amount of Bitcoin. Think of it like an abacus wire with a fixed number of beads on it; the beads represent the Satoshis locked in the channel. When you pay your neighbor, you are simply sliding beads from your side of the wire to their side. The total number of beads on the wire never changes, and no beads fall off; they just change ownership locally. This is why Lightning payments are instant—they are just a local update of the balance sheet between two computers, signed cryptographically. No miners need to validate this until the channel is eventually closed.\n\nHowever, this design introduces a concept called 'liquidity.' You can only receive beads if there is space on your side of the wire (inbound liquidity), and you can only send beads if you have them on your side (outbound liquidity). Managing these channels is the primary job of a Lightning Service Provider or a node runner. For a standard user in Komarock using a wallet like Phoenix, this complexity is mostly hidden in the background. But understanding that money is flowing through a network of tubes rather than teleporting helps you troubleshoot why a payment might fail. It is a system of plumbing for money.",
                            questions: [{text: 'Does money move on-chain during a Lightning payment?', options: ['Yes, always', 'No, it is a local balance update', 'Only on Sundays'], correctIndex: 1}, {text: 'What do you need to receive payments?', options: ['Outbound Liquidity', 'Inbound Liquidity', 'A bank account'], correctIndex: 1}], 
                            tools: [] 
                        }
                    ]
                }
            ]
        },
        {
            id: 'm7',
            title: 'Privacy',
            description: 'Protecting yourself.',
            segments: [
                {
                    id: 's7-1', title: 'Why Privacy?', description: 'Safety first.', socialCaption: 'Privacy is safety in Komarock. #OpSec', certificateText: 'Values privacy.',
                    subtopics: [
                        { 
                            title: 'The $5 Wrench Attack', 
                            content: "In a rough neighborhood, flashing a thick wad of cash is a surefire way to get mugged. Similarly, in the digital world of Bitcoin, privacy is not just about hiding from the government; it is about physical safety for you and your family. Because the Bitcoin blockchain is public, if a criminal links your identity to a specific address with a large balance, you become a target for a '$5 wrench attack'—where they physically threaten you until you unlock your phone. Practicing good privacy hygiene ensures that nobody knows how much Bitcoin you actually have. Being a 'Grey Man'—someone who looks average and blends into the crowd—is your best defense against targeted crime.\n\nFurthermore, financial privacy is a fundamental human right that protects you from surveillance capitalism and targeted manipulation. Large corporations and data brokers are desperate to track your spending habits so they can sell that data or manipulate your behavior. By using privacy-preserving tools and avoiding address reuse, you reclaim your dignity and autonomy. In Komarock, where community gossip travels fast, keeping your financial affairs private prevents envy and undue social pressure. Privacy is the shield that allows you to build wealth in peace.",
                            questions: [{text: 'What is the $5 Wrench Attack?', options: ['A hacking tool', 'Physical violence to steal crypto', 'A cheap wrench'], correctIndex: 1}, {text: 'Why is privacy important locally?', options: ['To hide from taxes only', 'Physical safety and avoiding targets', 'It is not important'], correctIndex: 1}], 
                            tools: [] 
                        }
                    ]
                },
                {
                    id: 's7-2', title: 'No-KYC', description: 'Avoiding IDs.', socialCaption: 'My ID stays in my pocket. #NoKYC', certificateText: 'Understands KYC risks.',
                    subtopics: [
                        { 
                            title: 'The Risk of Data Leaks', 
                            content: "Know Your Customer (KYC) regulations require you to upload your National ID and a selfie to centralized exchanges before you can buy Bitcoin. While this claims to prevent crime, it actually creates a massive 'honeypot' of sensitive data that attracts hackers. If that exchange gets hacked—which happens frequently—your ID, home address, and financial history are sold on the dark web. This can lead to identity theft, SIM swapping attacks, and targeted phishing campaigns against you. In Kenya, where data protection laws are still maturing, trusting a foreign corporation with your biometric data is a significant risk. The safest data is the data that was never collected in the first place.\n\nThe alternative is to acquire 'No-KYC' Bitcoin, which has no link to your real-world identity. The best way to do this in Komarock is to earn Bitcoin for your goods or services, as this is a private peer-to-peer transaction. Alternatively, you can use P2P platforms like RoboSats or Bisq, where you trade directly with other individuals without a central authority demanding your papers. By keeping your Bitcoin separate from your government identity, you ensure that your money is truly yours and cannot be censored or tracked. It preserves the fungibility and freedom that Bitcoin was built to provide.",
                            questions: [{text: 'What is the main risk of KYC?', options: ['It takes too long', 'Data leaks and identity theft', 'The fees are high'], correctIndex: 1}, {text: 'What is the best way to get No-KYC Bitcoin?', options: ['Earn it / P2P', 'Binance', 'Bank'], correctIndex: 0}], 
                            tools: [] 
                        }
                    ]
                }
            ]
        },
        {
            id: 'm8',
            title: 'Economic Defense',
            description: 'Surviving fiat collapse.',
            segments: [
                {
                    id: 's8-1', title: 'Fiat Debasement', description: 'Silent tax.', socialCaption: 'Inflation is theft. Opt out. #Bitcoin', certificateText: 'Understands inflation.',
                    subtopics: [
                        { 
                            title: 'The Silent Tax', 
                            content: "Inflation is often described as a rise in prices, but it is actually a fall in the value of your money. When the government prints new Shillings to pay for its budget deficit, it dilutes the value of every Shilling already in circulation. This is a hidden tax on your savings that was never voted for in parliament. In Komarock, you feel this visceral pain when the price of Unga doubles or when fare prices hike overnight. Your salary stays the same, but you get poorer every day. This system is designed to penalize savers and benefit those who are close to the money printer.\n\nBitcoin offers a defensive shield against this debasement because its supply is strictly limited by mathematics, not policy. There will never be more than 21 million coins, no matter what crisis happens or who is the president. This 'hard money' property makes Bitcoin the best savings technology ever invented. By moving your excess value into Bitcoin, you are essentially checking out of a broken financial system and moving into one that respects your time and labor. It is a vote of no confidence in fiat currency and a vote for a future where your savings actually grow.",
                            questions: [{text: 'Who benefits from inflation?', options: ['Savers', 'The Government / Printers', ' The Poor'], correctIndex: 1}, {text: 'Why is Bitcoin a shield?', options: ['It goes up only', 'Fixed supply / Cannot be printed', 'It is digital'], correctIndex: 1}], 
                            tools: [] 
                        }
                    ]
                },
                {
                    id: 's8-2', title: 'Separation of Money & State', description: 'The ultimate goal.', socialCaption: 'Money needs no king. #Separation', certificateText: 'Understands secular money.',
                    subtopics: [
                        { 
                            title: 'The Moral Argument', 
                            content: "Throughout history, whenever a state has controlled the money supply, they have abused that power to fund endless wars and enrich their cronies. Inflation allows governments to spend money they do not have, effectively stealing from the future to pay for the present. Just as humanity realized that separating Church and State was necessary for religious freedom, we are now realizing that separating Money and State is necessary for economic freedom. Money is a tool for measurement, like a ruler or a scale; it should not be elastic or subject to the whims of politicians who are only focused on the next election.\n\nBitcoin provides this separation because it is a neutral protocol governed by consensus code, not by a parliament or a dictator. It treats a billionaire in New York exactly the same as a student in Komarock. There is no 'admin' key that can freeze accounts or print more coins to bail out a failing bank. This neutrality restores honesty to the heart of human interaction, ensuring that success is determined by merit and value creation rather than political connections. It is the foundation for a more fair and peaceful world.",
                            questions: [{text: 'Why separate Money and State?', options: ['To stop inflation and abuse of power', 'To make taxes higher', 'To close banks'], correctIndex: 0}, {text: 'Who controls Bitcoin?', options: ['The President', 'Consensus Code / Math', 'Google'], correctIndex: 1}], 
                            tools: [] 
                        }
                    ]
                },
                {
                    id: 's8-3', title: 'Hyperbitcoinization', description: 'The flip.', socialCaption: 'Gradually, then suddenly. #Future', certificateText: 'Envisions future.',
                    subtopics: [
                        { 
                            title: 'The Great Transition', 
                            content: "Hyperbitcoinization is the theoretical moment when Bitcoin becomes the dominant global currency, replacing weak fiat currencies entirely. This transition happens in two stages: 'Gradually' and then 'Suddenly.' We are currently in the gradual phase, where early adopters in places like Komarock are opting out of the Shilling to protect their wealth. As more people realize that the Shilling is a melting ice cube, the flight to safety will accelerate, creating a feedback loop that drives Bitcoin adoption faster. Eventually, nobody will want to accept a currency that loses value daily, and the economy will naturally flip to the superior standard.\n\nIn this future, goods and services will be priced directly in Satoshis (Sats) rather than Shillings. You won't check the exchange rate anymore because Bitcoin will be the unit of account—the ruler by which everything else is measured. Volatility will stabilize because the market will be deep and liquid. This shift represents a massive transfer of wealth from those who held onto dying fiat currencies to those who had the foresight to adopt sound money early. It is not just a change in technology; it is a complete restructuring of the global financial hierarchy.",
                            questions: [{text: 'What is Hyperbitcoinization?', options: ['Bitcoin crashing', 'Bitcoin becoming the dominant currency', 'A new altcoin'], correctIndex: 1}, {text: 'How will prices be displayed?', options: ['In USD', 'In Sats', 'In Barter'], correctIndex: 1}], 
                            tools: [] 
                        }
                    ]
                }
            ]
        },
        {
            id: 'm9',
            title: 'Orange Pilling',
            description: 'Growing the user base.',
            segments: [
                {
                    id: 's9-1', title: 'Explanation Art', description: 'Teaching others.', socialCaption: 'Keep it simple, stupid. #OrangePill', certificateText: 'Teaches Bitcoin.',
                    subtopics: [
                        { 
                            title: 'Speak Their Language', 
                            content: "When explaining Bitcoin to a neighbor in Komarock, avoid using complex technical jargon like 'hashing algorithms,' 'private keys,' or 'decentralized ledgers.' These terms confuse people and make them think Bitcoin is too complicated for them. Instead, use simple analogies that relate to their daily struggles. Talk about 'Digital Savings' that don't leak value like the Shilling. Compare a wallet to M-Pesa but clarify that 'you are the Safaricom'—nobody can freeze it. The goal is to lower the intimidation barrier and show them how this tool solves a specific pain point they are already feeling, such as inflation or high transaction fees.\n\nMost importantly, practice empathy and listening. Don't just preach to people; ask them about their financial problems first. Are they struggling to save for school fees? Are they tired of bank charges? Once you understand their specific need, you can position Bitcoin as the solution to that problem. 'Orange Pilling' is not about winning an argument; it is about planting a seed of curiosity that will grow over time. Be patient, answer their questions honestly—even the hard ones about scams and volatility—and let them come to the realization on their own schedule.",
                            questions: [{text: 'What should you avoid when teaching?', options: ['Simple stories', 'Technical Jargon', 'Listening'], correctIndex: 1}, {text: 'What is the best approach?', options: ['Preaching', 'Listening and solving problems', 'Shouting'], correctIndex: 1}], 
                            tools: [] 
                        }
                    ]
                },
                {
                    id: 's9-2', title: 'Community Building', description: 'Meetups.', socialCaption: 'Gather the tribe. #KomarockMeetup', certificateText: 'Builds community.',
                    subtopics: [
                        { 
                            title: 'The Power of Consistency', 
                            content: "Building a Bitcoin community in Komarock requires consistency above all else. Host a weekly or monthly meetup at a local coffee shop or vibanda, and show up every single time, even if nobody else comes at first. By being a reliable presence, you create a 'Shelling Point'—a known location where anyone interested in Bitcoin knows they can find answers. Over time, curious people will stop by, and a core group of regulars will form. This physical connection is vital because it builds the trust that is often missing in online spaces. It turns a digital currency into a human movement.\n\nThese meetups should be safe spaces for education, not sales pitches. Focus on helping people install wallets, back up their seeds, and make their first transaction. Create a circular economy within the group by bringing goods to sell for Sats—maybe sell chapati or second-hand clothes during the meetup. This practical demonstration of Bitcoin as money is far more powerful than any theoretical lecture. When people see it working in real life between friends, the mental block disappears. You are not just building a club; you are building the foundation of the local economy.",
                            questions: [{text: 'What is most important for meetups?', options: ['Free beer', 'Consistency', 'Big venue'], correctIndex: 1}, {text: 'What should you do at meetups?', options: ['Sell scams', 'Educate and trade P2P', 'Argue'], correctIndex: 1}], 
                            tools: [] 
                        }
                    ]
                }
            ]
        }
    ]
  },
  {
    id: 't3',
    title: 'Mastery',
    description: 'Sovereignty & Nodes.',
    level: 'Advanced',
    modules: [
        {
            id: 'm10',
            title: 'Node Operations',
            description: 'Running standard nodes.',
            segments: [
                {
                    id: 's10-1', title: 'Why Run a Node?', description: 'The foundation of sovereignty.', socialCaption: 'Don\'t trust, verify. I run my own bank in Komarock. #NodeRunner', certificateText: 'Understands node importance.',
                    subtopics: [
                        { 
                            title: 'Don\'t Trust, Verify', 
                            content: "The slogan 'Don't Trust, Verify' is the heartbeat of the Bitcoin ethos. When you use a light wallet on your phone, you are technically trusting someone else's server to tell you how much money you have. While this is acceptable for small amounts, it introduces a point of failure and a privacy leak. Running your own Bitcoin node means you download the entire history of every transaction ever made (the blockchain) and verify it mathematically on your own hardware. You become a first-class citizen of the network, enforcing the rules of consensus without asking for permission. In Komarock, this is akin to having your own personal Central Bank server sitting in your living room, auditing the global money supply 24/7.\n\nBy running a node, you protect yourself from receiving fake Bitcoin or being lied to about the status of a payment. If a malicious actor tries to change the rules or print more money, your node will automatically reject their blocks as invalid. You contribute to the robustness of the network by hosting a copy of the ledger for others to download. It is the ultimate act of financial sovereignty, declaring that you answer to no authority but the code you choose to run. It transforms you from a passive user into an active guardian of the protocol.",
                            questions: [{text: 'Why run a node?', options: ['To verify transactions yourself', 'To mine free coins', 'To make internet faster'], correctIndex: 0}, {text: 'What does a node do?', options: ['Prints money', 'Enforces consensus rules', 'Hacks banks'], correctIndex: 1}], 
                            tools: ['Bitcoin Core', 'Umbrel'] 
                        }
                    ]
                }
            ]
        },
        {
            id: 'm11',
            title: 'Advanced Privacy',
            description: 'CoinJoin and Mixers.',
            segments: [
                {
                    id: 's11-1', title: 'CoinJoin', description: 'Breaking links.', socialCaption: 'My business is private. Privacy is a human right. #CoinJoin', certificateText: 'Understands CoinJoin.',
                    subtopics: [
                        { 
                            title: 'Restoring Fungibility', 
                            content: "Because the blockchain is transparent, every Bitcoin carries a history of where it came from. If you receive coins from a KYC exchange, those coins are permanently linked to your identity unless you break that link. CoinJoin is a collaborative privacy technique where multiple users combine their inputs into a single large transaction and output equal amounts to fresh addresses. This creates a mathematical 'fog' that makes it impossible for surveillance firms to know whose money went where. It restores the property of 'fungibility'—where one coin is indistinguishable from another, just like a 1000 bob note in your pocket has no memory of who held it before.\n\nFor a business owner in Komarock, CoinJoin is essential for keeping your supplier payments and total revenue private from competitors or criminals. Tools like Whirlpool or JoinMarket automate this process, allowing you to 'mix' your coins in the background. While some regulators view this with suspicion, it is a perfectly legal tool for preserving personal dignity and safety. It ensures that your financial footprint remains your own business, protecting you from the prying eyes of data brokers and thieves who use the blockchain to target wealthy individuals.",
                            questions: [{text: 'What does CoinJoin do?', options: ['Breaks the link between sender and receiver', 'Doubles your money', 'Deletes the blockchain'], correctIndex: 0}, {text: 'Why is fungibility important?', options: ['It makes coins look shiny', 'It ensures privacy and equality of coins', 'It increases fees'], correctIndex: 1}], 
                            tools: ['Samourai Wallet', 'Sparrow Wallet'] 
                        }
                    ]
                }
            ]
        },
        {
            id: 'm12',
            title: 'Mining Mechanics',
            description: 'Securing the network.',
            segments: [
                {
                    id: 's12-1', title: 'Proof of Work', description: 'Energy as security.', socialCaption: 'Physics secures my money. #PoW #Energy', certificateText: 'Explains PoW.',
                    subtopics: [
                        { 
                            title: 'The Energy Wall', 
                            content: "Bitcoin mining is often criticized for using energy, but that energy use is the exact feature that secures the network. Proof of Work (PoW) requires miners to burn real-world electricity to solve complex mathematical puzzles in order to add a new block of transactions. This creates an unforgeable cost to produce money, anchoring the digital system to the physical laws of thermodynamics. To rewrite the history of the blockchain (and steal money), an attacker would need to spend more energy than all the honest miners combined, which would cost billions of dollars per hour. This 'Energy Wall' protects your savings in Komarock from powerful state actors or hackers.\n\nFurthermore, mining incentivizes the development of renewable energy. Miners are location-agnostic buyers of the 'last resort,' meaning they can set up near stranded energy sources like geothermal vents in Naivasha or hydro dams that produce more power than the grid can consume. By monetizing this wasted energy, Bitcoin mining makes green energy projects more profitable and viable. It is not just a security mechanism; it is a catalyst for energy abundance. The hum of the ASIC miner is the sound of the network being secured by pure physics.",
                            questions: [{text: 'What secures the Bitcoin network?', options: ['Proof of Stake', 'Proof of Work / Energy', 'Trust in banks'], correctIndex: 1}, {text: 'Can you fake Proof of Work?', options: ['Yes, easily', 'No, it requires real energy', 'Only on Tuesdays'], correctIndex: 1}], 
                            tools: [] 
                        }
                    ]
                }
            ]
        },
        {
            id: 'm13',
            title: 'Protocol Development',
            description: 'Upgrading Bitcoin.',
            segments: [
                {
                    id: 's13-1', title: 'BIPs', description: 'Improvement Proposals.', socialCaption: 'Slow and steady wins the race. #Consensus', certificateText: 'Understands governance.',
                    subtopics: [
                        { 
                            title: 'Consensus over Command', 
                            content: "Bitcoin has no CEO, no marketing department, and no office. Upgrades to the protocol happen through a rigorous, slow process known as Bitcoin Improvement Proposals (BIPs). Anyone can propose a change, but for it to be adopted, it must reach overwhelming consensus among the community of developers, miners, and node runners. This conservatism is a feature, not a bug. It ensures that the base layer remains stable and backward compatible, protecting the billions of dollars stored on the network. We do not 'move fast and break things' when it comes to peoples' life savings.\n\nChanges are usually implemented as 'Soft Forks,' which tighten the rules without breaking compatibility for older nodes. This means that a node running software from 2015 can still sync with the network today, ensuring that no user is forced to upgrade against their will. This stands in stark contrast to other cryptocurrencies that hard fork frequently, forcing users to follow the dictates of a central developer team. In Bitcoin, the users control the network. If the developers release code that the users dislike, the nodes simply refuse to run it. It is the ultimate democracy of value.",
                            questions: [{text: 'How is Bitcoin upgraded?', options: ['By the CEO', 'Through BIPs and Consensus', 'By voting on Twitter'], correctIndex: 1}, {text: 'What is a Soft Fork?', options: ['A backward compatible upgrade', 'A spoon', 'A split in the chain'], correctIndex: 0}], 
                            tools: [] 
                        }
                    ]
                }
            ]
        },
        {
            id: 'm14',
            title: 'Lightning Engineering',
            description: 'Routing and HTLCs.',
            segments: [
                {
                    id: 's14-1', title: 'HTLCs', description: 'Atomic Swaps.', socialCaption: 'Trustless routing is magic. #Lightning', certificateText: 'Explains HTLCs.',
                    subtopics: [
                        { 
                            title: 'The Magic Contract', 
                            content: "The secret sauce that makes the Lightning Network trustless is the Hashed Time Locked Contract (HTLC). When you send a payment through multiple hops (e.g., You -> Bob -> Alice -> Merchant), you do not trust Bob or Alice not to steal your money. The HTLC ensures that the payment is 'atomic'—meaning it either completes fully or fails fully. The funds are locked in a cryptographic box that can only be opened if the merchant reveals a secret code (the preimage) to claim the money. As this secret is passed back up the chain, everyone gets paid instantly.\n\nIf any node in the middle goes offline or tries to cheat, the Time Lock feature ensures that your money is automatically refunded to you after a set period. This means you can route millions of shillings through a complete stranger's node in Komarock without any risk of them stealing it. It turns the network into a collaborative web of selfish actors who are incentivized by fees to be honest and reliable. It is a masterpiece of game theory and cryptography working together to move value at the speed of light.",
                            questions: [{text: 'What does HTLC ensure?', options: ['That money is printed', 'That payments are atomic (all or nothing)', 'That banks are happy'], correctIndex: 1}, {text: 'Do you need to trust the routing nodes?', options: ['Yes', 'No, math protects you', 'Only if they are verified'], correctIndex: 1}], 
                            tools: [] 
                        }
                    ]
                }
            ]
        },
        {
            id: 'm15',
            title: 'Sovereign Computing',
            description: 'Self-hosting.',
            segments: [
                {
                    id: 's15-1', title: 'Personal Server', description: 'Start9/Umbrel.', socialCaption: 'I own my data. Cloudless. #SovereignComputing', certificateText: 'Runs personal server.',
                    subtopics: [
                        { 
                            title: 'Exiting the Cloud', 
                            content: "In the modern digital age, we have become feudal serfs to Big Tech companies like Google and Apple. We store our photos, passwords, and documents on their 'Cloud,' which is just a fancy word for 'someone else's computer.' They scan our data, sell our habits, and can lock us out of our digital lives at any moment. Sovereign computing is the movement to bring that data back home. By running a personal server like a Start9 or Umbrel in your house in Komarock, you become your own Dropbox, your own Spotify, and your own Bank.\n\nThese devices are plug-and-play servers that run over Tor, allowing you to access your files from anywhere in the world without exposing your IP address. You can host your own Bitcoin node, a password manager, and even a decentralized social media relay (Nostr). It aligns perfectly with the Bitcoin ethos: verification over trust, and ownership over renting. If the internet is cut off or a company goes bankrupt, your data remains physically in your possession. It is the final step in becoming a fully sovereign individual in the digital age.",
                            questions: [{text: 'What is "The Cloud"?', options: ['Actual clouds', 'Someone else\'s computer', 'A safe place'], correctIndex: 1}, {text: 'Why run a personal server?', options: ['To own your data / Privacy', 'To hack neighbors', 'To mine Bitcoin only'], correctIndex: 0}], 
                            tools: ['Start9', 'Umbrel'] 
                        }
                    ]
                }
            ]
        },
        {
            id: 'm16',
            title: 'Financial Sovereignty',
            description: 'Multisig Custody.',
            segments: [
                {
                    id: 's16-1', title: 'Multisig', description: '2 of 3.', socialCaption: 'My vault is unhackable. #Multisig', certificateText: 'Configures Multisig.',
                    subtopics: [
                        { 
                            title: 'The Three-Legged Stool', 
                            content: "A standard Bitcoin wallet has one private key. If you lose that key or a thief finds it (the $5 wrench attack), your money is gone. This is a single point of failure. Multi-Signature (Multisig) technology solves this by requiring multiple keys to authorize a transaction, much like a nuclear launch sequence or a bank vault that requires two managers to turn keys simultaneously. The most common setup is '2-of-3,' where you create three keys but only need any two of them to spend the money.\n\nFor a sovereign family in Komarock, you might keep Key 1 on a hardware wallet in your safe at home. Key 2 could be on a different hardware wallet hidden at your grandmother's house in shags. Key 3 could be a cloud backup or held by a trusted lawyer. If a thief breaks into your house and steals Key 1, they cannot spend the money. If your house burns down, you still have Key 2 and Key 3. This setup eliminates the single point of failure and provides robust security for generational wealth. It makes you your own fortress.",
                            questions: [{text: 'How many keys do you need to spend in a 2-of-3 setup?', options: ['1', '2', '3'], correctIndex: 1}, {text: 'What is the main benefit of Multisig?', options: ['Eliminates single point of failure', 'Makes spending faster', 'Lower fees'], correctIndex: 0}], 
                            tools: ['Sparrow Wallet', 'Specter DIY'] 
                        }
                    ]
                }
            ]
        },
        {
            id: 'm17',
            title: 'Network Analysis',
            description: 'On-chain Data.',
            segments: [
                {
                    id: 's17-1', title: 'Mempool', description: 'Watching the chain.', socialCaption: 'Reading the heartbeat of the network. #Mempool', certificateText: 'Reads mempool.',
                    subtopics: [
                        { 
                            title: 'The Weather Forecast', 
                            content: "The 'Mempool' (Memory Pool) is the waiting room for Bitcoin transactions. Before a transaction is confirmed in a block, it sits in this waiting room. Miners pick transactions from the mempool based on who pays the highest fee, similar to how a matatu tout picks passengers who are willing to pay more during rush hour. Using a visualizer like Mempool.space allows you to see this traffic in real-time. It tells you the current 'fee rate' (measured in sats/vByte) so you don't overpay for a transaction that doesn't need to be instant.\n\nUnderstanding the mempool is crucial for advanced users. It helps you time your transactions—sending large consolidations on Sunday nights when the network is quiet and fees are low. It also lets you verify that your transaction has actually been broadcast to the network, rather than just trusting your wallet interface. You can see the blocks coming in, watch the difficulty adjustment, and monitor the heartbeat of the global network. It transforms the invisible blockchain into a tangible, living organism that you can analyze.",
                            questions: [{text: 'What is the Mempool?', options: ['A swimming pool', 'The waiting room for transactions', 'A finished block'], correctIndex: 1}, {text: 'What determines priority in the mempool?', options: ['First come first serve', 'Transaction Fees', 'Who you know'], correctIndex: 1}], 
                            tools: ['Mempool.space'] 
                        }
                    ]
                }
            ]
        },
        {
            id: 'm18',
            title: 'Philosophy',
            description: 'Why Bitcoin wins.',
            segments: [
                {
                    id: 's18-1', title: 'Game Theory', description: 'Inevitability.', socialCaption: 'You cannot ban math. #GameTheory', certificateText: 'Understands game theory.',
                    subtopics: [
                        { 
                            title: 'The Prisoner\'s Dilemma', 
                            content: "Game Theory predicts that Bitcoin adoption is inevitable due to the incentives at play. Imagine two countries: Country A bans Bitcoin, while Country B adopts it. As Bitcoin grows in value, Country B becomes significantly wealthier, while Country A watches its own currency devalue. Country A is eventually forced to adopt Bitcoin just to survive and hedge against its losses, but they have to buy in at a much higher price. This is a 'Prisoner's Dilemma' where the dominant strategy for every rational actor—whether a person in Komarock or a Central Bank—is to adopt Bitcoin before their neighbors do.\n\nThis same logic applies to individuals. If you ignore Bitcoin while your friends adopt it, you risk being left behind in the old economy. Because Bitcoin cannot be stopped or shut down by any single entity, the risk of it going to zero decreases every year, while the risk of fiat currency collapsing increases. This asymmetric bet drives a feedback loop of adoption that cannot be stopped by bans or regulation. The game is set up in such a way that the only winning move is to play. It is a peaceful revolution driven by pure incentives.",
                            questions: [{text: 'Why is adoption inevitable?', options: ['Laws force it', 'Game Theory incentives', 'Marketing'], correctIndex: 1}, {text: 'What happens to countries that ban it?', options: ['They win', 'They fall behind and buy later at higher price', 'Nothing'], correctIndex: 1}], 
                            tools: [] 
                        }
                    ]
                }
            ]
        }
    ]
  }
];