const newsData = [
  {
    id: 1,
    slug: "national-budget-2026",
    title: "National Budget 2026: Allocation by Sector",
    summary:
      "The government increased allocations for education and healthcare with a strong focus on infrastructure.",
    content:
      "The national budget for 2026 marks a significant shift in fiscal policy, prioritizing human capital and long-term infrastructure. The Finance Ministry announced a record 15% increase in education funding, aiming to modernize public schools with digital tools and better teacher training. Healthcare also received a major boost, with new funds directed toward rural medical centers and specialized hospitals. Economists suggest that while the deficit remains a concern, the focus on building smart highways and renewable energy grids will create thousands of jobs. The government hopes this strategic spending will stabilize inflation and attract foreign direct investment over the next decade.",
    category: "National",
    publishedAt: "2026-01-03T10:30:00",
    image: "/images/1img.avif",
  },
  {
    id: 2,
    slug: "election-reform-bill",
    title: "Parliament Passes Election Reform Bill",
    summary: "New reforms aim to improve transparency and voter participation.",
    content:
      "In a landmark session today, Parliament successfully passed the Election Reform Bill of 2026. The legislation introduces high-tech biometric voter verification systems and a blockchain-based tallying mechanism to ensure unprecedented transparency. Opposition leaders, while initially skeptical, have lauded the move toward digital registration which aims to eliminate duplicate entries. The bill also mandates stricter financial reporting for political parties to curb the influence of undocumented funding. Civil society groups believe these changes will significantly boost voter turnout in upcoming local and national polls, restoring public confidence in the democratic process and ensuring a fairer representation of the people's will.",
    category: "National",
    publishedAt: "2026-01-05T14:10:00",
    image: "/images/2img.avif",
  },
  {
    id: 3,
    slug: "public-transport-upgrade",
    title: "Public Transport Services Get Major Upgrade",
    summary: "New buses and routes improve daily commuting.",
    content:
      "Commuters in major urban centers can look forward to a more efficient journey as the Department of Transport unveils its modernization plan. A fleet of 500 electric buses is being deployed to replace aging diesel vehicles, significantly reducing the city's carbon footprint. New dedicated bus lanes and an integrated smart-card payment system are expected to reduce peak-hour congestion by 20%. City planners noted that the project also includes the development of several transit hubs where commuters can easily switch between metro rail and bus services. These upgrades represent the largest investment in public mobility in twenty years, aiming to provide safe, affordable, and eco-friendly transport.",
    category: "National",
    publishedAt: "2026-01-14T15:35:00",
    image: "/images/3img.avif",
  },
  {
    id: 4,
    slug: "global-oil-prices-fall",
    title: "Global Oil Prices Fall Amid Market Uncertainty",
    summary:
      "Oil prices dropped due to lower demand and economic slowdown fears.",
    content:
      "Global energy markets are experiencing a sharp downturn as crude oil prices hit a two-year low this week. Analysts point to a combination of rising stockpiles in major economies and a faster-than-expected transition to renewable energy sources as primary drivers. Fear of a global manufacturing slowdown has reduced industrial demand, causing jitters among OPEC+ members. While this drop offers immediate relief at the gas pump for consumers, it poses a significant challenge for oil-dependent nations' budgets. Financial experts warn that market volatility is likely to continue until clear economic data emerges from the world's largest importers, suggesting that investors should remain cautious in the coming quarter.",
    category: "International",
    publishedAt: "2026-01-06T09:45:00",
    image: "/images/4img.avif",
  },
  {
    id: 5,
    slug: "middle-east-peace-talks",
    title: "Middle East Peace Talks Resume",
    summary: "Diplomatic talks resume with hopes of long-term stability.",
    content:
      "High-level diplomatic delegations have gathered for a new round of peace negotiations aimed at resolving long-standing regional conflicts. The summit, hosted by neutral international observers, focuses on establishing demilitarized zones and ensuring the safe passage of humanitarian aid. Leaders expressed a cautious sense of optimism, noting that recent ceasefire agreements have largely held. Key topics on the agenda include the shared management of water resources and the restoration of damaged infrastructure in conflict zones. While significant hurdles remain regarding territorial boundaries, the commitment to open dialogue is seen as a vital step toward creating a stable and prosperous environment for future generations in the region.",
    category: "International",
    publishedAt: "2026-01-07T18:20:00",
    image: "/images/5img.avif",
  },
  {
    id: 6,
    slug: "international-trade-agreement",
    title: "New International Trade Agreement Signed",
    summary: "The deal aims to boost exports and cooperation.",
    content:
      "A coalition of fifteen nations has signed a comprehensive trade pact designed to slash tariffs and harmonize digital trade regulations. The agreement, finalized after three years of intense negotiation, is expected to increase cross-border commerce by $50 billion annually. Small and medium enterprises (SMEs) are predicted to benefit most from the simplified customs procedures and reduced administrative barriers. The deal also includes groundbreaking clauses on environmental standards and labor rights, ensuring that trade growth does not come at the expense of sustainability. Supporters of the pact argue it will strengthen supply chain resilience and foster deeper cultural and economic ties between the member nations in an increasingly fragmented world.",
    category: "International",
    publishedAt: "2026-01-15T12:15:00",
    image: "/images/6img.avif",
  },
  {
    id: 7,
    slug: "cricket-series-win",
    title: "Bangladesh Clinches Historic Series Victory",
    summary: "The team secured a remarkable win in the final match.",
    content:
      "The national cricket stadium erupted in celebration as Bangladesh secured a 3-0 clean sweep in the international series. The final match was a masterclass in tactical bowling and aggressive batting, with the captain leading from the front with a spectacular century. Key performances from the young pace attack dismantled the opposition's middle order in the final ten overs. This victory marks a turning point for the team, which has climbed three spots in the global rankings this month. Fans and analysts alike are praising the new coaching staff for instilling a fearless mindset. The team now prepares for the upcoming world championship with high hopes and a revitalized spirit.",
    category: "Sports",
    publishedAt: "2026-01-04T21:00:00",
    image: "/images/7img.avif",
  },
  {
    id: 8,
    slug: "football-league-update",
    title: "Domestic Football League Enters Final Stage",
    summary: "Top teams battle for championship glory.",
    content:
      "The excitement in the domestic football league has reached a fever pitch as the top four teams enter the final playoff stage. Last night's thriller ended in a dramatic penalty shootout, sending the underdog team into the finals for the first time in a decade. Attendance records have been shattered this season, with stadiums reaching 100% capacity for almost every match. League officials attribute the surge in popularity to better broadcasting deals and improved grassroots talent scouting. As the final match approaches, security has been tightened and fan zones are being set up across the country. It is truly anyone's game as the athletes prepare for the most important 90 minutes of their careers.",
    category: "Sports",
    publishedAt: "2026-01-08T16:40:00",
    image: "/images/8img.avif",
  },
  {
    id: 9,
    slug: "youth-sports-program",
    title: "Youth Sports Development Program Launched",
    summary: "The initiative aims to nurture young talent.",
    content:
      "A new nationwide initiative titled 'Rising Stars' has been launched to identify and mentor athletic talent in rural areas. The program provides professional coaching, nutritional guidance, and modern training equipment to children who previously lacked access to sports facilities. Government funding has been secured to build 50 new multi-purpose sports complexes over the next two years. Educational scholarships will also be awarded to top performers, ensuring that their academic journey continues alongside their athletic training. By investing in the youth today, the sports ministry aims to build a robust pipeline for Olympic success and foster a culture of health and discipline across the nation's schools.",
    category: "Sports",
    publishedAt: "2026-01-13T17:25:00",
    image: "/images/9img.avif",
  },
  {
    id: 10,
    slug: "ai-startup-growth",
    title: "AI Startups See Rapid Growth in South Asia",
    summary: "Investment in AI technology is accelerating.",
    content:
      "The technological landscape in South Asia is being transformed by a surge of innovative AI startups. Venture capital firms have poured over $2 billion into the region this year, focusing on companies that develop AI-driven solutions for agriculture, healthcare, and finance. One local startup has recently gained international attention for its AI tool that predicts crop yields with 95% accuracy, helping farmers mitigate the effects of climate change. Industry experts suggest that the region's large pool of software engineers and increasing digital literacy make it an ideal hub for AI development. As these startups scale, they are not only creating high-value jobs but also positioning the region as a serious competitor in the global tech race.",
    category: "Technology",
    publishedAt: "2026-01-02T11:15:00",
    image: "/images/10img.avif",
  },
  {
    id: 11,
    slug: "cybersecurity-alert",
    title: "Cybersecurity Experts Warn of New Threats",
    summary: "Rising cyber attacks prompt urgent warnings.",
    content:
      "Security researchers have detected a sophisticated new strain of malware targeting financial institutions and critical infrastructure. The attack utilizes advanced AI to bypass traditional firewalls, making it difficult for standard antivirus software to detect. Experts are urging organizations to implement multi-factor authentication and conduct comprehensive security audits immediately. The National Cybersecurity Agency has issued a red alert, providing guidelines on how to protect sensitive data from these evolving threats. As our world becomes more interconnected, the vulnerability of digital systems remains a top priority for governments. Continuous monitoring and international cooperation among tech giants are essential to stay one step ahead of cybercriminals who seek to disrupt our digital economy.",
    category: "Technology",
    publishedAt: "2026-01-09T13:55:00",
    image: "/images/11img.avif",
  },
  {
    id: 12,
    slug: "mobile-network-upgrade",
    title: "Nationwide Mobile Network Upgrade Announced",
    summary: "Faster internet speeds expected across regions.",
    content:
      "The telecommunications sector is set for a massive overhaul following the announcement of a nationwide 5G expansion project. The project aims to bring ultra-high-speed internet to 90% of the population, including previously underserved rural districts. Major operators are investing heavily in fiber-optic backbones and new cell towers to support the increased data traffic. This upgrade is expected to revolutionize the local economy, enabling seamless remote work, tele-medicine, and advanced e-learning opportunities. Government officials noted that high-speed connectivity is a fundamental right in the digital age and will act as a catalyst for innovation across all sectors. The rollout is scheduled to begin next month, with full coverage expected by the end of 2027.",
    category: "Technology",
    publishedAt: "2026-01-12T13:10:00",
    image: "/images/12img.avif",
  },
  {
    id: 13,
    slug: "stock-market-rally",
    title: "Stock Market Rallies on Economic Optimism",
    summary: "Investor confidence boosts market performance.",
    content:
      "The national stock exchange witnessed its strongest performance in years today, with the main index closing at an all-time high. The rally was fueled by positive quarterly earnings reports from the banking and manufacturing sectors, alongside a stabilizing inflation rate. Institutional investors have returned to the market, signaling renewed confidence in the government's economic reforms. Market analysts noted that the influx of foreign capital has provided much-needed liquidity, driving up the valuation of blue-chip stocks. While some caution that the market may be slightly overbought, the prevailing sentiment is one of long-term growth. Experts recommend that retail investors diversify their portfolios to capitalize on the ongoing upward trend while protecting themselves from potential short-term corrections.",
    category: "Business",
    publishedAt: "2026-01-03T15:30:00",
    image: "/images/13img.avif",
  },
  {
    id: 14,
    slug: "startup-funding-record",
    title: "Local Startups Secure Record Funding",
    summary: "Tech startups raised record-breaking investments.",
    content:
      "The local startup ecosystem is celebrating a historic milestone as collective funding for the first quarter surpassed all previous records. A series of successful 'Series B' and 'Series C' rounds have seen homegrown tech companies raising hundreds of millions of dollars from international investors. These funds are primarily earmarked for geographic expansion and research and development into sustainable technologies. Founders attribute this success to a maturing market and a more supportive regulatory environment for entrepreneurs. The surge in funding is expected to create over 10,000 new jobs in the tech sector by the end of the year, further cementing the nation's reputation as a rising star in the global innovation landscape.",
    category: "Business",
    publishedAt: "2026-01-10T10:10:00",
    image: "/images/14img.avif",
  },
  {
    id: 15,
    slug: "inflation-rate-decreases",
    title: "Inflation Rate Shows Signs of Decline",
    summary: "Recent data indicates a gradual decrease in inflation.",
    content:
      "Latest figures from the Bureau of Statistics show that the national inflation rate has finally entered a downward trajectory. After months of rising costs for fuel and essential food items, the index dropped by 0.5% last month. Economists credit this shift to improved supply chain logistics and the central bank's timely interest rate adjustments. While prices for some luxury goods remain high, the cost of basic commodities has stabilized, providing much-needed relief to low-income households. The government remains committed to maintaining this trend through prudent fiscal management and by supporting local agricultural production. Financial experts predict that if this stability continues, the economy could see a significant boost in consumer spending during the upcoming festive season.",
    category: "Business",
    publishedAt: "2026-01-11T11:20:00",
    image: "/images/15img.avif",
  },
  {
    id: 16,
    slug: "women-entrepreneurship-growth",
    title: "Women Entrepreneurs Drive Economic Growth",
    summary: "Female-led businesses show impressive growth.",
    content:
      "A comprehensive new report highlights the transformative role of women-led businesses in the national economy. Over the past three years, female-owned startups have grown at twice the rate of the general market, particularly in sectors like e-commerce, education-tech, and sustainable fashion. Access to dedicated micro-loans and mentorship programs has played a crucial role in this success. Industry leaders argue that empowering women economically leads to broader social benefits, including better education and health outcomes for families. As more women break the glass ceiling in corporate and entrepreneurial roles, they are bringing fresh perspectives and innovative solutions to the market. The government has pledged to further support this growth by expanding digital literacy programs for women in rural areas.",
    category: "Business",
    publishedAt: "2026-01-13T09:40:00",
    image: "/images/16img.avif",
  },
  {
    id: 17,
    slug: "education-digital-learning",
    title: "Digital Learning Expands in Public Schools",
    summary: "Schools adopt online platforms for learning.",
    content:
      "The Ministry of Education has launched an ambitious 'Digital Classrooms' project to bridge the urban-rural learning divide. Over 1,000 public schools have already been equipped with high-speed internet, interactive whiteboards, and tablets for students. The program utilizes a specialized e-learning platform that offers high-quality video lessons and interactive quizzes in the local language. Teachers are undergoing intensive training to integrate these digital tools into their daily curriculum. Preliminary results show a marked improvement in student engagement and attendance. Officials believe that by democratizing access to quality education, they are preparing the next generation for the demands of a globalized, tech-driven workforce, ensuring that no child is left behind regardless of their location.",
    category: "National",
    publishedAt: "2026-01-04T09:20:00",
    image: "/images/17img.avif",
  },
  {
    id: 18,
    slug: "exam-system-update",
    title: "Education Board Updates Examination System",
    summary: "New evaluation methods aim to reduce pressure.",
    content:
      "In a major move to reform the education sector, the National Board has announced a shift away from high-stakes final examinations. The new evaluation system focuses on continuous assessment, practical projects, and soft skills development throughout the academic year. This change aims to reduce the intense psychological pressure on students and move away from the culture of rote memorization. Educators have welcomed the move, stating that it allows for a more holistic understanding of a student's true potential and creativity. Parents also expressed relief, hoping the new system will encourage a love for learning rather than just a race for grades. The rollout will begin with secondary schools next year before being implemented across all levels of the education system.",
    category: "National",
    publishedAt: "2026-01-08T11:45:00",
    image: "/images/18img.avif",
  },
  {
    id: 19,
    slug: "climate-change-impact",
    title: "Climate Change Impact Raises Concern",
    summary: "Rising sea levels threaten coastal areas.",
    content:
      "A new environmental report has issued a stark warning about the accelerating impact of climate change on the nation's coastline. Rising sea levels and increased salinity are already affecting agricultural yields in southern districts, forcing many farming communities to relocate. Environmental scientists are calling for urgent investment in climate-resilient infrastructure, such as improved embankments and salt-tolerant crop varieties. The report also highlights the increasing frequency of extreme weather events, which pose a threat to both lives and the economy. International cooperation and climate financing are seen as essential components of the national strategy to mitigate these risks. Activists are urging the government to adopt more aggressive carbon reduction targets and transition to a green economy to protect the country's ecological future.",
    category: "International",
    publishedAt: "2026-01-07T07:30:00",
    image: "/images/19img.avif",
  },
  {
    id: 20,
    slug: "renewable-energy-project",
    title: "Renewable Energy Projects Gain Momentum",
    summary: "Solar and wind energy investments increase.",
    content:
      "The government has approved five large-scale solar and wind energy projects as part of its commitment to achieve 40% renewable energy by 2030. These projects, located in regions with high sun and wind exposure, are expected to add 1,000 megawatts to the national grid. Private sector interest in green energy is also at an all-time high, driven by falling technology costs and attractive tax incentives. Energy experts suggest that diversifying the energy mix will not only reduce carbon emissions but also enhance energy security by reducing dependence on imported fossil fuels. The transition is also expected to create thousands of 'green' jobs in installation, maintenance, and research. As the first turbines begin to spin, the nation takes a significant step toward a sustainable and self-reliant energy future.",
    category: "Technology",
    publishedAt: "2026-01-09T17:10:00",
    image: "/images/20img.avif",
  },
];

export default newsData;
