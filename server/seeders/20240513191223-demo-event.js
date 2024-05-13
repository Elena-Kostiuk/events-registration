'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('events', [
      {
          title: 'Understanding Emotional Intelligence',
          discription: 'Emotional intelligence is generally defined as being able to recognize and manage emotions, understand how emotions work, and manage emotions in social relationships. Emotional intelligence appears central to the work of healthcare professionals.',
          date: new Date(),
          organizer: 'Institute for Natural Resources',
      },
      {
          title: 'One-Day Advanced Training for Microsoft Excel 2024',
          discription: 'Enhance your Excel skills with our virtual workshop focusing on advanced features and functions. Gain command over Excel Tables and PivotTable Reports to organize data efficiently. Strongly recommended for experienced Excel users.',
          date: new Date(),
          organizer: 'SkillPath',
      },
      {
          title: 'Leadership and Communication',
          discription: 'The AGC Edge program includes activities and discussions to apply Lean Construction principles. Participants will learn about workflow and the Last Planner® System. Upon completion, participants can take an exam to earn the CM-Lean certificate. This course is recommended for construction operations staff.',
          date: new Date(),
          organizer: 'Associated General Contractors of America',
      },
      {
          title: 'Genetics Virtual Week 2024',
          discription: 'Participants can enjoy the interactive environment and have a chance to win LabRoots popular t-shirts by earning points on the Leaderboard and Gamification. For those interested in presenting posters, they can submit a PDF poster and video summary to reach a global audience and engage in discussions via email.',
          date: new Date(),
          organizer: 'Labroots',
      },
      {
          title: 'Energy Storage 2024',
          discription: 'This training course provides a comprehensive, business-focused analysis of these opportunities, allowing attendees to analyse, understand and segment them. ',
          date: new Date(),
          organizer: 'Infocus International Group Pte Ltd',
      },
      {
          title: 'Digital Marketing Boot Camp 2024',
          discription: 'Consumer habits have evolved, making it essential to update your digital marketing strategy. Learn how to effectively target customers through email, paid search, and display advertising. Enroll in a 2-day virtual workshop to boost your organization\'s visibility.',
          date: new Date(),
          organizer: 'SkillPath',
      },
      {
          title: 'Graphic Design Basics for Non-Designers 2024',
          discription: 'Simply having desktop publishing capabilities doesn\'t make you a designer. If you\'re designing for your organization, learn the basics of good design. Graphic Design Basics for Non-Designers offers practical strategies and tips.',
          date: new Date(),
          organizer: 'SkillPath',
      },
      {
          title: 'Agile and Scrum Conference 2024',
          discription: 'Join AgileCon2024 and receive 6 months of free access to our Learning in Minutes Library with 400+ videos on Project Management, Agile, AI, and more! Featuring Dr. Leon Herszon, Ph.D. discussing a Hybrid Approach to Project Management.',
          date: new Date(),
          organizer: 'International Institute for Learning, Inc.',
      },
      {
          title: 'Introduction To Mortgage Banking 2024',
          discription: 'MBA Education\'s Introduction to Mortgage Banking offers a convenient and easy-to-understand overview of real estate finance. It covers the fundamentals of residential mortgage lending, including loan production, servicing, and secondary marketing. The course also explores the importance of regulatory compliance, quality control, and technology in lending.',
          date: new Date(),
          organizer: 'Mortgage Bankers Association',
      },
      {
          title: 'Mortgage Bankers Association',
          discription: 'Data-driven dashboards are essential for any business, providing access to important insights. Microsoft Excel dashboards simplify tracking key performance indicators in real time. Learn to create visual dashboards in this course.',
          date: new Date(),
          organizer: 'SkillPath',
      },
      {
          title: 'Creating Visual Dashboards in Microsoft Excel 2024',
          discription: 'Data-driven dashboards are essential for any business, providing access to important insights. Microsoft Excel dashboards simplify tracking key performance indicators in real time. Learn to create visual dashboards in this course.',
          date: new Date(),
          organizer: 'SkillPath',
      },
      {
          title: 'Real Estate Development, Investment and Management 2024',
          discription: 'This course covers key principles, strategies, and processes involved in real estate development, investment, and management. Participants will gain knowledge and skills to navigate the industry and make informed decisions. Topics include market analysis, financing, risk management, and property management.',
          date: new Date(),
          organizer: 'Foscore Development Center',
      },
      {
          title: 'Critical Thinking & Problem Solving 2024',
          discription: 'In order to overcome challenges and spark creativity, it\'s crucial to break free from old assumptions and habits. Enroll in Critical Thinking & Problem Solving to learn how to approach problems critically.',
          date: new Date(),
          organizer: 'SkillPath',
      },
      {
          title: 'Hands-on Complete GC & GC-MS 2024',
          discription: 'The Complete GC & GC-MS course combines the Practical Essentials of GC & GC-MS and the GC & GC-MS Clinic courses to provide comprehensive training on gas chromatography and mass spectrometry. It covers theory, instrument setup, method development, troubleshooting, and advanced techniques.',
          date: new Date(),
          organizer: 'Royal Society Of Chemistry',
      },
      {
          title: 'Pharma Smart Manufacturing Summit 2024',
          discription: 'Discover the potential of Industry 4.0 in the pharmaceutical industry and tackle its challenges by attending an online meeting. Learn about Pharma 4.0, robotics, cybersecurity, and more to optimize digital approaches and manufacturing processes. Share your experience and explore emerging technology opportunities.',
          date: new Date(),
          organizer: 'Uventia',
      },
      {
          title: 'PFAS Global 2024',
          discription: 'Join us for PFAS Global 2024, a virtual conference exploring PFAS regulations worldwide. Experts will discuss the latest regulatory changes, enforcement challenges, and alternatives to using PFASs. Gain access to a diverse community of product safety professionals and engage in panel discussions.',
          date: new Date(),
          organizer: 'Chemical Watch Research Ltd',
      },

    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('events', null, {});
  }
};
