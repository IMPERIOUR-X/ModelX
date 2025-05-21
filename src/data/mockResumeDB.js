// src/data/chatDB.js

const mockResumeDB = {
  allResumes: [
    {
      _id: 432798,
      name: "Frontend Developer Resume",
      createdAt: "2025-05-17T09:00:00Z",
      chats: [
        {
          sender: "user",
          message: "Write a frontend developer resume with 2 years experience.",
          timestamp: "2025-05-17T09:00:00Z",
        },
        {
          sender: "system",
          message:
            "Sure, here's a resume for a frontend developer with 2 years experience...",
          timestamp: "2025-05-17T09:00:02Z",
        },
      ],
    },
    {
      _id: 432735,
      name: "Marketing Resume",
      createdAt: "2025-05-17T10:00:00Z",
      chats: [
        {
          sender: "user",
          message: "Make a resume for a digital marketing expert.",
          timestamp: "2025-05-17T10:00:00Z",
        },
        {
          sender: "system",
          message: "Here's a tailored resume for a digital marketing expert...",
          timestamp: "2025-05-17T10:00:05Z",
        },
      ],
    },
  ],

  bookmarkedResumes: [
    {
      name: "Senior Product Manager Resume",
      createdAt: "2025-05-16T14:00:00Z",
      chats: [
        {
          sender: "user",
          message: "Craft a resume for a senior product manager.",
          timestamp: "2025-05-16T14:00:00Z",
        },
        {
          sender: "system",
          message: "Here's a senior product manager resume...",
          timestamp: "2025-05-16T14:00:03Z",
        },
      ],
    },
  ],

  customResumes: [
    {
      name: "My Custom Resume 1",
      createdAt: "2025-05-15T11:30:00Z",
      chats: [],
    },
  ],
};

export default mockResumeDB;
